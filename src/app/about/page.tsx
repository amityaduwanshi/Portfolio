"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  { name: '.NET Core', icon: '💻' },
  { name: 'Azure', icon: '☁️' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⚓' },
  { name: 'Next.js', icon: '🚀' },
  { name: 'AI Tools', icon: '🤖' },
];

const milestones = [
  { year: '2024', text: 'Launched professional portfolio and consulting practice.' },
  { year: '2020', text: 'Led cloud migration for major enterprise client.' },
  { year: '2017', text: 'Became Senior Software Architect at leading tech firm.' },
  { year: '2012', text: 'Specialized in .NET, Azure, and scalable architectures.' },
  { year: '2004', text: 'Started career in software engineering.' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
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
              Transforming complex challenges into elegant solutions—faster. I leverage AI-powered tools and the latest technologies to deliver rapid, high-quality results for any tech stack. My approach is technology-agnostic and innovation-driven, ensuring your business benefits from the best solutions available.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
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
        </motion.div>

        {/* Timeline Section */}
        <motion.div
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
        </motion.div>

        {/* Values/Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            I believe in building partnerships, not just projects. My workflow is powered by AI-driven tools and automation, enabling rapid prototyping, delivery, and continuous improvement. I embrace any technology—.NET, Azure, React, Python, AI, and more—to ensure the best fit for your needs. With a focus on speed, quality, and innovation, I help you stay ahead in a fast-changing digital world.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact" className="inline-block px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-lg font-semibold shadow">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;