import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinity Sound - Eventos Cristianos & Conciertos",
  description: "Infinity Sound produce eventos de fe, música y activación profética. Noches de adoración y giras por España.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Infinity Sound',
  description: 'Infinity Sound official website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Infinity Sound',
  description: 'Infinity Sound official website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
