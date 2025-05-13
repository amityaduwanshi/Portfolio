'use client'

import React from 'react';
import { motion as m } from 'framer-motion';
import Link from 'next/link';
import { FaReact, FaCloud, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiDocker, SiKubernetes, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: '.NET Core', icon: <SiDotnet size={22} color="#512bd4" /> },
  { name: 'Azure', icon: <FaCloud size={22} color="#2563eb" /> },
  { name: 'SQL Server', icon: <FaDatabase size={22} color="#CC2927" /> },
  { name: 'React', icon: <FaReact size={22} color="#a855f7" /> },
  { name: 'TypeScript', icon: <SiTypescript size={22} color="#3178c6" /> },
  { name: 'Docker', icon: <SiDocker size={22} color="#2496ed" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={22} color="#326ce5" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={22} color="#f43f5e" /> },
];

const milestones = [
  { year: '2024', text: 'Launched professional portfolio and consulting practice.' },
  { year: '2020', text: 'Led cloud migration for major enterprise client.' },
  { year: '2017', text: 'Became Senior Software Architect at leading tech firm.' },
  { year: '2012', text: 'Specialized in .NET, Azure, and scalable architectures.' },
  { year: '2004', text: 'Started career in software engineering.' },
];

const AboutClient = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
        >
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-6xl text-white shadow-lg">
              {/* Replace with your photo if available */}
              <span role="img" aria-label="Profile">👨‍💻</span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Amit Yaduwanshi</h1>
            <h2 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">Senior Software Architect</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Transforming complex challenges into elegant solutions. With 20+ years of experience in enterprise architecture, cloud solutions, and digital transformation, I help organizations build scalable, future-proof systems.
            </p>
          </div>
        </m.div>

        {/* Skills Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Skills & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow text-lg">
                <span>{skill.icon}</span>
                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </m.div>

        {/* Timeline Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Career Milestones</h3>
          <ol className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 space-y-4">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-7 top-1 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900"></span>
                <span className="text-primary-700 dark:text-primary-300 font-semibold">{m.year}</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">{m.text}</span>
              </li>
            ))}
          </ol>
        </m.div>

        {/* Values/Philosophy Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            I believe in building partnerships, not just projects. My approach is collaborative, transparent, and focused on delivering real business value. I stay at the forefront of technology trends to ensure my clients benefit from the latest innovations.
          </p>
        </m.div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact" className="inline-block px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-lg font-semibold shadow">
            Contact Me
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default AboutClient; 