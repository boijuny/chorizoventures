'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VC_TAGLINES, ANIMATION_INTERVALS } from '@/lib/constants';
import { TaglineProps } from '@/types';

export default function RotatingTaglines({
  taglines = VC_TAGLINES,
  interval = ANIMATION_INTERVALS.TAGLINE_ROTATION,
  className = '',
}: TaglineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % taglines.length);
    }, interval);

    return () => clearInterval(timer);
  }, [taglines.length, interval]);

  // Animation variants for smooth transitions
  const variants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
  };

  const transition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1], // Custom easing for liquid feel
  };

  return (
    <div
      className={`relative min-h-[3rem] flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsVisible(false)}
      onMouseLeave={() => setIsVisible(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={transition}
          className="text-2xl text-gray-300 text-center max-w-4xl px-4"
        >
          "{taglines[currentIndex]}"
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator dots */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {taglines.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? 'bg-blue-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
