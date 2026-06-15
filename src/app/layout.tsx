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
  title: 'Nación de Fe Cali | MENTES LIBRES DE gigantes',
  description:
    'Nación de Fe Cali es una iglesia de influencia en Cali. Establecemos Diseño, Paternidad, Reino y Gobierno. Mentes libres de gigantes.',
  keywords: ['Nación de Fe Cali', 'iglesia cristiana Cali', 'iglesia en Cali', 'Mentes libres de gigantes', 'Ciudad 2000'],
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
