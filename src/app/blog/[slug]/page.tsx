import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  content: string
  image: string
  tags: string[]
  readingTime: string
}

// This would typically come from your CMS or API
async function getPost(slug: string): Promise<BlogPost | null> {
  // Implement your data fetching logic here
  return null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Amit Yaduwanshi's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Person",
      "name": "Amit Yaduwanshi",
      "jobTitle": "Senior Software Architect"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://amityaduwanshi.com/blog/${post.slug}`
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <article className="container mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readingTime} read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/avatar.jpg"
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-gray-600">Senior Software Architect</div>
            </div>
          </div>

          <div className="relative aspect-video mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </header>

        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <footer className="max-w-4xl mx-auto mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tags/${tag}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Blog
            </Link>
            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Print article"
              >
                Print
              </button>
              <button
                onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Share via email"
              >
                Share
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
} 