/**
 * Grid Component - CSS Grid layout with responsive breakpoint support
 * Implements elite design standards for layout flexibility
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns - supports responsive object or simple number */
  cols?:
    | number
    | 'auto'
    | 'none'
    | {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      };
  /** Gap between grid items */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Children elements */
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 'auto', gap = 'md', className, children, ...props }, ref) => {
    // Handle responsive columns
    const getColsClass = () => {
      if (typeof cols === 'number') {
        return `grid-cols-${cols}`;
      }

      if (typeof cols === 'string') {
        return cols === 'auto' ? 'grid-cols-auto' : '';
      }

      if (typeof cols === 'object') {
        const classes = [];
        if (cols.xs) classes.push(`grid-cols-${cols.xs}`);
        if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
        if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
        if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
        if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
        if (cols['2xl']) classes.push(`2xl:grid-cols-${cols['2xl']}`);
        return classes.join(' ');
      }

      return '';
    };

    const gapClass = {
      xs: 'gap-2',
      sm: 'gap-3',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    }[gap];

    return (
      <div
        ref={ref}
        className={cn('grid', getColsClass(), gapClass, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
