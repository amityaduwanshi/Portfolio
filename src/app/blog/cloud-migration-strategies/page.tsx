import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cloud Migration Strategies | Amit Yaduwanshi',
  description: 'Best practices and strategies for successful cloud migration projects.',
}

export default function CloudMigrationStrategies() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Cloud Migration Strategies', href: '/blog/cloud-migration-strategies' }
      ]} />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-12 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 via-white to-cyan-50 dark:from-blue-900 dark:via-gray-900 dark:to-cyan-950 p-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-white tracking-tight">Cloud Migration Strategies</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 bg-white/80 dark:bg-gray-800/80 rounded-lg px-6 py-3 shadow border border-gray-100 dark:border-gray-700 mb-2">
            <span className="text-gray-600 dark:text-gray-300 text-sm">March 5, 2024</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">12 min read</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Cloud Computing</span>
          </div>
        </header>
        <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-100 dark:from-blue-900 dark:via-gray-800 dark:to-cyan-900 rounded mb-10" />
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">Best practices and strategies for a successful cloud migration journey.</p>
          <h2>Assessment & Planning</h2>
          <ul>
            <li>Evaluate current infrastructure and workloads</li>
            <li>Define business goals and migration objectives</li>
            <li>Choose the right cloud model (public, private, hybrid)</li>
          </ul>
          <h2>Migration Approaches</h2>
          <ul>
            <li>Lift-and-shift (rehosting)</li>
            <li>Re-platforming</li>
            <li>Re-architecting for cloud-native</li>
          </ul>
          <h2>Best Practices</h2>
          <ul>
            <li>Automate migration processes</li>
            <li>Ensure security and compliance</li>
            <li>Monitor and optimize performance</li>
            <li>Train teams and update documentation</li>
          </ul>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/digital-transformation-guide" className="block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2"><span>🔄</span> Digital Transformation Guide</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Comprehensive roadmap for digital transformation</p>
            </Link>
            <Link href="/blog/architecture-patterns" className="block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2"><span>🧩</span> Architecture Patterns</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Essential patterns for scalable systems</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 