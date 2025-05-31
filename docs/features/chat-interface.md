# 💬 Feature: AI Chat Interface

## 📋 Feature Overview

**Feature ID:** F002  
**Priority:** P0 (Critical)  
**Effort:** 8 story points  
**Status:** ✅ Complete

### Description

The core chat interface provides users with an AI-powered conversation experience that parodies VC culture through three distinct personality modes, delivering satirical responses while maintaining a professional ChatGPT-style interface.

## 🎯 User Stories

### Primary User Stories

**US-001:** As a visitor, I want to chat with an AI that parodies VC behavior so I can be entertained ✅  
**US-002:** As a user, I want to switch between different AI personalities so I can explore various humor styles ✅  
**US-003:** As a developer, I want to get my startup idea roasted so I can laugh at the absurdity ✅

### Acceptance Criteria

- [x] ChatGPT-style interface with message history
- [x] Three distinct AI modes (Normal, Roast, Calculator)
- [x] Streaming response animation
- [x] Message persistence across sessions
- [x] Error handling with humorous messages
- [x] Mobile-optimized input area
- [x] OpenAI-style progressive disclosure (hidden messages until first interaction)

## 🎨 Design Specifications

### Interface Layout

#### Before First Message (OpenAI Style)

```
┌─────────────────────────────────────────────┐
│                                             │
│               GUEZ VC                       │
│         [Rotating Tagline]                  │
│                                             │
│      [Normal] [Roast] [Calculator]         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ What can we disrupt for you?        │   │
│  │ [Large Input Field]          [Send] │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

#### During Conversation

```
┌─────────────────────────────────────────────┐
│ [Mode Selector] [Normal] [Roast] [Calc]    │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ [Message History Area]                  │ │
│ │                                         │ │
│ │ User: "I have a startup idea..."        │ │
│ │                                         │ │
│ │ AI: "Ah, another revolutionary...       │ │
│ │     [Streaming response animation]      │ │
│ │                                         │ │
│ │ [Typing Indicator]                      │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Type your message...            [Send]  │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### Visual Elements

#### Message Bubbles

- **User Messages:** Right-aligned, blue accent color
- **AI Messages:** Left-aligned, mode-specific colors
- **Typography:** Clean, readable with proper spacing
- **Animations:** Smooth slide-in with liquid transitions

#### Mode Selector

- **Design:** Segmented control with liquid animations
- **Colors:** Blue (Normal), Red (Roast), Green (Calculator)
- **States:** Active, inactive, hover, disabled
- **Transitions:** Smooth color and shape changes

#### Input Area

- **Style:** Rounded, auto-expanding textarea
- **Placeholder:** Dynamic based on selected mode
- **Send Button:** Circular with loading states
- **Features:** Auto-resize, character limit, enter-to-send

## 🤖 AI Personality Modes

### Normal Mode 💼

