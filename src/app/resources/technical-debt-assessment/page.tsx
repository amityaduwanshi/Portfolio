import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Technical Debt Assessment | Amit Yaduwanshi',
  description: 'Framework for assessing and managing technical debt.',
}

export default function TechnicalDebtAssessment() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Technical Debt Assessment', href: '/resources/technical-debt-assessment' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Technical Debt Assessment</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">A framework to help you identify, assess, and manage technical debt in your projects.</p>
        <ul className="list-disc pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>Identify sources of technical debt (code, architecture, process)</li>
          <li>Assess impact on maintainability, scalability, and delivery</li>
          <li>Prioritize debt items based on risk and business value</li>
          <li>Document and track technical debt over time</li>
          <li>Establish remediation plans and timelines</li>
          <li>Integrate debt management into development workflow</li>
          <li>Review and update debt assessments regularly</li>
        </ul>
      </div>
    </div>
  )
} 