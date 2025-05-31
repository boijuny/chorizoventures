/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          4: 'hsl(var(--primary-4))', // OpenAI hover background
          12: 'hsl(var(--primary-12))', // OpenAI border
          60: 'hsl(var(--primary-60))', // OpenAI text
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Mode-specific colors
        'accent-normal': '#3b82f6', // Professional blue
        'accent-roast': '#ef4444',  // Bold red  
        'accent-calculator': '#16a34a', // Success green
        // Semantic colors with Chorizo Ventures theme
        success: {
          50: '#f0fdf4',
          500: 'hsl(var(--mode-stonks))', // Use saffron/stonks for success
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          500: 'hsl(var(--mode-stonks))', // Use saffron for warnings
          900: '#92400e',
        },
        error: {
          50: '#fef2f2',
          500: 'hsl(var(--mode-roast))', // Use roast red for errors
          900: '#7f1d1d',
        },
        info: {
          50: '#eff6ff',
          500: 'hsl(var(--mode-normal))', // Use paprika/normal for info
          900: '#1e3a8a',
        },
        // Enhanced neutral scale (OLED optimized)
        neutral: {
          0: '#000000',
          50: '#0a0a0a',
          100: '#171717',
          200: '#262626',
          300: '#404040',
          400: '#525252',
          500: '#737373',
          600: '#a3a3a3',
          700: '#d4d4d4',
          800: '#e5e5e5',
          900: '#f5f5f5',
          1000: '#ffffff',
        },
        // Chorizo Ventures mode-specific colors
        'mode-normal': 'hsl(var(--mode-normal))',
        'mode-normal-4': 'hsl(var(--mode-normal-4))',
        'mode-normal-12': 'hsl(var(--mode-normal-12))',
        'mode-normal-60': 'hsl(var(--mode-normal-60))',
        
        'mode-roast': 'hsl(var(--mode-roast))',
        'mode-roast-4': 'hsl(var(--mode-roast-4))',
        'mode-roast-12': 'hsl(var(--mode-roast-12))',
        'mode-roast-60': 'hsl(var(--mode-roast-60))',
        
        'mode-stonks': 'hsl(var(--mode-stonks))',
        'mode-stonks-4': 'hsl(var(--mode-stonks-4))',
        'mode-stonks-12': 'hsl(var(--mode-stonks-12))',
        'mode-stonks-60': 'hsl(var(--mode-stonks-60))',

        // Elite chorizo accent colors
        'accent-paprika': 'hsl(var(--accent-paprika))',
        'accent-saffron': 'hsl(var(--accent-saffron))',
        'accent-cumin': 'hsl(var(--accent-cumin))',
        'accent-black-pepper': 'hsl(var(--accent-black-pepper))',
      },
      // Modular typography scale (Major Third: 1.250)
      fontSize: {
        xs: ['0.64rem', { lineHeight: '1.4' }],
        sm: ['0.8rem', { lineHeight: '1.4' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.25rem', { lineHeight: '1.4' }],
        xl: ['1.563rem', { lineHeight: '1.4' }],
        '2xl': ['1.953rem', { lineHeight: '1.3' }],
        '3xl': ['2.441rem', { lineHeight: '1.2' }],
        '4xl': ['3.052rem', { lineHeight: '1.1' }],
        '5xl': ['3.815rem', { lineHeight: '1.1' }],
        '6xl': ['4.768rem', { lineHeight: '1.1' }],
      },
      // Enhanced spacing system (8px base)
      spacing: {
        px: '1px',
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        9.5: '38px',
        11: '44px', // Touch target minimum
        13: '52px',
        15: '60px',
        17: '68px',
        18: '72px',
        19: '76px',
        21: '84px',
        22: '88px',
        23: '92px',
        25: '100px',
        26: '104px',
        27: '108px',
        29: '116px',
        30: '120px',
        31: '124px',
        33: '132px',
        34: '136px',
        35: '140px',
        37: '148px',
        38: '152px',
        39: '156px',
        41: '164px',
        42: '168px',
        43: '172px',
        45: '180px',
        46: '184px',
        47: '188px',
      },
      // Enhanced border radius scale - OpenAI-style approach
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: '2px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      // Professional shadow system
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      // Logical z-index scale
      zIndex: {
        hide: '-1',
        auto: 'auto',
        base: '0',
        docked: '10',
        dropdown: '1000',
        sticky: '1100',
        banner: '1200',
        overlay: '1300',
        modal: '1400',
        popover: '1500',
        skipLink: '1600',
        toast: '1700',
        tooltip: '1800',
      },
      // Enhanced font family stack
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
      },
      // Performance-optimized animations
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        breathing: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        breathing: 'breathing 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-in',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      // Performance-optimized transitions
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
      // Content width constraints
      maxWidth: {
        prose: '65ch',
        narrow: '45ch',
        wide: '85ch',
      },
      // Touch target sizes
      minHeight: {
        touch: '44px',
        'touch-comfortable': '48px',
        'touch-large': '56px',
      },
      minWidth: {
        touch: '44px',
        'touch-comfortable': '48px',
        'touch-large': '56px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Custom utilities plugin
    function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.touch-target': {
          'min-height': '44px',
          'min-width': '44px',
        },
        '.focus-ring': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background': {},
        },
        '.focus-ring-inset': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset': {},
        },
      });
    },
  ],
};
