'use client';

import { cornerClasses, ChatMode, getModeClass, cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ModeCornerProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  variant?: 'tabs' | 'buttons';
  className?: string;
}

const MODE_CONFIG = {
  roast: {
    label: 'roast',
    description: 'Brutally honest feedback',
    color: 'text-accent-roast',
  },
  stonk: {
    label: 'stonk',
    description: 'Absurdly optimistic analysis',
    color: 'text-accent-stonk',
  },
} as const;

export default function ModeCorner({
  currentMode,
  onModeChange,
  variant = 'tabs',
  className,
}: ModeCornerProps) {
  const handleModeChange = (value: string) => {
    onModeChange(value as ChatMode);
  };

  // Use custom className if provided, otherwise use corner positioning
  const containerClass = className || cornerClasses.bottomRight;
  const modeKeys = Object.keys(MODE_CONFIG) as ChatMode[];

  return (
    <div
      className={cn(
        containerClass,
        getModeClass(currentMode),
        'flex items-center justify-center'
      )}
    >
      <Tabs
        value={currentMode}
        onValueChange={handleModeChange}
        className="w-auto"
      >
        <TabsList className="grid w-full grid-cols-2 bg-secondary/30 h-8 rounded-lg border border-border/30">
          {modeKeys.map(modeInLoop => {
            const configForMode = MODE_CONFIG[modeInLoop];
            return (
              <TabsTrigger
                key={modeInLoop}
                value={modeInLoop}
                className={cn(
                  'text-xs px-3 py-1 h-6 transition-all duration-200 rounded-md',
                  'data-[state=active]:text-foreground data-[state=active]:bg-secondary',
                  'hover:scale-105 active:scale-95 text-muted-foreground',
                  currentMode === modeInLoop && configForMode.color
                )}
                title={configForMode.description}
              >
                {configForMode.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}