**Personality:** Satirical VC advisor with professional veneer
**Color Scheme:** Blue (#3b82f6)
**Response Style:** Professional buzzwords with subtle mockery

**Example Prompts:**

```typescript
const NORMAL_PROMPT = `You are a satirical VC advisor who speaks in startup buzzwords
while subtly mocking the pretentious VC culture. Be professional yet absurd, using
real VC terminology in exaggerated ways. Keep responses under 150 words.`;
```

**Sample Response:**

> "Absolutely fascinating! Your startup is clearly disrupting the status quo in a
> post-digital landscape. I'm seeing tremendous synergies with our portfolio's
> vertical integration strategies. Have you considered pivoting to a blockchain-
> enabled AI solution? We'd love to discuss a Series A round where we take 40%
> equity for maximum value creation."

### Roast Mode 🔥

**Personality:** Brutally honest VC with dark humor
**Color Scheme:** Red (#ef4444)
**Response Style:** Savage but constructive criticism

**Example Prompts:**

```typescript
const ROAST_PROMPT = `You are a brutally honest VC who roasts startup ideas with 
dark humor while providing constructive feedback. Be savage but helpful, pointing 
out obvious flaws while maintaining a professional tone. Keep responses under 150 words.`;
```

**Sample Response:**

> "Oh, another 'Uber for X' idea? How refreshingly original! Let me guess - you
> haven't validated the market, you have no technical background, and your business
> model is 'we'll figure it out later.' Your TAM calculation looks like it was done
> on a napkin during a coffee binge. But hey, at least you're passionate about
> disrupting a market that doesn't need disrupting!"

### Calculator Mode 📊

**Personality:** Numbers-focused analyst with dry humor
**Color Scheme:** Green (#10b981)
**Response Style:** Data-driven analysis with financial reality checks

**Example Prompts:**

```typescript
const CALCULATOR_PROMPT = `You are a numbers-focused VC analyst with dry humor who 
focuses on metrics and financial reality. Use specific numbers, percentages, and 
financial terms while maintaining satirical edge. Keep responses under 150 words.`;
```

**Sample Response:**

> "Let's run the numbers: 0.1% market penetration of a $1B TAM = $1M revenue.
> Minus 80% burn rate for 'growth hacking' = $200K actual revenue. Factor in your
> 3x engineer salary premium and kombucha budget, you're looking at a solid -$2M
> runway. But don't worry, we can always blame the market timing when this becomes
> a 'learning experience.'"

## 🛠 Technical Implementation

### Component Architecture

```typescript
// components/chat/ChatInterface.tsx
interface ChatInterfaceProps {
  initialMode?: ChatMode;
  showWelcome?: boolean;
}

interface ChatState {
  messages: ChatMessage[];
  currentMode: ChatMode;
  isLoading: boolean;
  error: string | null;
  hasStartedChat: boolean;
  conversationId: string;
}
```

### Message Management

```typescript
// types/chat.ts
interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  mode: ChatMode;
  timestamp: Date;
  isStreaming?: boolean;
}

type ChatMode = 'normal' | 'roast' | 'calculator';
```

### API Integration

```typescript
// lib/api/chat.ts
export async function sendChatMessage(
  message: string,
  mode: ChatMode,
  conversationId?: string
): Promise<ChatResponse> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, mode, conversationId }),
  });

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.status}`);
  }

  return response.json();
}
```

### Streaming Animation

```typescript
// components/chat/StreamingMessage.tsx
interface StreamingMessageProps {
  content: string;
  isComplete: boolean;
  speed?: number; // characters per second
}

export default function StreamingMessage({
  content,
  isComplete,
  speed = 30,
}: StreamingMessageProps) {
  const [displayedContent, setDisplayedContent] = useState('');

  // Typewriter effect implementation
  // Character-by-character reveal
  // Smooth cursor animation
}
```

## 🔧 Core Features

### Progressive Disclosure

```typescript
// State management for OpenAI-style reveal
const [hasStartedChat, setHasStartedChat] = useState(false);

const handleFirstMessage = (message: string) => {
  setHasStartedChat(true);
  sendMessage(message);
};
```

#### ✅ Pre-Chat State

- [ ] Large, centered input field
- [ ] Prominent mode selector
- [ ] Welcome message per mode
- [ ] No visible message history

#### ✅ Chat State

- [ ] Compact input at bottom
- [ ] Full message history visible
- [ ] Repositioned mode selector
- [ ] Smooth transition animation

### Message Persistence

```typescript
// Local storage integration
useEffect(() => {
  const savedMessages = localStorage.getItem(`chat_${conversationId}`);
  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  }
}, [conversationId]);

useEffect(() => {
  localStorage.setItem(`chat_${conversationId}`, JSON.stringify(messages));
}, [messages, conversationId]);
```

### Error Handling

```typescript
// Humorous error responses per mode
const ERROR_RESPONSES = {
  normal:
    'Our AI is currently disrupting itself. Please disrupt the refresh button.',
  roast: "Even our AI can't handle this level of brutal honesty right now.",
  calculator:
    'Error 404: Profitability not found. ROI on this request = -100%.',
};
```

## 📱 Mobile Optimization

### Responsive Design

```typescript
// Mobile-specific adaptations
const isMobile = useMediaQuery('(max-width: 768px)');

