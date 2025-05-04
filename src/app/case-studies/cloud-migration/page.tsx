import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cloud Migration Case Study | Amit Yaduwanshi',
  description: 'Success story of migrating a Fortune 500 financial services company to cloud infrastructure.',
}

export default function CloudMigrationCaseStudy() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Cloud Migration', href: '/case-studies/cloud-migration' }
      ]} />
      
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Migration Success</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Fortune 500 Financial Services Company
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>
            A leading financial services company with a global presence was facing challenges with their legacy on-premise infrastructure. The system was struggling to handle increasing user loads, and maintenance costs were escalating. The company needed a modern, scalable solution to support their growing business needs.
          </p>

          <h2>Challenges</h2>
          <ul>
            <li>Outdated infrastructure with high maintenance costs</li>
            <li>Limited scalability and performance issues</li>
            <li>Complex integration requirements with existing systems</li>
            <li>Stringent security and compliance requirements</li>
            <li>Minimal downtime tolerance during migration</li>
          </ul>

          <h2>Solution</h2>
          <p>
            We implemented a comprehensive cloud migration strategy with the following key components:
          </p>
          <ol>
            <li>
              <strong>Assessment and Planning</strong>
              <p>Conducted a thorough analysis of the existing infrastructure and developed a detailed migration roadmap.</p>
            </li>
            <li>
              <strong>Architecture Design</strong>
              <p>Designed a modern microservices architecture with containerization for better scalability and maintainability.</p>
            </li>
            <li>
              <strong>Security Implementation</strong>
              <p>Implemented robust security measures and compliance controls to meet financial industry standards.</p>
            </li>
            <li>
              <strong>Phased Migration</strong>
              <p>Executed a carefully planned phased migration to minimize disruption to business operations.</p>
            </li>
          </ol>

          <h2>Technical Implementation</h2>
          <p>
            The migration involved several key technical components:
          </p>
          <ul>
            <li>Containerization using Docker and Kubernetes</li>
            <li>Implementation of CI/CD pipelines</li>
            <li>Microservices architecture with API gateways</li>
            <li>Distributed database systems</li>
            <li>Automated monitoring and alerting</li>
          </ul>

          <h2>Results</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">50%</h3>
              <p className="text-gray-600 dark:text-gray-300">Reduction in operational costs</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.99%</h3>
              <p className="text-gray-600 dark:text-gray-300">System uptime achieved</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">3x</h3>
              <p className="text-gray-600 dark:text-gray-300">Faster deployment cycles</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-300">Compliance with industry standards</p>
            </div>
          </div>

          <h2>Key Benefits</h2>
          <ul>
            <li>Significant cost savings through optimized resource utilization</li>
            <li>Improved system performance and scalability</li>
            <li>Enhanced security and compliance posture</li>
            <li>Faster time-to-market for new features</li>
            <li>Better disaster recovery capabilities</li>
          </ul>

          <h2>Lessons Learned</h2>
          <p>
            The project provided valuable insights into successful cloud migration:
          </p>
          <ul>
            <li>Importance of thorough planning and assessment</li>
            <li>Need for clear communication and stakeholder management</li>
            <li>Value of phased migration approach</li>
            <li>Significance of proper training and documentation</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            The successful migration to cloud infrastructure has transformed the company's technology landscape, providing a solid foundation for future growth and innovation. The project demonstrated how careful planning, modern architecture, and phased implementation can lead to successful digital transformation.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/case-studies/digital-transformation"
              className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <h4 className="font-semibold mb-2">Digital Transformation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Global retail chain's journey to digital excellence</p>
            </Link>
            <Link 
              href="/case-studies/system-architecture"
              className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <h4 className="font-semibold mb-2">System Architecture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Building scalable architecture for a fintech startup</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 