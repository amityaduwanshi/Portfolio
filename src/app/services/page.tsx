import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Services | Amit Yaduwanshi',
  description: 'Explore professional services: enterprise consulting, technical training, and mentorship for organizations and individuals.',
}

export default function Services() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' }
      ]} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-tight">Professional Services</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto text-center">Unlock your organization's potential with expert consulting, hands-on training, and personalized mentorship.</p>
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Enterprise Consulting */}
          <div className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10 flex flex-col border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)'}} />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900 mb-6 text-3xl shadow-md">
              🏢
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise Consulting</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Strategic technology solutions for digital transformation, cloud migration, and scalable architecture.</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Architecture Design & Review</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Cloud Strategy & Migration</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">System Integration</span></li>
            </ul>
            <Link href="/consulting" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200">Learn More →</Link>
          </div>
          {/* Training Workshops */}
          <div className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10 flex flex-col border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 70%)'}} />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900 mb-6 text-3xl shadow-md">
              🎓
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Training Workshops</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Comprehensive technical training for teams and individuals in architecture, cloud, and leadership.</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">In-Person & Online Formats</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Hands-on Labs & Case Studies</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Custom Corporate Training</span></li>
            </ul>
            <Link href="/courses" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200">Learn More →</Link>
          </div>
          {/* Mentorship Program */}
          <div className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10 flex flex-col border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-900 mb-6 text-3xl shadow-md">
              👥
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Mentorship Program</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">One-on-one mentorship for aspiring architects and technical leaders to accelerate career growth.</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Personalized Career Roadmap</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Technical & Leadership Skills</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Project Guidance</span></li>
            </ul>
            <Link href="/mentorship" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200">Learn More →</Link>
          </div>
        </div>
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to get started?</h3>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg">Schedule a Consultation</Link>
        </div>
      </div>
    </div>
  )
} 