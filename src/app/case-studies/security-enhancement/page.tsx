import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Security Enhancement Case Study | Amit Yaduwanshi',
  description: 'How security architecture implementation improved compliance and data protection for an e-commerce platform.'
};

export default function SecurityEnhancementCaseStudy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Security Enhancement', href: '/case-studies/security-enhancement' }
      ]} />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Security Enhancement</h1>
            <p className="text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">E-commerce Platform</p>
          </header>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">Project Overview</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Implemented comprehensive security architecture to address vulnerabilities and meet compliance requirements for a leading e-commerce platform.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold">Challenges</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Security vulnerabilities and compliance requirements</li>
              <li>Need for enhanced data protection</li>
              <li>Maintaining customer trust</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-bold">Solution</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Developed and implemented robust security controls, regular audits, and compliance processes to protect sensitive data and ensure industry standards.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Results</span>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Achieved industry compliance standards</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Enhanced data protection</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Improved customer trust</li>
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