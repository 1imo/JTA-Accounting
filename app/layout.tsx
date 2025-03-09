import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { logger } from '@/lib/utils/logger'
import { createDefaultAdminIfNotExists } from '@/lib/auth/createDefaultAdmin'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

let initialized = false

async function initialize() {
  if (typeof window === 'undefined' && !initialized) {
    logger.info('Starting application initialization...')
    try {
      await createDefaultAdminIfNotExists()
      initialized = true
      logger.info('Application initialization completed')
    } catch (error) {
      logger.error('Application initialization failed:', error)
    }
  }
}

export const metadata: Metadata = {
  title: "JTA Accountants",
  description: "Professional accounting services",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await initialize()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
