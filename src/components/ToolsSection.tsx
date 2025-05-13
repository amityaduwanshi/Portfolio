'use client'

import React, { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaCloud, FaProjectDiagram, FaExchangeAlt, FaTools } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiDocker, SiKubernetes, SiDotnet, SiRedis, SiElasticsearch, SiGraphql, SiHasura, SiMongodb, SiGithubactions, SiNextdotjs } from 'react-icons/si'

interface Tool {
  name: string
  category: string
  icon: React.ReactNode
  description: string
  experience: string
  notableProjects: string[]
}

const tools: Tool[] = [
  {
    name: '.NET Core',
    category: 'Backend',
    icon: <SiDotnet size={32} color="#512bd4" />,
    description: 'Modern, cross-platform framework for building scalable backend applications.',
    experience: '8+ years',
    notableProjects: ['Enterprise APIs', 'Microservices', 'Cloud-Native Apps']
  },
  {
    name: '.NET Aspire',
    category: 'Backend',
    icon: <SiDotnet size={32} color="#38bdf8" />,
    description: 'Cloud-ready stack for building distributed applications with .NET.',
    experience: '1+ years',
    notableProjects: ['Cloud-Native Apps', 'Microservices']
  },
  {
    name: 'Azure',
    category: 'Cloud',
    icon: <FaCloud size={32} color="#2563eb" />,
    description: 'Comprehensive cloud platform for deploying, managing, and scaling applications.',
    experience: '7+ years',
    notableProjects: ['Cloud Migration', 'Serverless Apps', 'DevOps Pipelines']
  },
  {
    name: 'Redis',
    category: 'Database',
    icon: <SiRedis size={32} color="#d82c20" />,
    description: 'In-memory data store for caching, real-time analytics, and fast data access.',
    experience: '5+ years',
    notableProjects: ['Caching Layer', 'Session Store', 'Pub/Sub Systems']
  },
  {
    name: 'Elasticsearch',
    category: 'Database',
    icon: <SiElasticsearch size={32} color="#f5c026" />,
    description: 'Distributed search and analytics engine for log and event data.',
    experience: '4+ years',
    notableProjects: ['Log Analytics', 'Full-Text Search', 'Monitoring Dashboards']
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: <FaReact size={32} color="#61dafb" />,
    description: 'Building modern, responsive user interfaces with React and its ecosystem.',
    experience: '5+ years',
    notableProjects: ['E-commerce Platform', 'Admin Dashboard', 'Real-time Chat Application']
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: <SiTypescript size={32} color="#3178c6" />,
    description: 'Developing type-safe applications with TypeScript.',
    experience: '4+ years',
    notableProjects: ['Enterprise Application', 'Financial Dashboard', 'API Integration']
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: <FaNodeJs size={32} color="#3c873a" />,
    description: 'Creating scalable server-side applications with Node.js.',
    experience: '4+ years',
    notableProjects: ['REST API', 'WebSocket Server', 'Microservices']
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: <FaPython size={32} color="#ffd43b" />,
    description: 'Developing data processing and automation solutions with Python.',
    experience: '3+ years',
    notableProjects: ['Data Pipeline', 'Machine Learning Model', 'Automation Scripts']
  },
  {
    name: 'AWS',
    category: 'Cloud',
    icon: <FaAws size={32} color="#ff9900" />,
    description: 'Deploying and managing cloud infrastructure on AWS.',
    experience: '3+ years',
    notableProjects: ['Serverless Architecture', 'Containerized Applications', 'CI/CD Pipeline']
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: <SiDocker size={32} color="#2496ed" />,
    description: 'Containerizing applications for consistent deployment.',
    experience: '3+ years',
    notableProjects: ['Microservices', 'Development Environment', 'Production Deployment']
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    icon: <SiKubernetes size={32} color="#326ce5" />,
    description: 'Orchestrating containerized applications at scale.',
    experience: '2+ years',
    notableProjects: ['Cluster Management', 'Service Mesh', 'Auto-scaling']
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: <SiNextdotjs size={32} color="#f43f5e" />,
    description: 'React framework for production-grade, full-stack web applications.',
    experience: '3+ years',
    notableProjects: ['Portfolio Website', 'Enterprise Dashboards']
  },
  {
    name: 'SQL/NoSQL',
    category: 'Database',
    icon: <FaDatabase size={32} color="#6b7280" />,
    description: 'Designing and optimizing database solutions.',
    experience: '5+ years',
    notableProjects: ['Data Migration', 'Performance Optimization', 'Schema Design']
  },
  {
    name: 'Microservices',
    category: 'Architecture',
    icon: <FaProjectDiagram size={32} color="#6366f1" />,
    description: 'Designing and implementing distributed systems using microservices architecture.',
    experience: '7+ years',
    notableProjects: ['Enterprise Microservices', 'Cloud-Native Apps', 'API Gateways']
  },
  {
    name: 'REST API',
    category: 'Backend',
    icon: <FaExchangeAlt size={32} color="#0ea5e9" />,
    description: 'Building robust and scalable RESTful APIs for web and mobile applications.',
    experience: '10+ years',
    notableProjects: ['Public APIs', 'Internal Services', 'API Integrations']
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    icon: <SiGraphql size={32} color="#e535ab" />,
    description: 'Flexible and efficient data querying with GraphQL APIs.',
    experience: '3+ years',
    notableProjects: ['Unified API Layer', 'Frontend-Optimized APIs', 'Hasura Integrations']
  },
  {
    name: 'Hasura',
    category: 'Backend',
    icon: <SiHasura size={32} color="#1eb4d4" />,
    description: 'Instant GraphQL APIs on new or existing Postgres databases with Hasura.',
    experience: '2+ years',
    notableProjects: ['Realtime APIs', 'Event Triggers', 'Remote Schemas']
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: <SiMongodb size={32} color="#47a248" />,
    description: 'NoSQL document database for high-volume, flexible data storage.',
    experience: '6+ years',
    notableProjects: ['Analytics Platform', 'Content Management', 'IoT Data Storage']
  },
  {
    name: 'MS SQL Server',
    category: 'Database',
    icon: <FaDatabase size={32} color="#CC2927" />,
    description: 'Enterprise-grade relational database management system for mission-critical applications.',
    experience: '10+ years',
    notableProjects: ['Data Warehousing', 'Transactional Systems', 'Reporting Solutions']
  },
  {
    name: 'ASP.NET Core',
    category: 'Backend',
    icon: <SiDotnet size={32} color="#512bd4" />,
    description: 'High-performance, cross-platform web framework for building modern APIs and web apps.',
    experience: '8+ years',
    notableProjects: ['Web APIs', 'Enterprise Web Apps', 'Authentication Services']
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    icon: <FaTools size={32} color="#6366f1" />,
    description: 'Automating build, test, and deployment pipelines for rapid and reliable delivery.',
    experience: '7+ years',
    notableProjects: ['Automated Deployments', 'Quality Gates', 'Multi-Cloud Pipelines']
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    icon: <SiGithubactions size={32} color="#2088ff" />,
    description: 'Workflow automation and CI/CD pipelines using GitHub Actions.',
    experience: '3+ years',
    notableProjects: ['Monorepo Automation', 'Release Workflows', 'Integration Testing']
  }
]

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'DevOps', 'Database']

export default function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

  const filteredTools = selectedCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of the technologies I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredTools.map((tool) => (
              <m.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedTool(tool)}
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `radial-gradient(circle at 80% 20%, ${tool.category === 'Frontend' ? '#3b82f6' : tool.category === 'Backend' ? '#a855f7' : tool.category === 'Cloud' ? '#06b6d4' : tool.category === 'DevOps' ? '#6366f1' : '#10b981'} 0%, transparent 70%)`}} />
                <div className="p-6 relative">
                  <div className="flex items-center space-x-4">
                    {tool.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {tool.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                      {tool.experience} experience
                    </span>
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tool Details Modal */}
        <AnimatePresence>
          {selectedTool && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedTool(null)}
            >
              <m.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center space-x-4">
                  {selectedTool.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedTool.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {selectedTool.category}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Experience
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {selectedTool.experience}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notable Projects
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {selectedTool.notableProjects.map((project, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        • {project}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="mt-6 w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 