'use client';

import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '@/types';
import { shouldGlitch } from '@/utils/helpers';
import { useState } from 'react';

interface ChatMessageProps {
  message: ChatMessageType;
  animate?: 'slide' | 'fade' | 'liquid';
  enableGlitch?: boolean;
}

export default function ChatMessage({
  message,
  animate = 'slide',
  enableGlitch = false,
}: ChatMessageProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const isUser = message.role === 'user';
  const isAssistant = message.role === 'assistant';

  // Mode-specific colors
  const getModeColors = () => {
    switch (message.mode) {
      case 'roast':
        return {
          bg: 'bg-red-900/20 border-red-500/30',
          text: 'text-red-100',
          accent: 'text-red-400',
        };
      case 'calculator':
        return {
          bg: 'bg-green-900/20 border-green-500/30',
          text: 'text-green-100',
          accent: 'text-green-400',
        };
      default:
        return {
          bg: 'bg-blue-900/20 border-blue-500/30',
          text: 'text-blue-100',
          accent: 'text-blue-400',
        };
    }
  };

  const colors = getModeColors();

  // Animation variants
  const variants = {
    slide: {
      initial: { opacity: 0, x: isUser ? 50 : -50, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, scale: 0.8 },
    },
    fade: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    liquid: {
      initial: { opacity: 0, scale: 0.3, borderRadius: '50%' },
      animate: { opacity: 1, scale: 1, borderRadius: '12px' },
      exit: { opacity: 0, scale: 0.3, borderRadius: '50%' },
    },
  };

  const handleClick = () => {
    if (enableGlitch && shouldGlitch()) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }
  };

  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      variants={variants[animate]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div
        className={`max-w-[80%] ${isUser ? 'ml-12' : 'mr-12'}`}
        onClick={handleClick}
      >
        {/* Message bubble */}
        <motion.div
          className={`
            relative px-4 py-3 rounded-lg border backdrop-blur-sm
            ${isUser ? 'bg-gray-800 border-gray-600 text-white' : colors.bg}
            ${isUser ? 'text-white' : colors.text}
            ${isGlitching ? 'animate-pulse' : ''}
          `}
          style={{
            filter: isGlitching ? 'hue-rotate(180deg) saturate(200%)' : 'none',
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {/* Mode indicator for assistant messages */}
          {isAssistant && (
            <div className="flex items-center gap-2 mb-2 text-xs opacity-75">
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  message.mode === 'roast'
                    ? 'bg-red-500'
                    : message.mode === 'calculator'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className={colors.accent}>
                {message.mode.charAt(0).toUpperCase() + message.mode.slice(1)}{' '}
                Mode
              </span>
            </div>
          )}

          {/* Message content */}
          <div className="text-sm leading-relaxed">{message.content}</div>

          {/* Timestamp */}
          <div className="text-xs opacity-50 mt-2">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>

          {/* Speech bubble tail */}
          <div
            className={`
              absolute top-3 w-3 h-3 transform rotate-45
              ${isUser ? 'bg-gray-800 border-r border-b border-gray-600 -right-1.5' : `${colors.bg.split(' ')[0]} border-r border-b border-opacity-30 -left-1.5`}
            `}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
