import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingSocials from '@/components/FloatingSocials'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Hi Beauty SPA - Luxury Wellness & Spa Services',
  description: 'Experience ultimate relaxation at Hi Beauty SPA. Discover premium spa treatments, wellness services, and luxury therapies. Book your appointment today.',
  keywords: 'spa, wellness, massage, facial, beauty, luxury spa, relaxation',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F1ED' },
    { media: '(prefers-color-scheme: dark)', color: '#3D2817' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <FloatingSocials />
        <Analytics />
      </body>
    </html>
  )
}
