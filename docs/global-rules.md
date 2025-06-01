# 🌍 Global Rules & Development Standards

## 🎯 Project Vision

**Guez VC** is a satirical AI chat application that balances sophisticated humor with professional UX design, featuring two distinct AI personalities (Roast and Stonks) in a clean, modern interface with a fixed title and centered content layout.

## 🏗 Architecture Overview

### **Simplified Stack**
- **Framework**: Next.js 14 (App Router only)
- **Components**: Shadcn/ui with minimal customization
- **Styling**: Tailwind CSS with design tokens
- **State**: React useState (no complex state management)
- **TypeScript**: Strict mode, proper typing

### **Core Components**
```
app/page.tsx              # Main chat interface
components/
├── ui/                   # Shadcn/ui components (Button, Tabs, Card)
├── layout/              # Layout components
│   ├── FixedTitle.tsx   # Fixed "Chorizo Ventures" title
│   └── CenteredContent.tsx # Centered content wrapper
├── chat/               # Chat components
│   ├── ChatInterface.tsx # Primary chat component
│   ├── ChatMessage.tsx  # Message display component
│   ├── ModeSelector.tsx # Roast/Stonks mode selector
│   ├── WelcomeMessage.tsx # Interactive welcome message
│   └── SuggestionPills.tsx # Satirical suggestion buttons
```

## 🎨 Design System Rules

### **Layout Principles**
1. **Fixed Title**: "Chorizo Ventures" positioned on left side
2. **Centered Content**: Core components vertically centered
3. **Interactive Elements**: Mode words and suggestion pills
4. **Mode-Specific Colors**: Red for Roast, Green for Stonks

### **Component Standards**
```tsx
// ✅ Correct: Mode-specific styling
<Button 
  variant="ghost"
  className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
>
  Roast
</Button>

// ❌ Avoid: Mixing mode colors or using non-mode colors
<Button className="text-blue-500">
  Action
</Button>
```

### **Spacing Scale**
- **Title spacing**: Fixed position with proper margins
- **Content centering**: Flexbox with min-height: 100vh
- **Component padding**: `p-4` (16px) 
- **Section spacing**: `space-y-4` (16px)
- **Layout margins**: `mb-6` (24px)

## 🧩 Component Guidelines

### **Fixed Title**
- **Position**: Fixed on left side
- **Font**: Inter, bold weight
- **Color**: Text foreground
- **Spacing**: Proper margin from content

### **Welcome Message**
- **Format**: "Built to <mode> your idea"
- **Mode Words**: Interactive with mode-specific colors
- **Animations**: Smooth hover transitions
- **Spacing**: Comfortable vertical margin

### **Mode Selector**
- **Variants**: Roast (Red) and Stonks (Green)
- **Styling**: Ghost variant with mode colors
- **Hover**: Color intensity increase with background
- **Position**: Top of chat interface

### **Suggestion Pills**
- **Style**: Minimal variant with rounded full
- **Content**: Satirical startup ideas
- **Hover**: Border opacity increase
- **Layout**: Horizontal scroll with proper spacing

### **Chat Interface**
- **Max width**: `max-w-3xl` for optimal reading
- **Message spacing**: `space-y-4` between messages
- **Input height**: Auto-resize textarea
- **Mode colors**: Applied to relevant elements

## 📋 Development Workflow

### **Before Starting Any Task**
1. ✅ Activate conda environment: `conda activate guezvc`
2. ✅ Review relevant documentation files
3. ✅ Check existing component patterns
4. ✅ Verify build passes: `npm run build`

### **Code Quality Standards**
- **TypeScript**: No `any` types allowed
- **Components**: Proper props interfaces
- **Accessibility**: ARIA attributes where needed
- **Performance**: Lazy loading for non-critical components
- **Testing**: Manual testing across breakpoints

### **Design Consistency Checklist**
- [ ] Fixed title properly positioned
- [ ] Content vertically centered
- [ ] Mode-specific colors used correctly
- [ ] Interactive elements have proper animations
- [ ] Maintains readable contrast ratios
- [ ] Uses semantic HTML elements

## 🚨 Critical Requirements

### **Performance**
- [ ] Page load < 2 seconds
- [ ] First Contentful Paint < 1 second
- [ ] No layout shift (CLS = 0)
- [ ] Efficient bundle size

### **Accessibility**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper focus management
- [ ] WCAG AA contrast compliance

### **Browser Support**
- [ ] Chrome/Edge (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

## 🎭 Brand Guidelines

### **Satirical Tone**
- **Professional execution** with **playful interactions**
- **Corporate parody** through mode-specific personalities
- **Family-friendly** humor that's clever, not offensive
- **Self-aware** about VC culture and startup trends

### **Content Strategy**
- Fixed title establishes brand presence
- Interactive mode words engage users
- Satirical suggestions provide entertainment
- Balance sophistication with satire

## 🔧 Technical Standards

### **File Organization**
```
├── app/                   # Next.js pages and API routes
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── layout/          # Layout components
│   └── chat/            # Chat interface components
├── lib/                 # Utility functions
├── types/               # TypeScript definitions
└── docs/                # Documentation
```

### **Import Conventions**
```tsx
// External libraries first
import React from 'react';
import { motion } from 'framer-motion';

// Internal imports
import { Button } from '@/components/ui/button';
import { ChatMode } from '@/types';
```

### **Component Structure**
```tsx
// 1. Interface definition
interface ComponentProps {
  // Properly typed props
}

// 2. Component implementation
export default function Component({ prop }: ComponentProps) {
  // 3. Local state and hooks
  const [state, setState] = useState();

  // 4. Event handlers
  const handleEvent = () => {
    // Handle event
  };

  // 5. Render
  return (
    <div className="p-4">
      {/* Component JSX */}
    </div>
  );
}
```

## ✅ Quality Assurance

### **Pre-Commit Checklist**
- [ ] `npm run build` passes
- [ ] `npm run lint` has no errors
- [ ] All TypeScript types are properly defined
- [ ] Component works on mobile
- [ ] Follows design system guidelines
- [ ] No console errors in browser

### **Manual Testing**
- [ ] Desktop: Chrome, Safari, Firefox
- [ ] Mobile: iOS Safari, Android Chrome
- [ ] Keyboard navigation works
- [ ] Screen reader announces properly
- [ ] Performance is acceptable

## 🚀 Deployment Guidelines

### **Production Readiness**
- [ ] All environment variables configured
- [ ] Error boundaries implemented
- [ ] Loading states handled gracefully
- [ ] 404 and error pages exist
- [ ] SEO meta tags included

### **Performance Monitoring**
- [ ] Core Web Vitals meet thresholds
- [ ] Bundle size is optimized
- [ ] Images are properly optimized
- [ ] No memory leaks

---

**🎯 Remember**: This project balances sophisticated design with satirical content. Every component should maintain professional execution while delivering playful interactions and mode-specific personality.
