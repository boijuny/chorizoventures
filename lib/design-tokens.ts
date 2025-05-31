/**
 * Design Tokens - Centralized design system values
 * Following elite design standards with modular scales and semantic naming
 */

// Typography Scale (Modular Scale: 1.250 - Major Third)
export const typography = {
  scale: {
    xs: '0.64rem', // 10.24px
    sm: '0.8rem', // 12.8px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.563rem', // 25px
    '2xl': '1.953rem', // 31.25px
    '3xl': '2.441rem', // 39.06px
    '4xl': '3.052rem', // 48.83px
    '5xl': '3.815rem', // 61.04px
    '6xl': '4.768rem', // 76.29px
  },
  lineHeight: {
    tight: '1.1',
    normal: '1.4',
    relaxed: '1.6',
    loose: '1.8',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
} as const;

// Spacing System (8px base unit system)
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '2px', // 0.125rem
  1: '4px', // 0.25rem
  1.5: '6px', // 0.375rem
  2: '8px', // 0.5rem (base unit)
  3: '12px', // 0.75rem
  4: '16px', // 1rem
  5: '20px', // 1.25rem
  6: '24px', // 1.5rem
  7: '28px', // 1.75rem
  8: '32px', // 2rem
  9: '36px', // 2.25rem
  10: '40px', // 2.5rem
  11: '44px', // 2.75rem (touch target minimum)
  12: '48px', // 3rem
  14: '56px', // 3.5rem
  16: '64px', // 4rem
  20: '80px', // 5rem
  24: '96px', // 6rem
  28: '112px', // 7rem
  32: '128px', // 8rem
  36: '144px', // 9rem
  40: '160px', // 10rem
  44: '176px', // 11rem
  48: '192px', // 12rem
  52: '208px', // 13rem
  56: '224px', // 14rem
  60: '240px', // 15rem
  64: '256px', // 16rem
  72: '288px', // 18rem
  80: '320px', // 20rem
  96: '384px', // 24rem
} as const;

// Color System (Semantic naming with accessibility-first approach)
export const colors = {
  // Core brand colors
  primary: {
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

  // Mode-specific colors
  mode: {
    normal: '#3b82f6',
    roast: '#ef4444',
    calculator: '#10b981',
  },

  // Semantic colors
  semantic: {
    success: {
      50: '#f0fdf4',
      500: '#10b981',
      900: '#14532d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      900: '#92400e',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      900: '#7f1d1d',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
  },

  // Neutral colors (optimized for dark mode)
  neutral: {
    0: '#000000', // True black for OLED
    50: '#0a0a0a', // Background
    100: '#171717', // Surface
    200: '#262626', // Border
    300: '#404040', // Input
    400: '#525252', // Muted
    500: '#737373', // Text secondary
    600: '#a3a3a3', // Text primary
    700: '#d4d4d4', // Text emphasis
    800: '#e5e5e5', // Text high contrast
    900: '#f5f5f5', // Text maximum contrast
    1000: '#ffffff', // Pure white
  },
} as const;

// Border Radius (Consistent scale)
export const borderRadius = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

// Shadows (Layered shadow system)
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Z-Index Scale (Logical layering)
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation & Motion (Performance-optimized timing)
export const motion = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  spring: {
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const;

// Breakpoints (Mobile-first responsive design)
export const breakpoints = {
  xs: '20rem', // 320px
  sm: '36rem', // 576px
  md: '48rem', // 768px
  lg: '62rem', // 992px
  xl: '75rem', // 1200px
  '2xl': '87.5rem', // 1400px
} as const;

// Content width constraints (Optimal reading experience)
export const contentWidth = {
  prose: '65ch', // Optimal reading width
  narrow: '45ch', // Narrow content
  wide: '85ch', // Wide content
  full: '100%', // Full width
} as const;

// Touch targets (Accessibility-compliant sizes)
export const touchTarget = {
  minimum: '44px', // WCAG AA minimum
  comfortable: '48px',
  large: '56px',
} as const;

export type DesignTokens = {
  typography: typeof typography;
  spacing: typeof spacing;
  colors: typeof colors;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
  zIndex: typeof zIndex;
  motion: typeof motion;
  breakpoints: typeof breakpoints;
  contentWidth: typeof contentWidth;
  touchTarget: typeof touchTarget;
};
