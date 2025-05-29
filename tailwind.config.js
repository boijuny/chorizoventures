/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background colors from PRD design system
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'bg-tertiary': '#2a2a2a',
        
        // Text colors
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        'text-muted': '#6b7280',
        
        // Accent colors for different modes
        'accent-primary': '#3b82f6',
        'accent-roast': '#ef4444',
        'accent-calculator': '#10b981',
        'accent-neon': '#ff00ff',
        'accent-warning': '#f59e0b',
      },
      backgroundImage: {
        // Gradients from PRD
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-chaos': 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)',
        'gradient-subtle': 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
      },
      spacing: {
        // Spacing scale from PRD
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
        chaos: ['Comic Sans MS', 'cursive'],
      },
      fontSize: {
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        'base': '1rem',    // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',   // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '4rem',     // 64px
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'liquid-morph': 'liquid-morph 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'liquid-morph': {
          '0%': { borderRadius: '8px' },
          '100%': { borderRadius: '16px' },
        },
        glitch: {
          '0%': { filter: 'none' },
          '100%': { filter: 'hue-rotate(180deg) saturate(200%)' },
        },
      },
    },
  },
  plugins: [],
} 