import Breadcrumbs from '@/components/Breadcrumbs'

const tools = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: '🟦', desc: 'Typed superset of JavaScript for scalable apps.' },
      { name: 'JavaScript', icon: '🟨', desc: 'The language of the web.' },
      { name: 'C#', icon: '💠', desc: 'Modern, object-oriented language for .NET.' },
      { name: 'Python', icon: '🐍', desc: 'Versatile scripting and automation.' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: '.NET Core', icon: '🌐', desc: 'Cross-platform backend framework.' },
      { name: 'Node.js', icon: '🟩', desc: 'JavaScript runtime for scalable servers.' },
      { name: 'React', icon: '⚛️', desc: 'Component-based UI library.' },
      { name: 'Next.js', icon: '⏭️', desc: 'React framework for SSR and SSG.' },
      { name: 'Express', icon: '🚂', desc: 'Minimal Node.js web framework.' },
      { name: 'ASP.NET Core', icon: '🧩', desc: 'High-performance .NET web framework.' },
    ],
  },
  {
    category: 'Cloud',
    items: [
      { name: 'Azure', icon: '☁️', desc: 'Microsoft cloud platform.' },
      { name: 'AWS', icon: '🟧', desc: 'Amazon Web Services.' },
      { name: 'GCP', icon: '🌈', desc: 'Google Cloud Platform.' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL Server', icon: '🗄️', desc: 'Enterprise relational database.' },
      { name: 'PostgreSQL', icon: '🐘', desc: 'Advanced open-source RDBMS.' },
      { name: 'MongoDB', icon: '🍃', desc: 'NoSQL document database.' },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', icon: '🐳', desc: 'Containerization for apps.' },
      { name: 'Kubernetes', icon: '☸️', desc: 'Container orchestration.' },
      { name: 'Azure DevOps', icon: '🔧', desc: 'CI/CD and project automation.' },
      { name: 'GitHub Actions', icon: '🤖', desc: 'CI/CD for GitHub projects.' },
      { name: 'Terraform', icon: '🌍', desc: 'Infrastructure as code.' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️', desc: 'Modern UI development.' },
      { name: 'Next.js', icon: '⏭️', desc: 'Production-grade React apps.' },
      { name: 'Tailwind CSS', icon: '🌬️', desc: 'Utility-first CSS framework.' },
      { name: 'Bootstrap', icon: '🅱️', desc: 'Popular CSS framework.' },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Redis', icon: '🟥', desc: 'In-memory data store.' },
      { name: 'RabbitMQ', icon: '🐇', desc: 'Message broker for async systems.' },
      { name: 'Elasticsearch', icon: '🔎', desc: 'Search and analytics engine.' },
      { name: 'GraphQL', icon: '🔗', desc: 'Flexible API query language.' },
      { name: 'REST', icon: '🌐', desc: 'Standard API architecture.' },
      { name: 'Microservices', icon: '🧩', desc: 'Distributed system design.' },
      { name: 'CI/CD', icon: '🚀', desc: 'Continuous integration & delivery.' },
    ],
  },
]

export default function ToolsTechnologies() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Tools & Technologies', href: '/tools' }
      ]} />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white tracking-tight">Tools & Technologies</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">A curated selection of the languages, frameworks, platforms, and tools I use to build modern, scalable, and robust solutions for enterprises and startups.</p>
        <div className="grid md:grid-cols-2 gap-12">
          {tools.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">{cat.category}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {cat.items.map((tool) => (
                  <div key={tool.name} className="group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <span className="text-3xl mr-2">{tool.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">{tool.name}</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">{tool.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 