import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import AppLayout from '@/components/AppLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amit Yaduwanshi | Enterprise Architect & Technical Leader',
  description: 'Enterprise architect and technical leader specializing in cloud architecture, system design, and digital transformation.',
  keywords: [
    'enterprise architecture',
    'cloud architecture',
    'system design',
    'technical leadership',
    'digital transformation',
    'software architecture',
    'microservices',
    'devops',
    'consulting',
    'mentorship'
  ],
  authors: [{ name: 'Amit Yaduwanshi' }],
  openGraph: {
    title: 'Amit Yaduwanshi | Enterprise Architect & Technical Leader',
    description: 'Enterprise architect and technical leader specializing in cloud architecture, system design, and digital transformation.',
    url: 'https://amityaduwanshi.com',
    siteName: 'Amit Yaduwanshi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amit Yaduwanshi'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Yaduwanshi | Enterprise Architect & Technical Leader',
    description: 'Enterprise architect and technical leader specializing in cloud architecture, system design, and digital transformation.',
    images: ['/images/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-site-verification-key'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  )
} 