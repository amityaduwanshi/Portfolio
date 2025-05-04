import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog | Amit Yaduwanshi',
  description: 'Insights and articles on software architecture, enterprise solutions, and technical leadership.',
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Latest Insights</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Digital Transformation Guide',
              excerpt: 'A comprehensive guide to successful digital transformation in enterprise environments.',
              date: 'March 15, 2024',
              readTime: '10 min read',
              category: 'Enterprise Architecture',
              link: '/blog/digital-transformation-guide'
            },
            {
              title: 'Architecture Patterns',
              excerpt: 'Essential architecture patterns for scalable and maintainable systems.',
              date: 'March 10, 2024',
              readTime: '8 min read',
              category: 'System Design',
              link: '/blog/architecture-patterns'
            },
            {
              title: 'Cloud Migration Strategies',
              excerpt: 'Best practices and strategies for successful cloud migration projects.',
              date: 'March 5, 2024',
              readTime: '12 min read',
              category: 'Cloud Computing',
              link: '/blog/cloud-migration-strategies'
            },
            {
              title: 'Technical Leadership',
              excerpt: 'Key principles and practices for effective technical leadership.',
              date: 'February 28, 2024',
              readTime: '9 min read',
              category: 'Leadership',
              link: '/blog/technical-leadership'
            },
            {
              title: 'Microservices Architecture',
              excerpt: 'Designing and implementing microservices for enterprise applications.',
              date: 'February 20, 2024',
              readTime: '11 min read',
              category: 'Architecture',
              link: '/blog/microservices-architecture'
            },
            {
              title: 'DevOps Best Practices',
              excerpt: 'Implementing DevOps practices for improved software delivery.',
              date: 'February 15, 2024',
              readTime: '7 min read',
              category: 'DevOps',
              link: '/blog/devops-best-practices'
            }
          ].map((post, idx) => (
            <Link 
              key={post.title}
              href={post.link}
              className={`group relative block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 3 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : idx % 3 === 1 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 