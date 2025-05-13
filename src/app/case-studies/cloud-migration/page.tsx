import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cloud Migration Case Study | Amit Yaduwanshi',
  description: 'Success story of migrating a Fortune 500 financial services company to cloud infrastructure.',
}

export default function CloudMigrationCaseStudy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Cloud Migration', href: '/case-studies/cloud-migration' }
      ]} />
      
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Cloud Migration Success</h1>
            <p className="text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">Fortune 500 Financial Services Company</p>
          </header>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">Project Overview</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">A leading financial services company with a global presence was facing challenges with their legacy on-premise infrastructure. The system was struggling to handle increasing user loads, and maintenance costs were escalating. The company needed a modern, scalable solution to support their growing business needs.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold">Challenges</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Outdated infrastructure with high maintenance costs</li>
              <li>Limited scalability and performance issues</li>
              <li>Complex integration requirements with existing systems</li>
              <li>Stringent security and compliance requirements</li>
              <li>Minimal downtime tolerance during migration</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-bold">Solution</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">We implemented a comprehensive cloud migration strategy with the following key components:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base mt-2">
              <li><strong>Assessment and Planning:</strong> Conducted a thorough analysis of the existing infrastructure and developed a detailed migration roadmap.</li>
              <li><strong>Architecture Design:</strong> Designed a modern microservices architecture with containerization for better scalability and maintainability.</li>
              <li><strong>Security Implementation:</strong> Implemented robust security measures and compliance controls to meet financial industry standards.</li>
              <li><strong>Phased Migration:</strong> Executed a carefully planned phased migration to minimize disruption to business operations.</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-bold">Technical Implementation</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Containerization using Docker and Kubernetes</li>
              <li>Implementation of CI/CD pipelines</li>
              <li>Microservices architecture with API gateways</li>
              <li>Distributed database systems</li>
              <li>Automated monitoring and alerting</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Results</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Significant cost savings through optimized resource utilization</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Improved system performance and scalability</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Enhanced security and compliance posture</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Faster time-to-market for new features</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Better disaster recovery capabilities</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold">Lessons Learned</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Importance of thorough planning and assessment</li>
              <li>Need for clear communication and stakeholder management</li>
              <li>Value of phased migration approach</li>
              <li>Significance of proper training and documentation</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-bold">Conclusion</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">The successful migration to cloud infrastructure has transformed the company's technology landscape, providing a solid foundation for future growth and innovation. The project demonstrated how careful planning, modern architecture, and phased implementation can lead to successful digital transformation.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Case Studies</h3>
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