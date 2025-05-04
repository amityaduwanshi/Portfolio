import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Performance Metrics Dashboard | Amit Yaduwanshi',
  description: 'Template for tracking and analyzing system performance metrics.',
}

export default function PerformanceMetrics() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Performance Metrics Dashboard', href: '/resources/performance-metrics' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Performance Metrics Dashboard</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Track and analyze key system performance metrics to ensure reliability and scalability.</p>
        <ul className="list-disc pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>CPU and Memory Usage</li>
          <li>Request Latency</li>
          <li>Error Rate</li>
          <li>Throughput (Requests per Second)</li>
          <li>Uptime and Availability</li>
          <li>Database Query Performance</li>
          <li>External API Response Times</li>
          <li>Resource Utilization Trends</li>
        </ul>
      </div>
    </div>
  )
} 