'use client';

import { useState } from 'react';
import { ChatMode } from '@/types';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('normal');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-xl font-bold">Guez VC</div>
          <div className="text-sm text-muted-foreground">
            Disrupting disruption
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-6">
        <ChatInterface
          currentMode={currentMode}
          onModeChange={setCurrentMode}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4">
        <div className="text-center text-xs text-muted-foreground max-w-4xl mx-auto">
          © 2024 Guez VC - Professional parody
        </div>
      </footer>
    </div>
  );
}
