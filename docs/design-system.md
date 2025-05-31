# 🎨 Design System

## 🎯 Core Principles

- **OpenAI-Inspired Minimalism:** Clean, functional design prioritizing usability over visual flair
- **Geometric Precision:** Minimal border radius (2px), crisp edges, tight spacing
- **Component Consistency:** All elements use the same design tokens and styling approach
- **Accessibility First:** Proper focus states, ARIA attributes, and keyboard navigation

## 🏗 Architecture

### **Shadcn/ui Foundation**
Built on Shadcn/ui components with custom styling:
- **Button**: Compact sizing with minimal border radius
- **Tabs**: Clean mode selector with geometric precision  
- **Card**: Simple containers with consistent spacing
- **Input**: Minimal styling with proper focus states

### **Design Tokens**
```css
/* Border Radius - Minimal approach */
--radius: 0.25rem; /* 4px base */
rounded-sm: 2px    /* Primary for buttons, cards */
rounded-md: 4px    /* Secondary elements */

/* Button Sizing - Compact & professional */
sm: h-6 px-2 text-xs     /* 24px height */
default: h-7 px-2.5      /* 28px height */  
lg: h-8 px-3             /* 32px height */

/* Spacing - Tight but touchable */
gap-1: 4px               /* Internal spacing */
p-3: 12px                /* Card padding */
space-y-3: 12px          /* Vertical rhythm */
```

## 🎨 Components

### **Buttons**
```tsx
<Button variant="default" size="sm">
  Compact Action
</Button>
```

**Variants:**
- `default` - Primary actions (blue background)
- `secondary` - Secondary actions (muted background)
- `outline` - Subtle actions (border only)
- `ghost` - Minimal actions (hover only)

**Sizes:**
- `sm` - 24px height, tight padding
- `default` - 28px height, balanced padding
- `lg` - 32px height, comfortable padding

### **Mode Selector**
```tsx
<Tabs value={mode} onValueChange={setMode}>
  <TabsList>
    <TabsTrigger value="normal">Normal</TabsTrigger>
    <TabsTrigger value="roast">Roast</TabsTrigger>
    <TabsTrigger value="calculator">Calculator</TabsTrigger>
  </TabsList>
</Tabs>
```

### **Messages**
```tsx
<div className="p-3 rounded-sm border text-sm">
  Message content
</div>
```

## 📐 Layout Patterns

### **Chat Interface**
```tsx
<div className="w-full max-w-3xl mx-auto">
  {/* Mode selector */}
  <Tabs />
  
  {/* Messages area */}
  <div className="space-y-4 max-h-96 overflow-y-auto">
    {messages.map(message => <ChatMessage />)}
  </div>
  
  {/* Input area */}
  <textarea className="rounded-sm" />
</div>
```

### **Design System Page**
```tsx
<div className="max-w-4xl mx-auto space-y-12">
  <section>
    <h2>Section Title</h2>
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Component Group</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Examples */}
        </CardContent>
      </Card>
    </div>
  </section>
</div>
```

## 🎯 Key Differences from Standard Shadcn/ui

### **Border Radius**
- **Standard**: `rounded-md` (6px) - too rounded
- **Our approach**: `rounded-sm` (2px) - crisp, geometric

### **Button Spacing**
- **Standard**: `gap-2` (8px) - too loose
- **Our approach**: `gap-1` (4px) - tight, professional

### **Sizing Scale**
- **Standard**: h-9, h-10, h-11 - too large
- **Our approach**: h-6, h-7, h-8 - compact, text-like

## ✅ Implementation Status

### **✅ Completed**
- [x] Shadcn/ui Button with minimal styling
- [x] Tabs component for mode selection
- [x] Card components with consistent spacing
- [x] ChatInterface with simplified layout
- [x] ChatMessage with minimal bubbles
- [x] Design system showcase page
- [x] OpenAI-style border radius throughout
- [x] Compact spacing and sizing
- [x] Clean typography hierarchy

### **🎨 Visual Examples**
Visit `/design-system` to see:
- Typography hierarchy
- Button variants and sizes
- Mode selector tabs
- Color system
- Design principles
- Loading states

## 📋 Usage Guidelines

### **Do's**
✅ Use `rounded-sm` for most elements  
✅ Keep buttons compact and text-like  
✅ Maintain consistent spacing (4px, 8px, 12px)  
✅ Use semantic color tokens  
✅ Include proper focus states  

### **Don'ts**
❌ Don't use large border radius (`rounded-lg`, `rounded-xl`)  
❌ Don't make buttons too prominent or "pillowy"  
❌ Don't use excessive padding or spacing  
❌ Don't override design tokens with hardcoded values  
❌ Don't sacrifice accessibility for aesthetics  

## 🚀 Getting Started

1. **View Components**: Visit `/design-system` 
2. **Use in Code**: Import from `@/components/ui/`
3. **Follow Patterns**: Reference existing implementations
4. **Test Responsively**: Ensure mobile compatibility
5. **Maintain Consistency**: Use design tokens consistently

---

*This design system achieves the clean, professional aesthetic of OpenAI's interface while maintaining full accessibility and component flexibility.*
