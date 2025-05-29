import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Guez VC - where we disrupt disruption since never.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">GUEZ VC</h1>

            {/* Floating 3D Shape Placeholder */}
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg mx-auto animate-pulse">
              {/* 3D shape will be implemented in Phase 2 */}
            </div>
          </div>

          {/* Rotating Tagline Placeholder */}
          <div className="space-y-6">
            <div className="text-2xl text-gray-300">
              {/* Rotating taglines component will be implemented in Phase 2 */}
              "Disrupting disruption since never"
            </div>
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

          {/* Mode Selector Placeholder */}
          <div className="flex justify-center gap-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg border border-blue-500 transition-all duration-300 hover:scale-105">
              Normal
            </button>
            <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg border border-gray-600 hover:border-red-500 transition-all duration-300 hover:scale-105">
              Roast
            </button>
            <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-300 hover:scale-105">
              Calculator
            </button>
            <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              More
            </button>
          </div>
        </div>
      </section>

      {/* Timezone Clocks Placeholder */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex justify-center gap-8 text-gray-400 text-sm">
          <div className="text-center">
            <div>SF</div>
            <div>6:55 AM</div>
          </div>
          <div className="text-center">
            <div>NYC</div>
            <div>9:55 AM</div>
          </div>
          <div className="text-center">
            <div>PARIS</div>
            <div>3:55 PM</div>
          </div>
        </div>
      </section>
    </main>
  );
}
