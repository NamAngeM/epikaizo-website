'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Formation } from '@/types';
import { formatPrice, formatDate, getFormationLevelLabel } from '@/lib/utils';

// Mock data - sera remplacé par les données de Strapi
const mockFormations: Formation[] = [
  {
    id: 1,
    title: 'Formation Pilote de Ligne',
    slug: 'formation-pilote-ligne',
    description: 'Formation complète pour devenir pilote de ligne commercial.',
    shortDescription: 'Devenez pilote de ligne avec notre formation certifiée.',
    content: '',
    category: {
      id: 1,
      name: 'Aviation',
      slug: 'aviation',
      description: 'Formations en aviation',
      icon: '✈️',
      color: 'blue',
    },
    level: 'intermediaire',
    duration: 1200,
    price: 85000,
    currency: 'EUR',
    language: 'fr',
    startDate: '2024-03-15',
    endDate: '2024-12-15',
    maxStudents: 20,
    currentStudents: 12,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Paris, France',
    prerequisites: ['Bac+2', 'Certificat médical'],
    objectives: ['Obtenir la licence ATPL', 'Maîtriser les procédures de vol'],
    program: [],
    instructor: {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@epikaizo.com',
      bio: 'Pilote expérimenté avec 15 ans d\'expérience',
      specializations: ['Aviation commerciale', 'Formation pilote'],
      experience: 15,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: 2,
    title: 'Gestion de la Chaîne Logistique',
    slug: 'gestion-chaine-logistique',
    description: 'Maîtrisez les enjeux de la supply chain moderne.',
    shortDescription: 'Optimisez votre chaîne logistique avec nos experts.',
    content: '',
    category: {
      id: 2,
      name: 'Logistique',
      slug: 'logistique',
      description: 'Formations en logistique',
      icon: '📦',
      color: 'green',
    },
    level: 'debutant',
    duration: 40,
    price: 1200,
    currency: 'EUR',
    language: 'fr',
    startDate: '2024-02-20',
    endDate: '2024-03-20',
    maxStudents: 25,
    currentStudents: 18,
    isActive: true,
    isOnline: true,
    isInPerson: false,
    prerequisites: ['Bac+2'],
    objectives: ['Comprendre la supply chain', 'Optimiser les flux'],
    program: [],
    instructor: {
      id: 2,
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@epikaizo.com',
      bio: 'Experte en logistique avec 10 ans d\'expérience',
      specializations: ['Supply Chain', 'Logistique internationale'],
      experience: 10,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: 3,
    title: 'Management Stratégique',
    slug: 'management-strategique',
    description: 'Développez vos compétences en management et leadership.',
    shortDescription: 'Devenez un leader efficace avec notre formation.',
    content: '',
    category: {
      id: 3,
      name: 'Sciences de Gestion',
      slug: 'sciences-gestion',
      description: 'Formations en sciences de gestion',
      icon: '📊',
      color: 'purple',
    },
    level: 'avance',
    duration: 60,
    price: 1800,
    currency: 'EUR',
    language: 'fr',
    startDate: '2024-04-10',
    endDate: '2024-06-10',
    maxStudents: 15,
    currentStudents: 8,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Lyon, France',
    prerequisites: ['Bac+3', 'Expérience managériale'],
    objectives: ['Développer le leadership', 'Maîtriser la stratégie'],
    program: [],
    instructor: {
      id: 3,
      firstName: 'Pierre',
      lastName: 'Durand',
      email: 'pierre.durand@epikaizo.com',
      bio: 'Consultant en management avec 20 ans d\'expérience',
      specializations: ['Leadership', 'Stratégie d\'entreprise'],
      experience: 20,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
];

export function FeaturedFormations() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setFormations(mockFormations);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="loader-lg mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des formations...</p>
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
            Formations à la une
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations les plus populaires, conçues par des experts 
            pour répondre aux besoins du marché actuel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{formation.category.icon}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge-primary">
                    {formation.category.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge-secondary">
                    {getFormationLevelLabel(formation.level)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {formation.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {formation.shortDescription}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {formation.duration}h
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {formation.currentStudents}/{formation.maxStudents} étudiants
                  </div>
                  {formation.location && (
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {formation.location}
                    </div>
                  )}
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-primary-600">
                    {formatPrice(formation.price, formation.currency)}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.8</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/formations/${formation.slug}`}
                  className="btn-primary w-full group-hover:bg-primary-700 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
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
            href="/formations"
            className="btn-outline btn-lg"
          >
            Voir toutes les formations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

