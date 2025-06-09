/**
 * Design System Showcase - Demonstrates all components and patterns
 */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FixedTitle from '@/components/FixedTitle';

export default function DesignSystemPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FixedTitle />

      <main className="px-6 py-8 flex-1 flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-12">
          {/* Typography */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Typography</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    HEADINGS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                  <h4 className="text-xl font-bold">Heading 4</h4>
                  <h5 className="text-lg font-bold">Heading 5</h5>
                  <h6 className="text-base font-bold">Heading 6</h6>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    TEXT SIZES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xl">Extra Large Text</p>
                  <p className="text-lg">Large Text</p>
                  <p className="text-base">Base Text (Default)</p>
                  <p className="text-sm">Small Text</p>
                  <p className="text-xs">Extra Small Text</p>
                  <p className="font-bold">Bold Text</p>
                  <p className="text-muted-foreground">Muted Text</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Buttons (Minimalist Design)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    VARIANTS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="default" className="w-full">
                    Default
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Secondary
                  </Button>
                  <Button variant="outline" className="w-full">
                    Outline
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Ghost
                  </Button>
                  <Button variant="minimal" className="w-full">
                    Minimal
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    SIZES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button size="sm" className="w-full">
                    Small
                  </Button>
                  <Button size="default" className="w-full">
                    Default
                  </Button>
                  <Button size="lg" className="w-full">
                    Large
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    AESTHETIC STATES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handleLoadingDemo}
                    disabled={loading}
                    variant="secondary"
                    className="w-full"
                  >
                    {loading ? 'Loading...' : 'Hover Me'}
                  </Button>
                  <Button disabled variant="outline" className="w-full">
                    Disabled
                  </Button>
                  <Button variant="ghost" className="w-full">
                    🎯 With Icon
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    MINIMALIST SET
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="minimal" size="sm" className="w-full">
                    Subtle Action
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full">
                    Ghost Action
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Outline Action
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mode Selector */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Chorizo Ventures Mode Selector
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  SATIRICAL CHAT MODES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="roast">
                  <TabsList>
                    <TabsTrigger value="roast">Roast</TabsTrigger>
                    <TabsTrigger value="stonk">stonk</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Chorizo Ventures Color System */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Mode Colors - Enhanced Contrast
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-full h-20 bg-mode-normal rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">
                    💼 Professional (Normal)
                  </h3>
                  <p className="text-xs font-mono mb-2">
                    mode-normal (#3b82f6)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Professional blue for trustworthy business advice with
                    sophisticated authority
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-full h-20 bg-mode-roast rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">🔥 Aggressive (Roast)</h3>
                  <p className="text-xs font-mono mb-2">mode-roast (#ef4444)</p>
                  <p className="text-sm text-muted-foreground">
                    Bold red for intense feedback and aggressive honesty with no
                    mercy
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-full h-20 bg-mode-stonk rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">💚 Financial (stonk)</h3>
                  <p className="text-xs font-mono mb-2">mode-stonk (#16a34a)</p>
                  <p className="text-sm text-muted-foreground">
                    Success green for financial analysis and growth-focused
                    insights
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Color Usage Examples */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Aggressive Red Examples</h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-mode-roast rounded-full"></div>
                  <div className="w-8 h-8 bg-mode-roast-4 border border-mode-roast-12 rounded-full"></div>
                  <div className="w-8 h-8 border border-mode-roast-12 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">
                  Financial Green Examples
                </h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-mode-stonk rounded-full"></div>
                  <div className="w-8 h-8 bg-mode-stonk-4 border border-mode-stonk-12 rounded-full"></div>
                  <div className="w-8 h-8 border border-mode-stonk-12 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    🌶️ Chorizo Ventures Theme
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sophisticated spice-inspired palette with satirical VC
                    colors for elegant parody
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">🎯 Mode-Based Colors</h3>
                  <p className="text-sm text-muted-foreground">
                    Each mode (Normal, Roast, stonk) has dedicated colors that
                    convey mood and purpose
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">⚡ Elegant Satire</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional aesthetics with playful chorizo-themed accents
                    for sophisticated humor
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Color System */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-16 bg-background border rounded-sm"></div>
                <p className="text-xs font-mono">background</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-foreground rounded-sm"></div>
                <p className="text-xs font-mono">foreground</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-primary rounded-sm"></div>
                <p className="text-xs font-mono">primary</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-muted rounded-sm"></div>
                <p className="text-xs font-mono">muted</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
