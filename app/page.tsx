'use client';

import { useState } from 'react';
import { ChatMode } from '@/types';
import { TimezoneCorner, ModeCorner, MeshCorner } from '@/components/corners';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('normal');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-border/20">
        <div className="flex items-center space-x-8">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold text-foreground tracking-tight">
              Guez VC
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                Disrupting disruption
              </span>
            </nav>
          </div>
        </div>

        {/* Header Right - Mesh/Visual Element */}
        <div className="flex items-center space-x-4">
          <MeshCorner
            interactive={true}
            fallback="geometric"
            className="relative top-0 right-0"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-3xl">
          <ChatInterface
            currentMode={currentMode}
            onModeChange={setCurrentMode}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-6 border-t border-border/20">
        <div className="flex items-center space-x-6">
          <TimezoneCorner format="24h" className="relative bottom-0 left-0" />
        </div>

        <div className="flex items-center space-x-4">
          {/* Footer right side - could add other elements here */}
        </div>
      </footer>
    </div>
  );
}
