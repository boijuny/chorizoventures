/**
 * Badge Component - Status indicators with semantic color system
 * Implements elite design standards for visual hierarchy
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Badge style */
  badgeStyle?: 'solid' | 'outline' | 'soft';
  /** Optional icon */
  icon?: React.ReactNode;
  /** Children content */
  children: React.ReactNode;
}

const variantStyles = {
  solid: {
    default: 'bg-neutral-200 text-neutral-800',
    primary: 'bg-primary-500 text-primary-50',
    secondary: 'bg-secondary text-secondary-foreground',
    success: 'bg-success-500 text-success-50',
    warning: 'bg-warning-500 text-warning-50',
    error: 'bg-error-500 text-error-50',
    info: 'bg-info-500 text-info-50',
  },
  outline: {
    default: 'border border-neutral-200 text-neutral-700',
    primary: 'border border-primary-500 text-primary-500',
    secondary: 'border border-secondary text-secondary-foreground',
    success: 'border border-success-500 text-success-500',
    warning: 'border border-warning-500 text-warning-500',
    error: 'border border-error-500 text-error-500',
    info: 'border border-info-500 text-info-500',
  },
  soft: {
    default: 'bg-neutral-100 text-neutral-700',
    primary: 'bg-primary-50 text-primary-700',
    secondary: 'bg-secondary/10 text-secondary-foreground',
    success: 'bg-success-50 text-success-700',
    warning: 'bg-warning-50 text-warning-700',
    error: 'bg-error-50 text-error-700',
    info: 'bg-info-50 text-info-700',
  },
} as const;

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      badgeStyle = 'solid',
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center gap-1 rounded-full font-medium',
          // Variant styles
          variantStyles[badgeStyle][variant],
          // Size styles
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
