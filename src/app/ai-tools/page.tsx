import { Metadata } from 'next';
import { FaGithub, FaGoogle, FaRobot, FaMagic, FaCloud, FaBolt, FaHeart, FaCode, FaRocket } from 'react-icons/fa';
import { SiReplit, SiOpenai } from 'react-icons/si';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Tools | Amit Yaduwanshi',
  description: 'A curated list of modern AI tools for developers, creators, and businesses.'
};

const aiTools = [
  {
    name: 'Cursor',
    description: 'AI-powered code editor and assistant for developers.',
    icon: <FaCode size={28} color="#38bdf8" />,
    link: 'https://www.cursor.so/'
  },
  {
    name: 'Windsurf',
    description: 'AI agent for workflow automation and productivity.',
    icon: <FaMagic size={28} color="#a855f7" />,
    link: 'https://windsurf.ai/'
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster.',
    icon: <FaGithub size={28} color="#24292f" />,
    link: 'https://github.com/features/copilot'
  },
  {
    name: 'Replit',
    description: 'Collaborative online IDE with AI code completion.',
    icon: <SiReplit size={28} color="#f26207" />,
    link: 'https://replit.com/'
  },
  {
    name: 'Bolt.new',
    description: 'AI-powered document and workflow automation.',
    icon: <FaBolt size={28} color="#fbbf24" />,
    link: 'https://bolt.new/'
  },
  {
    name: 'Lovable.ai',
    description: 'AI for content creation, branding, and marketing.',
    icon: <FaHeart size={28} color="#ef4444" />,
    link: 'https://lovable.ai/'
  },
  {
    name: 'Claude AI',
    description: 'Conversational AI assistant by Anthropic.',
    icon: <FaRobot size={28} color="#6366f1" />,
    link: 'https://claude.ai/'
  },
  {
    name: 'Google AI Studio',
    description: 'Experiment and build with Google\'s generative AI models.',
    icon: <FaGoogle size={28} color="#4285F4" />,
    link: 'https://aistudio.google.com/'
  },
  {
    name: 'Genspark.ai',
    description: 'AI-powered platform for generating creative content.',
    icon: <FaMagic size={28} color="#f43f5e" />,
    link: 'https://genspark.ai/'
  },
  {
    name: 'Manus.im',
    description: 'AI-powered writing and productivity assistant.',
    icon: <FaRocket size={28} color="#0ea5e9" />,
    link: 'https://manus.im/'
  },
  {
    name: 'OpenAI ChatGPT',
    description: 'Conversational AI for text generation, Q&A, and more.',
    icon: <SiOpenai size={28} color="#10b981" />,
    link: 'https://chat.openai.com/'
  },
  {
    name: 'Anthropic Console',
    description: 'Platform for exploring and using Claude models.',
    icon: <FaCloud size={28} color="#6366f1" />,
    link: 'https://console.anthropic.com/'
  },
  {
    name: 'Perplexity AI',
    description: 'AI-powered search and conversational assistant.',
    icon: <FaRobot size={28} color="#0ea5e9" />,
    link: 'https://www.perplexity.ai/'
  },
  {
    name: 'Notion AI',
    description: 'AI features for note-taking, docs, and productivity.',
    icon: <FaMagic size={28} color="#6366f1" />,
    link: 'https://www.notion.so/product/ai'
  },
  {
    name: 'Midjourney',
    description: 'AI-powered image generation and creative visuals.',
    icon: <FaMagic size={28} color="#a855f7" />,
    link: 'https://www.midjourney.com/'
  },
  {
    name: 'Runway',
    description: 'AI video, image, and creative media tools.',
    icon: <FaRocket size={28} color="#f59e42" />,
    link: 'https://runwayml.com/'
  },
  {
    name: 'Hugging Face',
    description: 'Open platform for AI models and datasets.',
    icon: <FaRobot size={28} color="#fbbf24" />,
    link: 'https://huggingface.co/'
  },
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">AI Tools</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          A curated list of modern AI tools for developers, creators, and businesses. Explore the latest in AI-powered productivity, coding, content creation, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aiTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                {tool.icon}
                <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {tool.description}
              </p>
              <span className="inline-block text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                Visit Website
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 