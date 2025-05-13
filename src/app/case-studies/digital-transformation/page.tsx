import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion as m } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Digital Transformation Case Study | Amit Yaduwanshi',
  description: 'How Amit Yaduwanshi led a successful digital transformation for a major enterprise client.'
};

export default function DigitalTransformationCaseStudy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Digital Transformation', href: '/case-studies/digital-transformation' }
      ]} />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Digital Transformation: Enterprise Success Story</h1>
            <p className="text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">Major Enterprise Client</p>
          </header>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">Project Overview</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Full digital transformation for a Fortune 500 client</li>
              <li>Cloud migration to Azure and adoption of microservices</li>
              <li>AI-powered automation for business processes</li>
              <li>Rapid prototyping and delivery using the latest frameworks</li>
              <li>Technology-agnostic approach for best-fit solutions</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Results</span>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>50% faster time-to-market for new features</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Significant cost savings through automation and cloud adoption</li>
              <li className="flex items-center text-gray-800 dark:text-gray-100"><span className="mr-2 text-green-500">✓</span>Improved scalability, security, and business agility</li>
            </ul>
          </section>
          <section className="mb-8">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-bold">Key Technologies</span>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-base">
              <li>Azure Cloud</li>
              <li>.NET Core</li>
              <li>React & Next.js</li>
              <li>AI Tools (GitHub Copilot, ChatGPT)</li>
              <li>Docker & Kubernetes</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
} 