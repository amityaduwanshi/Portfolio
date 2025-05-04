import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cloud Migration Checklist | Amit Yaduwanshi',
  description: 'Comprehensive checklist for planning and executing cloud migrations.',
}

export default function CloudMigrationChecklist() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Cloud Migration Checklist', href: '/resources/cloud-migration-checklist' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Cloud Migration Checklist</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">A step-by-step checklist to ensure a successful migration to the cloud for your organization.</p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-900 dark:text-gray-100">
          <li>Assess current infrastructure and workloads</li>
          <li>Define migration goals and success criteria</li>
          <li>Choose the right cloud provider and services</li>
          <li>Plan migration strategy (lift-and-shift, re-platform, re-architect)</li>
          <li>Estimate costs and set a budget</li>
          <li>Design security and compliance controls</li>
          <li>Prepare data migration and backup plans</li>
          <li>Test migration in a staging environment</li>
          <li>Execute migration and monitor progress</li>
          <li>Validate workloads and optimize performance</li>
          <li>Train teams and update documentation</li>
        </ol>
      </div>
    </div>
  )
} 