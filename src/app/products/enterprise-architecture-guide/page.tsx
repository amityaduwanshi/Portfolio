import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Enterprise Architecture Guide | Amit Yaduwanshi',
  description: 'Comprehensive guide to modern enterprise architecture practices, patterns, and implementation strategies.',
}

export default function EnterpriseArchitectureGuide() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Enterprise Architecture Guide', href: '/products/enterprise-architecture-guide' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Architecture Guide</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$49</div>
                <div className="text-gray-600 dark:text-gray-300">One-time purchase</div>
              </div>
              <button className="mt-4 md:mt-0 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Purchase Now
              </button>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Comprehensive guide to modern enterprise architecture practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Detailed architecture patterns and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Real-world case studies and examples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Step-by-step implementation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Downloadable templates and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Lifetime access to updates</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Introduction to Enterprise Architecture</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Understanding enterprise architecture</li>
                    <li>Key principles and frameworks</li>
                    <li>Role of enterprise architects</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Architecture Patterns</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Microservices architecture</li>
                    <li>Event-driven architecture</li>
                    <li>Service-oriented architecture</li>
                    <li>Domain-driven design</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Implementation Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Migration strategies</li>
                    <li>Integration patterns</li>
                    <li>Scalability considerations</li>
                    <li>Security best practices</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Case Studies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Digital transformation success stories</li>
                    <li>Cloud migration case studies</li>
                    <li>System integration examples</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Who Should Buy This Guide?</h2>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Enterprise architects</li>
                <li>Solution architects</li>
                <li>Technical leaders</li>
                <li>IT managers</li>
                <li>Software developers</li>
                <li>Anyone interested in enterprise architecture</li>
              </ul>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Products</h3>
                <div className="space-y-4">
                  <Link href="/products/cloud-migration-toolkit" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold">Cloud Migration Toolkit</div>
                    <div className="text-gray-600 dark:text-gray-300">Complete toolkit for planning and executing successful cloud migrations.</div>
                  </Link>
                  <Link href="/products/system-design-templates" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold">System Design Templates</div>
                    <div className="text-gray-600 dark:text-gray-300">Collection of templates for designing scalable and maintainable systems.</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 