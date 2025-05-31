import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Corner positioning utilities
export const cornerClasses = {
  topLeft: 'fixed top-6 left-6 z-50',
  topRight: 'fixed top-6 right-6 z-50',
  bottomLeft: 'fixed bottom-6 left-6 z-50',
  bottomRight: 'fixed bottom-6 right-6 z-50',
} as const;

// Mode-specific utilities
export type ChatMode = 'normal' | 'roast' | 'calculator';

export function getModeAccent(mode: ChatMode): string {
  const accents = {
    normal: 'accent-normal',
    roast: 'accent-roast',
    calculator: 'accent-calculator',
  };
  return accents[mode];
}

export function getModeClass(mode: ChatMode): string {
  return `mode-${mode}`;
}

// Responsive utility for reduced motion
export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
