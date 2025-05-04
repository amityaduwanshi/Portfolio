import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Enterprise Consulting Services | Amit Yaduwanshi',
  description: 'Expert enterprise consulting services for digital transformation, cloud architecture, and technical leadership.',
}

export default function Consulting() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Consulting', href: '/consulting' }
      ]} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">Enterprise Consulting Services</h1>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strategic Technology Solutions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Transform your organization with expert guidance in enterprise architecture, 
              cloud solutions, and digital transformation strategies.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Enterprise Architecture Design</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Cloud Migration Strategy</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Technical Leadership</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">System Integration</span></li>
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">1. Assessment</h4>
                <p className="text-gray-700 dark:text-gray-300">Comprehensive analysis of your current technology landscape and business objectives.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">2. Strategy</h4>
                <p className="text-gray-700 dark:text-gray-300">Development of a tailored technology strategy aligned with your business goals.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">3. Implementation</h4>
                <p className="text-gray-700 dark:text-gray-300">Expert guidance through the implementation process with best practices and proven methodologies.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">4. Optimization</h4>
                <p className="text-gray-700 dark:text-gray-300">Continuous improvement and optimization of your technology solutions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-900 mb-12" />
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Cloud Migration Success',
              description: 'Successfully migrated a Fortune 500 company to cloud infrastructure',
              link: '/case-studies/cloud-migration'
            },
            {
              title: 'Digital Transformation',
              description: 'Led digital transformation for a global retail chain',
              link: '/case-studies/digital-transformation'
            },
            {
              title: 'System Architecture',
              description: 'Designed scalable architecture for a fintech startup',
              link: '/case-studies/system-architecture'
            }
          ].map((caseStudy) => (
            <Link 
              key={caseStudy.title}
              href={caseStudy.link}
              className="block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{caseStudy.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{caseStudy.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 