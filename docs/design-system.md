# 🎨 Design System

## 🎯 Core Principles

- **Ultra-Minimalism:** #0a0a0a background, strategic negative space
- **Corner Anchoring:** Fixed positioning with center focus
- **Progressive Disclosure:** OpenAI-inspired clean interface
- **Micro-Interactions:** Subtle animations (scale 1.0 → 1.02)

## 🎨 Colors

```css
/* Core Palette */
--background: #0a0a0a;
--foreground: #fafafa;
--border: #27272a;
--muted: #a1a1aa;

/* Mode Accents */
--accent-normal: #3b82f6; /* Blue */
--accent-roast: #ef4444; /* Red */
--accent-calculator: #10b981; /* Green */
```

## ✍️ Typography

```css
--font-sans: 'Inter', ui-sans-serif, system-ui;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

### Taglines Animation

```typescript
const breathingAnimation = {
  opacity: [0.7, 1, 0.7],
  transition: { duration: 4, ease: 'easeInOut' },
};
```

## 📏 Layout

### Chat Interface Structure

```typescript
// Persistent Layout Pattern
interface ChatLayoutStructure {
  // Always visible at top
  modeSelector: 'persistent across all states';
  
  // Initial state
  initialView: 'title → input';
  
  // Chat state  
  chatView: 'messages → input';
  
  // Consistent styling
  inputStyling: 'same across all states';
}
```

### Component Hierarchy

```css
.chat-interface {
  /* Persistent mode selector */
  .mode-selector {
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }
  
  /* State-specific content */
  .welcome-state {
    text-align: center;
    /* Title + Input */
  }
  
  .chat-state {
    /* Messages + Input */
  }
  
  /* Consistent input styling */
  .input-area {
    background: var(--secondary-50);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    min-height: 100px;
    font-size: 1.125rem;
  }
}
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

### Shadcn/ui Extensions

```typescript
// Button with mode support
interface ButtonProps {
  variant: 'default' | 'outline' | 'ghost';
  mode?: 'normal' | 'roast' | 'calculator';
}

// Mode-specific styling
.mode-normal { --accent-color: #3b82f6; }
.mode-roast { --accent-color: #ef4444; }
.mode-calculator { --accent-color: #10b981; }
```

## 🎬 Animations

```typescript
// Micro-interactions only
const hover = { scale: 1.02, transition: { duration: 0.2 } };
const tap = { scale: 0.98, transition: { duration: 0.1 } };

// Respect reduced motion
const useReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

## ✅ Implementation Checklist

- [ ] Install Shadcn/ui with dark theme
- [ ] Configure corner positioning utilities
- [ ] Implement mode-specific styling
- [ ] Add breathing animation for taglines
- [ ] Test responsive corner → grid transition
- [ ] Verify WCAG AA contrast compliance
