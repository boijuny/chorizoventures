# 📄 Guez VC - Product Requirements Overview

## 📋 Document Information

- **Version:** 1.4 (Layout Restructured)
- **Created:** 2024-01-XX
- **Owner:** [Your Name]
- **Status:** Phase 4 Complete ✅
- **Last Updated:** 2024-01-XX

> **📁 Note:** This document has been restructured into modular components. See the [documentation index](./README.md) for the complete structure.

## 🎯 Executive Summary

### Product Vision

Create a satirical VC website that parodies the pretentious startup ecosystem through an AI-powered chat interface with two distinct personalities (Roast and Stonks), providing entertainment for developers and startup community members.

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

## 📂 Documentation Structure

This PRD has been split into focused modules for better maintainability:

### 🌐 Global Standards

- **[Global Rules](./global-rules.md)** - Project-wide standards and checklists
- **[Design System](./design-system.md)** - Complete UI/UX guidelines
- **[Technical Specs](./technical-specs.md)** - Architecture and implementation details

### 🎯 Feature Specifications

- **[Homepage](./features/homepage.md)** - Fixed title and welcome message
- **[Chat Interface](./features/chat-interface.md)** - AI-powered conversation system
- **[AI Personalities](./features/ai-personalities.md)** - Roast and Stonks modes

## 🏗 High-Level Architecture

```
Frontend (Next.js 14)
├── Fixed "Chorizo Ventures" title
├── Centered content layout
├── AI chat interface (2 modes)
└── Responsive design system

Backend (API Routes)
├── MistralAI integration
├── Rate limiting
└── Error handling

Infrastructure
├── Vercel deployment
├── Supabase database
└── Environment management
```

## 🚧 Implementation Status

### ✅ Phase 1: Foundation (Complete)

- [x] Next.js project setup
- [x] TypeScript configuration
- [x] Tailwind CSS integration
- [x] ESLint and Prettier
- [x] Basic layout components

### ✅ Phase 2: Core UI (Complete)

- [x] Fixed title component
- [x] Centered content layout
- [x] Chat message components
- [x] Responsive layout
- [x] Loading states

### ✅ Phase 3: AI Integration (Complete)

- [x] MistralAI API integration
- [x] Chat API routes
- [x] AI personality prompts
- [x] Streaming responses
- [x] Rate limiting

### ✅ Phase 4: Polish & Testing (Complete)

- [x] Interactive mode words
- [x] Satirical suggestion buttons
- [x] Performance optimization
- [x] Cross-browser testing
- [x] Documentation updates

## 👥 User Personas & Stories

### Primary Persona: Tech-Savvy Developer

**Background:** Experienced developer familiar with VC culture and startup buzzwords  
**Goals:** Entertainment, sharing with colleagues, stress relief  
**Pain Points:** Tired of pretentious VC speak, needs humor in daily work routine

### Key User Stories

- **US-001:** Chat with AI that parodies VC behavior ✅
- **US-002:** Switch between Roast and Stonks modes ✅
- **US-003:** Get startup ideas roasted with humor ✅
- **US-004:** See interactive welcome message ✅
- **US-005:** Try satirical startup suggestions ✅

## 🎨 Design Philosophy

### Core Principles

- **Sophisticated Minimalism:** Professional layout with satirical content
- **Fixed Branding:** Clear brand presence with fixed title
- **Liquid Animations:** Smooth, flowing micro-interactions
- **Self-Aware Humor:** Professional veneer hiding absurd content

### Visual Identity

- **Colors:** Dark theme with mode-specific accents (Red/Green)
- **Typography:** Inter font for sophistication
- **Animations:** 60fps liquid motion with playful interactions
- **Layout:** Fixed title with vertically centered content

## 🛠 Technology Decisions

### Frontend Stack

```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript (Strict mode)",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "state": "React Hooks + Context"
}
```

### Backend & AI

```json
{
  "api": "Next.js API Routes",
  "ai": "MistralAI",
  "database": "Supabase",
  "deployment": "Vercel"
}
```

## 📊 Success Metrics & KPIs

### Engagement Metrics

- Average session duration: Target > 3 minutes
- Messages per session: Target > 5
- Mode switching rate: Target > 50% users try both modes
- Return visitor rate: Target > 20% within 7 days

### Technical Metrics

- Page load time: Target < 2 seconds
- API response time: Target < 1 second
- Lighthouse score: Target > 90
- Error rate: Target < 1%

### Business Metrics

- Social media mentions and shares
- Developer community engagement
- Portfolio traffic and inquiries
- Brand recognition in tech community

## ⚠️ Risk Mitigation

### Technical Risks

- **MistralAI Rate Limits:** Implemented caching and fallback responses
- **Performance Issues:** Code splitting and optimization strategies
- **Mobile Compatibility:** Progressive enhancement approach

### Business Risks

- **Humor Reception:** User feedback iterations and content guidelines
- **Legal Concerns:** Clear parody disclaimer and fair use principles

## 🔄 Continuous Improvement

### Feedback Loops

- User analytics and behavior tracking
- Community feedback collection
- Performance monitoring
- Regular content updates

### Future Roadmap

- Voice interaction capabilities
- Advanced AI memory features
- Community-generated suggestions
- Multi-language support

---

## 📋 Quick Reference

### 🚀 Getting Started

1. Review [Global Rules](./global-rules.md) for project standards
2. Check [Technical Specs](./technical-specs.md) for implementation details
3. Follow [Design System](./design-system.md) for UI consistency
4. Reference feature docs in `features/` for specific requirements

### 🔧 Development Workflow

1. **Planning:** Review relevant documentation
2. **Development:** Follow global rules and standards
3. **Testing:** Use comprehensive testing strategy
4. **Review:** Ensure compliance with all guidelines
5. **Documentation:** Update relevant documentation files

### 📞 Key Contacts

- **Technical Lead:** [Your Name]
- **Design Review:** [Design Lead]
- **Security Review:** [Security Lead]
- **Final Approval:** [Project Owner]

---

> **🎯 Project Mission:** Create a delightful, satirical web experience that entertains the developer community while showcasing technical excellence and design sophistication.
