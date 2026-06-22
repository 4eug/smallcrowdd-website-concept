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
  title: 'Smallcrowdd Concept',
  description: 'Original portfolio concept for the Smallcrowdd studio website.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>{children}</body>
    </html>
  );
}
