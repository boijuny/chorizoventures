# 🎨 Design System

## 🎯 Core Principles

- **Minimalist Aesthetic:** Subtle borders, refined opacity, and gentle interactions
- **Visual Hierarchy:** Clear distinction between variants while maintaining consistency
- **Smooth Interactions:** 200ms transitions with polished hover states and focus management
- **Accessibility First:** Proper contrast ratios, focus states, and 40px touch targets
- **Sophisticated-Satirical Balance:** Professional design with playful interactions

## 🏗 Architecture

### **Layout Foundation**
- **Fixed Title:** "Chorizo Ventures" positioned on left side
- **Vertical Centering:** Core components centered in viewport
- **Welcome Message:** "Built to <mode> your idea" with interactive mode words
- **Mode Selector:** Roast (Red) and Stonks (Green) modes
- **Suggestion Pills:** Satirical startup ideas as interactive buttons

### **Shadcn/ui Foundation**
Built on Shadcn/ui components with minimalist aesthetic refinements:
- **Button**: Five elegant variants from solid to subtle with pill-shaped design
- **Interactions**: Refined hover states with semantic color transitions
- **Typography**: Balanced font weights and subtle opacity variations
- **Spacing**: Comfortable proportions with visual breathing room

### **Button Variants**
```css
/* Minimalist Button System */
default: bg-foreground text-background     /* Bold primary actions */
secondary: border border-border/50         /* Subtle secondary actions */
outline: border border-border/30           /* Minimal outlined actions */
ghost: hover:bg-accent/20                  /* Invisible until hover */
minimal: text-foreground/70                /* Ultra-subtle actions */

/* Mode-Specific Colors */
roast: text-red-500 hover:text-red-600    /* Roast mode accent */
stonks: text-green-500 hover:text-green-600/* Stonks mode accent */

/* Refined Transitions */
transition-all duration-200                /* Smooth 200ms transitions */
hover:border-border/60                     /* Progressive border opacity */
focus-visible:ring-2                       /* Clear focus indication */
```

## 🎨 Component Variants

### **Mode Selector**
```tsx
{/* Mode Toggle - Roast */}
<Button 
  variant="ghost"
  className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
>
  Roast
</Button>

{/* Mode Toggle - Stonks */}
<Button 
  variant="ghost"
  className="text-green-500 hover:text-green-600 hover:bg-green-500/10"
>
  Stonks
</Button>
```

### **Welcome Message**
```tsx
<div className="flex items-center space-x-2">
  <span>Built to</span>
  <span className={modeTextClass}>roast</span>
  <span>your idea</span>
</div>
```

### **Suggestion Pills**
```tsx
<Button 
  variant="minimal" 
  className="rounded-full border border-border/20 hover:border-border/40"
>
  A social network for pet rocks
</Button>
```

### **Interactive States**
```tsx
{/* Normal state */}
text-muted-foreground

{/* Hover state */}
hover:text-foreground hover:bg-accent/20

{/* Disabled state */}
disabled:opacity-60 disabled:pointer-events-none

{/* Focus state */}
focus-visible:ring-2 focus-visible:ring-ring
```

## 🎯 Design Philosophy

### **Minimalist Principles**
1. **Fixed Branding**: Clear brand presence with fixed title positioning
2. **Subtle Boundaries**: Borders use low opacity for gentle definition
3. **Semantic Colors**: Mode-specific colors for clear context
4. **Gentle Transitions**: All changes happen smoothly over 200ms
5. **Playful Interactions**: Hover animations on mode words and suggestions

### **Visual Refinements**
- **Border Opacity**: `/20`, `/30`, `/50`, `/60` for progressive prominence
- **Text Opacity**: `/70` for subtle text, full opacity for emphasis
- **Background Opacity**: `/10`, `/20`, `/30` for gentle hover states
- **Focus Management**: Ring-based focus with proper offset
- **Mode Colors**: Red for Roast, Green for Stonks with hover states

## ✅ Implementation Status

### **✅ Completed**
- [x] Fixed "Chorizo Ventures" title positioning
- [x] Vertically centered core components
- [x] Interactive mode words in welcome message
- [x] Two-mode system (Roast and Stonks)
- [x] Satirical suggestion buttons
- [x] Mode-specific color schemes
- [x] Smooth hover animations
- [x] Accessible focus management

### **🎨 Aesthetic Features**
- ✨ Fixed title with brand presence
- ✨ Interactive mode words
- ✨ Mode-specific color accents
- ✨ Satirical suggestion pills
- ✨ Smooth transitions and animations

## 📋 Usage Guidelines

### **Do's**
✅ Use mode-specific colors for interactive elements
✅ Maintain fixed title positioning
✅ Keep core components vertically centered
✅ Use playful animations for mode words
✅ Maintain sophisticated-satirical balance

### **Don'ts**
❌ Don't use harsh color transitions
❌ Don't override mode-specific colors
❌ Don't make suggestion text too long
❌ Don't sacrifice accessibility for aesthetics
❌ Don't mix transition timings

## 🚀 Quick Start

1. **Layout**: Ensure fixed title and vertical centering
2. **Modes**: Use appropriate colors for Roast and Stonks
3. **Suggestions**: Keep startup ideas concise and satirical
4. **Animations**: Verify smooth transitions on all interactions
5. **Balance**: Maintain professional design with playful elements

---

*This design system balances sophisticated minimalism with playful satire while maintaining full accessibility and visual clarity.*
