# 🌐 Global Rules

## 📋 Project Overview

- **Project:** Guez VC - Satirical VC Website
- **Version:** 2.0 (Ultra-Minimalist)
- **Status:** Shadcn/ui Implementation
- **Environment:** `guezvc` conda environment

## 🎯 Objectives

- Ultra-minimalist interface with corner-anchored layout
- Professional satirical balance
- Lighthouse score > 95, sub-2s load times
- Progressive disclosure chat interface

## 🛠 Tech Stack Standards

### ✅ Required Technologies

- [ ] Shadcn/ui components (dark theme, #0a0a0a background)
- [ ] TypeScript strict mode, path aliases (@/components, @/lib)
- [ ] Next.js 14 App Router
- [ ] Tailwind CSS with corner positioning utilities
- [ ] Framer Motion (minimal animations only)

### ✅ Performance Requirements

- [ ] Page load < 2 seconds
- [ ] Lighthouse score > 95
- [ ] API response < 1 second
- [ ] Respect prefers-reduced-motion

## 🎨 Design Standards

### ✅ Corner Layout Requirements

- [ ] **Top-Left:** Logo + breathing taglines
- [ ] **Top-Right:** 3D mesh with fallback
- [ ] **Bottom-Left:** Timezone clocks (SF/NYC/LON/TKY)
- [ ] **Bottom-Right:** Mode selector (Normal/Roast/Calculator)
- [ ] **Center:** Progressive chat interface

### ✅ Responsive Strategy

- [ ] Desktop: Fixed corner positioning
- [ ] Mobile: Grid layout (logo+mode / chat / timezone+mesh)
- [ ] Touch targets ≥ 44px

### ✅ Mode-Specific Styling

- [ ] Normal: Blue accents (#3b82f6)
- [ ] Roast: Red accents (#ef4444)
- [ ] Calculator: Green accents (#10b981)

## 🧪 Quality Standards

### ✅ Component Requirements

- [ ] Each corner element self-contained
- [ ] Mode switching preserves state
- [ ] Accessibility compliant (WCAG AA)
- [ ] Error boundaries and loading states
- [ ] TypeScript interfaces for all props

### ✅ Testing Checklist

- [ ] Corner positioning on all breakpoints
- [ ] Mode switching functionality
- [ ] Chat interface progressive disclosure
- [ ] Performance impact measurement
- [ ] Cross-browser compatibility

## 📝 Content Guidelines

### ✅ Satirical Tone

- [ ] Professional presentation with subtle VC parody
- [ ] Breathing taglines: "Revolutionizing synergy", "Disrupting disruption"
- [ ] Family-friendly content
- [ ] Mode-appropriate AI personalities

## 🔄 Development Workflow

### ✅ Implementation Process

1. [ ] Install Shadcn/ui with dark theme
2. [ ] Set up corner positioning utilities
3. [ ] Build corner components independently
4. [ ] Integrate chat interface with mode switching
5. [ ] Test responsive transitions and performance

### ✅ Deployment Checklist

- [ ] All corner elements positioned correctly
- [ ] Mode switching works across components
- [ ] Responsive layout tested on devices
- [ ] Performance benchmarks met
- [ ] Accessibility audit passed

## 🚨 Critical Rules

1. **Performance First:** No animations compromising 60fps
2. **Corner Anchoring:** Fixed positioning creates focus hierarchy
3. **Shadcn/ui Standards:** Extend, don't override defaults
4. **Accessibility:** Never sacrifice for aesthetics
5. **Satirical Balance:** Professional veneer with subtle comedy

---

_Ultra-minimalist design that commands respect while delivering entertainment._
