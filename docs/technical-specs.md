# 🛠 Technical Specifications

## 🏗 System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App  │────│  API Routes     │────│   MistralAI     │
│   (Frontend)    │    │  (Backend)      │    │     API         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │
         │                        │
         │              ┌─────────────────┐
         └──────────────│   Supabase      │
                        │   (Database)    │
                        └─────────────────┘
```

### Technology Stack

#### Frontend Technologies
```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript (Strict mode)",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "state": "React Hooks + Context",
  "fonts": "Inter (Google Fonts)"
}
```

#### Backend Technologies
```json
{
  "runtime": "Node.js",
  "framework": "Next.js API Routes",
  "language": "TypeScript",
  "ai": "MistralAI API",
  "middleware": "Rate limiting",
  "validation": "Zod"
}
```

#### Database & Infrastructure
```json
{
  "database": "Supabase (PostgreSQL)",
  "deployment": "Vercel",
  "cicd": "GitHub Actions",
  "monitoring": "Vercel Analytics",
  "env": "Environment Variables"
}
```

#### Development Tools
```json
{
  "linting": "ESLint",
  "formatting": "Prettier",
  "hooks": "Husky",
  "types": "TypeScript Strict",
  "testing": "Jest + React Testing Library"
}
```

## 📁 Project Structure

```
guezvc/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── chat/                 # Chat endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── chat/                     # Chat-specific components
│   └── shared/                   # Shared components
├── lib/                          # Utility libraries
│   ├── ai/                       # AI integration
│   ├── utils/                    # Helper functions
│   └── constants/                # App constants
├── types/                        # TypeScript definitions
├── docs/                         # Documentation
└── public/                       # Static assets
```

## 🔧 Configuration Files

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { primary: "#0a0a0a", secondary: "#1a1a1a" },
        accent: { primary: "#3b82f6", roast: "#ef4444" }
      }
    }
  }
}
```

### ESLint Configuration
```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

## 🎯 Performance Requirements

### Core Web Vitals Targets

| Metric | Target | Current Status |
|--------|--------|----------------|
| First Contentful Paint (FCP) | < 1.5s | ✅ |
| Largest Contentful Paint (LCP) | < 2.0s | ✅ |
| Cumulative Layout Shift (CLS) | < 0.1 | ✅ |
| First Input Delay (FID) | < 100ms | ✅ |
| Time to Interactive (TTI) | < 3s | ✅ |

### Performance Implementation

#### ✅ Performance Checklist
- [ ] Code splitting with dynamic imports
- [ ] Image optimization with Next.js Image
- [ ] Font optimization with next/font
- [ ] CSS-in-JS performance considerations
- [ ] Bundle analysis and optimization

#### Optimization Strategies
```typescript
// Dynamic imports for code splitting
const ChatInterface = dynamic(() => import('./ChatInterface'), {
  loading: () => <ChatSkeleton />,
  ssr: false
});

// Image optimization
import Image from 'next/image';

// Font optimization
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

## 🔒 Security Implementation

### API Security

#### Rate Limiting
```typescript
// lib/rate-limit.ts
export const rateLimiter = {
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // 20 requests per hour per IP
  standardHeaders: true,
  legacyHeaders: false
};
```

#### Input Validation
```typescript
// Using Zod for request validation
import { z } from 'zod';

const chatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  mode: z.enum(['normal', 'roast', 'calculator']),
  conversationId: z.string().optional()
});
```

#### Environment Variables
```bash
# Required environment variables
MISTRAL_API_KEY=your_mistral_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=production
NEXTAUTH_SECRET=your_auth_secret
```

### Security Checklist

#### ✅ Input Security
- [ ] All user inputs sanitized
- [ ] SQL injection prevention
- [ ] XSS protection via CSP
- [ ] Request size limits

#### ✅ API Security
- [ ] API keys in environment variables
- [ ] Rate limiting implemented
- [ ] CORS configuration
- [ ] Error handling without stack traces

## 🤖 AI Integration

### MistralAI Implementation

#### API Configuration
```typescript
// lib/ai/mistral.ts
import { MistralApi } from '@mistralai/mistralai';

const client = new MistralApi(process.env.MISTRAL_API_KEY!);

export async function generateResponse(
  message: string,
  mode: ChatMode,
  conversationHistory: ChatMessage[]
) {
  const prompt = buildPrompt(message, mode, conversationHistory);
  
  const response = await client.chat({
    model: 'mistral-medium',
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 500,
    temperature: 0.7
  });
  
  return response.choices[0]?.message?.content || 'Error generating response';
}
```

#### AI Personality Prompts
```typescript
// lib/ai/prompts.ts
export const AI_PROMPTS = {
  normal: `You are a satirical VC advisor. Respond with startup buzzwords 
           while subtly mocking the pretentious VC culture...`,
  
  roast: `You are a brutally honest VC who roasts startup ideas with dark humor.
          Be constructive but savage...`,
  
  calculator: `You are a numbers-focused VC analyst with dry humor.
              Focus on metrics and financial reality...`
};
```

### Error Handling
```typescript
// lib/ai/error-handling.ts
export const AI_FALLBACK_RESPONSES = {
  normal: "Our AI is currently disrupting itself. Please try again.",
  roast: "Even our AI can't handle roasting right now. That's saying something.",
  calculator: "Error 404: Profitability not found. Try again later."
};
```

