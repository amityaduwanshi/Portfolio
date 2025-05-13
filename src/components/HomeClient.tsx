'use client'

import React from 'react';
import { motion as m } from 'framer-motion';
import Link from 'next/link';
import ToolsSection from '@/components/ToolsSection';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaCloud } from 'react-icons/fa'
import { SiTypescript, SiDocker, SiKubernetes, SiDotnet, SiNextdotjs } from 'react-icons/si'

const HomeClient = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
        {/* Grid Pattern Overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full z-0">
          {/* Subtle grid pattern */}
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.18" />
              </pattern>
              <pattern id="grid-dark" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="1" strokeOpacity="0.22" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="block dark:hidden" />
            <rect width="100%" height="100%" fill="url(#grid-dark)" className="hidden dark:block" />
          </svg>
          {/* Radial gradient overlay for focus */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80vw] h-[60vw] max-w-4xl max-h-[700px] rounded-full mx-auto"
                 style={{
                   background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.10) 0%, rgba(17,24,39,0.0) 70%)'
                 }}
            />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-600 to-blue-500 text-white text-sm font-semibold shadow animate-pulse">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                AI Driven Rapid Development | Technology Doesn't matter
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Amit Yaduwanshi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered, technology-agnostic solutions for rapid digital transformation. Accelerate your business with the latest tools, frameworks, and AI-driven development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/consulting"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to help you build and scale your software projects.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Consulting',
                description: 'Expert guidance for your software architecture and development needs.',
                href: '/consulting',
              },
              {
                title: 'Mentorship',
                description: 'Personalized coaching to accelerate your career in software development.',
                href: '/mentorship',
              },
              {
                title: 'Courses',
                description: 'In-depth training programs on modern software development practices.',
                href: '/courses',
              },
            ].map((service, index) => (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `radial-gradient(circle at 80% 20%, ${index === 0 ? '#3b82f6' : index === 1 ? '#a855f7' : '#06b6d4'} 0%, transparent 70%)`}} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 relative">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium relative"
                >
                  Learn more →
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of the technologies I work with daily.
            </p>
          </m.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: '.NET Core', icon: <SiDotnet size={32} color="#512bd4" /> },
              { name: 'Azure', icon: <FaCloud size={32} color="#2563eb" /> },
              { name: 'SQL Server', icon: <FaDatabase size={32} color="#CC2927" /> },
              { name: 'React', icon: <FaReact size={32} color="#61dafb" /> },
              { name: 'TypeScript', icon: <SiTypescript size={32} color="#3178c6" /> },
              { name: 'Docker', icon: <SiDocker size={32} color="#2496ed" /> },
              { name: 'Kubernetes', icon: <SiKubernetes size={32} color="#326ce5" /> },
              { name: 'Next.js', icon: <SiNextdotjs size={32} color="#f43f5e" /> },
            ].map((tool, index) => (
              <m.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col items-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-4 mx-auto bg-gray-100 dark:bg-gray-900 shadow-md">
                  {tool.icon}
                </div>
                <span className="text-gray-900 dark:text-white font-medium relative">
                  {tool.name}
                </span>
              </m.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tools"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <span className="inline-flex items-center gap-3">
                View All Technologies
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from the Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights and tutorials on software architecture and development.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Building Scalable Microservices with .NET Core',
                excerpt: 'Learn how to design and implement microservices that scale with your business needs.',
                href: '/blog/building-scalable-microservices',
              },
              {
                title: 'Azure Best Practices for Enterprise Applications',
                excerpt: 'Essential patterns and practices for deploying enterprise applications on Azure.',
                href: '/blog/azure-best-practices',
              },
              {
                title: 'Modern Frontend Development with React and TypeScript',
                excerpt: 'A comprehensive guide to building type-safe React applications.',
                href: '/blog/modern-frontend-development',
              },
            ].map((post, index) => (
              <m.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Read more →
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeClient; 