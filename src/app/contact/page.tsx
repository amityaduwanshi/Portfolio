import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact | Amit Yaduwanshi',
  description: 'Get in touch for consulting, training, or mentorship opportunities.',
}

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                <a 
                  href="mailto:contact@amityaduwanshi.com" 
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  contact@amityaduwanshi.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/amityaduwanshi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/amityaduwanshi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://twitter.com/amityaduwanshi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Twitter
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Based in Bangalore, India<br />
                  Available for remote consultations worldwide
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="training">Training & Workshops</option>
                  <option value="mentorship">Mentorship Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 