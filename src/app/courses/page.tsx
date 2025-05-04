import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Technical Training & Workshops | Amit Yaduwanshi',
  description: 'Comprehensive technical training and workshops in software architecture, cloud computing, and enterprise solutions.',
}

export default function Courses() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Technical Training & Workshops</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)'}} />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Expert-Led Training Programs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Enhance your team's technical capabilities with our comprehensive training programs 
              designed for software architects, developers, and technical leaders.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Enterprise Architecture Fundamentals</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Cloud Architecture & Migration</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">System Design & Scalability</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Technical Leadership & Management</span></li>
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl mt-auto"
            >
              Enroll Now
            </Link>
          </div>
          <div className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Training Formats</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">1. In-Person Workshops</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Hands-on training sessions with real-world case studies and practical exercises.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">2. Online Courses</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Flexible learning through our comprehensive online platform with video lessons and assignments.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">3. Corporate Training</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Customized training programs tailored to your organization's specific needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Upcoming Workshops</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Architecture Masterclass',
                date: 'March 15-16, 2024',
                location: 'Online',
                link: '/workshops/enterprise-architecture'
              },
              {
                title: 'Cloud Migration Workshop',
                date: 'April 5-6, 2024',
                location: 'Bangalore',
                link: '/workshops/cloud-migration'
              },
              {
                title: 'Technical Leadership Training',
                date: 'May 10-11, 2024',
                location: 'Online',
                link: '/workshops/technical-leadership'
              }
            ].map((workshop, idx) => (
              <Link 
                key={workshop.title}
                href={workshop.link}
                className={`group relative block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : idx === 1 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{workshop.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Date:</span> {workshop.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Location:</span> {workshop.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 