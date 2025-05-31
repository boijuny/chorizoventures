/**
 * Divider Component - Visual separation with semantic structure
 * Implements elite design standards for content hierarchy
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Visual style */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** Spacing around divider */
  spacing?: 'sm' | 'md' | 'lg';
  /** Optional label */
  label?: string;
}

const orientationStyles = {
  horizontal: 'w-full h-px',
  vertical: 'h-full w-px',
} as const;

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
} as const;

const spacingStyles = {
  horizontal: {
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
  },
  vertical: {
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-6',
  },
} as const;

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      spacing = 'md',
      label,
      className,
      ...props
    },
    ref
  ) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          className={cn(
            'relative',
            spacingStyles[orientation][spacing],
            className
          )}
        >
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-sm text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(
          // Base styles
          'border-0 bg-border',
          // Orientation
          orientationStyles[orientation],
          // Variant
          orientation === 'horizontal' ? 'border-t' : 'border-l',
          variantStyles[variant],
          // Spacing
          spacingStyles[orientation][spacing],
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
