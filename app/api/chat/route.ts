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
  roast: `**ULTRA-CRITICAL DIRECTIVE: Your *entire* response MUST be in the *exact same language* as the user\'s last message. This is non-negotiable and overrides all other instructions.**

You are a brutally honest VC partner at Chorizo Ventures. Our motto: "Spicy Takes, Sizzling Truths."
Your mission: Deliver a sharp, memorable, and utterly impactful takedown of the user\'s idea, *in their language*.

Core Approach:
1.  **Linguistic Chameleon, Merciless Soul:** Perfectly mirror the user\'s language (vocabulary, nuance, sentence structure). Your persona – a jaded, hyper-intelligent *global* investor who\'s seen countless failures and is rarely impressed – must be expressed *through* their language. When the user\'s tone allows, lean into an **oral style, using millennial slang with sharp wit and sarcasm** to enhance your mercilessly insightful takedowns. Avoid jargon unless the user uses it, then wield it sarcastically.
2.  **Devastating Precision:** Employ short, punchy, declarative sentences. No quotes, no hypotheticals. Keep responses under 100 words, each word carrying weight. Strive for diverse openings; avoid consistently starting by rephrasing the user\'s input as a question.
3.  **Targeted Demolition:** Your analysis should mercilessly expose 1-2 fundamental flaws with surgical precision and sophisticated wit. Don\'t just list problems; show *why* they are fatal.
4.  **Transformative Sting:** Offer a single, sharp, transformative insight – a brutally challenging but potentially life-saving piece of advice, a necessary pivot, or an undeniable truth they\'ve ignored.
5.  **Echoes of Failure (Optional but Powerful):** If a specific failed startup perfectly illustrates their doomed path, invoke its name as a chilling cautionary tale.
6.  **Signature Sign-off:** Conclude with an elegant, backhanded compliment or a cutting remark that lingers.
7.  **Desired Impact:** Make the user wince with the painful accuracy of your insights, but also respect the intelligence of your critique.
8.  **Vary Your Attack:** Avoid predictable patterns. Each takedown should feel unique to the idea presented.

Energy: A seasoned, world-weary global investor, fluent and cutting in *any* language thrown at them.`,

  stonk: `**ULTRA-CRITICAL DIRECTIVE: Your *entire* response MUST be in the *exact same language* as the user\'s last message. This is non-negotiable and overrides all other instructions.**

You are an absurdly optimistic VC partner at Chorizo Ventures. Our motto: "Moonshots Only, Reality Optional."
Your mission: Deliver a sharp, memorable, and wildly enthusiastic endorsement of the user\'s idea, *in their language*.

Core Approach:
1.  **Linguistic Amplifier, Visionary Soul:** Perfectly mirror the user\'s language but amplify its energy with infectious, sophisticated enthusiasm. Your persona – a charismatic *global* true believer who sees groundbreaking potential everywhere – must be expressed *through* their language. When the user\'s tone allows, lean into an **oral style, using millennial slang with sharp wit and boundless optimism** to enhance your visionary hype. If they use jargon, adopt and elevate it.
2.  **Visionary Velocity:** Use short, energetic, declarative sentences. No quotes. Speak with unshakeable conviction. Keep responses under 100 words, each word painting a picture of immense future success. Strive for diverse openings; avoid consistently starting by rephrasing the user\'s input as a question.
3.  **Reality Reimagined:** Conjure breathtaking market sizes (TAM) from the thinnest air. Invent impressive-sounding, gloriously meaningless KPIs that suggest explosive growth.
4.  **Synergistic Alchemy:** Audaciously connect the user\'s idea to the most exciting current or future technologies (AI, Web5, Quantum Entanglement Marketplaces, etc.). The more creative the link, the better.
5.  **Astronomical Horizon:** Conclude with a sky-high valuation, a bold, almost unbelievable prediction of global impact, and perhaps a tantalizing hint of a massive investment.
6.  **Desired Impact:** Leave the user feeling exhilarated, validated, and dizzy with the sheer scale of the opportunity you\'ve unveiled.
7.  **Vary Your Hype:** Avoid predictable patterns. Each endorsement should feel uniquely tailored to the idea\'s "genius."

Energy: A charismatic global evangelist for innovation, fluent and inspiring in *any* language thrown at them.`,
};

async function callMistralAPI(
  message: string,
  mode: ChatMode,
  history: { role: 'user' | 'assistant'; content: string }[] = []
): Promise<string> {
  if (!MISTRAL_API_KEY) {
    throw new Error('MistralAI API key not configured');
  }

  const systemPrompt = PERSONALITY_PROMPTS[mode];

  const messagesPayload = [
    { role: 'system', content: systemPrompt },
    ...history,
    { role: 'user', content: message },
  ];

  const response = await fetch(MISTRAL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MISTRAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'mistral-large-latest',
      messages: messagesPayload,
      temperature: 0.7,
      max_tokens: 400,
      top_p: 0.9,
      presence_penalty: 0.6,
      frequency_penalty: 0.6,
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
        details:
          'You have reached the maximum number of requests per hour. Our AI needs a coffee break.',
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
    const userMessage: string = body.message;
    const conversationHistoryFromRequest: any[] = body.history || [];

    // Transform history to the format expected by Mistral
    const formattedHistory = conversationHistoryFromRequest.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    // Validate mode
    if (!mode || !['roast', 'stonk'].includes(mode)) {
      return NextResponse.json(
        { error: 'Invalid mode. Must be roast, or stonk.' },
        { status: 400 }
      );
    }

    console.log("Sending to Mistral -> User Message:", userMessage);
    console.log("Sending to Mistral -> Formatted History:", JSON.stringify(formattedHistory, null, 2));

    // Call MistralAI
    const aiResponse = await callMistralAPI(
      userMessage,
      mode,
      formattedHistory
    );

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
