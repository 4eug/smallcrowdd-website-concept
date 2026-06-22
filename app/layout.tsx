import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smallcrowdd.co'),
  title: {
    default: 'Smallcrowdd - Creative Studio',
    template: '%s | Smallcrowdd',
  },
  description:
    'A creative studio crafting digital experiences that inspire, engage, and deliver results. Branding, web design, product design, and motion.',
  applicationName: 'Smallcrowdd',
  authors: [{ name: 'Smallcrowdd' }],
  creator: 'Smallcrowdd',
  publisher: 'Smallcrowdd',
  keywords: [
    'Smallcrowdd',
    'creative studio',
    'branding',
    'web design',
    'product design',
    'motion',
    'Accra creative studio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Smallcrowdd - Creative Studio',
    description:
      'A creative studio crafting digital experiences that inspire, engage, and deliver results.',
    url: '/',
    siteName: 'Smallcrowdd',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Smallcrowdd creative studio concept preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smallcrowdd - Creative Studio',
    description:
      'A creative studio crafting digital experiences that inspire, engage, and deliver results.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>{children}</body>
    </html>
  );
}
