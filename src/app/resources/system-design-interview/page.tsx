import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'System Design Interview Prep | Amit Yaduwanshi',
  description: 'Resources and practice questions for system design interviews.',
}

export default function SystemDesignInterview() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'System Design Interview Prep', href: '/resources/system-design-interview' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">System Design Interview Prep</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Practice questions and tips to help you prepare for system design interviews.</p>
        <ul className="list-disc pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>Design a URL shortening service (like bit.ly)</li>
          <li>Design a scalable chat application</li>
          <li>Design an online file storage service (like Google Drive)</li>
          <li>Design a news feed system</li>
          <li>Design a ride-sharing service (like Uber)</li>
          <li>Design a rate limiter</li>
          <li>Design a video streaming platform</li>
        </ul>
      </div>
    </div>
  )
} 