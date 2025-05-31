/**
 * Button Component - Enhanced interactive element with elite design standards
 * Implements accessibility, performance, and consistent design tokens
 */

import React from 'react';
import {
  cn,
  focusRing,
  touchTargetVariants,
  getAriaProps,
  getLoadingProps,
  type AppMode,
} from '@/lib/component-utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** App mode for context-aware styling */
  mode?: AppMode;
  /** Loading state */
  loading?: boolean;
  /** Icon before text */
  leftIcon?: React.ReactNode;
  /** Icon after text */
  rightIcon?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** Touch-optimized size */
  touchTarget?: keyof typeof touchTargetVariants;
  /** Children content */
  children?: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
} as const;

const sizeStyles = {
  sm: 'h-6 px-2 text-xs',
  md: 'h-7 px-2.5 text-sm',
  lg: 'h-8 px-3 text-sm',
  xl: 'h-9 px-4 text-base',
} as const;

const modeStyles = {
  normal: 'border-blue-500/20 text-blue-500',
  roast: 'border-red-500/20 text-red-500',
  calculator: 'border-green-500/20 text-green-500',
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      mode,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      touchTarget,
      disabled,
      className,
      children,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - minimal border radius like OpenAI
          'inline-flex items-center justify-center gap-1 rounded-sm font-medium transition-colors',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variant styles
          variantStyles[variant],

          // Size styles
          sizeStyles[size],

          // Mode-specific styles
          mode && modeStyles[mode],

          // Touch target optimization
          touchTarget && touchTargetVariants[touchTarget],

          // Full width
          fullWidth && 'w-full',

          // Focus ring
          focusRing.default,

          className
        )}
        disabled={isDisabled}
        {...getAriaProps({
          label: ariaLabel,
          disabled: isDisabled,
        })}
        {...getLoadingProps(loading)}
        {...props}
      >
        {loading && (
          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        )}
        {!loading && leftIcon && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
