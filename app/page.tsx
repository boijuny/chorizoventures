'use client';

import { useState } from 'react';
import RotatingTaglines from '@/components/RotatingTaglines';
import TimezoneClock from '@/components/TimezoneClock';
import FloatingShape from '@/components/FloatingShape';
import ChatModeSelector from '@/components/ChatModeSelector';
import { ChatMode } from '@/types';

export default function HomePage() {
  const [currentMode, setCurrentMode] = useState<ChatMode>('normal');

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">GUEZ VC</h1>

            {/* Floating 3D Shape - Now Interactive! */}
            <div className="flex justify-center space-x-4">
              <FloatingShape
                type="cube"
                size="medium"
                rotationSpeed={25}
                glitchChance={5}
              />
              <FloatingShape
                type="sphere"
                size="small"
                rotationSpeed={15}
                glitchChance={3}
              />
              <FloatingShape
                type="pyramid"
                size="small"
                rotationSpeed={30}
                glitchChance={2}
              />
            </div>
          </div>

          {/* Rotating Taglines - Now Animated! */}
          <div className="space-y-6 min-h-[120px] flex items-center justify-center">
            <RotatingTaglines className="w-full" />
          </div>

          {/* Chat Input Placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div className="text-lg text-white">
                What can we disrupt for you?
              </div>

              {/* Input field placeholder */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your startup idea..."
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 transition-colors"
                  disabled
                />
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50 transition-all duration-300 hover:scale-105"
                  disabled
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Mode Selector */}
          <ChatModeSelector
            currentMode={currentMode}
            onModeChange={setCurrentMode}
            className="relative"
          />
        </div>
      </section>

      {/* Real-time Timezone Clocks */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <TimezoneClock />
      </section>

      {/* Background floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          type="cube"
          size="small"
          position={{ x: -200, y: 100, z: 0 }}
          rotationSpeed={40}
          className="absolute top-20 left-10 opacity-30"
        />
        <FloatingShape
          type="sphere"
          size="small"
          position={{ x: 200, y: -50, z: 0 }}
          rotationSpeed={35}
          className="absolute top-1/3 right-20 opacity-20"
        />
        <FloatingShape
          type="pyramid"
          size="medium"
          position={{ x: -100, y: 200, z: 0 }}
          rotationSpeed={45}
          className="absolute bottom-32 left-1/4 opacity-25"
        />
      </div>
    </main>
  );
}
