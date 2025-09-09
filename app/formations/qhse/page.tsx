import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Shield, 
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
  Leaf,
  AlertTriangle,
  Factory,
  Recycle,
  TreePine
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'QHSE & Développement Durable | EPIKAÏZO University',
  description: 'Formation QHSE : Qualité, Hygiène, Sécurité, Environnement et Développement Durable. Devenez expert en prévention des risques et protection environnementale.',
  keywords: ['QHSE', 'qualité', 'hygiène', 'sécurité', 'environnement', 'développement durable', 'prévention', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Formations', url: '/formations' },
  { name: 'QHSE & Développement Durable', url: '/formations/qhse' },
];

const specializations = [
  {
    title: 'Qualité et Certification',
    icon: Award,
    description: 'Mise en place et gestion des systèmes qualité, certifications ISO, amélioration continue.',
    skills: [
      'Normes ISO 9001, 14001, 45001',
      'Audit qualité',
      'Amélioration continue',
      'Gestion documentaire',
      'Indicateurs de performance'
    ],
    career: 'Responsable Qualité, Auditeur'
  },
  {
    title: 'Hygiène et Sécurité au Travail',
    icon: Shield,
    description: 'Prévention des accidents, analyse des risques professionnels, sécurité industrielle.',
    skills: [
      'Évaluation des risques',
      'Prévention des accidents',
      'Équipements de protection',
      'Formation sécurité',
      'Réglementation du travail'
    ],
    career: 'Préventeur, Responsable Sécurité'
  },
  {
    title: 'Environnement et Écologie',
    icon: Leaf,
    description: 'Protection environnementale, gestion des déchets, énergies renouvelables.',
    skills: [
      'Gestion des déchets',
      'Énergies renouvelables',
      'Bilan carbone',
      'Études d\'impact',
      'Réglementation environnementale'
    ],
    career: 'Chargé d\'environnement'
  },
  {
    title: 'Développement Durable',
    icon: TreePine,
    description: 'Stratégies RSE, économie circulaire, développement territorial durable.',
    skills: [
      'Responsabilité sociétale (RSE)',
      'Économie circulaire',
      'Développement territorial',
      'Reporting extra-financier',
      'Stakeholder engagement'
    ],
    career: 'Consultant RSE, Chargé DD'
  },
  {
    title: 'Gestion des Risques Industriels',
    icon: Factory,
    description: 'Analyse et prévention des risques industriels, sécurité des installations.',
    skills: [
      'Analyse des risques HAZOP',
      'Sécurité des procédés',
      'Plans d\'urgence',
      'Installations classées',
      'Maintenance préventive'
    ],
    career: 'Ingénieur Sécurité Industrielle'
  }
];

const programStructure = [
  {
    year: 'Année 1',
    title: 'Fondamentaux QHSE',
    modules: [
      'Introduction au QHSE',
      'Droit de l\'environnement',
      'Statistiques et mathématiques',
      'Chimie et toxicologie',
      'Communication et relations humaines',
      'Informatique et bureautique'
    ]
  },
  {
    year: 'Année 2',
    title: 'Techniques et Méthodes',
    modules: [
      'Systèmes de management QSE',
      'Évaluation des risques',
      'Techniques d\'audit',
      'Gestion de projet',
      'Économie et gestion',
      'Stage technique (4 mois)'
    ]
  },
  {
    year: 'Année 3',
    title: 'Expertise et Spécialisation',
    modules: [
      'Spécialisation choisie',
      'Management d\'équipe',
      'Veille réglementaire',
      'Projet professionnel',
      'Stage long (6 mois)',
      'Mémoire technique'
    ]
  }
];

const careers = [
  'Responsable QHSE',
  'Préventeur sécurité',
  'Auditeur qualité',
  'Chargé d\'environnement',
  'Consultant RSE',
  'Ingénieur sécurité industrielle',
  'Responsable développement durable',
  'Chargé de mission environnement',
  'Coordinateur sécurité',
  'Expert en risques industriels'
];

const sectors = [
  'Secteur pétrolier gabonais (Total, Perenco, Shell)',
  'Industrie minière (Comilog, SETRAG)',
  'BTP et construction (grands projets)',
  'Industrie forestière et transformation du bois',
  'Agroalimentaire et agro-industrie',
  'Collectivités territoriales gabonaises',
  'Bureaux d\'études et conseil QHSE',
  'Administrations publiques gabonaises',
  'Secteur portuaire (Port d\'Owendo)',
  'Zone Économique Spéciale (GSEZ)'
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de scolarité annuels', amount: '900 000 FCFA' },
  { item: 'Équipements de protection', amount: '150 000 FCFA' },
  { item: 'Sorties pédagogiques', amount: '100 000 FCFA' }
];

const requirements = [
  'Copie certifiée du Baccalauréat (S ou STI2D de préférence)',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'Certificat médical d\'aptitude',
  'Lettre de motivation',
  'Entretien technique',
  'Test de logique et sciences'
];

export default function QHSEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-green-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-12 w-12 text-green-200 mr-4" />
                <span className="text-green-200 font-medium">Formation Experte</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                QHSE & Développement Durable
              </h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Formation d'experts en Qualité, Hygiène, Sécurité, Environnement et Développement Durable. 
                Devenez l'acteur du changement pour un avenir industriel responsable et sécurisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-green-200 mr-3" />
                    <span>Durée : 3 années</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-green-200 mr-3" />
                    <span>Bac S/STI2D recommandé</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-green-200 mr-3" />
                    <span>Certifications professionnelles</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-green-200 mr-3" />
                    <span>Stages en industrie</span>
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
              5 Domaines d'Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une formation complète couvrant tous les aspects du QHSE moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-green-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
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
                
                <div className="bg-white p-3 rounded-lg border-l-4 border-green-600">
                  <p className="text-xs text-gray-500 mb-1">Métier type :</p>
                  <p className="font-semibold text-green-700 text-sm">{spec.career}</p>
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
              Une progression logique vers l'expertise QHSE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programStructure.map((year, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{year.year}</h3>
                  <p className="text-green-600 font-medium">{year.title}</p>
                </div>
                
                <div className="space-y-3">
                  {year.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center">
                      <BookOpen className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers and Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-6">
                  Le QHSE est un secteur en forte croissance avec des opportunités 
                  dans tous les secteurs industriels :
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

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Secteurs d'Activité
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center">
                      <Factory className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-green-800 text-sm">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investissement Formation
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
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Avantages Inclus
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Équipements de protection individuelle</li>
                    <li>• Visites d'installations industrielles</li>
                    <li>• Certifications professionnelles</li>
                    <li>• Réseau professionnel QHSE</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Prérequis et Documents
                </h3>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Profil Recommandé
                  </h4>
                  <p className="text-yellow-800 text-sm">
                    Baccalauréat scientifique ou technique, goût pour les sciences, 
                    rigueur, sens des responsabilités et intérêt pour l'environnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Construisez un Avenir Industriel Responsable
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et devenez l'expert QHSE que les entreprises 
            recherchent pour relever les défis environnementaux et sécuritaires de demain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
