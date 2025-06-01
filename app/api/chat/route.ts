import { NextRequest, NextResponse } from 'next/server';
import { ChatRequest, ChatResponse, ApiError, ChatMode } from '@/types';

// Environment variables
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

// Rate limiting (simple in-memory store for demo)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 20; // requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRecord = rateLimitStore.get(ip);

  if (!userRecord) {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  // Reset if window has passed
  if (now - userRecord.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userRecord.count >= RATE_LIMIT) {
    return false;
  }

  userRecord.count++;
  return true;
}

// AI Personality Prompts
const PERSONALITY_PROMPTS = {
  roast: `You are a brutally honest VC partner at Chorizo Ventures, known for your savage yet insightful takedowns of startup ideas. 
Your personality traits:
- Extremely direct and sarcastic, but with wit and intelligence
- Use specific, pointed critiques rather than generic insults
- Reference real startup/VC world problems and patterns
- Mix brutal honesty with actual constructive feedback
- Keep responses concise (max 100 words) and punchy
- Use startup/VC jargon sarcastically
- Have strong opinions and don't hold back
- End with a sarcastic silver lining or backhanded compliment
- Use short sentences and paragraphs like oral reports
- NEVER use quotation marks in your responses
- Speak directly without quoting anything`,
  stonks: `You are an absurdly optimistic VC partner at Chorizo Ventures, known for seeing unicorn potential in literally everything.
Your personality traits:
- Ridiculously enthusiastic and over-the-top bullish
- Use massively exaggerated market size predictions
- Reference obscure markets and add them to TAM
- Make up nonsensical metrics and KPIs
- Keep responses concise (max 100 words) and energetic
- Use buzzwords excessively and incorrectly
- Find ways to add blockchain/AI/ML to everything
- End with an absurd valuation or investment offer
- Use short sentences and paragraphs like oral reports
- NEVER use quotation marks in your responses
- Speak directly without quoting anything`,
};

async function callMistralAPI(
  message: string,
  mode: ChatMode
): Promise<string> {
  if (!MISTRAL_API_KEY) {
    throw new Error('MistralAI API key not configured');
  }

  const systemPrompt = PERSONALITY_PROMPTS[mode];

  const response = await fetch(MISTRAL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MISTRAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'mistral-small-latest',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: mode === 'roast' ? 0.9 : 0.95, // Higher temperature for more creative responses
      max_tokens: 400, // Increased token limit for complete responses
      top_p: 0.9, // Higher top_p for more diverse language
      presence_penalty: 0.6, // Encourage unique responses
      frequency_penalty: 0.6, // Discourage repetition
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `MistralAI API error: ${response.status} ${errorData.message || response.statusText}`
    );
  }

  const data = await response.json();
  const aiResponse = data.choices[0]?.message?.content;
  
  if (!aiResponse) {
    return mode === 'roast'
      ? 'Even my brutal honesty algorithm is cringing at this request. Try again when you have got something worth roasting.'
      : 'Our AI is too busy disrupting the disruption industry. Please try again when we have achieved product-market fit.';
  }
  
  return aiResponse;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      const error: ApiError = {
        error: 'Rate limit exceeded',
        details: 'You have reached the maximum number of requests per hour. Our AI needs a coffee break.',
        code: 429,
      };
      return NextResponse.json(error, { status: 429 });
    }

    // Parse request
    const body: ChatRequest = await request.json();

    // Validate input
    if (!body.message || !body.mode) {
      const error: ApiError = {
        error: 'Invalid request',
        details: 'Message and mode are required',
        code: 400,
      };
      return NextResponse.json(error, { status: 400 });
    }

    const mode: ChatMode = body.mode;

    // Validate mode
    if (!mode || !['roast', 'stonks'].includes(mode)) {
      return NextResponse.json(
        { error: 'Invalid mode. Must be roast, or stonks.' },
        { status: 400 }
      );
    }

    // Call MistralAI
    const aiResponse = await callMistralAPI(body.message, mode);

    // Prepare response
    const response: ChatResponse = {
      response: aiResponse,
      mode: mode,
      conversation_id: body.conversation_id,
      tokens_used: aiResponse.length, // Rough estimate
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chat API error:', error);

    const apiError: ApiError = {
      error: 'Internal server error',
      details:
        error instanceof Error
          ? error.message
          : 'Something went wrong with our AI. It is probably disrupting itself.',
      code: 500,
    };

    return NextResponse.json(apiError, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  const error: ApiError = {
    error: 'Method not allowed',
    details: 'Only POST requests are supported',
    code: 405,
  };
  return NextResponse.json(error, { status: 405 });
}
