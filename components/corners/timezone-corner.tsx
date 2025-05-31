'use client';

import { useEffect, useState } from 'react';
import { cornerClasses } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface TimezoneCornerProps {
  zones?: Array<{ label: string; timezone: string; abbreviation?: string }>;
  format?: '12h' | '24h';
  compact?: boolean;
  className?: string;
}

const DEFAULT_ZONES = [
  { label: 'GARAGE', timezone: 'Europe/Paris', abbreviation: 'CET' },
];

export default function TimezoneCorner({
  zones = DEFAULT_ZONES,
  format = '24h',
  compact = true,
  className,
}: TimezoneCornerProps) {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const formatTime = (date: Date, timezone: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: format === '12h',
      };

      return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const updateTimes = () => {
      const now = new Date();
      const newTimes: Record<string, string> = {};

      zones.forEach(zone => {
        newTimes[zone.label] = formatTime(now, zone.timezone);
      });

      setTimes(newTimes);
    };

    // Update immediately
    updateTimes();

    // Update every minute
    const interval = setInterval(updateTimes, 60000);

    return () => clearInterval(interval);
  }, [zones, format]);

  // Use custom className if provided, otherwise use corner positioning
  const containerClass = className || cornerClasses.bottomLeft;

  return (
    <div className={cn(containerClass, 'flex items-center justify-center')}>
      <div className="space-y-1">
        {zones.map(zone => (
          <div
            key={zone.label}
            className="flex items-center justify-between min-w-[80px]"
          >
            <span className="text-xs text-muted-foreground font-medium">
              {zone.label}
            </span>
            <span className="text-xs text-foreground font-mono ml-2">
              {times[zone.label] || '--:--'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
