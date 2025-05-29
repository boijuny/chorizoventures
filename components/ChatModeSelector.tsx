'use client';

import { motion } from 'framer-motion';
import { ChatMode } from '@/types';
import { CHAT_MODES } from '@/lib/constants';
import { getModeColorClass } from '@/utils/helpers';

interface ChatModeSelectorProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  className?: string;
}

export default function ChatModeSelector({
  currentMode,
  onModeChange,
  className = '',
}: ChatModeSelectorProps) {
  const modeColors = {
    normal: 'border-blue-500 text-blue-400 hover:bg-blue-500/10',
    roast: 'border-red-500 text-red-400 hover:bg-red-500/10',
    calculator: 'border-green-500 text-green-400 hover:bg-green-500/10',
  };

  const liquidVariants = {
    initial: { scale: 1, borderRadius: '8px' },
    hover: {
      scale: 1.05,
      borderRadius: '12px',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
    active: {
      scale: 1.02,
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    },
  };

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      {Object.entries(CHAT_MODES).map(([key, config]) => {
        const mode = key as ChatMode;
        const isActive = currentMode === mode;

        return (
          <motion.button
            key={mode}
            onClick={() => onModeChange(mode)}
            className={`
              px-6 py-2 rounded-lg border-2 font-medium transition-all duration-300
              bg-gray-800 text-gray-300 border-gray-600
              ${isActive ? modeColors[mode] : 'hover:border-gray-500'}
              ${isActive ? 'shadow-lg' : ''}
            `}
            variants={liquidVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={isActive ? 'active' : 'initial'}
          >
            <motion.span
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isActive ? 1 : 0.8 }}
              className="flex items-center gap-2"
            >
              {/* Mode indicator icon */}
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  isActive
                    ? mode === 'normal'
                      ? 'bg-blue-500'
                      : mode === 'roast'
                        ? 'bg-red-500'
                        : 'bg-green-500'
                    : 'bg-gray-500'
                }`}
                animate={
                  isActive
                    ? {
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }
                    : { scale: 1, opacity: 1 }
                }
                transition={{
                  duration: 2,
                  repeat: isActive ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              />
              {config.label}
            </motion.span>

            {/* Tooltip on hover */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 pointer-events-none"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {config.description}
            </motion.div>
          </motion.button>
        );
      })}

      {/* Additional "More" button for future modes */}
      <motion.button
        className="px-6 py-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
        variants={liquidVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          // Future implementation for additional modes
          console.log('More modes coming soon...');
        }}
      >
        <span className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-purple-500"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          More
        </span>
      </motion.button>
    </div>
  );
}
