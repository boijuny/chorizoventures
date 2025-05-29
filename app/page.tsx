import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Guez VC - where we disrupt disruption since never.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="container-responsive py-3xl">
        <div className="text-center space-y-xl">
          {/* Logo/Title */}
          <div className="space-y-md">
            <h1 className="text-6xl font-bold text-text-primary">
              GUEZ VC
            </h1>
            
            {/* Floating 3D Shape Placeholder */}
            <div className="floating-element w-16 h-16 bg-accent-primary/20 rounded-lg mx-auto">
              {/* 3D shape will be implemented in Phase 2 */}
            </div>
          </div>

          {/* Rotating Tagline Placeholder */}
          <div className="space-y-lg">
            <div className="text-2xl text-text-secondary">
              {/* Rotating taglines component will be implemented in Phase 2 */}
              "Disrupting disruption since never"
            </div>
          </div>

          {/* Chat Input Placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-bg-secondary rounded-lg p-lg space-y-md">
              <div className="text-lg text-text-primary">
                What can we disrupt for you?
              </div>
              
              {/* Input field placeholder */}
              <div className="flex gap-md">
                <input
                  type="text"
                  placeholder="Enter your startup idea..."
                  className="flex-1 bg-bg-tertiary text-text-primary px-md py-sm rounded-lg border border-bg-tertiary focus:border-accent-primary transition-colors"
                  disabled
                />
                <button
                  className="liquid-button bg-accent-primary text-white px-lg py-sm rounded-lg disabled:opacity-50"
                  disabled
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Mode Selector Placeholder */}
          <div className="flex justify-center gap-md">
            <button className="liquid-button bg-bg-secondary text-text-primary px-lg py-sm rounded-lg border border-accent-primary">
              Normal
            </button>
            <button className="liquid-button bg-bg-secondary text-text-secondary px-lg py-sm rounded-lg border border-bg-tertiary hover:border-accent-roast">
              Roast
            </button>
            <button className="liquid-button bg-bg-secondary text-text-secondary px-lg py-sm rounded-lg border border-bg-tertiary hover:border-accent-calculator">
              Calculator
            </button>
            <button className="liquid-button bg-bg-secondary text-text-secondary px-lg py-sm rounded-lg border border-bg-tertiary hover:border-accent-neon">
              More
            </button>
          </div>
        </div>
      </section>

      {/* Timezone Clocks Placeholder */}
      <section className="container-responsive pb-xl">
        <div className="flex justify-center gap-xl text-text-secondary text-sm">
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