'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingShapeProps } from '@/types';
import { shouldGlitch } from '@/utils/helpers';

export default function FloatingShape({
  type = 'cube',
  size = 'medium',
  position = { x: 0, y: 0, z: 0 },
  rotationSpeed = 20,
  glitchChance = 1,
  className = '',
}: Partial<FloatingShapeProps> & { className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20',
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 10;
    const y = (e.clientY - centerY) / 10;
    setMousePosition({ x, y });
  };

  const handleClick = () => {
    if (Math.random() * 100 < glitchChance) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }
  };

  const shapeVariants = {
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    rotating: {
      rotate: 360,
      transition: {
        duration: rotationSpeed,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    glitch: {
      scale: [1, 1.2, 0.8, 1.1, 1],
      rotate: [0, 5, -5, 2, 0],
      filter: [
        'hue-rotate(0deg)',
        'hue-rotate(180deg)',
        'hue-rotate(90deg)',
        'hue-rotate(270deg)',
        'hue-rotate(0deg)',
      ],
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  const getShapeComponent = () => {
    const baseClasses = `${sizeClasses[size]} cursor-pointer transition-all duration-300`;

    switch (type) {
      case 'sphere':
        return (
          <div
            className={`${baseClasses} rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-blue-500/20 shadow-lg shadow-blue-500/10`}
            style={{
              background: isGlitching
                ? 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)'
                : undefined,
            }}
          />
        );
      case 'pyramid':
        return (
          <div
            className={`${baseClasses} relative`}
            style={{
              transform: 'perspective(100px) rotateX(45deg)',
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-green-500/30 to-teal-500/30 backdrop-blur-sm border border-green-500/20 shadow-lg shadow-green-500/10"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: isGlitching
                  ? 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)'
                  : undefined,
              }}
            />
          </div>
        );
      case 'cube':
      default:
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/20 shadow-lg shadow-blue-500/10 rounded-lg`}
            style={{
              background: isGlitching
                ? 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)'
                : undefined,
              transform: `perspective(100px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }}
          >
            {/* Inner glow effect */}
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-lg" />
          </div>
        );
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{
        x: position.x,
        y: position.y,
        z: position.z,
      }}
      variants={shapeVariants}
      animate={['floating', 'rotating', ...(isGlitching ? ['glitch'] : [])]}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      onClick={handleClick}
    >
      {getShapeComponent()}
    </motion.div>
  );
}
