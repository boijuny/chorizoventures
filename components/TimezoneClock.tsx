'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TIMEZONE_DATA } from '@/lib/constants';
import { formatTime } from '@/utils/helpers';

interface TimezoneClockProps {
  className?: string;
}

export default function TimezoneClock({ className = '' }: TimezoneClockProps) {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      TIMEZONE_DATA.forEach(({ city, timezone }) => {
        newTimes[city] = formatTime(timezone);
      });
      setTimes(newTimes);
    };

    // Update immediately
    updateTimes();

    // Update every minute
    const interval = setInterval(updateTimes, 60000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`flex justify-center gap-8 text-gray-400 text-sm ${className}`}
    >
      {TIMEZONE_DATA.map(({ city, timezone }) => (
        <motion.div
          key={city}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            color: '#3b82f6',
            transition: { duration: 0.2 },
          }}
          className="text-center cursor-pointer group"
        >
          <div className="font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
            {city}
          </div>
          <motion.div
            key={times[city]} // Re-animate when time changes
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 group-hover:text-blue-300 transition-colors"
          >
            {times[city] || '...'}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
