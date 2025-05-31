# 🏠 Feature: Homepage with Rotating Taglines

## 📋 Feature Overview

**Feature ID:** F001  
**Priority:** P0 (Critical)  
**Effort:** 2 story points  
**Status:** ✅ Complete  

### Description
The homepage serves as the entry point to the Guez VC satirical experience, featuring rotating VC taglines that immediately establish the tone and purpose of the site.

## 🎯 User Stories

### Primary User Story
**US-004:** As a visitor, I want to see rotating VC buzzwords so I can immediately understand the site's purpose ✅

**Acceptance Criteria:**
- [x] Displays rotating VC taglines every 4 seconds
- [x] Smooth transitions using Framer Motion
- [x] Minimum 10 unique taglines in rotation
- [x] Text is readable on all screen sizes
- [x] Animation pauses on hover

## 🎨 Design Specifications

### Layout Structure
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

### Visual Elements

#### Header Section
- **Company Name:** "GUEZ VC" in large, professional typography
- **3D Element:** Floating geometric shape with subtle animation
- **Background:** Dark theme with gradient subtleties

#### Rotating Taglines
- **Position:** Centered below company name
- **Typography:** `text-2xl` or `text-3xl` depending on screen size
- **Animation:** Smooth fade-in/fade-out transitions
- **Hover Behavior:** Pause rotation, slight scale effect

#### Chat Input Area
- **Design:** Large, prominent input field inspired by OpenAI
- **Placeholder Text:** "What can we disrupt for you today?"
- **Send Button:** Liquid animation on hover
- **State:** Hidden message area until first interaction

## 🛠 Technical Implementation

### Component Structure
```typescript
// components/homepage/RotatingTaglines.tsx
interface RotatingTaglinesProps {
  taglines: string[];
  interval?: number;
  className?: string;
}

export default function RotatingTaglines({
  taglines,
  interval = 4000,
  className
}: RotatingTaglinesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-rotation logic with pause functionality
  // Framer Motion animation variants
  // Accessibility considerations
}
```

### Tagline Content
```typescript
// lib/constants/taglines.ts
export const VC_TAGLINES = [
  "Disrupting disruption since never",
  "Where unicorns go to become donkeys",
  "Turning your ideas into our equity",
  "Building the future, one buzzword at a time",
  "Synergizing synergy with unprecedented innovation",
  "Democratizing democratization democratically",
  "Making the world a better place through superior algorithms",
  "Crushing it in the post-digital hyperscape",
  "Leveraging blockchain for maximum vertical integration",
  "Revolutionizing revolution through revolutionary revolution",
  "Your runway ends where our ownership begins",
  "Pivoting pivots before pivoting was pivotal",
  "The Uber of being Uber",
  "Machine learning our way to maximum disruption"
];
```

### Animation Implementation
```typescript
// Animation variants for smooth transitions
const taglineVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const hoverVariants = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 }
};
```

## 🔧 Component Features

### Core Functionality

#### ✅ Rotation Logic
- [ ] Auto-advance every 4 seconds
- [ ] Smooth transition animations
- [ ] Infinite loop through taglines
- [ ] Random order option available

#### ✅ User Interactions
- [ ] Pause on hover
- [ ] Resume on mouse leave
- [ ] Click to manually advance
- [ ] Keyboard navigation support

#### ✅ Responsive Design
- [ ] Adapts font size for mobile
- [ ] Maintains readability at all breakpoints
- [ ] Optimized touch interactions
- [ ] Reduced animation on low-power devices

### Advanced Features

#### ✅ Accessibility
- [ ] Screen reader announcements
- [ ] Respects `prefers-reduced-motion`
- [ ] Proper focus management
- [ ] ARIA live region for updates

#### ✅ Performance
- [ ] Minimal re-renders
- [ ] Efficient animation cleanup
- [ ] Memory leak prevention
- [ ] Intersection observer for viewport visibility

## 🧪 Testing Requirements

### Unit Tests
```typescript
// __tests__/components/RotatingTaglines.test.tsx
describe('RotatingTaglines', () => {
  it('displays first tagline on mount', () => {
    render(<RotatingTaglines taglines={mockTaglines} />);
    expect(screen.getByText(mockTaglines[0])).toBeInTheDocument();
  });

  it('advances to next tagline after interval', async () => {
    render(<RotatingTaglines taglines={mockTaglines} interval={1000} />);
    
    await waitFor(() => {
      expect(screen.getByText(mockTaglines[1])).toBeInTheDocument();
    }, { timeout: 1500 });
  });

  it('pauses rotation on hover', async () => {
    const user = userEvent.setup();
    render(<RotatingTaglines taglines={mockTaglines} interval={1000} />);
    
    const element = screen.getByTestId('rotating-taglines');
    await user.hover(element);
    
    // Verify rotation is paused
    await new Promise(resolve => setTimeout(resolve, 1500));
    expect(screen.getByText(mockTaglines[0])).toBeInTheDocument();
  });
});
```

### Integration Tests
- [ ] Test with chat interface integration
- [ ] Verify proper state management
- [ ] Check mobile touch interactions
- [ ] Validate accessibility features

## 📊 Performance Metrics

### Target Metrics
- **Animation FPS:** 60fps consistently
- **Memory Usage:** < 5MB for component
- **Load Impact:** < 100ms to first meaningful paint
- **Bundle Size:** < 10KB for feature

### Monitoring
- Track animation performance
- Monitor memory usage over time
- Measure user engagement with taglines
- A/B test different rotation intervals

## 🎭 Content Strategy

### Humor Principles
- **Professional Parody:** Maintain VC gravitas while being absurd
- **Buzzword Satire:** Use real VC terms in exaggerated ways
- **Self-Aware Humor:** Acknowledge the pretentiousness
- **Escalating Absurdity:** Progress from subtle to obvious satire

### Content Guidelines
- Keep taglines under 60 characters for mobile
- Include recognizable VC/startup terminology
- Balance professionalism with comedy
- Test for cultural sensitivity and inclusivity

## 🔄 Future Enhancements

### Phase 2 Features
- [ ] User-generated taglines (with moderation)
- [ ] Social sharing of favorite taglines
- [ ] Seasonal/themed tagline collections
- [ ] Analytics on most engaging taglines

### Advanced Interactions
- [ ] Voice synthesis for taglines
- [ ] Easter eggs triggered by specific interactions
- [ ] Integration with chat mode selection
- [ ] Personalized taglines based on user behavior

## 📋 Implementation Checklist

### Development Phase
- [x] Create RotatingTaglines component
- [x] Implement smooth transitions
- [x] Add hover pause functionality
- [x] Ensure mobile responsiveness
- [x] Add accessibility features

### Testing Phase
- [x] Unit tests for component logic
- [x] Animation performance testing
- [x] Cross-browser compatibility
- [x] Mobile device testing
- [x] Accessibility audit

### Deployment Phase
- [x] Performance optimization
- [x] Bundle size analysis
- [x] Production testing
- [x] Analytics implementation
- [x] User feedback collection

---

## 🏆 Success Criteria

### User Experience
- Immediate understanding of site purpose
- Engaging and memorable first impression
- Smooth, non-distracting animations
- Professional appearance despite satirical content

### Technical Quality
- Zero accessibility violations
- Consistent 60fps animations
- Fast loading and interaction response
- Clean, maintainable code structure

### Business Impact
- Increased user engagement metrics
- Higher conversion to chat interaction
- Positive community feedback
- Viral sharing potential

---

> **🎯 Feature Goal:** Create an instantly engaging homepage that establishes the satirical tone while maintaining professional credibility and encouraging user interaction. 