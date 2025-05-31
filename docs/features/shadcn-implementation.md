# 🎨 Shadcn/ui Implementation

## 🎯 Overview

Ultra-minimalist corner-anchored layout using Shadcn/ui with #0a0a0a background and mode-specific styling.

## 📐 Layout

```
Desktop: Corner Anchored          Mobile: Grid Layout
┌─ LOGO ──── MESH ─┐              ┌─ LOGO + MODE ─┐
│                  │              │─ CHAT AREA ──│
│      CHAT        │              │─ TIME + MESH ─┐
│                  │              └───────────────┘
└─ TIME ── MODE ───┘
```

## 🧩 Components

### Corner Elements

```typescript
// Logo Corner (Top-Left)
interface LogoCornerProps {
  variant: 'full' | 'minimal';
  showTaglines: boolean;
}

// Mode Corner (Bottom-Right)
interface ModeCornerProps {
  currentMode: 'normal' | 'roast' | 'calculator';
  onModeChange: (mode: string) => void;
}

// Timezone Corner (Bottom-Left)
interface TimezoneCornerProps {
  zones: Array<{ label: string; timezone: string }>;
  format: '12h' | '24h';
}

// Mesh Corner (Top-Right)
interface MeshCornerProps {
  meshData?: CustomMeshData;
  fallback: 'geometric' | 'minimal';
}
```

### Extended Shadcn/ui

```typescript
// Button with mode support
interface ButtonProps {
  variant: 'default' | 'outline' | 'ghost';
  mode?: 'normal' | 'roast' | 'calculator';
}

// Mode-specific CSS
.mode-normal { --accent-color: #3b82f6; }
.mode-roast { --accent-color: #ef4444; }
.mode-calculator { --accent-color: #10b981; }
```

## 🔧 Setup

### 1. Install Shadcn/ui

```bash
npx shadcn-ui@latest init
# Select: Default style, dark theme, CSS variables

npx shadcn-ui@latest add button card input tabs
```

### 2. Configure Utilities

```typescript
// lib/utils.ts
export const cornerClasses = {
  topLeft: 'fixed top-6 left-6 z-50',
  topRight: 'fixed top-6 right-6 z-50',
  bottomLeft: 'fixed bottom-6 left-6 z-50',
  bottomRight: 'fixed bottom-6 right-6 z-50',
} as const;

export function getModeAccent(mode: ChatMode): string {
  const accents = {
    normal: 'accent-normal',
    roast: 'accent-roast',
    calculator: 'accent-calculator',
  };
  return accents[mode];
}
```

### 3. Global CSS

```css
/* app/globals.css */
:root {
  --background: 16 16 16; /* #0a0a0a */
  --foreground: 250 250 250;
  --border: 39 39 42;
  --accent-normal: #3b82f6;
  --accent-roast: #ef4444;
  --accent-calculator: #10b981;
}

.corner-top-left {
  @apply fixed top-6 left-6 z-50;
}
.corner-top-right {
  @apply fixed top-6 right-6 z-50;
}
.corner-bottom-left {
  @apply fixed bottom-6 left-6 z-50;
}
.corner-bottom-right {
  @apply fixed bottom-6 right-6 z-50;
}
```

## 📱 Responsive

```css
/* Mobile: Grid Layout */
@media (max-width: 768px) {
  .corner-layout {
    display: grid;
    grid-template-areas:
      'logo mode'
      'chat chat'
      'timezone mesh';
    gap: 1rem;
    padding: 1rem;
  }
}
```

## 🎬 Animations

```typescript
// Breathing taglines
const breathingVariants = {
  animate: {
    opacity: [0.7, 1, 0.7],
    transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
  },
};

// Micro-interactions
const hover = { scale: 1.02, transition: { duration: 0.2 } };

// Respect reduced motion
const useReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

## 📋 Implementation Steps

### Phase 1: Foundation

- [ ] Install Shadcn/ui with dark theme
- [ ] Set up corner positioning utilities
- [ ] Configure responsive breakpoints

### Phase 2: Corner Components

- [ ] Build LogoCorner with breathing animation
- [ ] Create TimezoneCorner with real-time updates
- [ ] Implement ModeCorner with state management
- [ ] Add MeshCorner with fallback

### Phase 3: Integration

- [ ] Integrate chat interface with corners
- [ ] Implement mode-specific styling
- [ ] Test responsive transitions

### Phase 4: Optimization

- [ ] Performance audit (Lighthouse > 95)
- [ ] Accessibility testing
- [ ] Cross-browser verification

## 🎯 Success Criteria

- [ ] Lighthouse Performance > 95
- [ ] Smooth corner → grid responsive transition
- [ ] Mode switching preserves state
- [ ] WCAG AA compliance
- [ ] Sub-2s load times

## 🧪 Testing

```typescript
// Component tests
describe('LogoCorner', () => {
  it('displays breathing taglines', () => {
    render(<LogoCorner showTaglines />);
    expect(screen.getByText('Revolutionizing synergy')).toBeInTheDocument();
  });
});

// Layout tests
describe('Corner Layout', () => {
  it('positions correctly on desktop', () => {
    setViewportSize(1024, 768);
    render(<HomePage />);
    expect(screen.getByTestId('logo-corner')).toHaveClass('corner-top-left');
  });
});
```

---

_Professional satirical design with sophisticated minimalism._
