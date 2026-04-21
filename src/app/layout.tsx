// src/app/layout.tsx
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/main.scss';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Nación de Fe | Iglesia cristiana en Cali',
  description:
    'Nación de Fe es una iglesia cristiana en Cali donde encontrarás fe, esperanza, comunidad y un lugar para crecer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
