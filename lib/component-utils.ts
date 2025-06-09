/**
 * Component Utilities - Modular system for consistent component creation
 * Implements elite design standards with type safety and accessibility
 */

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from '@/lib/design-tokens';

// Enhanced className utility with type safety
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Variant system for consistent component APIs
export type VariantProps<T> = {
  variant?: keyof T;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
};

// Component size mappings following OpenAI design tokens
export const sizeVariants = {
  sm: 'text-sm px-2.5 h-8 rounded-full', // 32px height, pill-shaped
  md: 'text-sm px-3 h-10 rounded-full', // 40px height (OpenAI standard), pill-shaped
  lg: 'text-base px-4 h-12 rounded-full', // 48px height, pill-shaped
  xl: 'text-base px-6 h-14 rounded-full', // 56px height, pill-shaped
} as const;

// Minimalist OpenAI-style button variants
export const buttonVariants = {
  primary: {
    base: 'bg-foreground text-background hover:bg-foreground/90 transition-all duration-200',
    disabled: 'bg-neutral-300 text-neutral-500 cursor-not-allowed',
    loading: 'bg-foreground text-background cursor-wait',
  },
  secondary: {
    base: 'bg-background text-foreground border border-border/50 hover:border-border hover:bg-accent/30 transition-all duration-200',
    disabled:
      'bg-background text-muted-foreground border border-border/30 cursor-not-allowed',
    loading:
      'bg-background text-foreground border border-border/50 cursor-wait',
  },
  outline: {
    base: 'bg-transparent text-muted-foreground border border-border/30 hover:text-foreground hover:border-border/60 transition-all duration-200',
    disabled:
      'bg-transparent text-muted-foreground/50 border border-border/20 cursor-not-allowed',
    loading:
      'bg-transparent text-muted-foreground border border-border/30 cursor-wait',
  },
  ghost: {
    base: 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200',
    disabled: 'bg-transparent text-muted-foreground/50 cursor-not-allowed',
    loading: 'bg-transparent text-muted-foreground cursor-wait',
  },
  minimal: {
    base: 'bg-transparent text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-all duration-300',
    disabled: 'bg-transparent text-muted-foreground/40 cursor-not-allowed',
    loading: 'bg-transparent text-foreground/70 cursor-wait',
  },
} as const;

// OpenAI-style input variants
export const inputVariants = {
  default:
    'rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring',
  error:
    'rounded-xl border border-error-500 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-error-500',
  success:
    'rounded-xl border border-success-500 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-success-500',
} as const;

// Touch target utilities for accessibility
export const touchTargetVariants = {
  minimum: 'min-h-[44px] min-w-[44px]',
  comfortable: 'min-h-[48px] min-w-[48px]',
  large: 'min-h-[56px] min-w-[56px]',
} as const;

// Focus ring utilities for keyboard navigation
export const focusRing = {
  default:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  inset:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
  none: 'focus-visible:outline-none',
} as const;

// Animation utilities with reduced motion support
export function getMotionProps(
  animation: keyof typeof motion.duration = 'normal',
  easing: keyof typeof motion.easing = 'easeOut'
) {
  return {
    transition: {
      duration: parseFloat(motion.duration[animation]) / 1000,
      ease: motion.easing[easing],
    },
  };
}

// Responsive utility for breakpoint-specific classes
export function responsive(breakpoint: string, classes: string) {
  const breakpointMap = {
    xs: 'xs:',
    sm: 'sm:',
    md: 'md:',
    lg: 'lg:',
    xl: 'xl:',
    '2xl': '2xl:',
  };

  const prefix = breakpointMap[breakpoint as keyof typeof breakpointMap] || '';
  return classes
    .split(' ')
    .map(cls => `${prefix}${cls}`)
    .join(' ');
}

// Mode-specific utilities
export type AppMode = 'normal' | 'roast' | 'stonk';

export function getModeClasses(mode: AppMode) {
  const modeMap = {
    normal: 'mode-normal text-mode-normal-60 border-mode-normal-12',
    roast: 'mode-roast text-mode-roast-60 border-mode-roast-12',
    stonk: 'mode-stonk text-mode-stonk-60 border-mode-stonk-12',
  };

  return modeMap[mode];
}

export function getModeAccent(mode: AppMode) {
  const accentMap = {
    normal: 'hsl(var(--mode-normal))',
    roast: 'hsl(var(--mode-roast))',
    stonk: 'hsl(var(--mode-stonk))',
  };

  return accentMap[mode];
}

// Accessibility utilities
export function getAriaProps(options: {
  label?: string;
  labelledBy?: string;
  describedBy?: string;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
}) {
  const props: Record<string, any> = {};

  if (options.label) props['aria-label'] = options.label;
  if (options.labelledBy) props['aria-labelledby'] = options.labelledBy;
  if (options.describedBy) props['aria-describedby'] = options.describedBy;
  if (options.expanded !== undefined) props['aria-expanded'] = options.expanded;
  if (options.selected !== undefined) props['aria-selected'] = options.selected;
  if (options.disabled) props['aria-disabled'] = true;
  if (options.required) props['aria-required'] = true;
  if (options.invalid) props['aria-invalid'] = true;

  return props;
}

// Loading state utilities
export function getLoadingProps(loading: boolean = false) {
  return {
    'aria-busy': loading,
    'aria-live': loading ? ('polite' as const) : undefined,
  };
}

// Performance utilities
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Viewport utilities for responsive behavior
export function useViewport() {
  const [viewport, setViewport] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = throttle(() => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
}

// Reduced motion detection
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// OpenAI-style button utility function
export function createOpenAIButton(options: {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}) {
  const {
    variant = 'secondary',
    size = 'md',
    disabled = false,
    loading = false,
  } = options;

  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const sizeClasses = {
    sm: 'h-8 px-2.5 text-sm gap-1',
    md: 'h-10 px-3 text-sm gap-1.5', // OpenAI standard
    lg: 'h-12 px-4 text-base gap-2',
  }[size];

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    secondary:
      'bg-transparent text-primary-60 border border-primary-12 hover:bg-primary-4',
    outline:
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    minimal: 'hover:bg-accent hover:text-accent-foreground',
  }[variant];

  const stateClasses = cn({
    'cursor-not-allowed opacity-50': disabled,
    'cursor-wait': loading,
  });

  return cn(baseClasses, sizeClasses, variantClasses, stateClasses);
}

// Utility to generate OpenAI-style component classes
export function openAIClasses(
  component: 'button' | 'input' | 'message',
  variant?: string
) {
  const componentMap = {
    button:
      'h-10 px-3 rounded-full text-sm border border-primary-12 bg-transparent text-primary-60 hover:bg-primary-4 transition-colors',
    input:
      'rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring',
    message: 'rounded-xl p-4 border text-sm',
  };

  return componentMap[component];
}
