import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Enterprise Integration Case Study | Amit Yaduwanshi',
  description: 'How enterprise integration unified patient data and streamlined processes for a healthcare provider.'
};

export default function EnterpriseIntegrationCaseStudy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Enterprise Integration', href: '/case-studies/enterprise-integration' }
      ]} />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise Integration</h1>
            <p className="text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">Healthcare Provider</p>
          </header>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">Project Overview</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Implemented an enterprise integration platform to unify patient data and improve data accuracy and accessibility across systems.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold">Challenges</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Disconnected systems and data silos</li>
              <li>Manual data entry and errors</li>
              <li>Compliance and security requirements</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-bold">Solution</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Developed a secure integration platform using modern APIs and data pipelines, ensuring real-time data synchronization and compliance.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Results</span>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Unified patient data across systems</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Improved data accuracy and accessibility</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Streamlined business processes</li>
            </ul>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/cloud-migration" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <h4 className="font-semibold mb-2">Cloud Migration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Migrating legacy systems to the cloud</p>
            </Link>
            <Link href="/case-studies/digital-transformation" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <h4 className="font-semibold mb-2">Digital Transformation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Modernizing technology for a global retailer</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
} 