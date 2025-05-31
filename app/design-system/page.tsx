/**
 * Design System Showcase - Demonstrates all components and patterns
 */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DesignSystemPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">🎨 Design System</h1>
          <p className="text-lg text-muted-foreground">
            OpenAI-inspired minimal components with geometric precision
          </p>
        </div>
      </header>

      <main className="px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
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
              Buttons (OpenAI Style)
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
                    STATES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handleLoadingDemo}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? 'Loading...' : 'Click Me'}
                  </Button>
                  <Button disabled className="w-full">
                    Disabled
                  </Button>
                  <Button variant="outline" className="w-full">
                    🚀 With Icon
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    LOADING
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm">Spinner</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mode Selector */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Mode Selector</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  CHAT MODES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="normal">
                  <TabsList>
                    <TabsTrigger value="normal">Normal</TabsTrigger>
                    <TabsTrigger value="roast">Roast</TabsTrigger>
                    <TabsTrigger value="calculator">Calculator</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Design Principles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    🔸 Minimal Border Radius
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    2px (rounded-sm) for crisp, geometric edges instead of
                    rounded blobs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">📏 Compact Spacing</h3>
                  <p className="text-sm text-muted-foreground">
                    Tight padding and gaps (4-8px) for professional, text-like
                    appearance
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">🎯 OpenAI Inspired</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, functional design prioritizing usability over visual
                    flair
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
