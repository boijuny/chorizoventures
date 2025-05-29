# Guez VC - Product Requirements Document

## 📄 Document Information

- **Version:** 1.2
- **Created:** 2024-01-XX
- **Owner:** [Your Name]
- **Status:** Phase 3 Complete ✅
- **Last Updated:** 2024-01-XX

## 🎯 Executive Summary

### Product Vision

Create a satirical VC website that parodies the pretentious startup ecosystem through an AI-powered chat interface, providing entertainment for developers and startup community members.

### Business Objectives

- Showcase development skills through humor and technical excellence
- Create viral content within the tech community
- Demonstrate AI integration capabilities
- Build personal brand recognition

### Success Metrics

- User engagement: Average session duration > 3 minutes
- Viral sharing: Organic social media mentions
- Technical performance: Page load < 2 seconds
- User retention: Return visits within 7 days

## 👥 User Stories & Personas

### Primary Persona: Tech-Savvy Developer

**Background:** Experienced developer familiar with VC culture and startup buzzwords  
**Goals:** Entertainment, sharing with colleagues, stress relief  
**Pain Points:** Tired of pretentious VC speak, needs humor in daily work routine

### User Stories

#### Epic 1: Core Chat Experience

- **US-001:** As a visitor, I want to chat with an AI that parodies VC behavior so I can be entertained ✅
- **US-002:** As a user, I want to switch between different AI personalities so I can explore various humor styles ✅
- **US-003:** As a developer, I want to get my startup idea roasted so I can laugh at the absurdity ✅

#### Epic 2: Website Experience

- **US-004:** As a visitor, I want to see rotating VC buzzwords so I can immediately understand the site's purpose ✅
- **US-005:** As a user, I want to see global time zones so I can feel the "international VC presence" ✅
- **US-006:** As a mobile user, I want a responsive interface so I can use the site on any device ✅

## 🛠 Technical Requirements

### Technology Stack

```
Frontend:
├── Next.js 14 (App Router)
├── TypeScript (Strict mode)
├── Tailwind CSS
├── Framer Motion
└── React Hooks

Backend:
├── Node.js + Express
├── TypeScript
├── MistralAI API
└── Rate limiting middleware

Database:
└── Supabase (PostgreSQL)

DevOps:
├── Vercel (Deployment)
├── GitHub Actions (CI/CD)
└── ESLint + Prettier
```

### System Architecture

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

### Performance Requirements

- Initial page load: < 2 seconds
- Time to interactive: < 3 seconds
- API response time: < 1 second
- Lighthouse score: > 90

### Security Requirements

- Input sanitization for all user inputs
- Rate limiting: 10 requests/minute per IP
- API key security through environment variables
- XSS protection via Content Security Policy

## 🎨 Design Requirements

### Visual Direction & Inspiration

**Primary Inspiration:** OpenAI.com minimalism + Pareto Fellowship 3D sophistication  
**Parody Approach:** Serious presentation with subtle chaos and strategic color pops

### Design Philosophy

- **Sophisticated Minimalism:** Clean, professional layout that commands respect
- **Liquid Animations:** Smooth, flowing transitions and micro-interactions
- **Strategic Chaos:** Intentional "glitches" and color pops that break expectations
- **3D Elements:** Floating geometric shapes inspired by Pareto's premium aesthetic
- **Self-Derision Through Contrast:** Professional veneer hiding absurd content

### Design System

```css
/* Color Palette */
--bg-primary: #0a0a0a; /* Deep black background */
--bg-secondary: #1a1a1a; /* Card/section backgrounds */
--bg-tertiary: #2a2a2a; /* Elevated elements */

--text-primary: #f5f5f5; /* Primary text */
--text-secondary: #a3a3a3; /* Secondary text */
--text-muted: #6b7280; /* Placeholder text */

/* Popping Colors (Strategic use for humor) */
--accent-primary: #3b82f6; /* Blue for normal mode */
--accent-roast: #ef4444; /* Red for roast mode */
--accent-calculator: #10b981; /* Green for calculator mode */
--accent-neon: #ff00ff; /* Magenta for chaos elements */
--accent-warning: #f59e0b; /* Orange for "glitches" */

/* Gradients for liquid effects */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-chaos: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
--gradient-subtle: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
```

### Typography Scale

```css
/* Professional typography with intentional breaks */
--font-primary: 'Inter', system-ui, sans-serif;
--font-chaos: 'Comic Sans MS', cursive; /* Used sparingly for humor */

--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 4rem; /* 64px */
```

### Component Library

#### 3D Floating Elements

- **Geometric Shapes:** Cubes, spheres, pyramids with subtle rotation
- **Material:** Glass-like with subtle reflections
- **Animation:** Slow float, gentle rotation, mouse interaction
- **Purpose:** Premium feel with occasional "glitch" colors

