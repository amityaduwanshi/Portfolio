'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import ServiceSchema from '../components/ServiceSchema'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amit Yaduwanshi",
    "jobTitle": "Senior Software Architect",
    "description": "Expert enterprise software architecture and digital transformation services with 20+ years of experience",
    "url": "https://amityaduwanshi.com",
    "sameAs": [
      "https://linkedin.com/in/amityaduwanshi",
      "https://github.com/amityaduwanshi"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Software Architect"
    },
    "knowsAbout": [
      "Enterprise Architecture",
      "Cloud Solutions",
      "Digital Transformation",
      "Technical Leadership",
      "System Design"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServiceSchema />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" aria-label="Introduction">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-900 dark:via-gray-900 dark:to-blue-950"
            style={{
              backgroundImage: 'url(/grid.svg)',
              backgroundSize: '50px 50px',
              opacity: 0.7
            }}
            role="presentation"
          />
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight"
            >
              Hi, I'm Amit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300">Senior Software Architect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-200"
            >
              Transforming complex challenges into elegant solutions. Specializing in enterprise architecture,
              cloud solutions, and digital transformation with 20+ years of experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                aria-label="Schedule a consultation"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white/10 text-lg"
                aria-label="Explore our services"
              >
                Explore Services
              </Link>
            </motion.div>
            {/* Scroll Indicator */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center animate-bounce z-20">
              <span className="w-2 h-2 bg-blue-400 rounded-full mb-1"></span>
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
            </div>
          </div>
        </section>
        {/* Section Divider */}
        <div className="w-full h-16 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-900 -mt-16" />

        {/* Stats Section */}
        <AnimatedSection className="py-20 bg-gray-50" aria-label="Experience and Achievements">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Enterprise Clients' },
                { number: '1000+', label: 'Students Trained' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: idx % 2 === 0 ? 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 70%)' : 'radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 70%)'}} />
                  <div className="text-4xl font-bold text-blue-600 mb-2 relative" aria-label={`${stat.number} ${stat.label}`}>{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-300 relative">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-20" aria-label="Our Services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Enterprise Consulting',
                  description: 'Strategic technology solutions for large-scale organizations',
                  icon: '🏢',
                  href: '/consulting',
                  color: '#3b82f6'
                },
                {
                  title: 'Training Workshops',
                  description: 'Comprehensive technical training and workshops',
                  icon: '🎓',
                  href: '/courses',
                  color: '#a855f7'
                },
                {
                  title: 'Mentorship Program',
                  description: 'One-on-one guidance for aspiring architects',
                  icon: '👥',
                  href: '/mentorship',
                  color: '#06b6d4'
                }
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `radial-gradient(circle at 80% 20%, ${service.color} 0%, transparent 70%)`}} />
                  <div className="text-4xl mb-4 relative">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white relative">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 relative">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto relative"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tools & Technologies Section */}
        <AnimatedSection className="py-20" aria-label="Tools & Technologies">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Tools & Technologies</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              {[
                { name: 'TypeScript', icon: '🟦', desc: 'Typed JavaScript' },
                { name: '.NET Core', icon: '🌐', desc: 'Cross-platform backend' },
                { name: 'Azure', icon: '☁️', desc: 'Cloud platform' },
                { name: 'SQL Server', icon: '🗄️', desc: 'Relational database' },
                { name: 'React', icon: '⚛️', desc: 'UI library' },
                { name: 'Docker', icon: '🐳', desc: 'Containerization' },
                { name: 'Kubernetes', icon: '☸️', desc: 'Orchestration' },
                { name: 'Tailwind CSS', icon: '🌬️', desc: 'Utility-first CSS' },
              ].map((tool, idx) => (
                <div key={tool.name} className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <span className="text-4xl mb-4">{tool.icon}</span>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{tool.name}</div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">{tool.desc}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/tools" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg">See all tools & technologies</Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Content */}
        <AnimatedSection className="py-20 bg-gray-50" aria-label="Featured Content">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Latest Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[{title: 'Digital Transformation Guide', color: '#3b82f6'}, {title: 'Architecture Patterns', color: '#a855f7'}].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `radial-gradient(circle at 80% 20%, ${item.color} 0%, transparent 70%)`}} />
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.title === 'Digital Transformation Guide'
                        ? 'A comprehensive guide to successful digital transformation in enterprise environments.'
                        : 'Essential architecture patterns for scalable and maintainable systems.'}
                    </p>
                    <Link 
                      href={item.title === 'Digital Transformation Guide' ? '/blog/digital-transformation-guide' : '/blog/architecture-patterns'}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20" aria-label="Call to Action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Your Technology?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals and drive business growth.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
} 