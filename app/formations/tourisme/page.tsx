import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  MapPin, 
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
  Plane,
  Building,
  Globe,
  Camera,
  Utensils
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tourisme & Hôtelerie | EPIKAÏZO University',
  description: 'Formation complète en tourisme et hôtelerie : gestion hôtelière, tourisme durable, événementiel, restauration. Préparez votre carrière dans l\'industrie du voyage.',
  keywords: ['tourisme', 'hôtelerie', 'restauration', 'événementiel', 'voyage', 'hospitality', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Formations', url: '/formations' },
  { name: 'Tourisme & Hôtelerie', url: '/formations/tourisme' },
];

const specializations = [
  {
    title: 'Gestion Hôtelière',
    icon: Building,
    description: 'Management complet des établissements hôteliers, de la réception à la direction générale.',
    skills: [
      'Accueil et relation client',
      'Gestion des réservations',
      'Management d\'équipe',
      'Contrôle de gestion hôtelière',
      'Revenue management'
    ],
    career: 'Directeur d\'hôtel, Chef de réception'
  },
  {
    title: 'Tourisme et Voyages',
    icon: Plane,
    description: 'Conception et commercialisation de produits touristiques, conseil en voyages.',
    skills: [
      'Création de circuits touristiques',
      'Conseil et vente de voyages',
      'Gestion des tour-opérateurs',
      'Marketing touristique',
      'Géographie touristique'
    ],
    career: 'Agent de voyage, Guide touristique'
  },
  {
    title: 'Restauration et Gastronomie',
    icon: Utensils,
    description: 'Management de la restauration, de la cuisine traditionnelle à la gastronomie moderne.',
    skills: [
      'Gestion de restaurant',
      'Contrôle des coûts alimentaires',
      'Service en salle',
      'Hygiène et sécurité alimentaire',
      'Œnologie et accords mets-vins'
    ],
    career: 'Chef de cuisine, Maître d\'hôtel'
  },
  {
    title: 'Événementiel et Congrès',
    icon: Camera,
    description: 'Organisation d\'événements professionnels, congrès, séminaires et manifestations culturelles.',
    skills: [
      'Planification d\'événements',
      'Gestion de budget événementiel',
      'Coordination logistique',
      'Relations avec les prestataires',
      'Communication événementielle'
    ],
    career: 'Chef de projet événementiel'
  },
  {
    title: 'Tourisme Durable',
    icon: Globe,
    description: 'Développement du tourisme responsable et écologique, préservation du patrimoine.',
    skills: [
      'Écotourisme',
      'Développement local',
      'Préservation du patrimoine',
      'Tourisme communautaire',
      'Certification environnementale'
    ],
    career: 'Consultant en tourisme durable'
  }
];

const programStructure = [
  {
    year: 'Année 1',
    title: 'Fondamentaux du Tourisme',
    modules: [
      'Introduction au tourisme',
      'Géographie touristique mondiale',
      'Histoire et patrimoine',
      'Langues étrangères (Anglais/Espagnol)',
      'Informatique et nouvelles technologies',
      'Communication et techniques de vente'
    ]
  },
  {
    year: 'Année 2',
    title: 'Techniques Professionnelles',
    modules: [
      'Gestion hôtelière',
      'Techniques de guidage',
      'Marketing touristique',
      'Droit du tourisme',
      'Comptabilité et gestion',
      'Stage professionnel (3 mois)'
    ]
  },
  {
    year: 'Année 3',
    title: 'Spécialisation et Management',
    modules: [
      'Choix de spécialisation',
      'Management d\'équipe',
      'Création d\'entreprise touristique',
      'Projet professionnel',
      'Stage long (6 mois)',
      'Mémoire de fin d\'études'
    ]
  }
];

const careers = [
  'Directeur d\'hôtel',
  'Chef de réception',
  'Agent de voyage',
  'Guide touristique',
  'Chef de cuisine',
  'Maître d\'hôtel',
  'Chef de projet événementiel',
  'Consultant en tourisme',
  'Responsable marketing touristique',
  'Directeur d\'office de tourisme'
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de scolarité annuels', amount: '950 000 FCFA' },
  { item: 'Stage à l\'étranger (optionnel)', amount: '500 000 FCFA' },
  { item: 'Matériel pédagogique', amount: '75 000 FCFA' }
];

const requirements = [
  'Copie certifiée du Baccalauréat',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'Certificat médical',
  'Lettre de motivation',
  'Test de niveau en langues',
  'Entretien de motivation'
];

export default function TourismePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-epikaizo-blue to-secondary-600 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-teal-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-12 w-12 text-secondary-200 mr-4" />
                <span className="text-secondary-200 font-medium">Formation Spécialisée</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tourisme & Hôtelerie
              </h1>
              <p className="text-xl text-teal-100 leading-relaxed mb-8">
                Formation complète aux métiers du tourisme et de l'hôtelerie. 
                Maîtrisez l'art de l'accueil, la gestion hôtelière, le conseil en voyages 
                et l'organisation d'événements dans un secteur en pleine croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-epikaizo-blue font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-teal-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-teal-200 mr-3" />
                    <span>Durée : 3 années</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-teal-200 mr-3" />
                    <span>Niveau Bac requis</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-teal-200 mr-3" />
                    <span>Diplôme reconnu</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-teal-200 mr-3" />
                    <span>Stages obligatoires</span>
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
              Choisissez votre voie dans l'univers passionnant du tourisme et de l'hôtelerie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-teal-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{spec.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{spec.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Compétences :</h4>
                  {spec.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-3 rounded-lg border-l-4 border-teal-600">
                  <p className="text-xs text-gray-500 mb-1">Débouché principal :</p>
                  <p className="font-semibold text-teal-700 text-sm">{spec.career}</p>
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
              Programme sur 3 Ans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une formation progressive du niveau débutant à expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programStructure.map((year, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{year.year}</h3>
                  <p className="text-teal-600 font-medium">{year.title}</p>
                </div>
                
                <div className="space-y-3">
                  {year.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center">
                      <BookOpen className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers and Costs */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-6">
                  Le secteur du tourisme et de l'hôtelerie offre de nombreuses opportunités 
                  de carrière dans un marché en croissance constante :
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

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Secteurs d'Emploi au Gabon
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Hôtels Libreville (Radisson, Hilton, Onomo)</li>
                  <li>• Complexes touristiques (Cap Estérias, Pointe-Denis)</li>
                  <li>• Agences de voyage gabonaises</li>
                  <li>• Restaurants et établissements gastronomiques</li>
                  <li>• Office National du Tourisme du Gabon</li>
                  <li>• Parcs nationaux (Loango, Lopé, Akanda)</li>
                  <li>• Écotourisme et tourisme durable</li>
                  <li>• Centres de congrès et événementiel d'entreprise</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Coût de la Formation
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
                    <li>• Stages en entreprises partenaires</li>
                    <li>• Accès aux événements professionnels</li>
                    <li>• Réseau alumni dans le secteur</li>
                    <li>• Possibilité de stage à l'étranger</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Documents Requis
                </h3>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Aventure dans le Tourisme Commence Ici
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et transformez votre passion pour les voyages 
            et l'accueil en une carrière épanouissante dans le secteur du tourisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