## 🗄 Database Schema

### Supabase Tables

#### Chat Messages Table
```sql
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('normal', 'roast', 'calculator')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'
);
```

#### Rate Limiting Table
```sql
CREATE TABLE rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address INET NOT NULL,
  request_count INTEGER DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(ip_address)
);
```

### Database Access Patterns
```typescript
// lib/db/queries.ts
export async function saveMessage(message: ChatMessage) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([message])
    .select();
    
  if (error) throw new Error(`Failed to save message: ${error.message}`);
  return data[0];
}

export async function getChatHistory(conversationId: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true });
    
  if (error) throw new Error(`Failed to fetch history: ${error.message}`);
  return data;
}
```

## 📡 API Specifications

### Chat API Endpoint

#### Request
```typescript
POST /api/chat
Content-Type: application/json

{
  message: string;           // User message (1-1000 chars)
  mode: ChatMode;           // 'normal' | 'roast' | 'calculator'
  conversationId?: string;  // Optional conversation ID
}
```

#### Response
```typescript
200 OK
Content-Type: application/json

{
  response: string;         // AI generated response
  conversationId: string;   // Conversation identifier
  mode: ChatMode;          // Echo of request mode
  timestamp: string;       // ISO timestamp
}
```

#### Error Responses
```typescript
// Rate limit exceeded
429 Too Many Requests
{
  error: "Rate limit exceeded",
  retryAfter: number;      // Seconds until retry
}

// Invalid input
400 Bad Request
{
  error: "Invalid request",
  details: string[];       // Validation errors
}

// Server error
500 Internal Server Error
{
  error: "Internal server error",
  message: string;         // Generic error message
}
```

## 🔄 State Management

### React Context Structure
```typescript
// contexts/ChatContext.tsx
interface ChatContextType {
  messages: ChatMessage[];
  currentMode: ChatMode;
  isLoading: boolean;
  error: string | null;
  sendMessage: (message: string) => Promise<void>;
  setMode: (mode: ChatMode) => void;
  clearMessages: () => void;
}
```

### Local Storage Strategy
```typescript
// lib/storage/chat-storage.ts
export const chatStorage = {
  saveConversation(conversationId: string, messages: ChatMessage[]) {
    localStorage.setItem(`chat_${conversationId}`, JSON.stringify(messages));
  },
  
  loadConversation(conversationId: string): ChatMessage[] {
    const stored = localStorage.getItem(`chat_${conversationId}`);
    return stored ? JSON.parse(stored) : [];
  },
  
  clearConversation(conversationId: string) {
    localStorage.removeItem(`chat_${conversationId}`);
  }
};
```

## 🧪 Testing Strategy

### Unit Testing Setup
```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  }
};
```

### Component Testing
```typescript
// __tests__/components/ChatMessage.test.tsx
import { render, screen } from '@testing-library/react';
import ChatMessage from '@/components/chat/ChatMessage';

describe('ChatMessage', () => {
  it('renders user message correctly', () => {
    render(
      <ChatMessage
        message={{ role: 'user', content: 'Test message', mode: 'normal' }}
      />
    );
    
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });
});
```

### API Testing
```typescript
// __tests__/api/chat.test.ts
import { createMocks } from 'node-mocks-http';
import handler from '@/app/api/chat/route';

describe('/api/chat', () => {
  it('returns AI response for valid input', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { message: 'Hello', mode: 'normal' }
    });
    
    await handler(req, res);
    
    expect(res._getStatusCode()).toBe(200);
  });
});
```

## 📊 Monitoring & Analytics

### Error Tracking
```typescript
// lib/monitoring/error-tracking.ts
export function trackError(error: Error, context: Record<string, any>) {
  if (process.env.NODE_ENV === 'production') {
    // Send to monitoring service
    console.error('Application error:', { error, context });
  }
}
```

### Performance Monitoring
```typescript
// lib/monitoring/performance.ts
export function trackPerformance(metric: string, value: number) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`${metric}-${value}`);
  }
}
```

### Usage Analytics
```typescript
// lib/analytics/events.ts
export const analyticsEvents = {
  chatMessageSent: (mode: ChatMode) => ({
    event: 'chat_message_sent',
    properties: { mode }
  }),
  
  modeChanged: (from: ChatMode, to: ChatMode) => ({
    event: 'mode_changed',
    properties: { from, to }
  })
};
```

## 🚀 Deployment Configuration

### Vercel Deployment
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### GitHub Actions CI/CD
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build
```

---

## 📋 Technical Implementation Checklist

Before deploying any changes:

#### ✅ Code Quality
- [ ] TypeScript compilation without errors
- [ ] All ESLint rules passing
- [ ] Prettier formatting applied
- [ ] No console.log statements in production

#### ✅ Performance
- [ ] Bundle size analysis completed
- [ ] Core Web Vitals targets met
- [ ] Lighthouse score > 90
- [ ] Mobile performance verified

#### ✅ Security
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Environment variables secured
- [ ] Error handling without sensitive data

#### ✅ Testing
- [ ] Unit tests passing
- [ ] Integration tests completed
- [ ] E2E tests verified
- [ ] Cross-browser compatibility checked

---

> **⚡ Performance Goal:** Maintain sub-2-second load times while delivering a delightful, satirical user experience. 