'use client'

import { ReactNode } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Navigation from './Navigation'
import Footer from './Footer'
import ThemeToggle from './ThemeToggle'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </ErrorBoundary>
  )
} 