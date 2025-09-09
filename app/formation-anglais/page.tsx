import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Globe, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  DollarSign, 
  FileText, 
  CheckCircle,
  Calendar,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Headphones,
  PenTool
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation Anglais Intensif | EPIKAÏZO University',
  description: 'Formation intensive en anglais professionnel à EPIKAÏZO University. Préparation aux environnements professionnels internationaux, tous niveaux.',
  keywords: ['anglais intensif', 'formation langues', 'anglais professionnel', 'international', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Formation Anglais Intensif', url: '/formation-anglais' },
];

const levels = [
  {
    title: 'Débutant (A1-A2)',
    duration: '3 mois',
    description: 'Bases de l\'anglais : alphabet, vocabulaire essentiel, phrases simples',
    objectives: [
      'Se présenter et présenter autrui',
      'Comprendre des expressions familières',
      'Poser des questions simples',
      'Écrire des textes courts'
    ]
  },
  {
    title: 'Intermédiaire (B1-B2)',
    duration: '4 mois',
    description: 'Anglais conversationnel et professionnel de base',
    objectives: [
      'Comprendre les points essentiels d\'un discours',
      'Communiquer dans la plupart des situations',
      'Rédiger des textes structurés',
      'Exprimer son opinion'
    ]
  },
  {
    title: 'Avancé (C1-C2)',
    duration: '3 mois',
    description: 'Anglais professionnel et académique de haut niveau',
    objectives: [
      'Comprendre des textes complexes',
      'S\'exprimer couramment et spontanément',
      'Rédiger des rapports professionnels',
      'Négocier en anglais'
    ]
  }
];

const specializations = [
  {
    title: 'Anglais Aéronautique',
    icon: Globe,
    description: 'Vocabulaire spécialisé de l\'aviation, phraséologie aéronautique, communication air-sol.',
    sectors: ['Compagnies aériennes', 'Contrôle aérien', 'Maintenance aéronautique']
  },
  {
    title: 'Anglais des Affaires',
    icon: Briefcase,
    description: 'Anglais commercial, négociation, présentations, correspondance professionnelle.',
    sectors: ['Commerce international', 'Banking', 'Consulting']
  },
  {
    title: 'Anglais Logistique',
    icon: BookOpen,
    description: 'Terminologie logistique, transport international, documentation douanière.',
    sectors: ['Transport maritime', 'Freight forwarding', 'Douanes']
  },
  {
    title: 'Anglais Tourisme',
    icon: MessageCircle,
    description: 'Accueil clientèle internationale, guide touristique, hôtellerie.',
    sectors: ['Hôtellerie', 'Agences de voyage', 'Tourisme']
  }
];

const methodology = [
  {
    title: 'Approche Communicative',
    description: 'Priorité à l\'expression orale et à la communication pratique'
  },
  {
    title: 'Immersion Professionnelle',
    description: 'Situations réelles du monde du travail et mises en situation'
  },
  {
    title: 'Supports Multimédias',
    description: 'Utilisation des dernières technologies d\'apprentissage des langues'
  },
  {
    title: 'Groupes Restreints',
    description: 'Maximum 12 étudiants par classe pour un suivi personnalisé'
  }
];

const costs = [
  { item: 'Frais d\'inscription', amount: '50 000 FCFA' },
  { item: 'Formation 3 mois (débutant)', amount: '300 000 FCFA' },
  { item: 'Formation 4 mois (intermédiaire)', amount: '400 000 FCFA' },
  { item: 'Formation 3 mois (avancé)', amount: '350 000 FCFA' },
  { item: 'Matériel pédagogique', amount: '25 000 FCFA' }
];

const scheduleOptions = [
  'Cours du matin : 8h-12h',
  'Cours de l\'après-midi : 14h-18h',
  'Cours du soir : 17h-20h',
  'Weekend intensif : Samedi 8h-17h',
  'Cours particuliers : Horaires à définir'
];

export default function FormationAnglaisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-blue-200 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-12 w-12 text-blue-300 mr-4" />
                <span className="text-blue-300 font-medium">Formation Linguistique</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Formation Anglais Intensif
              </h1>
              <p className="text-xl text-blue-200 leading-relaxed mb-8">
                Programme de renforcement linguistique pour la préparation aux environnements 
                professionnels internationaux. Durée variable selon le niveau initial, 
                méthodes modernes et interactives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Test de Niveau Gratuit
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Informations Clés</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Durée : 3 à 4 mois selon niveau</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Groupes de 12 max</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Certificat de niveau</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Anglais professionnel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Niveaux de Formation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Programmes adaptés à votre niveau actuel selon le Cadre Européen (CECRL)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{level.title}</h3>
                  <p className="text-blue-600 font-medium">{level.duration}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{level.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Objectifs :</h4>
                  {level.objectives.map((objective, objIndex) => (
                    <div key={objIndex} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Anglais Professionnel par Secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formations spécialisées selon votre domaine d'activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{spec.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{spec.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Secteurs d'application :</h4>
                  {spec.sectors.map((sector, sectorIndex) => (
                    <div key={sectorIndex} className="flex items-center">
                      <Briefcase className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology and Costs */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Méthodologie d'Enseignement
              </h2>
              
              <div className="space-y-6">
                {methodology.map((method, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  📅 Options d'Horaires
                </h3>
                <div className="space-y-2">
                  {scheduleOptions.map((schedule, index) => (
                    <div key={index} className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{schedule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tarifs Formation
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  {costs.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-700">{cost.item}</span>
                      <span className="font-semibold text-gray-900">{cost.amount}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    ✅ Inclus dans la Formation
                  </h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Test de niveau initial gratuit</li>
                    <li>• Matériel pédagogique et supports de cours</li>
                    <li>• Accès plateforme e-learning 24h/24</li>
                    <li>• Certificat de niveau en fin de formation</li>
                    <li>• Suivi personnalisé avec professeurs natifs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  🎯 Pourquoi Choisir Notre Formation ?
                </h3>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Professeurs natifs et expérimentés</li>
                  <li>• Méthodes interactives et modernes</li>
                  <li>• Préparation aux certifications internationales</li>
                  <li>• Horaires flexibles pour professionnels</li>
                  <li>• Suivi post-formation disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Maîtrisez l'Anglais Professionnel
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Donnez une dimension internationale à votre carrière avec notre formation 
            anglais intensive adaptée aux exigences professionnelles modernes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              Commencer ma Formation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Test de Niveau Gratuit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
