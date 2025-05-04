import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'System Design Principles | Amit Yaduwanshi',
  description: 'Core principles for designing scalable and maintainable systems.',
}

export default function SystemDesignPrinciples() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'System Design Principles', href: '/resources/system-design-principles' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">System Design Principles</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Key principles to guide the design of robust, scalable, and maintainable systems.</p>
        <ul className="list-disc pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>Separation of Concerns</li>
          <li>Single Responsibility Principle</li>
          <li>Scalability and Performance</li>
          <li>Reliability and Fault Tolerance</li>
          <li>Consistency and Availability</li>
          <li>Security by Design</li>
          <li>Observability and Monitoring</li>
          <li>API-First Design</li>
          <li>Automation and CI/CD</li>
        </ul>
      </div>
    </div>
  )
} 