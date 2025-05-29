import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Guez VC - Disrupting Disruption Since Never',
    template: '%s | Guez VC',
  },
  description:
    'A satirical VC website that parodies the pretentious startup ecosystem through AI-powered interactions. Experience the absurdity of venture capital culture.',
  keywords: [
    'venture capital',
    'startup',
    'satire',
    'AI',
    'humor',
    'parody',
    'tech',
    'disruption',
  ],
  authors: [{ name: 'Guez VC' }],
  creator: 'Guez VC',
  publisher: 'Guez VC',
  metadataBase: new URL('https://guezvc.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guezvc.com',
    siteName: 'Guez VC',
    title: 'Guez VC - Disrupting Disruption Since Never',
    description:
      'A satirical VC website that parodies the pretentious startup ecosystem.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Guez VC - Satirical Venture Capital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guez VC - Disrupting Disruption Since Never',
    description:
      'A satirical VC website that parodies the pretentious startup ecosystem.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-primary antialiased`}>
        <div className="min-h-screen bg-bg-primary text-text-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
