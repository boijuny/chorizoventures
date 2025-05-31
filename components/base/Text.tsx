/**
 * Text Component - Typography with modular scale and semantic structure
 * Implements elite design standards for readability and accessibility
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
  /** Semantic element */
  as?: 'p' | 'span' | 'div' | 'label' | 'caption' | 'small';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  /** Text color variant */
  color?:
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'info';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Line height variant */
  leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /** Letter spacing */
  tracking?: 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  /** Text decoration */
  decoration?: 'none' | 'underline' | 'line-through';
  /** Whether text should balance for better readability */
  balance?: boolean;
  /** Children content */
  children: React.ReactNode;
}

const variantStyles = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
} as const;

const weightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
} as const;

const colorStyles = {
  primary: 'text-foreground',
  secondary: 'text-muted-foreground',
  muted: 'text-muted-foreground',
  destructive: 'text-destructive',
  success: 'text-success-500',
  warning: 'text-warning-500',
  info: 'text-info-500',
} as const;

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

const leadingStyles = {
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
} as const;

const trackingStyles = {
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const;

const decorationStyles = {
  none: 'no-underline',
  underline: 'underline',
  'line-through': 'line-through',
} as const;

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'base',
      as = 'p',
      weight = 'normal',
      color = 'primary',
      align = 'left',
      leading = 'normal',
      tracking = 'normal',
      decoration = 'none',
      balance = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref as any}
        className={cn(
          // Base typography styles
          variantStyles[variant],
          weightStyles[weight],
          colorStyles[color],
          alignStyles[align],
          leadingStyles[leading],
          trackingStyles[tracking],
          decorationStyles[decoration],
          // Text balance for better readability
          balance && 'text-balance',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
