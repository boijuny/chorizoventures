# 🌍 Global Rules & Development Standards

## 🎯 Project Vision

**Guez VC** is a satirical AI chat application that balances sophisticated humor with professional UX design, featuring multiple AI personalities in a clean, OpenAI-inspired interface.

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
├── ChatInterface.tsx     # Primary chat component
└── ChatMessage.tsx       # Message display component
```

## 🎨 Design System Rules

### **OpenAI-Inspired Principles**
1. **Comfortable Rounded Corners**: 8px border radius (`rounded-lg`) for primary elements
2. **Balanced Spacing**: Comfortable padding, professional proportions
3. **Clean Typography**: Standard font weights, clear hierarchy
4. **Functional Design**: Usability with approachable aesthetics

### **Component Standards**
```tsx
// ✅ Correct: Comfortable, OpenAI-style
<Button variant="default" size="default" className="rounded-lg">
  Action
</Button>

// ❌ Avoid: Too minimal or too rounded
<Button size="sm" className="rounded-sm">
  Minimal Action
</Button>
```

### **Spacing Scale**
- **Internal gaps**: `gap-2` (8px)
- **Component padding**: `p-4` (16px) 
- **Section spacing**: `space-y-4` (16px)
- **Layout margins**: `mb-6` (24px)

## 🧩 Component Guidelines

### **Button Design**
- **Sizes**: `sm` (32px), `default` (36px), `lg` (40px)
- **Variants**: `default`, `secondary`, `outline`, `ghost`
- **Radius**: Always `rounded-lg` (8px)
- **Internal spacing**: `gap-2` between icon and text

### **Chat Interface**
- **Max width**: `max-w-3xl` for optimal reading
- **Message spacing**: `space-y-4` between messages
- **Input height**: Auto-resize textarea with `rounded-lg`
- **Mode selector**: Persistent tabs at top with `rounded-lg`

### **Cards & Containers**
- **Border radius**: `rounded-lg` for cards, `rounded-xl` for message bubbles
- **Padding**: `p-4` for comfortable feel
- **Borders**: Use semantic border colors
- **Shadows**: Minimal or none

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
- [ ] Uses `rounded-lg` for primary elements, `rounded-xl` for containers
- [ ] Follows spacing scale (8px, 12px, 16px, 24px)
- [ ] Implements proper focus states
- [ ] Works on mobile (responsive design)
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
- **Professional execution** with **humorous content**
- **Corporate parody** without sacrificing usability
- **Family-friendly** humor that's clever, not offensive
- **Self-aware** about VC culture and AI trends

### **Content Strategy**
- Keep UI text minimal and functional
- Let AI responses carry the satirical tone
- Maintain professional interface design
- Balance humor with genuine utility

## 🔧 Technical Standards

### **File Organization**
```
├── app/                   # Next.js pages and API routes
├── components/           # Reusable UI components
│   └── ui/              # Shadcn/ui components
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
    <div className="rounded-sm p-3">
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

**🎯 Remember**: This project prioritizes **clean, functional design** over flashy features. Every component should feel purposeful and professionally executed, even when the content is satirical.
