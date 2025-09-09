import { MetadataRoute } from 'next';
import { formationsApi, newsApi } from '@/lib/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/formations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admission`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pre-inscription`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    // Formations
    const formationsResponse = await formationsApi.getAll({}, 1, 1000);
    const formationPages: MetadataRoute.Sitemap = formationsResponse.data.map((formation) => ({
      url: `${baseUrl}/formations/${formation.slug}`,
      lastModified: new Date(formation.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

    // Actualités
    const newsResponse = await newsApi.getAll(1, 1000);
    const newsPages: MetadataRoute.Sitemap = newsResponse.data.map((news) => ({
      url: `${baseUrl}/actualites/${news.slug}`,
      lastModified: new Date(news.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    // Pages de catégories de formations
    const categoriesResponse = await formationsApi.getCategories();
    const categoryPages: MetadataRoute.Sitemap = categoriesResponse.data.map((category) => ({
      url: `${baseUrl}/formations/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    return [...staticPages, ...formationPages, ...newsPages, ...categoryPages];
  } catch (error) {
    console.error('Erreur lors de la génération du sitemap:', error);
    return staticPages;
  }
}
