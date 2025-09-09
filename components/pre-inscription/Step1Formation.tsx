'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, Euro, CheckCircle } from 'lucide-react';
import { PreInscriptionData } from './PreInscriptionWizard';
import { Formation } from '@/types';
import { formatPrice, formatDate } from '@/lib/utils';

interface Step1FormationProps {
  data: PreInscriptionData;
  updateData: (data: Partial<PreInscriptionData>) => void;
}

// Mock data - sera remplacé par les données de Strapi
const mockFormations: Formation[] = [
  {
    id: 1,
    title: 'Formation Agent d\'Escale Commercial',
    slug: 'formation-agent-escale-commercial',
    description: 'Formation complète pour devenir agent d\'escale commercial avec option accueil et enregistrement.',
    shortDescription: 'Devenez agent d\'escale commercial avec notre formation certifiante de 6 mois.',
    content: '',
    category: {
      id: 1,
      name: 'Aviation',
      slug: 'aviation',
      description: 'Formations en aviation',
      icon: '✈️',
      color: 'blue',
    },
    level: 'debutant',
    duration: 480, // 6 mois
    price: 1000000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2024-09-15',
    endDate: '2025-03-15',
    maxStudents: 25,
    currentStudents: 12,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Bac ou Terminale', '4 photos', 'Acte de naissance'],
    objectives: ['Maîtriser l\'accueil et l\'enregistrement', 'Gérer la billeterie', 'Assurer le service client'],
    program: [
      {
        id: 1,
        title: 'Agent d\'escale commercial Option: accueil et enregistrement',
        description: 'Formation complète pour l\'accueil et l\'enregistrement des passagers',
        duration: 240,
        order: 1
      },
      {
        id: 2,
        title: 'Billeterie',
        description: 'Gestion de la billeterie et des réservations',
        duration: 240,
        order: 2
      }
    ],
    instructor: {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@universityepikaizo.com',
      bio: 'Expert en aviation commerciale avec 15 ans d\'expérience',
      specializations: ['Aviation commerciale', 'Service client'],
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
    title: 'Formation Agent de Manutention Aéroportuaire',
    slug: 'formation-agent-manutention-aeroportuaire',
    description: 'Formation spécialisée en manutention aéroportuaire et services au sol.',
    shortDescription: 'Devenez agent de manutention aéroportuaire avec notre formation de 6 mois.',
    content: '',
    category: {
      id: 1,
      name: 'Aviation',
      slug: 'aviation',
      description: 'Formations en aviation',
      icon: '✈️',
      color: 'blue',
    },
    level: 'debutant',
    duration: 480, // 6 mois
    price: 1200000,
    currency: 'FCFA',
    language: 'fr',
    startDate: '2024-09-15',
    endDate: '2025-03-15',
    maxStudents: 20,
    currentStudents: 8,
    isActive: true,
    isOnline: false,
    isInPerson: true,
    location: 'Charbonnage, Libreville, Gabon',
    prerequisites: ['Niveau 5ème à Terminale', 'Permis B (pour conduite d\'engins)', 'Certificat médical'],
    objectives: ['Maîtriser la manutention des bagages', 'Conduire les engins légers', 'Assurer les services au sol'],
    program: [
      {
        id: 1,
        title: 'Traitement de bagages et chargement avion',
        description: 'Techniques de manutention et chargement des bagages',
        duration: 60,
        order: 1
      },
      {
        id: 2,
        title: 'Traitement de la touché',
        description: 'Procédures d\'atterrissage et de décollage',
        duration: 40,
        order: 2
      },
      {
        id: 3,
        title: 'Conduite d\'engins légers',
        description: 'Conduite des équipements au sol (permis B requis)',
        duration: 80,
        order: 3
      },
      {
        id: 4,
        title: 'Service toilette et eau potable',
        description: 'Maintenance et service des équipements de bord',
        duration: 30,
        order: 4
      },
      {
        id: 5,
        title: 'GPU (grounds-power-unit)',
        description: 'Utilisation des groupes électrogènes de piste',
        duration: 40,
        order: 5
      },
      {
        id: 6,
        title: 'Marchalling',
        description: 'Guidage et signalisation des aéronefs',
        duration: 50,
        order: 6
      },
      {
        id: 7,
        title: 'Arrimage et Palettisation',
        description: 'Techniques d\'arrimage et de palettisation des marchandises',
        duration: 60,
        order: 7
      }
    ],
    instructor: {
      id: 2,
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@universityepikaizo.com',
      bio: 'Experte en manutention aéroportuaire avec 10 ans d\'expérience',
      specializations: ['Manutention aéroportuaire', 'Services au sol'],
      experience: 10,
      socialLinks: {},
    },
    images: [],
    documents: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
];

const paymentMethods = [
  { value: 'full', label: 'Paiement intégral', description: 'Réduction de 5%' },
  { value: 'installments', label: 'Paiement échelonné', description: '3 versements' },
  { value: 'financing', label: 'Financement', description: 'Avec organisme partenaire' },
];


export function Step1Formation({ data, updateData }: Step1FormationProps) {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setFormations(mockFormations);
      setLoading(false);
    }, 1000);
  }, []);

  const handleFormationSelect = (formation: Formation) => {
    updateData({
      formationId: formation.id,
      formationTitle: formation.title,
    });
  };

  const handlePaymentMethodSelect = (method: string) => {
    updateData({ paymentMethod: method });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="loader-lg mx-auto"></div>
        <p className="mt-4 text-gray-600">Chargement des formations...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Choisissez votre formation
        </h2>
        <p className="text-gray-600">
          Sélectionnez la formation qui correspond à vos objectifs professionnels.
        </p>
      </div>

      {/* Formations list */}
      <div className="space-y-4">
        {formations.map((formation) => (
          <div
            key={formation.id}
            onClick={() => handleFormationSelect(formation)}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
              data.formationId === formation.id
                ? 'border-epikaizo-red bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{formation.category.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {formation.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {formation.category.name} • {formation.level}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {formation.shortDescription}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(formation.startDate)}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {formation.duration}h
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {formation.currentStudents}/{formation.maxStudents}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {formation.isOnline ? 'En ligne' : formation.location}
                  </div>
                </div>
              </div>

              <div className="text-right ml-6">
                <div className="text-2xl font-bold text-epikaizo-red mb-2">
                  {formatPrice(formation.price, formation.currency)}
                </div>
                {data.formationId === formation.id && (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment method selection */}
      {data.formationId && (
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Mode de paiement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.value}
                onClick={() => handlePaymentMethodSelect(method.value)}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  data.paymentMethod === method.value
                    ? 'border-epikaizo-red bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {method.label}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                  {data.paymentMethod === method.value && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prerequisites */}
      {data.formationId && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            Prérequis pour cette formation :
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {formations
              .find(f => f.id === data.formationId)
              ?.prerequisites.map((req, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {req}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}