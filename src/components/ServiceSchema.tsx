export default function ServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Person",
      "name": "Amit Yaduwanshi",
      "jobTitle": "Senior Software Architect"
    },
    "serviceType": "Software Architecture Consulting",
    "areaServed": "Worldwide",
    "offers": [
      {
        "@type": "Offer",
        "name": "Enterprise Consulting",
        "description": "Strategic technology solutions for large-scale organizations",
        "url": "https://amityaduwanshi.com/consulting",
        "category": "Software Architecture"
      },
      {
        "@type": "Offer",
        "name": "Training Workshops",
        "description": "Comprehensive technical training and workshops",
        "url": "https://amityaduwanshi.com/courses",
        "category": "Technical Training"
      },
      {
        "@type": "Offer",
        "name": "Mentorship Program",
        "description": "One-on-one guidance for aspiring architects",
        "url": "https://amityaduwanshi.com/mentorship",
        "category": "Professional Development"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Architecture Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Architecture Design",
            "description": "Comprehensive system architecture design and implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Migration",
            "description": "Enterprise cloud migration and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Leadership",
            "description": "Technical leadership and team mentoring"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
} 