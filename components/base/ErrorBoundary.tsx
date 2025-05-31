/**
 * ErrorBoundary Component - Graceful error handling with user feedback
 * Implements elite design standards for error recovery
 */

import React from 'react';
import { Alert } from './Alert';
import { Button } from './Button';
import { Stack } from './Stack';

export interface ErrorBoundaryProps {
  /** Custom fallback component */
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  /** Error handler callback */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** Children to wrap */
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error!}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className="p-4 max-w-lg mx-auto">
          <Alert
            variant="error"
            title="Something went wrong"
            size="lg"
            icon={
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            <Stack spacing="md">
              <p>
                We're sorry, but something unexpected happened. You can try
                refreshing the page or contact support if the problem persists.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-sm bg-neutral-100 p-3 rounded mt-2">
                  <summary className="cursor-pointer font-medium">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap text-xs overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
              <div className="flex gap-2">
                <Button variant="primary" size="sm" onClick={this.resetError}>
                  Try Again
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
              </div>
            </Stack>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}
