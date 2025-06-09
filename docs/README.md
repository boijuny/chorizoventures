# 🚀 Guez VC - AI Chat Interface

A satirical AI chat application with two distinct modes (Roast and Stonks), built with Next.js 14 and a sophisticated-satirical design system.

## ✨ Features

- **🎯 Two Chat Modes**: Roast mode for brutal honesty, Stonks mode for absurd optimism
- **🎨 Fixed Title Layout**: "Chorizo Ventures" fixed on the left, content centered
- **💬 Interactive Welcome**: "Built to <mode> your idea" with integrated mode selector
- **🎯 Satirical Suggestions**: Curated list of absurd startup ideas (built into chat interface)
- **🌍 Timezone Corner**: Live timezone display in corner
- **🤖 AI Chat API**: Backend chat endpoint for mode-specific responses
- **📱 Responsive**: Works seamlessly on desktop and mobile
- **⚡ Fast**: Built with Next.js 14 App Router for optimal performance
- **🎪 Design System**: Comprehensive component showcase at `/design-system`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Animations**: Framer Motion
- **TypeScript**: Strict mode enabled
- **Package Manager**: npm
- **AI Integration**: OpenAI-compatible chat API
- **Markdown**: React Markdown with GFM support

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

3. **View the app:** `http://localhost:3000`

4. **Explore design system:** `http://localhost:3000/design-system`

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Main chat interface
│   ├── layout.tsx         # Root layout with global styles
│   ├── globals.css        # Global CSS with design tokens
│   ├── design-system/     # Component showcase
│   └── api/
│       └── chat/
│           └── route.ts   # Chat API endpoint
├── components/
│   ├── ui/                # Shadcn/ui components (Button, Tabs, Card, etc.)
│   ├── base/             # Base design system components
│   ├── layout/           # Layout components and utilities
│   ├── corners/          # Corner UI components (timezone display)
│   ├── ChatInterface.tsx # Main chat component with integrated mode selector
│   ├── ChatMessage.tsx   # Message bubble component
│   └── FixedTitle.tsx    # Fixed title component
├── lib/                  # Utility functions and constants
├── types/               # TypeScript definitions
├── utils/               # Helper utilities
└── docs/                # Documentation
    ├── design-system.md   # Design system guide
    ├── technical-specs.md # Technical specifications
    ├── global-rules.md    # Development standards
    └── features/         # Feature-specific documentation
        ├── chat-interface.md     # Chat UI components
        ├── timezone-clocks.md    # Timezone display features
        ├── homepage.md           # Homepage layout
        ├── api-integration.md    # Chat API documentation
        └── corner-components.md  # Corner UI elements
```

## 🎨 Design System

The app uses a **sophisticated-satirical design approach**:

- **Fixed Branding**: Clear brand presence with fixed title
- **Centered Content**: Vertically centered core components
- **Mode-Specific Colors**: Red for Roast, Green for Stonks
- **Interactive Elements**: Playful animations on mode words and suggestions
- **Corner Components**: Timezone display
- **Professional Aesthetics**: Clean, functional with a touch of satire
- **Accessibility First**: Proper focus states and keyboard navigation

Visit `/design-system` to explore all components and patterns.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🤖 API Endpoints

- **POST** `/api/chat` - Chat completion endpoint
  - Supports both Roast and Stonks modes
  - Returns streaming responses
  - Handles mode-specific personality traits

## 🎯 Design Philosophy

This project demonstrates how to achieve **sophisticated satirical design** while maintaining:

- Professional user experience with playful interactions
- Clear brand presence and visual hierarchy
- Mode-specific color schemes and animations
- Accessibility standards (WCAG AA)
- Performance optimization
- Component consistency
- Mobile responsiveness
- Real-time features (timezone display)
