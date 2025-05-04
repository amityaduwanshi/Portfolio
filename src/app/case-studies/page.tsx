import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Case Studies | Amit Yaduwanshi',
  description: 'Real-world case studies showcasing successful enterprise architecture and digital transformation projects.',
}

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Case Studies</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Cloud Migration Success',
              company: 'Fortune 500 Financial Services',
              challenge: 'Legacy system modernization and cloud migration',
              solution: 'Implemented a phased cloud migration strategy with microservices architecture',
              results: [
                '50% reduction in operational costs',
                'Improved system scalability and performance',
                'Enhanced security and compliance'
              ],
              link: '/case-studies/cloud-migration'
            },
            {
              title: 'Digital Transformation',
              company: 'Global Retail Chain',
              challenge: 'Outdated technology stack and inefficient processes',
              solution: 'Comprehensive digital transformation with modern architecture',
              results: [
                '40% increase in operational efficiency',
                'Improved customer experience',
                'Faster time-to-market for new features'
              ],
              link: '/case-studies/digital-transformation'
            },
            {
              title: 'System Architecture',
              company: 'Fintech Startup',
              challenge: 'Scalability and performance issues',
              solution: 'Designed and implemented scalable microservices architecture',
              results: [
                '99.99% system uptime',
                'Handled 10x increase in user load',
                'Reduced development time by 30%'
              ],
              link: '/case-studies/system-architecture'
            },
            {
              title: 'Enterprise Integration',
              company: 'Healthcare Provider',
              challenge: 'Disconnected systems and data silos',
              solution: 'Implemented enterprise integration platform',
              results: [
                'Unified patient data across systems',
                'Improved data accuracy and accessibility',
                'Streamlined business processes'
              ],
              link: '/case-studies/enterprise-integration'
            },
            {
              title: 'Technical Leadership',
              company: 'Technology Company',
              challenge: 'Technical debt and team productivity issues',
              solution: 'Implemented technical leadership and best practices',
              results: [
                'Improved code quality and maintainability',
                'Enhanced team collaboration',
                'Faster feature development'
              ],
              link: '/case-studies/technical-leadership'
            },
            {
              title: 'Security Enhancement',
              company: 'E-commerce Platform',
              challenge: 'Security vulnerabilities and compliance requirements',
              solution: 'Comprehensive security architecture implementation',
              results: [
                'Achieved industry compliance standards',
                'Enhanced data protection',
                'Improved customer trust'
              ],
              link: '/case-studies/security-enhancement'
            }
          ].map((caseStudy, idx) => (
            <Link 
              key={caseStudy.title}
              href={caseStudy.link}
              className={`group relative block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 3 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : idx % 3 === 1 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{caseStudy.title}</h2>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{caseStudy.company}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Challenge</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{caseStudy.challenge}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Results</h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 