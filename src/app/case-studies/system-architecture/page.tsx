import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'System Architecture Case Study | Amit Yaduwanshi',
  description: 'How a scalable microservices architecture was designed and implemented for a fintech startup.'
};

export default function SystemArchitectureCaseStudy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'System Architecture', href: '/case-studies/system-architecture' }
      ]} />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">System Architecture</h1>
            <p className="text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">Fintech Startup</p>
          </header>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">Project Overview</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Designed and implemented a scalable microservices architecture to address performance and scalability issues for a rapidly growing fintech startup.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold">Challenges</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Scalability and performance bottlenecks</li>
              <li>Monolithic legacy system</li>
              <li>Need for rapid feature delivery</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-bold">Solution</span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Adopted a microservices approach, containerized services with Docker, and orchestrated with Kubernetes. Implemented CI/CD pipelines for faster deployments.</p>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Results</span>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>99.99% system uptime</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Handled 10x increase in user load</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Reduced development time by 30%</li>
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