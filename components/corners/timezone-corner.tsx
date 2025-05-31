'use client';

import { useEffect, useState } from 'react';
import { cornerClasses } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface TimezoneCornerProps {
  zones?: Array<{ label: string; timezone: string; abbreviation?: string }>;
  format?: '12h' | '24h';
  className?: string;
}

const DEFAULT_ZONES = [
  { label: 'OFFICE', timezone: 'Europe/Paris', abbreviation: 'CET' },
  { label: 'GARAGE', timezone: 'Europe/Paris', abbreviation: 'CET' },
];

export default function TimezoneCorner({
  zones = DEFAULT_ZONES,
  format = '12h',
  className,
}: TimezoneCornerProps) {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const formatTime = (date: Date, timezone: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: 'numeric',
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

  // Always use bottom right corner positioning
  const containerClass = className || cornerClasses.bottomRight;

  return (
    <div className={cn(containerClass, 'text-right')}>
      <div className="space-y-1">
        {zones.map(zone => (
          <div
            key={zone.label}
            className="text-sm text-muted-foreground font-mono"
          >
            {zone.label} {times[zone.label] || '--:--'}
          </div>
        ))}
      </div>
    </div>
  );
}
