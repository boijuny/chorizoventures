/**
 * Stack Component - Vertical layout with consistent spacing
 * Implements elite design standards for spacing hierarchy
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spacing between items */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Whether to add dividers between items */
  dividers?: boolean;
  /** Custom gap value */
  gap?: string;
  /** Children content */
  children: React.ReactNode;
}

const spacingStyles = {
  xs: 'gap-2', // 8px
  sm: 'gap-3', // 12px
  md: 'gap-4', // 16px
  lg: 'gap-6', // 24px
  xl: 'gap-8', // 32px
  '2xl': 'gap-12', // 48px
} as const;

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      spacing = 'md',
      align = 'stretch',
      dividers = false,
      gap,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base layout
          'flex flex-col',
          // Spacing
          gap ? '' : spacingStyles[spacing],
          // Alignment
          alignStyles[align],
          // Dividers
          dividers && 'divide-y divide-border',
          className
        )}
        style={{
          gap: gap || undefined,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
