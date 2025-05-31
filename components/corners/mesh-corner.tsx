'use client';

import { useEffect, useState } from 'react';
import { cornerClasses, cn } from '@/lib/utils';

interface CustomMeshData {
  vertices?: number[][];
  edges?: number[][];
  style?: React.CSSProperties;
}

interface MeshCornerProps {
  meshData?: CustomMeshData;
  interactive?: boolean;
  fallback?: 'geometric' | 'minimal';
  className?: string;
}

const GeometricFallback = ({
  interactive = false,
}: {
  interactive?: boolean;
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!interactive) return;

    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, [interactive]);

  return (
    <div className="relative w-16 h-16">
      {/* Rotating geometric shape */}
      <div
        className="absolute inset-0 border border-muted-foreground/30 transition-transform duration-100"
        style={{
          transform: `rotate(${rotation}deg)`,
          borderRadius: '20%',
          background:
            'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
        }}
      />
      {/* Static inner shape */}
      <div
        className="absolute inset-2 border border-muted-foreground/20"
        style={{
          borderRadius: '30%',
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

const MinimalFallback = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-muted/20 rounded-lg flex items-center justify-center">
    <div className="w-6 h-6 bg-muted-foreground/20 rounded-sm" />
  </div>
);

export default function MeshCorner({
  meshData,
  interactive = false,
  fallback = 'geometric',
  className,
}: MeshCornerProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handler = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Use custom className if provided, otherwise use corner positioning
  const containerClass = className || cornerClasses.topRight;

  // If user has custom mesh data, render it (placeholder for now)
  if (meshData) {
    return (
      <div className={cn(containerClass, 'flex items-center justify-center')}>
        <div
          className="w-16 h-16 border border-muted-foreground/30 rounded-lg bg-secondary/20"
          style={meshData.style}
        >
          {/* Custom mesh rendering would go here */}
          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
            Custom
          </div>
        </div>
      </div>
    );
  }

  // Render fallback
  return (
    <div className={cn(containerClass, 'flex items-center justify-center')}>
      {fallback === 'geometric' ? (
        <GeometricFallback interactive={interactive && !isReducedMotion} />
      ) : (
        <MinimalFallback />
      )}
    </div>
  );
}
