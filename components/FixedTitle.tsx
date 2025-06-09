'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VC_TAGLINES, ANIMATION_INTERVALS } from '@/lib/constants';

const FixedTitle = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTaglineIndex(prev => (prev + 1) % VC_TAGLINES.length);
      }, ANIMATION_INTERVALS.TAGLINE_ROTATION);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <>
      {/* Left side title */}
      <div className="fixed top-6 left-6 z-50">
        <h1 className="text-xl font-bold text-white">Chorizo Ventures</h1>
      </div>

      {/* Right side tagline */}
      <div
        className="fixed top-6 right-6 z-50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="h-[22px] relative w-[200px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTaglineIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                duration: ANIMATION_INTERVALS.TAGLINE_TRANSITION / 1000,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm text-muted-foreground/80 absolute whitespace-nowrap font-medium text-right w-full"
            >
              {VC_TAGLINES[currentTaglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default FixedTitle;
