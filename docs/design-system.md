# 🎨 Design System

## 🎯 Core Principles

- **Minimalist Aesthetic:** Subtle borders, refined opacity, and gentle interactions
- **Visual Hierarchy:** Clear distinction between variants while maintaining consistency
- **Smooth Interactions:** 200ms transitions with polished hover states and focus management
- **Accessibility First:** Proper contrast ratios, focus states, and 40px touch targets

## 🏗 Architecture

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

/* Refined Transitions */
transition-all duration-200                /* Smooth 200ms transitions */
hover:border-border/60                     /* Progressive border opacity */
focus-visible:ring-2                       /* Clear focus indication */
```

## 🎨 Component Variants

### **Button Hierarchy**
```tsx
{/* Primary Action - Most prominent */}
<Button variant="default">Save Changes</Button>

{/* Secondary Action - Balanced prominence */}
<Button variant="secondary">Cancel</Button>

{/* Tertiary Action - Subtle presence */}
<Button variant="outline">Learn More</Button>

{/* Utility Action - Nearly invisible */}
<Button variant="ghost">Settings</Button>

{/* Minimal Action - Ultra-subtle */}
<Button variant="minimal">Close</Button>
```

### **Suggestion Pills**
```tsx
<Button 
  variant="minimal" 
  className="rounded-full border border-border/20 hover:border-border/40"
>
  Search with ChatGPT
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
1. **Progressive Disclosure**: Elements reveal themselves on interaction
2. **Subtle Boundaries**: Borders use low opacity for gentle definition
3. **Semantic Opacity**: Text opacity conveys importance hierarchy
4. **Gentle Transitions**: All changes happen smoothly over 200ms

### **Visual Refinements**
- **Border Opacity**: `/20`, `/30`, `/50`, `/60` for progressive prominence
- **Text Opacity**: `/70` for subtle text, full opacity for emphasis
- **Background Opacity**: `/10`, `/20`, `/30` for gentle hover states
- **Focus Management**: Ring-based focus with proper offset

## ✅ Implementation Status

### **✅ Completed**
- [x] Five-tier button variant system (default → minimal)
- [x] Refined opacity system for borders and backgrounds
- [x] 200ms transition timing for smooth interactions
- [x] Progressive hover states with semantic meaning
- [x] Pill-shaped suggestion buttons with subtle borders
- [x] Minimalist send button with ghost styling
- [x] Accessible focus management with ring indicators
- [x] Consistent 40px height standard maintained

### **🎨 Aesthetic Features**
- ✨ Subtle border animations on hover
- ✨ Progressive opacity system for visual hierarchy  
- ✨ Ghost-style utility buttons
- ✨ Refined color transitions
- ✨ Minimal suggestion pill styling

## 📋 Usage Guidelines

### **Do's**
✅ Use `variant="minimal"` for suggestion buttons and subtle actions
✅ Apply progressive border opacity (`/20` → `/40` on hover)
✅ Maintain 200ms transition timing across all interactions
✅ Use semantic opacity to convey element importance
✅ Keep focus rings visible for accessibility

### **Don'ts**
❌ Don't use harsh color transitions or abrupt state changes
❌ Don't override the opacity system with hardcoded values
❌ Don't make interactive elements too subtle to discover
❌ Don't sacrifice accessibility for aesthetic minimalism
❌ Don't mix transition timings (stick to 200ms standard)

## 🚀 Quick Start

1. **Browse Variants**: Visit `/design-system` to see all button styles
2. **Choose Hierarchy**: Select variant based on action importance
3. **Apply Consistently**: Use same variants for similar action types
4. **Test Interactions**: Verify hover and focus states work smoothly
5. **Maintain Minimalism**: Keep visual noise low, interactions smooth

---

*This minimalist design system prioritizes elegant subtlety and refined interactions while maintaining full accessibility and visual clarity.*
