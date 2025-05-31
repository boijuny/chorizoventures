/**
 * Alert Component - Semantic feedback with accessibility-first design
 * Implements elite design standards for user communication
 */

import React from 'react';
import { cn } from '@/lib/component-utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert variant based on semantic meaning */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon */
  icon?: React.ReactNode;
  /** Alert title */
  title?: string;
  /** Whether alert can be dismissed */
  dismissible?: boolean;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Children content */
  children: React.ReactNode;
}

const variantStyles = {
  info: 'bg-info-50 border-info-500 text-info-900',
  success: 'bg-success-50 border-success-500 text-success-900',
  warning: 'bg-warning-50 border-warning-500 text-warning-900',
  error: 'bg-error-50 border-error-500 text-error-900',
} as const;

const sizeStyles = {
  sm: 'p-3 text-sm',
  md: 'p-4 text-base',
  lg: 'p-6 text-lg',
} as const;

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      size = 'md',
      icon,
      title,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          // Base styles
          'border-l-4 rounded-md',
          // Variant styles
          variantStyles[variant],
          // Size styles
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
          <div className="flex-1 min-w-0">
            {title && <h4 className="font-semibold mb-1">{title}</h4>}
            <div>{children}</div>
          </div>
          {dismissible && onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 ml-2 p-1 rounded hover:bg-black/10 focus-ring-inset"
              aria-label="Dismiss alert"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
