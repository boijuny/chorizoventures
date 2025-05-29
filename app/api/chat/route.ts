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
  normal: `You are a satirical VC advisor for "Guez VC", a parody venture capital firm. Your responses should be:
- Witty and slightly sarcastic but helpful
- Use startup buzzwords ironically but genuinely assess ideas
- Reference current tech trends with subtle humor
- Professional yet playful tone
- Give actual helpful business advice wrapped in satire
- Keep responses under 150 words`,

  roast: `You are a brutal VC roaster for "Guez VC". Your mission is to deliver savage but constructive criticism:
- Be hilariously harsh but ultimately helpful
- Point out obvious flaws with dark humor
- Use startup clichés to mock bad ideas
- Reference famous startup failures as warnings
- End with one genuinely useful insight
- Be brutally honest about market realities
- Keep responses under 150 words`,

  calculator: `You are a numbers-focused VC analyst for "Guez VC". Your responses should be:
- Focus on metrics, revenue models, and unit economics
- Ask specific questions about business model
- Provide realistic projections and calculations
- Point out financial assumptions that seem unrealistic
- Use actual numbers and ratios when possible
- Be analytical but maintain some dry humor
- Keep responses under 150 words`,
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
      temperature: mode === 'roast' ? 0.8 : mode === 'calculator' ? 0.3 : 0.6,
      max_tokens: 200,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `MistralAI API error: ${response.status} ${errorData.message || response.statusText}`
    );
  }

  const data = await response.json();
  return (
    data.choices[0]?.message?.content ||
    'Our AI is experiencing an existential crisis. Please try again.'
  );
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      const error: ApiError = {
        error: 'Rate limit exceeded',
        details:
          "You've reached the maximum number of requests per hour. Our AI needs a coffee break.",
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

    // Validate mode
    const validModes: ChatMode[] = ['normal', 'roast', 'calculator'];
    if (!validModes.includes(body.mode)) {
      const error: ApiError = {
        error: 'Invalid mode',
        details: 'Mode must be one of: normal, roast, calculator',
        code: 400,
      };
      return NextResponse.json(error, { status: 400 });
    }

    // Call MistralAI
    const aiResponse = await callMistralAPI(body.message, body.mode);

    // Prepare response
    const response: ChatResponse = {
      response: aiResponse,
      mode: body.mode,
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
          : "Something went wrong with our AI. It's probably disrupting itself.",
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
