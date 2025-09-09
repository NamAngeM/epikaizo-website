'use client';

import { Formation, News } from '@/types';
import { generateStructuredData, generateFormationStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'formation' | 'news' | 'breadcrumb';
  data?: any;
  formation?: Formation;
  news?: News;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function StructuredData({ type, data, formation, news, breadcrumbs }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'organization':
      structuredData = generateStructuredData(data);
      break;
    case 'formation':
      if (formation) {
        structuredData = generateFormationStructuredData(formation);
      }
      break;
    case 'news':
      if (news) {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: news.title,
          description: news.excerpt,
          author: {
            '@type': 'Person',
            name: `${news.author.firstName} ${news.author.lastName}`,
          },
          publisher: {
            '@type': 'Organization',
            name: 'EPIKAIZO',
            logo: {
              '@type': 'ImageObject',
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
            },
          },
          datePublished: news.publishedAt,
          dateModified: news.updatedAt,
          ...(news.featuredImage && {
            image: news.featuredImage.url,
          }),
        };
      }
      break;
    case 'breadcrumb':
      if (breadcrumbs) {
        structuredData = generateBreadcrumbStructuredData(breadcrumbs);
      }
      break;
    default:
      return null;
  }

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
