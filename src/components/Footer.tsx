import Link from 'next/link'
import { navItems } from './Navigation';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Amit Yaduwanshi</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Enterprise Architect specializing in cloud architecture, system design, and digital transformation.
            </p>
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-600 to-blue-500 text-white text-sm font-semibold shadow animate-pulse">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                AI Driven Rapid Development | Technology Doesn't Matter
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/consulting" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Enterprise Consulting
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Training Workshops
                </Link>
              </li>
              <li>
                <Link 
                  href="/mentorship" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              {navItems.filter(item => ['Blog', 'Case Studies', 'Products', 'Resources'].includes(item.label)).map(item => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              {navItems.filter(item => item.label === 'Contact').map(item => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:amit@yaduwanshi.com" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  amit@yaduwanshi.com
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/amityaduwanshi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/amityaduwanshi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-700 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Amit Yaduwanshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 