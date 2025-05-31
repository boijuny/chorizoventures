# 🚀 Guez VC - AI Chat Interface

A satirical AI chat application with multiple modes, built with Next.js 14 and an OpenAI-inspired minimal design system.

## ✨ Features

- **🎯 Three Chat Modes**: Normal, Roast, and Calculator
- **🎨 OpenAI-Style Design**: Minimal border radius, compact spacing, geometric precision
- **📱 Responsive**: Works seamlessly on desktop and mobile
- **⚡ Fast**: Built with Next.js 14 App Router for optimal performance
- **🎪 Design System**: Comprehensive component showcase at `/design-system`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Animations**: Framer Motion
- **TypeScript**: Strict mode enabled
- **Package Manager**: npm

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   conda activate guezvc
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **View the app:** `http://localhost:3001`

4. **Explore design system:** `http://localhost:3001/design-system`

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Main chat interface
│   └── design-system/     # Component showcase
├── components/
│   ├── ui/                # Shadcn/ui components (Button, Tabs, Card)
│   ├── ChatInterface.tsx  # Main chat component
│   └── ChatMessage.tsx    # Message bubble component
├── docs/                  # Documentation
│   ├── design-system.md   # Design system guide
│   └── technical-specs.md # Technical specifications
└── types/                 # TypeScript definitions
```

## 🎨 Design System

The app uses an **OpenAI-inspired minimal design approach**:

- **Geometric Precision**: 2px border radius (`rounded-sm`) 
- **Compact Spacing**: Tight padding and gaps (4-8px)
- **Professional Aesthetics**: Clean, functional over decorative
- **Accessibility First**: Proper focus states and keyboard navigation

Visit `/design-system` to explore all components and patterns.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🎯 Design Philosophy

This project demonstrates how to achieve **sophisticated satirical design** while maintaining:
- Professional user experience
- Accessibility standards (WCAG AA)
- Performance optimization
- Component consistency
- Mobile responsiveness
