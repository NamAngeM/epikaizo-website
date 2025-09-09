import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Plane, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  DollarSign, 
  FileText, 
  CheckCircle,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation Aviation Civile | EPIKAÏZO University',
  description: 'Formations spécialisées aux métiers de l\'aviation civile : agent d\'escale, hôtesse de l\'air, steward et management des opérations aéroportuaires.',
  keywords: ['aviation', 'hôtesse de l\'air', 'steward', 'agent d\'escale', 'aéroportuaire', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'Aviation Civile', href: '/formations/aviation' },
];

const programs = [
  {
    title: 'Agent d\'Escale Commercial',
    duration: '12 mois',
    options: [
      'Option accueil et enregistrement',
      'Formation en billeterie'
    ],
    description: 'Formation complète aux métiers de l\'accueil aéroportuaire et de la gestion des passagers.'
  },
  {
    title: 'Hôtesse de l\'Air et Steward',
    duration: '18 mois',
    options: [
      'Certificat de formation au personnel navigant commercial',
      'Formation sécurité et secourisme'
    ],
    description: 'Formation au personnel navigant commercial avec certification officielle.'
  },
  {
    title: 'Management des Opérations Aéroportuaires',
    duration: '24 mois',
    options: [
      'Gestion des opérations au sol',
      'Coordination aéroportuaire'
    ],
    description: 'Formation de niveau supérieur pour la gestion et coordination des opérations aéroportuaires.'
  }
];

const careers = [
  'Agent d\'escale aérienne',
  'Personnel navigant commercial',
  'Chef d\'équipe escale',
  'Agent de trafic aérien',
  'Responsable des opérations aéroportuaires',
  'Agent de sûreté aéroportuaire'
];

const requirements = [
  'Copie certifiée du Baccalauréat',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'Certificat médical d\'aptitude',
  'CV et lettre de motivation'
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de formation', amount: '1 000 000 - 1 200 000 FCFA' },
  { item: 'Uniforme', amount: '100 000 FCFA' },
  { item: 'Uniforme TP et stage', amount: '50 000 FCFA' }
];

export default function AviationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-sky-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Plane className="h-12 w-12 text-sky-200 mr-4" />
                <span className="text-sky-200 font-medium">Formation Professionnelle</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Aviation Civile
              </h1>
              <p className="text-xl text-sky-100 leading-relaxed mb-8">
                Formations spécialisées aux métiers de l'aviation civile, allant de l'accueil 
                à la gestion des opérations aéroportuaires. Préparez-vous à une carrière 
                passionnante dans l'industrie aéronautique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-sky-700 transition-colors"
                >
                  Plus d'Informations
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Informations Clés</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-sky-200 mr-3" />
                    <span>Durée : 6 à 24 mois</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-sky-200 mr-3" />
                    <span>Niveau Bac minimum</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-sky-200 mr-3" />
                    <span>Certification professionnelle</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-sky-200 mr-3" />
                    <span>Stages en milieu professionnel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programmes Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois programmes spécialisés pour répondre aux besoins du secteur aéronautique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-sky-600 font-medium">{program.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Options :</h4>
                  {program.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure and Details */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Structure de Formation
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-sky-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Durée et Rythme</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Durée : 6 à 24 mois selon le programme</li>
                    <li>• Rythme : Alternance théorique et pratique</li>
                    <li>• Stages : Stages pratiques en milieu professionnel</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-sky-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Public Cible</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Niveau Bac minimum pour la plupart des formations</li>
                    <li>• Exigences spécifiques selon les programmes</li>
                    <li>• Aptitudes physiques requises (taille, langues, etc.)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-6 w-6 text-sky-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Lieux de Formation</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Campus EPIKAÏZO University</li>
                    <li>• Partenariats avec aéroports</li>
                    <li>• Simulateurs et équipements professionnels</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <p className="text-gray-600 mb-6">
                  Nos formations en aviation civile ouvrent les portes vers de nombreuses 
                  opportunités professionnelles dans le secteur aéronautique :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-sky-900 mb-3">
                  Secteurs d'Activité
                </h3>
                <ul className="space-y-2 text-sky-800">
                  <li>• Compagnies aériennes nationales et internationales</li>
                  <li>• Aéroports et plateformes aéroportuaires</li>
                  <li>• Sociétés de handling et d'assistance</li>
                  <li>• Agences de voyage et tour-opérateurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs and Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Coût et Financement
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {costs.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-700">{cost.item}</span>
                      <span className="font-semibold text-gray-900">{cost.amount}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Modalités de Paiement
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Possibilité de paiement échelonné</li>
                    <li>• Frais non remboursables ni transférables</li>
                    <li>• Acompte requis à l'inscription</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Documents Requis
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  Pièces à fournir pour constituer votre dossier d'inscription :
                </p>
                
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Attention
                  </h4>
                  <p className="text-yellow-800 text-sm">
                    Tous les documents doivent être certifiés conformes à l'original. 
                    Un certificat médical d'aptitude est obligatoire pour toutes les formations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Décoller Vers Votre Avenir ?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et lancez votre carrière dans l'aviation civile. 
            Nos formations reconnues vous ouvrent les portes du secteur aéronautique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-sky-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-sky-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
