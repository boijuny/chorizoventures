'use client';

import { useState } from 'react';
import { ChatMode } from '@/types';
import RotatingTaglines from '@/components/RotatingTaglines';
import TimezoneClock from '@/components/TimezoneClock';
import FloatingShape from '@/components/FloatingShape';
import ChatModeSelector from '@/components/ChatModeSelector';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('normal');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white overflow-hidden">
      {/* Floating 3D shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape type="cube" size="lg" className="top-20 left-20" />
        <FloatingShape type="sphere" size="md" className="top-40 right-32" />
        <FloatingShape
          type="pyramid"
          size="sm"
          className="bottom-32 left-1/3"
        />
      </div>

      {/* Header Section */}
      <header className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            Guez VC
          </h1>

          {/* Rotating Taglines */}
          <div className="mb-8">
            <RotatingTaglines rotationSpeed={4000} enableGlitch={true} />
          </div>

          {/* Timezone Clock */}
          <div className="mb-12">
            <TimezoneClock />
          </div>
        </div>
      </header>

      {/* Chat Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          {/* Mode Selector */}
          <div className="flex justify-center mb-8">
            <ChatModeSelector
              currentMode={currentMode}
              onModeChange={setCurrentMode}
            />
          </div>

          {/* Chat Interface */}
          <ChatInterface currentMode={currentMode} />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="text-sm">
            © 2024 Guez VC - Where disruption meets delusion
            <span className="mx-2">•</span>
            Powered by AI and audacity
          </p>
        </div>
      </footer>
    </main>
  );
}
