# Guez VC - Satirical Venture Capital Website

A satirical VC website that parodies the pretentious startup ecosystem through AI-powered interactions.

## 🎯 Project Overview

**Vision:** Create a satirical VC website that parodies the pretentious startup ecosystem through an AI-powered chat interface, providing entertainment for developers and startup community members.

**Status:** Phase 1 Complete ✅ - Foundation & Setup

## 🛠 Technology Stack

- **Frontend:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion
- **Code Quality:** ESLint + Prettier
- **Font:** Inter (Google Fonts)

## 🏗 Architecture

```
guezvc/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with design system
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components (Phase 2)
├── lib/                   # Shared libraries
│   └── constants.ts       # App constants and taglines
├── types/                 # TypeScript definitions
│   └── index.ts          # Core type definitions
├── utils/                 # Utility functions
│   └── helpers.ts        # Helper functions
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

The project implements a sophisticated design system based on the PRD specifications:

### Color Palette

- **Backgrounds:** Deep black (`#0a0a0a`) to tertiary (`#2a2a2a`)
- **Text:** Primary white (`#f5f5f5`) to muted gray (`#6b7280`)
- **Accents:** Mode-specific colors (blue, red, green, magenta)

### Typography

- **Primary Font:** Inter (professional, clean)
- **Chaos Font:** Comic Sans MS (for humor elements)
- **Scale:** Responsive from 12px to 64px

### Animations

- **Liquid Effects:** Smooth morphing animations
- **Float Animation:** 6s ease-in-out cycle
- **Glitch Effects:** Random 1% chance color pops

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Conda environment named `guezvc` (as per project requirements)

### Installation

1. **Activate the conda environment:**

   ```bash
   conda activate guezvc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)
