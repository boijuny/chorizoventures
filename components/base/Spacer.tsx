/**
 * Spacer Component - Consistent spacing utility
 * Implements elite design standards for layout spacing
 */

import React from 'react';

export interface SpacerProps {
  /** Spacing size using design tokens */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Direction of spacing */
  direction?: 'horizontal' | 'vertical' | 'both';
  /** Custom spacing value */
  value?: string;
}

const spacingMap = {
  xs: '0.5rem', // 8px
  sm: '0.75rem', // 12px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
} as const;

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  direction = 'vertical',
  value,
}) => {
  const spacing = value || spacingMap[size];

  const style: React.CSSProperties = {
    display: 'block',
    flexShrink: 0,
    width:
      direction === 'horizontal' || direction === 'both' ? spacing : undefined,
    height:
      direction === 'vertical' || direction === 'both' ? spacing : undefined,
  };

  return <div style={style} aria-hidden="true" />;
};
