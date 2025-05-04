import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amit Yaduwanshi - Senior Software Architect & Enterprise Solutions Expert',
  description: 'Expert enterprise software architecture and digital transformation services by Amit Yaduwanshi. 20+ years of experience in scalable solutions, cloud architecture, and technical leadership.',
  keywords: 'software architect, enterprise solutions, digital transformation, cloud architecture, technical leadership, software consulting, enterprise architecture, system design, technical training, software mentorship',
  authors: [{ name: 'Amit Yaduwanshi' }],
  openGraph: {
    title: 'Amit Yaduwanshi - Senior Software Architect & Enterprise Solutions Expert',
    description: 'Expert enterprise software architecture and digital transformation services by Amit Yaduwanshi. 20+ years of experience in scalable solutions, cloud architecture, and technical leadership.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Amit Yaduwanshi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Yaduwanshi - Senior Software Architect',
    description: 'Expert enterprise software architecture and digital transformation services',
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
    google: 'your-google-site-verification',
  },
  icons: {
    icon: '/favicon.ico',
  },
} 