'use client';

import { motion } from 'framer-motion';
import { ChatMode } from '@/types';

interface TypingIndicatorProps {
  mode: ChatMode;
  className?: string;
}

export default function TypingIndicator({
  mode,
  className = '',
}: TypingIndicatorProps) {
  // Mode-specific colors
  const getModeColors = () => {
    switch (mode) {
      case 'roast':
        return {
          bg: 'bg-red-900/20 border-red-500/30',
          dots: 'bg-red-500',
          accent: 'text-red-400',
        };
      case 'calculator':
        return {
          bg: 'bg-green-900/20 border-green-500/30',
          dots: 'bg-green-500',
          accent: 'text-green-400',
        };
      default:
        return {
          bg: 'bg-blue-900/20 border-blue-500/30',
          dots: 'bg-blue-500',
          accent: 'text-blue-400',
        };
    }
  };

  const colors = getModeColors();

  // Sarcastically appropriate typing messages per mode
  const getTypingMessage = () => {
    switch (mode) {
      case 'roast':
        return 'Preparing brutal honesty...';
      case 'calculator':
        return 'Crunching the numbers...';
      default:
        return 'Thinking disruptively...';
    }
  };

  const dotVariants = {
    initial: { y: 0, opacity: 0.7 },
    animate: {
      y: [-4, 4, -4],
      opacity: [0.7, 1, 0.7],
    },
  };

  return (
    <motion.div
      className={`flex justify-start mb-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[80%] mr-12">
        <motion.div
          className={`
            relative px-4 py-3 rounded-lg border backdrop-blur-sm
            ${colors.bg}
          `}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Mode indicator */}
          <div className="flex items-center gap-2 mb-2 text-xs opacity-75">
            <motion.div
              className={`w-2 h-2 rounded-full ${colors.dots}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className={colors.accent}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
            </span>
          </div>

          {/* Typing content */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">{getTypingMessage()}</span>

            {/* Animated dots */}
            <div className="flex space-x-1">
              {[0, 1, 2].map(index => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${colors.dots}`}
                  variants={dotVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Speech bubble tail */}
          <div
            className={`
              absolute top-3 w-3 h-3 transform rotate-45 -left-1.5
              ${colors.bg.split(' ')[0]} border-r border-b border-opacity-30
            `}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
