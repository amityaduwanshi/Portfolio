import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Resources | Amit Yaduwanshi',
  description: 'Free resources, tools, and guides for software architecture, enterprise solutions, and technical leadership.',
}

export default function Resources() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Resources</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Free Guides</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Enterprise Architecture Best Practices',
                  description: 'Essential patterns and practices for modern enterprise architecture.',
                  link: '/resources/enterprise-architecture-guide'
                },
                {
                  title: 'Cloud Migration Checklist',
                  description: 'Comprehensive checklist for planning and executing cloud migrations.',
                  link: '/resources/cloud-migration-checklist'
                },
                {
                  title: 'System Design Principles',
                  description: 'Core principles for designing scalable and maintainable systems.',
                  link: '/resources/system-design-principles'
                },
                {
                  title: 'Technical Leadership Handbook',
                  description: 'Guide to effective technical leadership and team management.',
                  link: '/resources/technical-leadership-handbook'
                }
              ].map((guide, idx) => (
                <li key={guide.title} className="group relative">
                  <Link 
                    href={guide.link}
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 overflow-hidden"
                  >
                    <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white relative">{guide.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 relative">{guide.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tools & Templates</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Architecture Decision Records',
                  description: 'Template for documenting important architectural decisions.',
                  link: '/resources/adr-template'
                },
                {
                  title: 'System Design Interview Prep',
                  description: 'Resources and practice questions for system design interviews.',
                  link: '/resources/system-design-interview'
                },
                {
                  title: 'Performance Metrics Dashboard',
                  description: 'Template for tracking and analyzing system performance metrics.',
                  link: '/resources/performance-metrics'
                },
                {
                  title: 'Technical Debt Assessment',
                  description: 'Framework for assessing and managing technical debt.',
                  link: '/resources/technical-debt-assessment'
                }
              ].map((tool, idx) => (
                <li key={tool.title} className="group relative">
                  <Link 
                    href={tool.link}
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 overflow-hidden"
                  >
                    <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white relative">{tool.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 relative">{tool.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Recommended Books</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Clean Architecture',
                  author: 'Robert C. Martin',
                  description: 'Principles and patterns for software architecture.'
                },
                {
                  title: 'Designing Data-Intensive Applications',
                  author: 'Martin Kleppmann',
                  description: 'Fundamentals of reliable, scalable, and maintainable systems.'
                },
                {
                  title: 'Domain-Driven Design',
                  author: 'Eric Evans',
                  description: 'Tackling complexity in the heart of software.'
                }
              ].map((book, idx) => (
                <li key={book.title} className="group relative p-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white relative">{book.title}</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-1 relative">{book.author}</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 relative">{book.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Online Courses</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'System Design Fundamentals',
                  platform: 'Coursera',
                  description: 'Learn the fundamentals of system design and architecture.'
                },
                {
                  title: 'Cloud Architecture',
                  platform: 'Udemy',
                  description: 'Master cloud architecture patterns and best practices.'
                },
                {
                  title: 'Technical Leadership',
                  platform: 'LinkedIn Learning',
                  description: 'Develop essential skills for technical leadership.'
                }
              ].map((course, idx) => (
                <li key={course.title} className="group relative p-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)'}} />
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white relative">{course.title}</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-1 relative">{course.platform}</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 relative">{course.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Communities</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Enterprise Architecture Forum',
                  description: 'Join discussions on enterprise architecture best practices.',
                  link: 'https://example.com/ea-forum'
                },
                {
                  title: 'Cloud Architecture Group',
                  description: 'Connect with cloud architecture professionals.',
                  link: 'https://example.com/cloud-group'
                },
                {
                  title: 'Technical Leadership Network',
                  description: 'Network with technical leaders and share experiences.',
                  link: 'https://example.com/tech-leadership'
                }
              ].map((community, idx) => (
                <li key={community.title} className="group relative">
                  <a 
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 overflow-hidden"
                  >
                    <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white relative">{community.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 relative">{community.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 