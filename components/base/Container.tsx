/**
 * Container Component - Content width constraint with responsive behavior
 * Implements elite design standards for optimal reading experience
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container size variant */
  size?: 'narrow' | 'prose' | 'wide' | 'full';
  /** Whether to center the container */
  centered?: boolean;
  /** Custom padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Children content */
  children: React.ReactNode;
}

const sizeVariants = {
  narrow: 'max-w-narrow', // 45ch
  prose: 'max-w-prose', // 65ch
  wide: 'max-w-wide', // 85ch
  full: 'max-w-full', // 100%
} as const;

const paddingVariants = {
  none: '',
  sm: 'px-4 py-2',
  md: 'px-6 py-4',
  lg: 'px-8 py-6',
  xl: 'px-12 py-8',
} as const;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = 'prose',
      centered = true,
      padding = 'md',
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
          // Base styles
          'w-full',
          // Size constraints
          sizeVariants[size],
          // Centering
          centered && 'mx-auto',
          // Padding
          paddingVariants[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
