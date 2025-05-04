import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Success Stories | Amit Yaduwanshi',
  description: 'Real-world success stories and testimonials from clients and mentees who have benefited from our services.',
}

export default function SuccessStories() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Success Stories', href: '/success-stories' }
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Success Stories</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: 'Cloud Migration Success',
              company: 'Fortune 500 Financial Services',
              excerpt: 'Successfully migrated legacy systems to cloud infrastructure, resulting in 50% cost reduction and improved scalability.',
              link: '/case-studies/cloud-migration'
            },
            {
              title: 'Digital Transformation',
              company: 'Global Retail Chain',
              excerpt: 'Led digital transformation initiative that increased online sales by 200% and improved customer experience.',
              link: '/case-studies/digital-transformation'
            },
            {
              title: 'System Architecture',
              company: 'Healthcare Technology Provider',
              excerpt: 'Designed and implemented scalable architecture that improved system performance by 300%.',
              link: '/case-studies/system-architecture'
            },
            {
              title: 'Enterprise Integration',
              company: 'Manufacturing Conglomerate',
              excerpt: 'Integrated multiple legacy systems, reducing operational costs by 40% and improving efficiency.',
              link: '/case-studies/enterprise-integration'
            }
          ].map((story) => (
            <Link 
              key={story.title}
              href={story.link}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <div className="text-blue-600 dark:text-blue-400 mb-2">{story.company}</div>
              <p className="text-gray-600 dark:text-gray-300">{story.excerpt}</p>
            </Link>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'CTO, Tech Solutions Inc.',
              testimonial: 'Amit\'s expertise in enterprise architecture helped us transform our technology stack. His guidance was invaluable in our cloud migration journey.',
              image: '/images/testimonials/sarah.jpg'
            },
            {
              name: 'Michael Chen',
              role: 'Senior Architect, Global Systems',
              testimonial: 'The mentorship program provided by Amit has been instrumental in my career growth. His insights into system design and architecture are exceptional.',
              image: '/images/testimonials/michael.jpg'
            },
            {
              name: 'Emily Rodriguez',
              role: 'Product Manager, Digital Innovations',
              testimonial: 'Working with Amit on our digital transformation project was a game-changer. His strategic approach and technical expertise delivered outstanding results.',
              image: '/images/testimonials/emily.jpg'
            },
            {
              name: 'David Wilson',
              role: 'Enterprise Architect, Financial Services',
              testimonial: 'Amit\'s consulting services helped us optimize our architecture and reduce costs significantly. His knowledge of modern enterprise patterns is impressive.',
              image: '/images/testimonials/david.jpg'
            },
            {
              name: 'Lisa Thompson',
              role: 'Technical Lead, Healthcare Solutions',
              testimonial: 'The training workshops conducted by Amit were incredibly valuable. His practical approach and real-world examples made complex concepts easy to understand.',
              image: '/images/testimonials/lisa.jpg'
            },
            {
              name: 'Robert Kim',
              role: 'Director of Engineering, E-commerce Platform',
              testimonial: 'Amit\'s guidance in implementing microservices architecture transformed our platform\'s scalability and performance. Highly recommended!',
              image: '/images/testimonials/robert.jpg'
            }
          ].map((testimonial) => (
            <div 
              key={testimonial.name}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 