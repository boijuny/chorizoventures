'use client';

import { useState } from 'react';
import { ChatMode } from '@/types';
import ChatInterface from '@/components/ChatInterface';
import { TimezoneCorner } from '@/components/corners';
import FixedTitle from '@/components/FixedTitle';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('roast');
  const [chatKey, setChatKey] = useState(0);

  const resetChat = () => {
    setCurrentMode('roast');
    setChatKey(prev => prev + 1); // This will force ChatInterface to remount completely
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <FixedTitle onReset={resetChat} />

      {/* Main Content */}
      <main className="flex-1 py-8 flex justify-center items-center">
        <ChatInterface
          key={chatKey}
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
