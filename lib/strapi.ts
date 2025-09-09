import axios from 'axios';
import { ApiResponse, Formation, FormationFilters, News, Testimonial, Partner } from '@/types';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
  },
});

// Fonction pour construire les paramètres de requête
function buildQueryParams(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, item));
      } else {
        searchParams.append(key, value);
      }
    }
  });
  
  return searchParams.toString();
}

// API pour les formations
export const formationsApi = {
  // Récupérer toutes les formations avec filtres
  async getAll(filters: FormationFilters = {}, page: number = 1, pageSize: number = 12) {
    const params: Record<string, any> = {
      'filters[isActive][$eq]': true,
      'populate': '*',
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
      'sort': 'createdAt:desc',
    };

    // Ajouter les filtres
    if (filters.category) {
      params['filters[category][slug][$eq]'] = filters.category;
    }
    if (filters.level) {
      params['filters[level][$eq]'] = filters.level;
    }
    if (filters.isOnline !== undefined) {
      params['filters[isOnline][$eq]'] = filters.isOnline;
    }
    if (filters.isInPerson !== undefined) {
      params['filters[isInPerson][$eq]'] = filters.isInPerson;
    }
    if (filters.priceMin) {
      params['filters[price][$gte]'] = filters.priceMin;
    }
    if (filters.priceMax) {
      params['filters[price][$lte]'] = filters.priceMax;
    }
    if (filters.durationMin) {
      params['filters[duration][$gte]'] = filters.durationMin;
    }
    if (filters.durationMax) {
      params['filters[duration][$lte]'] = filters.durationMax;
    }
    if (filters.startDate) {
      params['filters[startDate][$gte]'] = filters.startDate;
    }
    if (filters.search) {
      params['filters[$or][0][title][$containsi]'] = filters.search;
      params['filters[$or][1][description][$containsi]'] = filters.search;
    }

    const queryString = buildQueryParams(params);
    const response = await api.get(`/formations?${queryString}`);
    return response.data as ApiResponse<Formation[]>;
  },

  // Récupérer une formation par slug
  async getBySlug(slug: string) {
    const response = await api.get(`/formations?filters[slug][$eq]=${slug}&populate=*`);
    const formations = response.data.data as Formation[];
    return formations[0] || null;
  },

  // Récupérer les formations par catégorie
  async getByCategory(categorySlug: string, limit: number = 6) {
    const response = await api.get(
      `/formations?filters[category][slug][$eq]=${categorySlug}&filters[isActive][$eq]=true&populate=*&pagination[limit]=${limit}&sort=createdAt:desc`
    );
    return response.data as ApiResponse<Formation[]>;
  },

  // Récupérer les formations similaires
  async getSimilar(formationId: number, categorySlug: string, limit: number = 4) {
    const response = await api.get(
      `/formations?filters[id][$ne]=${formationId}&filters[category][slug][$eq]=${categorySlug}&filters[isActive][$eq]=true&populate=*&pagination[limit]=${limit}&sort=createdAt:desc`
    );
    return response.data as ApiResponse<Formation[]>;
  },

  // Récupérer les catégories de formations
  async getCategories() {
    const response = await api.get('/formation-categories?sort=order:asc');
    return response.data as ApiResponse<any[]>;
  },
};

// API pour les actualités
export const newsApi = {
  async getAll(page: number = 1, pageSize: number = 10) {
    const response = await api.get(
      `/news?filters[isPublished][$eq]=true&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
    return response.data as ApiResponse<News[]>;
  },

  async getBySlug(slug: string) {
    const response = await api.get(`/news?filters[slug][$eq]=${slug}&populate=*`);
    const news = response.data.data as News[];
    return news[0] || null;
  },

  async getFeatured(limit: number = 3) {
    const response = await api.get(
      `/news?filters[isPublished][$eq]=true&populate=*&pagination[limit]=${limit}&sort=publishedAt:desc`
    );
    return response.data as ApiResponse<News[]>;
  },
};

// API pour les témoignages
export const testimonialsApi = {
  async getAll(limit: number = 10) {
    const response = await api.get(
      `/testimonials?filters[isPublished][$eq]=true&populate=*&pagination[limit]=${limit}&sort=createdAt:desc`
    );
    return response.data as ApiResponse<Testimonial[]>;
  },

  async getByFormation(formationId: number) {
    const response = await api.get(
      `/testimonials?filters[formation][id][$eq]=${formationId}&filters[isPublished][$eq]=true&populate=*`
    );
    return response.data as ApiResponse<Testimonial[]>;
  },
};

// API pour les partenaires
export const partnersApi = {
  async getAll() {
    const response = await api.get(
      '/partners?filters[isActive][$eq]=true&populate=*&sort=order:asc'
    );
    return response.data as ApiResponse<Partner[]>;
  },
};

// API pour les pages
export const pagesApi = {
  async getBySlug(slug: string) {
    const response = await api.get(`/pages?filters[slug][$eq]=${slug}&filters[isPublished][$eq]=true&populate=*`);
    const pages = response.data.data as any[];
    return pages[0] || null;
  },
};

// API pour les inscriptions
export const inscriptionsApi = {
  async create(data: any) {
    const response = await api.post('/inscriptions', { data });
    return response.data;
  },

  async getByStudent(studentId: number) {
    const response = await api.get(`/inscriptions?filters[student][id][$eq]=${studentId}&populate=*`);
    return response.data as ApiResponse<any[]>;
  },

  async updateStatus(inscriptionId: number, status: string) {
    const response = await api.put(`/inscriptions/${inscriptionId}`, {
      data: { status },
    });
    return response.data;
  },
};

// API pour les contacts
export const contactApi = {
  async sendMessage(data: any) {
    const response = await api.post('/contacts', { data });
    return response.data;
  },
};

// API pour la newsletter
export const newsletterApi = {
  async subscribe(data: any) {
    const response = await api.post('/newsletter-subscriptions', { data });
    return response.data;
  },

  async unsubscribe(email: string) {
    const response = await api.delete(`/newsletter-subscriptions?filters[email][$eq]=${email}`);
    return response.data;
  },
};

export default api;