#### Liquid Animations

- **Morphing Buttons:** Shape changes on hover
- **Flowing Backgrounds:** Subtle gradient shifts
- **Text Transitions:** Smooth typewriter effects with occasional hiccups
- **Loading States:** Liquid-like progress indicators

#### Interactive Elements

```typescript
// Button variants with liquid animations
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'chaos';
  liquid?: boolean; // Enables morphing animations
  glitch?: boolean; // Occasional chaos styling
  pulse?: boolean; // Subtle pulsing effect
}

// Chat message with sophisticated styling
interface MessageProps {
  role: 'user' | 'assistant';
  mode: 'normal' | 'roast' | 'calculator';
  animate: 'slide' | 'fade' | 'liquid';
  enableGlitch?: boolean; // Random color pops
}
```

#### Mode-Specific Styling

- **Normal Mode:** Clean blue accents, professional animations
- **Roast Mode:** Red accents with aggressive transitions
- **Calculator Mode:** Green with "financial" animations
- **Random Chaos:** Occasional neon colors breaking through

### Layout & Spacing

```css
/* Spacing scale for consistent rhythm */
--space-xs: 0.25rem; /* 4px */
--space-sm: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 3rem; /* 48px */
--space-3xl: 4rem; /* 64px */

/* Professional grid system */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### Responsive Breakpoints

- **Mobile:** 320px - 768px (Stack elements, simplified 3D)
- **Tablet:** 768px - 1024px (Reduced animations, touch-friendly)
- **Desktop:** 1024px+ (Full experience with 3D elements)

### Animation Guidelines

#### Liquid Motion Principles

```typescript
// Framer Motion variants for liquid animations
const liquidVariants = {
  initial: { scale: 1, borderRadius: '8px' },
  hover: { 
    scale: 1.05, 
    borderRadius: '16px',
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const glitchVariants = {
  normal: { filter: 'none' },
  glitch: { 
    filter: 'hue-rotate(180deg) saturate(200%)',
    transition: { duration: 0.1 },
  },
};
```

#### 3D Elements Animation

- **Rotation Speed:** 20-30 seconds per full rotation
- **Float Movement:** Subtle vertical motion (±10px)
- **Mouse Interaction:** Elements slightly follow cursor
- **Performance:** Use CSS transforms, avoid layout changes

### Micro-Interactions

#### Professional Polish

- **Button Hovers:** Smooth color transitions (200ms)
- **Input Focus:** Glowing borders with liquid morphing
- **Scroll Animations:** Parallax on 3D elements
- **Text Selection:** Custom highlight colors per mode

#### Intentional Chaos

- **Random Glitches:** 1% chance of color pop on interactions
- **Typing Hiccups:** Occasional "lag" in rotating text
- **Button Wobbles:** Rare unexpected animations
- **Error States:** Overly dramatic liquid animations

### Homepage Specific Design

#### Hero Section Layout

```
┌─────────────────────────────────────────────┐
│  GUEZ VC                        [3D Shape]  │
│                                             │
│         [Rotating Tagline]                  │
│    "Disrupting disruption since never"     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ What can we disrupt for you?        │   │
│  │ [Liquid Input Field]          [Send]│   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Normal] [Roast] [Calculator] [More]      │
│                                             │
│  SF 6:55 AM  NYC 9:55 AM  PARIS 3:55 PM   │
└─────────────────────────────────────────────┘
```

#### Chat Interface Design

- **OpenAI-inspired Input:** Rounded, expandable text area
- **Floating Send Button:** Liquid animation on message ready
- **Message Bubbles:** Sophisticated with mode-specific accents
- **Typing Indicator:** Premium animation with sarcastic text

### Accessibility Considerations

- **Color Contrast:** All text meets WCAG AA standards
- **Motion Sensitivity:** Respect `prefers-reduced-motion`
- **Focus States:** Clear keyboard navigation
- **Screen Readers:** Proper ARIA labels for 3D elements

### Performance Constraints

- **3D Elements:** Use CSS transforms only, no WebGL complexity
- **Animations:** 60fps target, use `will-change` sparingly
- **Liquid Effects:** CSS-only where possible, minimal JS
- **Mobile Optimization:** Reduced animation complexity on touch devices

## 📋 Feature Specifications

### Feature 1: Homepage with Rotating Taglines

**Priority:** P0 (Critical)  
**Effort:** 2 story points  

**Acceptance Criteria:**

- [ ] Displays rotating VC taglines every 4 seconds
- [ ] Smooth transitions using Framer Motion
- [ ] Minimum 10 unique taglines in rotation
- [ ] Text is readable on all screen sizes
- [ ] Animation pauses on hover

**Technical Implementation:**

```typescript
interface TaglineProps {
  taglines: string[];
  interval: number;
  className?: string;
}
```

### Feature 2: AI Chat Interface

**Priority:** P0 (Critical)  
**Effort:** 8 story points  

**Acceptance Criteria:**

- [ ] ChatGPT-style interface with message history
- [ ] Three distinct AI modes (Normal, Roast, Calculator)
- [ ] Streaming response animation
- [ ] Message persistence across sessions
- [ ] Error handling with humorous messages
- [ ] Mobile-optimized input area

**Technical Implementation:**

```typescript
interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  mode: 'normal' | 'roast' | 'calculator';
  timestamp: Date;
}

