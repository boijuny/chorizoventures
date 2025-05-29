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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - TypeScript type checking

## 📋 Phase 1 Completion Status

### ✅ Completed Tasks

**Foundation:**
- [x] Next.js 14 project setup with TypeScript
- [x] Tailwind CSS configuration with design system
- [x] Framer Motion integration
- [x] ESLint + Prettier setup with rules
- [x] Git hooks and code quality enforcement

**Basic Components:**
- [x] Root layout with metadata and SEO
- [x] Homepage structure with hero section
- [x] Dark theme implementation
- [x] Typography and spacing system
- [x] Basic responsive layout

**Development Environment:**
- [x] TypeScript strict mode configuration
- [x] Custom utility functions
- [x] Constants and type definitions
- [x] Build and development scripts
- [x] Error handling and validation

**Design System:**
- [x] Color palette implementation
- [x] Custom CSS classes for liquid animations
- [x] Responsive breakpoints
- [x] Animation keyframes and utilities
- [x] Accessibility considerations

### 📊 Performance Targets (Phase 1)

- ✅ Project builds without errors
- ✅ TypeScript compilation passes
- ✅ Linting rules enforced
- ✅ Basic responsive design works
- ✅ Dark theme implemented correctly

## 🔜 Next Steps (Phase 2)

1. **Rotating Taglines Component**
   - Implement Framer Motion animations
   - Add 14+ VC parody taglines
   - Smooth transitions every 4 seconds

2. **Timezone Clocks**
   - Real-time updates for SF/NYC/Paris
   - Formatted time display
   - Mobile responsive layout

3. **Chat Interface Foundation**
   - Message components with mode styling
   - Input field with liquid animations
   - Mode selector with color themes

4. **3D Floating Elements**
   - CSS-based geometric shapes
   - Subtle floating animations
   - Mouse interaction effects

## 🎯 Success Metrics

### Phase 1 Metrics ✅
- Project setup complete
- Build system functional
- Code quality tools working
- Basic UI structure in place

### Future Metrics (Phase 2+)
- Page load time < 2 seconds
- Lighthouse score > 90
- Mobile-responsive design
- Smooth 60fps animations

## 🔧 Configuration

### Environment Variables (Future Phases)
```bash
# AI Integration (Phase 3)
MISTRAL_API_KEY=your_key_here

# Database (Phase 3)
SUPABASE_URL=your_url_here
SUPABASE_ANON_KEY=your_key_here

# Analytics (Phase 4)
NEXT_PUBLIC_GA_ID=your_ga_id_here
```

### Tailwind Configuration
Custom design system implemented with:
- Extended color palette
- Custom spacing scale
- Animation utilities
- Responsive containers
- Liquid effect classes

## 🤝 Contributing

1. Follow the established code style (enforced by Prettier)
2. Ensure TypeScript compilation passes
3. Maintain the satirical tone in content
4. Test responsive design on multiple devices
5. Follow the PRD specifications

## 📄 License

ISC License - This is a satirical project for entertainment purposes.

---

**Phase 1 Status:** ✅ **COMPLETE**  
**Next Phase:** Phase 2 - Core UI Components  
**Last Updated:** 2024-01-XX 