'use client';

import { useState } from 'react';
import { ChatMode } from '@/types';
import ChatInterface from '@/components/ChatInterface';
import { TimezoneCorner } from '@/components/corners';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('normal');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-xl font-bold">Chorizo Ventures</div>
          <div className="text-sm text-muted-foreground">
            Disrupting disruption with spice
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <ChatInterface
          currentMode={currentMode}
          onModeChange={setCurrentMode}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 py-4">
        <div className="text-center text-xs text-muted-foreground max-w-6xl mx-auto">
          © 2024 Chorizo Ventures - Professional parody with a spicy twist
        </div>
      </footer>

      {/* Fixed Corner Components */}
      <TimezoneCorner />
    </div>
  );
}
