import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Technical Leadership Handbook | Amit Yaduwanshi',
  description: 'Guide to effective technical leadership and team management.',
}

export default function TechnicalLeadershipHandbook() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Technical Leadership Handbook', href: '/resources/technical-leadership-handbook' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Technical Leadership Handbook</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">A practical guide to leading technical teams and driving engineering excellence.</p>
        <ul className="list-disc pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>Building and Leading High-Performing Teams</li>
          <li>Effective Communication and Stakeholder Management</li>
          <li>Mentoring and Coaching Engineers</li>
          <li>Technical Decision-Making</li>
          <li>Driving Innovation and Change</li>
          <li>Managing Technical Debt</li>
          <li>Scaling Engineering Organizations</li>
          <li>Fostering a Culture of Learning</li>
        </ul>
      </div>
    </div>
  )
} 