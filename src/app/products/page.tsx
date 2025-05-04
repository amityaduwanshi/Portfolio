import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Digital Products | Amit Yaduwanshi',
  description: 'Digital products and resources for software architecture, enterprise solutions, and technical leadership.',
}

export default function Products() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Digital Products</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Enterprise Architecture Guide',
              description: 'Comprehensive guide to modern enterprise architecture practices and patterns.',
              price: '$49',
              features: [
                'Architecture patterns and best practices',
                'Case studies and real-world examples',
                'Implementation strategies',
                'Downloadable templates and resources'
              ],
              link: '/products/enterprise-architecture-guide'
            },
            {
              title: 'Cloud Migration Toolkit',
              description: 'Complete toolkit for planning and executing successful cloud migrations.',
              price: '$79',
              features: [
                'Migration assessment templates',
                'Risk analysis framework',
                'Implementation checklists',
                'Cost optimization guide'
              ],
              link: '/products/cloud-migration-toolkit'
            },
            {
              title: 'Technical Leadership Course',
              description: 'Online course for developing effective technical leadership skills.',
              price: '$99',
              features: [
                '12 video modules',
                'Practical exercises',
                'Case studies',
                'Downloadable resources'
              ],
              link: '/products/technical-leadership-course'
            },
            {
              title: 'System Design Templates',
              description: 'Collection of templates for designing scalable and maintainable systems.',
              price: '$39',
              features: [
                'Architecture diagrams',
                'Design patterns',
                'Documentation templates',
                'Review checklists'
              ],
              link: '/products/system-design-templates'
            },
            {
              title: 'DevOps Implementation Guide',
              description: 'Step-by-step guide to implementing DevOps practices in your organization.',
              price: '$59',
              features: [
                'Implementation roadmap',
                'Best practices',
                'Tool recommendations',
                'Metrics and KPIs'
              ],
              link: '/products/devops-implementation-guide'
            },
            {
              title: 'Security Architecture Framework',
              description: 'Comprehensive framework for designing secure enterprise architectures.',
              price: '$69',
              features: [
                'Security patterns',
                'Risk assessment tools',
                'Compliance checklists',
                'Implementation guides'
              ],
              link: '/products/security-architecture-framework'
            }
          ].map((product, idx) => (
            <Link 
              key={product.title}
              href={product.link}
              className={`group relative block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 3 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : idx % 3 === 1 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {product.price}
              </div>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 