interface ChatState {
  messages: ChatMessage[];
  currentMode: ChatMode;
  isLoading: boolean;
  error: string | null;
}
```

### Feature 3: Multi-timezone Clocks

**Priority:** P1 (Important)  
**Effort:** 1 story point  

**Acceptance Criteria:**

- [ ] Shows current time in SF, NYC, Paris
- [ ] Updates every minute
- [ ] Formatted consistently (12-hour format)
- [ ] Responsive layout on mobile

## 🚧 Implementation Plan

### Phase 1: Foundation (Week 1) ✅ **COMPLETED**

**Goal:** Basic project structure and development environment

**Tasks:**

- [x] Setup Next.js project with TypeScript
- [x] Configure Tailwind CSS and Framer Motion
- [x] Setup ESLint, Prettier, and Git hooks
- [x] Create basic layout components
- [x] Setup Supabase connection (placeholder for Phase 3)

**Definition of Done:**

- [x] Project builds without errors
- [x] Linting and formatting rules enforced
- [x] Basic dark theme implemented
- [x] Database connection setup planned (for Phase 3)

**✅ PHASE 1 ACHIEVEMENTS:**

- Next.js 14 with App Router successfully configured
- TypeScript strict mode enabled and compiling without errors
- Tailwind CSS with complete design system implementation
- ESLint + Prettier enforcing code quality
- Inter font integration with fallback system
- Comprehensive type definitions created
- Utility functions and constants established
- Professional project structure with clear separation of concerns
- SEO metadata and Open Graph configuration
- Accessibility considerations implemented
- Performance optimization foundations laid

**📊 PHASE 1 METRICS ACHIEVED:**

- Build time: < 30 seconds ✅
- TypeScript compilation: 0 errors ✅
- Linting: 0 warnings or errors ✅
- Code formatting: Automated and consistent ✅
- Project structure: Clean and scalable ✅

### Phase 2: Core UI (Week 2) ✅ COMPLETE

**Goal:** Homepage and chat interface foundation

**Tasks:**

- [x] Implement rotating taglines component ✅
- [x] Create chat message components ✅
- [x] Build timezone clocks ✅
- [x] Setup responsive layout ✅
- [x] Add loading states ✅

**Definition of Done:**

- Homepage displays rotating content ✅
- Chat interface accepts and displays messages ✅
- Mobile responsive design works ✅
- All components have proper TypeScript types ✅

**Implementation Notes:**
- Created RotatingTaglines component with 14+ satirical taglines
- Built interactive ChatModeSelector with liquid animations
- Implemented TimezoneClock showing SF/NYC/Paris times
- Added FloatingShape 3D components with interaction
- All components follow PRD design specifications

### Phase 3: AI Integration (Week 3) ✅ COMPLETE

**Goal:** Connect MistralAI and implement chat logic

**Tasks:**

- [x] Setup MistralAI API integration ✅
- [x] Implement chat API routes ✅
- [x] Create AI personality prompts ✅
- [x] Add streaming responses ✅
- [x] Implement rate limiting ✅

**Definition of Done:**

- AI responds consistently to user messages ✅
- All three chat modes work properly ✅
- Streaming animation functions correctly ✅
- Rate limiting prevents abuse ✅

**Implementation Notes:**
- Created `/api/chat` route with MistralAI integration
- Implemented three distinct AI personalities:
  - Normal: Satirical VC advisor with startup buzzwords
  - Roast: Brutal but constructive criticism with dark humor
  - Calculator: Numbers-focused analyst with dry humor
- Added ChatMessage and TypingIndicator components
- Built ChatInterface with full state management
- Implemented rate limiting (20 requests/hour per IP)
- Added comprehensive error handling with humorous fallbacks

### Phase 4: Polish & Testing (Week 4)

**Goal:** Refinement, testing, and deployment preparation

**Tasks:**

- [ ] Add comprehensive error handling
- [ ] Implement message persistence
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Write documentation

**Definition of Done:**

- All user stories meet acceptance criteria
- Performance metrics achieved
- No critical bugs or security issues
- Ready for deployment

#### 🎨 **UI Improvement: OpenAI-Style Chat Interface**

**Priority:** P1 (High Impact UX Enhancement)  
**Inspiration:** OpenAI ChatGPT interface pattern  
**Goal:** Hide chat message area initially, reveal on first user interaction

**Implementation Checklist:**

- [x] **State Management**: Add `hasStartedChat` boolean state to ChatInterface
- [x] **Conditional Rendering**: Hide message area when `hasStartedChat` is false
- [x] **Initial UI**: Show large centered input with mode selector above
- [x] **Transition Animation**: Smooth reveal animation when chat starts
- [x] **Input Redesign**: Large prominent input field for first message
- [x] **Welcome Content**: Enhanced welcome message per mode
- [x] **Responsive Design**: Ensure mobile compatibility for new layout
- [ ] **Testing**: Verify smooth transition across all modes

**Detailed Steps:**

1. **Modify ChatInterface State:**
   - [x] Add `hasStartedChat` state (default: false)
   - [x] Set to true on first message send
   - [ ] Reset when mode changes (optional)

2. **Create Two UI Layouts:**
   - [x] **Before Chat**: Large input, prominent mode selector
   - [x] **During Chat**: Current message area + input

3. **Animation Implementation:**
   - [x] Smooth height transition for message area reveal
   - [x] Input field position/size animation
   - [x] Mode selector repositioning

4. **Visual Design Updates:**
   - [x] Larger input field for initial state
   - [x] Enhanced welcome icons/text per mode
   - [x] Better visual hierarchy

**Acceptance Criteria:**
- [x] Message area completely hidden on page load
- [x] Smooth transition when user sends first message
- [x] No layout jumps or visual glitches
- [x] Works consistently across all three modes
- [x] Mobile responsive design maintained

## 🧪 Testing Strategy

### Unit Testing

- React component rendering
- Utility function logic
- API endpoint responses
- Database operations

### Integration Testing

- AI API communication
- Database CRUD operations
- Authentication flow
- Error scenarios

### E2E Testing

- Complete user journeys
- Cross-browser compatibility
- Mobile device testing
- Performance benchmarking

### Testing Tools

```json
{
  "testing": {
    "unit": "Jest + React Testing Library",
    "integration": "Supertest",
    "e2e": "Playwright",
    "performance": "Lighthouse CI"
  }
}
```

## ⚠️ Risk Assessment

### Technical Risks

| Risk                      | Impact | Probability | Mitigation                            |
| ------------------------- | ------ | ----------- | ------------------------------------- |
| MistralAI API rate limits | High   | Medium      | Implement caching, fallback responses |
| Performance issues        | Medium | Low         | Code splitting, optimization          |
| Mobile compatibility      | Medium | Low         | Progressive enhancement               |

### Business Risks

| Risk                     | Impact | Probability | Mitigation                 |
| ------------------------ | ------ | ----------- | -------------------------- |
| Humor not resonating     | Medium | Medium      | User feedback iterations   |
| Legal issues with parody | Low    | Low         | Clear disclaimer, fair use |

## 📊 Metrics & Analytics

### Key Performance Indicators

- **Engagement Rate:** Messages per session
- **Retention Rate:** Return visitors within 7 days
- **Performance:** Core Web Vitals scores
- **Error Rate:** Failed API requests < 1%

### Tracking Implementation

```typescript
// Analytics events to track
interface AnalyticsEvent {
  chat_message_sent: { mode: ChatMode };
  mode_switched: { from: ChatMode; to: ChatMode };
  page_view: { path: string };
  error_occurred: { type: string; message: string };
}
```

## 🚀 Launch Criteria

### MVP Launch Requirements

- [ ] All P0 features fully functional
- [ ] Performance benchmarks met
- [ ] Security audit passed
- [ ] Mobile compatibility verified
- [ ] Content reviewed and approved

### Post-Launch Monitoring

- Real-time error tracking
- Performance monitoring
- User feedback collection
- API usage analytics

## 📚 Appendices

### A. Content Guidelines

- Maintain satirical tone without being offensive
- Reference real VC trends and buzzwords
- Keep responses family-friendly
- Include self-aware humor breaks

### B. API Documentation

```typescript
// Chat API endpoint
POST /api/chat
{
  message: string;
  mode: 'normal' | 'roast' | 'calculator';
  conversation_id?: string;
}

Response: {
  response: string;
  conversation_id: string;
  mode: ChatMode;
}
```

### C. Environment Variables

```bash
# Required environment variables
MISTRAL_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
NEXTAUTH_SECRET=
NODE_ENV=
```

---

**Document Approval:**

- [ ] Technical Lead Review
- [ ] Design Review
- [ ] Security Review
- [ ] Final Approval
