import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Mentorship Program | Amit Yaduwanshi',
  description: 'One-on-one mentorship program for aspiring software architects and technical leaders.',
}

export default function Mentorship() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Mentorship', href: '/mentorship' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentorship Program</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Personalized Guidance for Your Career Growth</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get one-on-one mentorship from an experienced software architect to accelerate 
              your career growth and achieve your professional goals.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Personalized Career Roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Technical Skills Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Architecture Design Reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Leadership Skills Enhancement</span>
              </li>
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Apply for Mentorship
            </Link>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Program Structure</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Initial Assessment</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive evaluation of your current skills, goals, and career aspirations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Customized Plan</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Development of a personalized learning and growth plan tailored to your needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Regular Sessions</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Weekly one-on-one mentoring sessions with progress tracking and feedback.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Project Guidance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Hands-on guidance for real-world projects and architecture challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Senior Software Engineer',
                testimonial: 'The mentorship program helped me transition from a developer to a software architect role.',
                link: '/success-stories/sarah-chen'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Technical Lead',
                testimonial: 'Gained invaluable insights into enterprise architecture and system design.',
                link: '/success-stories/michael-rodriguez'
              },
              {
                name: 'Priya Patel',
                role: 'Solutions Architect',
                testimonial: 'The personalized guidance accelerated my career growth significantly.',
                link: '/success-stories/priya-patel'
              }
            ].map((story, idx) => (
              <Link 
                key={story.name}
                href={story.link}
                className={`group relative block p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : idx === 1 ? 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{story.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{story.role}</p>
                <p className="text-gray-700 dark:text-gray-300 italic">"{story.testimonial}"</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 