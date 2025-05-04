import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'ADR Template | Amit Yaduwanshi',
  description: 'Template for documenting important architectural decisions.',
}

export default function ADRTemplate() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'ADR Template', href: '/resources/adr-template' }
      ]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Architecture Decision Record (ADR) Template</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Use this template to document key architectural decisions in your projects.</p>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Sample ADR</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
{`# [Title]

## Status
Proposed / Accepted / Deprecated / Superseded

## Context
What is the issue that we're seeing that is motivating this decision or change?

## Decision
What is the change that we're proposing and/or doing?

## Consequences
What becomes easier or more difficult to do because of this change?`}
          </pre>
        </div>
      </div>
    </div>
  )
} 