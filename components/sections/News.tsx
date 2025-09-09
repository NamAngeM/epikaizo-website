'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { News as NewsType } from '@/types';
import { formatDate, generateExcerpt } from '@/lib/utils';

// Mock data - sera remplacé par les données de Strapi
const mockNews: NewsType[] = [
  {
    id: 1,
    title: 'Nouvelle formation en Aviation : Pilote de Ligne Commercial',
    slug: 'nouvelle-formation-aviation-pilote-ligne',
    content: 'Nous sommes fiers d\'annoncer le lancement de notre nouvelle formation de Pilote de Ligne Commercial...',
    excerpt: 'Découvrez notre nouvelle formation certifiante pour devenir pilote de ligne commercial.',
    author: {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@epikaizo.com',
      bio: 'Directeur des formations aviation',
      specializations: ['Aviation commerciale'],
      experience: 15,
      socialLinks: {},
    },
    category: 'Formation',
    tags: ['aviation', 'pilote', 'nouvelle formation'],
    isPublished: true,
    publishedAt: '2024-01-15',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'EPIKAIZO obtient la certification ISO 9001:2015',
    slug: 'epikaizo-certification-iso-9001',
    content: 'Nous avons le plaisir d\'annoncer que EPIKAIZO a obtenu la certification ISO 9001:2015...',
    excerpt: 'Notre engagement qualité reconnu par la certification ISO 9001:2015.',
    author: {
      id: 2,
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@epikaizo.com',
      bio: 'Responsable qualité',
      specializations: ['Qualité', 'Certification'],
      experience: 10,
      socialLinks: {},
    },
    category: 'Actualité',
    tags: ['certification', 'qualité', 'iso'],
    isPublished: true,
    publishedAt: '2024-01-10',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
  {
    id: 3,
    title: 'Partenariat avec Air France pour les formations aviation',
    slug: 'partenariat-air-france-formations-aviation',
    content: 'EPIKAIZO et Air France annoncent un partenariat stratégique pour développer les formations aviation...',
    excerpt: 'Un nouveau partenariat pour renforcer nos formations en aviation.',
    author: {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@epikaizo.com',
      bio: 'Directeur des formations aviation',
      specializations: ['Aviation commerciale'],
      experience: 15,
      socialLinks: {},
    },
    category: 'Partenariat',
    tags: ['partenariat', 'air france', 'aviation'],
    isPublished: true,
    publishedAt: '2024-01-05',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
  },
];

export function News() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="loader-lg mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Actualités & Événements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières actualités, nouveaux programmes et événements 
            organisés par EPIKAIZO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📰</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge-primary">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge-secondary">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>
                        {article.author.firstName} {article.author.lastName}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/actualites/${article.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all"
                >
                  Lire la suite
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/actualites"
            className="btn-outline btn-lg"
          >
            Voir toutes les actualités
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

