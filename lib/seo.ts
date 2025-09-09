import { Metadata } from 'next';
import { Formation, News } from '@/types';

const siteConfig = {
  name: 'EPIKAIZO UNIVERSITY',
  description: 'Formations professionnelles d\'excellence en aviation, logistique, tourisme & hôtelerie, QHSE et communication. Let\'s promote excellence - excellence first',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/logo-epk.png',
  twitterCard: 'summary_large_image',
  twitterHandle: '@epikaizo',
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const fullImage = image || siteConfig.ogImage;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'fr_FR',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map(name => ({ name })) }),
      ...(tags && { tags }),
    },
    twitter: {
      card: siteConfig.twitterCard as 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateFormationMetadata(formation: Formation): Metadata {
  return generateMetadata({
    title: formation.title,
    description: formation.shortDescription || formation.description,
    url: `/formations/${formation.slug}`,
    type: 'article',
    publishedTime: formation.createdAt,
    modifiedTime: formation.updatedAt,
    authors: [`${formation.instructor.firstName} ${formation.instructor.lastName}`],
    tags: [formation.category.name, formation.level],
  });
}

export function generateNewsMetadata(news: News): Metadata {
  return generateMetadata({
    title: news.title,
    description: news.excerpt,
    url: `/actualites/${news.slug}`,
    type: 'article',
    publishedTime: news.publishedAt,
    modifiedTime: news.updatedAt,
    authors: [`${news.author.firstName} ${news.author.lastName}`],
    tags: news.tags,
  });
}

export function generateStructuredData(data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-epk.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '076-55-83-38',
      contactType: 'customer service',
      email: 'universityepikaizo@gmail.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Charbonnage (100mètres du terrain de basket)',
      addressLocality: 'Libreville',
      addressCountry: 'GA',
    },
    sameAs: [
      'https://www.facebook.com/epikaizo',
      'https://www.linkedin.com/company/epikaizo',
      'https://twitter.com/epikaizo',
    ],
  };

  return {
    ...baseStructuredData,
    ...data,
  };
}

export function generateFormationStructuredData(formation: Formation) {
  return generateStructuredData({
    '@type': 'Course',
    name: formation.title,
    description: formation.description,
    provider: {
      '@type': 'Organization',
      name: 'EPIKAIZO UNIVERSITY',
      url: siteConfig.url,
    },
    courseMode: formation.isOnline ? 'online' : 'blended',
    educationalLevel: formation.level,
    timeRequired: `PT${formation.duration}H`,
    offers: {
      '@type': 'Offer',
      price: formation.price,
      priceCurrency: formation.currency,
      availability: formation.isActive ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    instructor: {
      '@type': 'Person',
      name: `${formation.instructor.firstName} ${formation.instructor.lastName}`,
      email: formation.instructor.email,
    },
    ...(formation.startDate && {
      startDate: formation.startDate,
    }),
    ...(formation.endDate && {
      endDate: formation.endDate,
    }),
  });
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
