'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Formation } from '@/types';
import { formatPrice, formatDate, getFormationLevelLabel } from '@/lib/utils';

// Formations réelles EPIKAÏZO avec liens fonctionnels
const mockFormations: Formation[] = [
  {
    id: 1,
    title: 'Formation Aviation Civile',
    slug: 'aviation',
    description: 'Formations spécialisées aux métiers de l\'aviation civile au Gabon.',
    shortDescription: 'Personnel navigant, agent d\'escale, pilote et maintenance aéronautique.',
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
    duration: 720,
    price: 1000000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2025-09-15',
    endDate: '2026-09-15',
    maxStudents: 25,
    currentStudents: 18,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Baccalauréat gabonais', 'Certificat médical'],
    objectives: ['Maîtriser les opérations aéroportuaires', 'Obtenir les certifications aviation'],
    program: [],
    instructor: {
      id: 1,
      firstName: 'Capitaine',
      lastName: 'Mbongo',
      email: 'c.mbongo@universityepikaizo.com',
      bio: 'Pilote expérimenté Air Gabon avec 15 ans d\'expérience',
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
    title: 'École Spécialisée de Logistique',
    slug: 'logistique',
    description: 'Formation Licence en logistique avec spécialisations sectorielles.',
    shortDescription: 'Logistique maritime, pétrolière, aéroportuaire et hospitalière.',
    content: '',
    category: {
      id: 2,
      name: 'Logistique',
      slug: 'logistique',
      description: 'Formations en logistique',
      icon: '📦',
      color: 'red',
    },
    level: 'debutant',
    duration: 1080,
    price: 850000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2025-09-15',
    endDate: '2028-06-15',
    maxStudents: 30,
    currentStudents: 22,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Baccalauréat gabonais'],
    objectives: ['Maîtriser la supply chain', 'Spécialisation sectorielle'],
    program: [],
    instructor: {
      id: 2,
      firstName: 'Dr. Marie',
      lastName: 'Ndong',
      email: 'm.ndong@universityepikaizo.com',
      bio: 'Experte logistique Port d\'Owendo avec 12 ans d\'expérience',
      specializations: ['Supply Chain', 'Logistique portuaire'],
      experience: 12,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: 3,
    title: 'Sciences de Gestion (DUT)',
    slug: 'gestion',
    description: 'Formation DUT avec 7 spécialisations professionnelles.',
    shortDescription: 'QHSE, RH, Commerce international, Marketing digital, Finance.',
    content: '',
    category: {
      id: 3,
      name: 'Sciences de Gestion',
      slug: 'gestion',
      description: 'Formations en sciences de gestion',
      icon: '📊',
      color: 'blue',
    },
    level: 'debutant',
    duration: 720,
    price: 850000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2025-09-15',
    endDate: '2027-06-15',
    maxStudents: 35,
    currentStudents: 28,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Baccalauréat gabonais (toutes séries)'],
    objectives: ['Obtenir le DUT Sciences de Gestion', 'Choisir sa spécialisation'],
    program: [],
    instructor: {
      id: 3,
      firstName: 'Prof. Jean',
      lastName: 'Obiang',
      email: 'j.obiang@universityepikaizo.com',
      bio: 'Docteur en gestion, consultant entreprises gabonaises',
      specializations: ['Management', 'Sciences de gestion'],
      experience: 18,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: 4,
    title: 'Formations Certifiantes (6 mois)',
    slug: 'certifiantes',
    description: 'Programmes intensifs de spécialisation technique aéroportuaire.',
    shortDescription: 'Bagages, engins, GPU, marshalling, arrimage - insertion rapide.',
    content: '',
    category: {
      id: 4,
      name: 'Formations Certifiantes',
      slug: 'certifiantes',
      description: 'Formations techniques courtes',
      icon: '🔧',
      color: 'red',
    },
    level: 'debutant',
    duration: 180,
    price: 1200000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2025-09-15',
    endDate: '2026-03-15',
    maxStudents: 20,
    currentStudents: 15,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Niveau 5ème à Terminale'],
    objectives: ['Maîtriser les techniques aéroportuaires', 'Insertion professionnelle rapide'],
    program: [],
    instructor: {
      id: 4,
      firstName: 'Technicien',
      lastName: 'Ondo',
      email: 't.ondo@universityepikaizo.com',
      bio: 'Expert technique aéroport Léon M\'ba avec 10 ans d\'expérience',
      specializations: ['Techniques aéroportuaires', 'Formation pratique'],
      experience: 10,
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

