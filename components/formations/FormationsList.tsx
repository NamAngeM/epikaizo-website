'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Star, Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { Formation, FormationFilters } from '@/types';
import { formatPrice, formatDate, getFormationLevelLabel } from '@/lib/utils';

interface FormationsListProps {
  filters?: FormationFilters;
}

export function FormationsList({ filters = {} }: FormationsListProps) {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

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
    // Ajouter plus de formations mock...
  ];

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setFormations(mockFormations);
      setLoading(false);
    }, 1000);
  }, [filters]);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {formations.length} formation{formations.length > 1 ? 's' : ''} trouvée{formations.length > 1 ? 's' : ''}
          </h2>
          <p className="text-gray-600">
            Découvrez nos formations professionnelles d'excellence
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort */}
          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              setSortBy(field);
              setSortOrder(order as 'asc' | 'desc');
            }}
            className="select text-sm"
          >
            <option value="createdAt-desc">Plus récentes</option>
            <option value="createdAt-asc">Plus anciennes</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="title-asc">Titre A-Z</option>
            <option value="title-desc">Titre Z-A</option>
          </select>

          {/* View mode */}
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Formations grid/list */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
        {formations.map((formation, index) => (
          <motion.div
            key={formation.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={viewMode === 'grid' ? 'card-hover group' : 'card group'}
          >
            {viewMode === 'grid' ? (
              // Grid view
              <>
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
              </>
            ) : (
              // List view
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-6xl">{formation.category.icon}</span>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge-primary">
                            {formation.category.name}
                          </span>
                          <span className="badge-secondary">
                            {getFormationLevelLabel(formation.level)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {formation.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">
                          {formatPrice(formation.price, formation.currency)}
                        </div>
                        <div className="flex items-center justify-end">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">4.8</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 flex-1">
                      {formation.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {formation.duration}h
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {formation.currentStudents}/{formation.maxStudents}
                        </div>
                        {formation.location && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {formation.location}
                          </div>
                        )}
                      </div>
                      <Link
                        href={`/formations/${formation.slug}`}
                        className="btn-primary group-hover:bg-primary-700 transition-colors"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {formations.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucune formation trouvée
          </h3>
          <p className="text-gray-600 mb-6">
            Essayez de modifier vos critères de recherche ou de supprimer certains filtres.
          </p>
          <button className="btn-primary">
            Voir toutes les formations
          </button>
        </div>
      )}

      {/* Pagination */}
      {formations.length > 0 && (
        <div className="flex items-center justify-center space-x-2">
          <button className="btn-outline btn-sm" disabled>
            Précédent
          </button>
          <button className="btn-primary btn-sm">1</button>
          <button className="btn-outline btn-sm">2</button>
          <button className="btn-outline btn-sm">3</button>
          <button className="btn-outline btn-sm">
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}

