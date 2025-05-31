import React from 'react';
import { cn } from '@/lib/component-utils';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  size,
  className,
  children,
}) => {
  const defaultSize = ['6xl', '4xl', '3xl', '2xl', 'xl', 'lg'][level - 1];
  const finalSize = size || defaultSize;

  const headingClass = cn(
    `text-${finalSize} font-bold leading-tight`,
    className
  );

  switch (level) {
    case 1:
      return <h1 className={headingClass}>{children}</h1>;
    case 2:
      return <h2 className={headingClass}>{children}</h2>;
    case 3:
      return <h3 className={headingClass}>{children}</h3>;
    case 4:
      return <h4 className={headingClass}>{children}</h4>;
    case 5:
      return <h5 className={headingClass}>{children}</h5>;
    case 6:
      return <h6 className={headingClass}>{children}</h6>;
    default:
      return <h1 className={headingClass}>{children}</h1>;
  }
};

Heading.displayName = 'Heading';
