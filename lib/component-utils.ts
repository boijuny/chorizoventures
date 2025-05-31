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

// Component size mappings following design tokens
export const sizeVariants = {
  sm: 'text-xs px-2 py-0.5 h-6',
  md: 'text-sm px-2.5 py-1 h-7',
  lg: 'text-sm px-3 py-1.5 h-8',
  xl: 'text-base px-4 py-2 h-9',
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
export type AppMode = 'normal' | 'roast' | 'calculator';

export function getModeClasses(mode: AppMode) {
  const modeMap = {
    normal: 'mode-normal text-blue-500 border-blue-500/20',
    roast: 'mode-roast text-red-500 border-red-500/20',
    calculator: 'mode-calculator text-green-500 border-green-500/20',
  };

  return modeMap[mode];
}

export function getModeAccent(mode: AppMode) {
  const accentMap = {
    normal: '#3b82f6',
    roast: '#ef4444',
    calculator: '#10b981',
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
