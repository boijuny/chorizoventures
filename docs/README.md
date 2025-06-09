# 🚀 Guez VC - AI Chat Interface

A satirical AI chat application with two distinct modes (Roast and Stonks), built with Next.js 14 and a sophisticated-satirical design system.

## ✨ Features

- **🎯 Two Chat Modes**: Roast mode for brutal honesty, Stonks mode for absurd optimism
- **🎨 Fixed Title Layout**: "Chorizo Ventures" fixed on the left, content centered
- **💬 Interactive Welcome**: "Built to <mode> your idea" with animated mode words
- **🎯 Satirical Suggestions**: Curated list of absurd startup ideas
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
│   ├── layout/            # Layout components (FixedTitle, CenteredContent)
│   ├── chat/             # Chat components
│   │   ├── ChatInterface.tsx  # Main chat component
│   │   ├── ChatMessage.tsx    # Message bubble component
│   │   ├── ModeSelector.tsx   # Roast/Stonks mode selector
│   │   ├── WelcomeMessage.tsx # Interactive welcome message
│   │   └── SuggestionPills.tsx # Satirical suggestion buttons
├── docs/                  # Documentation
│   ├── design-system.md   # Design system guide
│   └── technical-specs.md # Technical specifications
└── types/                 # TypeScript definitions
```

## 🎨 Design System

The app uses a **sophisticated-satirical design approach**:

- **Fixed Branding**: Clear brand presence with fixed title
- **Centered Content**: Vertically centered core components
- **Mode-Specific Colors**: Red for Roast, Green for Stonks
- **Interactive Elements**: Playful animations on mode words and suggestions
- **Professional Aesthetics**: Clean, functional with a touch of satire
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

- Professional user experience with playful interactions
- Clear brand presence and visual hierarchy
- Mode-specific color schemes and animations
- Accessibility standards (WCAG AA)
- Performance optimization
- Component consistency
- Mobile responsiveness
