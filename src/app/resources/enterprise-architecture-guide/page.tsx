import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Enterprise Architecture Best Practices | Amit Yaduwanshi',
  description: 'Comprehensive guide to modern enterprise architecture practices, patterns, and implementation strategies.',
}

export default function EnterpriseArchitectureGuide() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Enterprise Architecture Guide', href: '/resources/enterprise-architecture-guide' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Enterprise Architecture Best Practices</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              Enterprise Architecture (EA) is a strategic approach to aligning business and IT goals through a comprehensive framework. This guide outlines best practices and patterns for modern enterprise architecture.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Key Principles</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Business-IT Alignment</li>
              <li>Standardization and Reuse</li>
              <li>Scalability and Flexibility</li>
              <li>Security and Compliance</li>
              <li>Continuous Improvement</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Architecture Patterns</h2>
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Microservices Architecture</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service decomposition principles</li>
                  <li>API design and management</li>
                  <li>Service discovery and communication</li>
                  <li>Data consistency patterns</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Event-Driven Architecture</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Event sourcing patterns</li>
                  <li>Message broker selection</li>
                  <li>Event processing strategies</li>
                  <li>Scalability considerations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Domain-Driven Design</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bounded contexts</li>
                  <li>Aggregate design</li>
                  <li>Domain events</li>
                  <li>Strategic design patterns</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Implementation Strategy</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Assessment Phase</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Current state analysis</li>
                  <li>Gap analysis</li>
                  <li>Stakeholder interviews</li>
                  <li>Risk assessment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Planning Phase</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Roadmap development</li>
                  <li>Resource allocation</li>
                  <li>Timeline estimation</li>
                  <li>Success metrics definition</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Execution Phase</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Incremental implementation</li>
                  <li>Change management</li>
                  <li>Quality assurance</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Governance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Establish clear decision-making processes</li>
                  <li>Define roles and responsibilities</li>
                  <li>Implement review and approval workflows</li>
                  <li>Maintain architecture documentation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Technology Selection</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evaluate based on business requirements</li>
                  <li>Consider total cost of ownership</li>
                  <li>Assess vendor stability and support</li>
                  <li>Plan for future scalability</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Change Management</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Communicate effectively with stakeholders</li>
                  <li>Provide training and support</li>
                  <li>Monitor and address resistance</li>
                  <li>Celebrate successes</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/resources/cloud-migration-checklist"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <h3 className="font-semibold mb-1">Cloud Migration Checklist</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive checklist for planning and executing cloud migrations.</p>
              </Link>
              
              <Link 
                href="/resources/system-design-principles"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <h3 className="font-semibold mb-1">System Design Principles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Core principles for designing scalable and maintainable systems.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 