import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  MessageSquare, 
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
  Smartphone,
  Video,
  Megaphone,
  Camera,
  Monitor
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sciences de l\'Information et Communication | EPIKAÏZO University',
  description: 'Formation en communication digitale, journalisme, relations publiques, marketing digital et médias. Maîtrisez les nouveaux enjeux de la communication moderne.',
  keywords: ['communication', 'journalisme', 'digital', 'marketing', 'médias', 'relations publiques', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Formations', url: '/formations' },
  { name: 'Sciences de l\'Information et Communication', url: '/formations/communication' },
];

const specializations = [
  {
    title: 'Communication Digitale',
    icon: Smartphone,
    description: 'Maîtrise des outils numériques, réseaux sociaux, stratégies digitales et e-réputation.',
    skills: [
      'Stratégie de communication digitale',
      'Gestion des réseaux sociaux',
      'Community management',
      'E-réputation et veille',
      'Marketing d\'influence'
    ],
    career: 'Community Manager, Digital Manager'
  },
  {
    title: 'Journalisme et Médias',
    icon: Camera,
    description: 'Techniques rédactionnelles, investigation, éthique journalistique, médias traditionnels et numériques.',
    skills: [
      'Techniques rédactionnelles',
      'Investigation journalistique',
      'Montage vidéo et audio',
      'Déontologie et éthique',
      'Journalisme web et mobile'
    ],
    career: 'Journaliste, Rédacteur web'
  },
  {
    title: 'Relations Publiques',
    icon: Megaphone,
    description: 'Gestion de l\'image, relations presse, événementiel et communication de crise.',
    skills: [
      'Relations presse',
      'Communication de crise',
      'Événementiel d\'entreprise',
      'Lobbying et influence',
      'Communication institutionnelle'
    ],
    career: 'Attaché de presse, Chargé de communication'
  },
  {
    title: 'Production Audiovisuelle',
    icon: Video,
    description: 'Réalisation, montage, production de contenus audiovisuels pour tous supports.',
    skills: [
      'Prise de vue et cadrage',
      'Montage vidéo professionnel',
      'Sound design et mixage',
      'Motion design',
      'Production documentaire'
    ],
    career: 'Réalisateur, Monteur vidéo'
  },
  {
    title: 'Marketing Digital',
    icon: Monitor,
    description: 'Stratégies marketing online, SEO/SEA, analytics et conversion.',
    skills: [
      'SEO et référencement naturel',
      'Publicité en ligne (SEA)',
      'Email marketing',
      'Analytics et KPIs',
      'Growth hacking'
    ],
    career: 'Traffic Manager, Growth Hacker'
  }
];

const programStructure = [
  {
    year: 'Année 1',
    title: 'Fondamentaux de la Communication',
    modules: [
      'Histoire des médias et communication',
      'Théories de la communication',
      'Techniques d\'expression écrite et orale',
      'Anglais et communication internationale',
      'Informatique et outils numériques',
      'Sociologie des médias'
    ]
  },
  {
    year: 'Année 2',
    title: 'Techniques et Pratiques',
    modules: [
      'Production de contenus multimédias',
      'Stratégies de communication',
      'Droit des médias et communication',
      'Marketing et publicité',
      'Gestion de projet communication',
      'Stage professionnel (4 mois)'
    ]
  },
  {
    year: 'Année 3',
    title: 'Spécialisation et Expertise',
    modules: [
      'Spécialisation choisie',
      'Management d\'équipe créative',
      'Entrepreneuriat dans les médias',
      'Projet de fin d\'études',
      'Stage long (6 mois)',
      'Portfolio professionnel'
    ]
  }
];

const careers = [
  'Community Manager',
  'Chargé de communication',
  'Journaliste multimédia',
  'Attaché de presse',
  'Réalisateur audiovisuel',
  'Traffic Manager',
  'Responsable marketing digital',
  'Consultant en communication',
  'Producteur de contenus',
  'Directeur artistique digital'
];

const sectors = [
  'Agences de communication',
  'Médias et presse',
  'Entreprises (tous secteurs)',
  'Institutions publiques',
  'ONG et associations',
  'Startups et scale-ups',
  'Production audiovisuelle',
  'Freelance et consulting'
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de scolarité annuels', amount: '850 000 FCFA' },
  { item: 'Équipements audiovisuels', amount: '200 000 FCFA' },
  { item: 'Logiciels professionnels', amount: '100 000 FCFA' }
];

const requirements = [
  'Copie certifiée du Baccalauréat (toutes séries)',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'Portfolio créatif (optionnel)',
  'Lettre de motivation',
  'Test de culture générale',
  'Entretien de motivation'
];

const tools = [
  'Adobe Creative Suite (Photoshop, Premiere, After Effects)',
  'Outils de montage vidéo professionnels',
  'Plateformes de gestion des réseaux sociaux',
  'Logiciels d\'analyse web (Google Analytics)',
  'CMS et outils de création web',
  'Équipements audiovisuels professionnels'
];

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-indigo-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-12 w-12 text-indigo-200 mr-4" />
                <span className="text-indigo-200 font-medium">Formation Créative</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sciences de l'Information et Communication
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                Formation complète aux métiers de la communication moderne. 
                Maîtrisez les outils digitaux, les techniques journalistiques et 
                les stratégies de communication pour façonner l'information de demain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-indigo-200 mr-3" />
                    <span>Durée : 3 années</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-indigo-200 mr-3" />
                    <span>Toutes séries de Bac</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-indigo-200 mr-3" />
                    <span>Portfolio professionnel</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-indigo-200 mr-3" />
                    <span>Stages en agences/médias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5 Spécialisations Métier
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez tous les aspects de la communication moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-indigo-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{spec.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{spec.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Compétences clés :</h4>
                  {spec.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-600">
                  <p className="text-xs text-gray-500 mb-1">Métier type :</p>
                  <p className="font-semibold text-indigo-700 text-sm">{spec.career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Parcours de Formation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une progression créative de la théorie à la pratique professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programStructure.map((year, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{year.year}</h3>
                  <p className="text-indigo-600 font-medium">{year.title}</p>
                </div>
                
                <div className="space-y-3">
                  {year.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center">
                      <BookOpen className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Equipment */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outils et Équipements Professionnels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formation sur les outils utilisés par les professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <Monitor className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-white p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-6">
                  La communication est un secteur dynamique avec de nombreuses 
                  opportunités dans l'économie numérique :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                  Secteurs d'Activité
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center">
                      <Briefcase className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-indigo-800 text-sm">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investissement Formation
              </h2>
              
              <div className="bg-white p-6 rounded-lg mb-8">
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
                    Inclus dans la formation
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Accès aux logiciels professionnels</li>
                    <li>• Équipements audiovisuels dernière génération</li>
                    <li>• Studios d'enregistrement et de montage</li>
                    <li>• Réseau professionnel médias/communication</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Prérequis et Documents
                </h3>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Profil Idéal
                  </h4>
                  <p className="text-green-800 text-sm">
                    Créativité, curiosité, aisance relationnelle, culture générale, 
                    goût pour l'actualité et les nouvelles technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Façonnez l'Information de Demain
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et devenez un professionnel de la communication 
            capable de maîtriser tous les enjeux de l'information moderne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