const inputStyles = {
  mobile: 'text-base p-4', // Prevent zoom on iOS
  desktop: 'text-sm p-3',
};
```

#### ✅ Mobile Features

- [ ] Full-screen chat on small devices
- [ ] Touch-optimized input area
- [ ] Swipe gestures for mode switching
- [ ] Optimized keyboard handling

#### ✅ Touch Interactions

- [ ] Minimum 44px touch targets
- [ ] Proper scroll behavior
- [ ] Virtual keyboard considerations
- [ ] Haptic feedback where appropriate

## 🧪 Testing Strategy

### Component Testing

```typescript
// __tests__/chat/ChatInterface.test.tsx
describe('ChatInterface', () => {
  it('shows welcome state initially', () => {
    render(<ChatInterface />);
    expect(screen.getByPlaceholderText(/what can we disrupt/i)).toBeInTheDocument();
    expect(screen.queryByTestId('message-history')).not.toBeInTheDocument();
  });

  it('reveals chat history after first message', async () => {
    const user = userEvent.setup();
    render(<ChatInterface />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Hello');
    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByTestId('message-history')).toBeInTheDocument();
  });

  it('switches modes correctly', async () => {
    const user = userEvent.setup();
    render(<ChatInterface />);

    await user.click(screen.getByRole('button', { name: /roast/i }));
    expect(screen.getByTestId('mode-selector')).toHaveAttribute('data-mode', 'roast');
  });
});
```

### Integration Testing

- [ ] API response handling
- [ ] Mode switching with message context
- [ ] Error state management
- [ ] Local storage persistence

### E2E Testing

```typescript
// e2e/chat-flow.spec.ts
test('complete chat conversation flow', async ({ page }) => {
  await page.goto('/');

  // Initial state
  await expect(page.getByTestId('welcome-input')).toBeVisible();
  await expect(page.getByTestId('message-history')).not.toBeVisible();

  // Send first message
  await page.fill('[data-testid="welcome-input"]', 'Test startup idea');
  await page.click('[data-testid="send-button"]');

  // Verify transition
  await expect(page.getByTestId('message-history')).toBeVisible();
  await expect(page.getByText('Test startup idea')).toBeVisible();

  // Test mode switching
  await page.click('[data-testid="roast-mode"]');
  await page.fill('[data-testid="chat-input"]', 'Roast my idea');
  await page.click('[data-testid="send-button"]');

  // Verify response
  await expect(page.locator('[data-role="assistant"]')).toBeVisible();
});
```

## 📊 Performance Metrics

### Target Metrics

- **Message Send Response:** < 1 second
- **Streaming Animation:** 60fps
- **Memory Usage:** < 50MB for full conversation
- **Bundle Size Impact:** < 100KB

### Monitoring

```typescript
// Performance tracking
const trackChatPerformance = {
  messageLatency: (startTime: number) => {
    const latency = Date.now() - startTime;
    analytics.track('chat_message_latency', { latency });
  },

  modeSwitch: (from: ChatMode, to: ChatMode) => {
    analytics.track('chat_mode_switch', { from, to });
  },

  errorRate: (error: string, mode: ChatMode) => {
    analytics.track('chat_error', { error, mode });
  },
};
```

## 🎭 Content & Humor

### Response Guidelines

- **Length:** 50-150 words optimal
- **Tone:** Professional veneer with satirical core
- **Timing:** Immediate response with streaming effect
- **Consistency:** Maintain character across conversation

### Fallback Responses

```typescript
const FALLBACK_RESPONSES = {
  normal: [
    'Let me synergize your synergy while I ideate on that paradigm shift.',
    "I'm currently optimizing my algorithms for maximum disruptive potential.",
    'Your request is being processed through our proprietary innovation pipeline.',
  ],
  roast: [
    "I'm too busy crushing other dreams to focus on yours right now.",
    'Even I need a break from the brutal honesty sometimes.',
    'My roasting algorithms are currently overheating from excessive truth-telling.',
  ],
  calculator: [
    'Calculating the probability of success... still working on it.',
    'My financial models are showing a 404 error on your ROI projections.',
    'Currently computing the burn rate of your hopes and dreams.',
  ],
};
```

## 🔄 Future Enhancements

### Phase 2 Features

- [ ] Voice input/output integration
- [ ] Message reactions and favorites
- [ ] Conversation export functionality
- [ ] Multi-conversation management

### Advanced Features

- [ ] AI memory across sessions
- [ ] Personality customization
- [ ] Integration with external APIs
- [ ] Collaborative conversations

---

## 📋 Implementation Checklist

### Core Development

- [x] ChatInterface component structure
- [x] Message management system
- [x] Mode switching functionality
- [x] Progressive disclosure implementation
- [x] API integration with error handling

### UI/UX Features

- [x] Streaming message animation
- [x] Mobile-responsive design
- [x] Accessibility features
- [x] Loading and error states
- [x] Mode-specific styling

### Quality Assurance

- [x] Unit test coverage
- [x] Integration testing
- [x] Performance optimization
- [x] Cross-browser compatibility
- [x] Mobile device testing

---

## 🏆 Success Criteria

### User Experience

- Intuitive chat interaction
- Engaging AI personalities
- Smooth, responsive interface
- Professional appearance with humor

### Technical Quality

- Sub-1-second response times
- Zero critical accessibility issues
- Clean error handling
- Scalable architecture

### Business Impact

- High user engagement metrics
- Multiple conversation sessions
- Mode exploration behavior
- Positive user feedback

---

> **💬 Feature Goal:** Deliver a delightful, satirical chat experience that parodies VC culture while maintaining professional interface standards and encouraging extended user engagement.
