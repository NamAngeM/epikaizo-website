import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  TrendingUp, 
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
  GraduationCap,
  Building,
  Globe,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sciences de Gestion - DUT | EPIKAÏZO University',
  description: 'Formation diplômante de niveau DUT en Sciences de Gestion avec 7 spécialisations : QHSE, RH, Commerce International, Marketing Digital, Banque Finance, Transit Douane, Gestion Maritime.',
  keywords: ['DUT', 'sciences de gestion', 'QHSE', 'RH', 'commerce international', 'marketing digital', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'Sciences de Gestion', href: '/formations/gestion' },
];

const specializations = [
  {
    title: 'QHSE (Qualité, Hygiène, Sécurité, Environnement)',
    icon: Shield,
    description: 'Formation aux métiers de la qualité, hygiène, sécurité et environnement dans l\'entreprise.',
    career: 'Assistant(e) chef de projet QHSE'
  },
  {
    title: 'Gestion des Ressources Humaines',
    icon: Users,
    description: 'Spécialisation dans la gestion du personnel et le développement des ressources humaines.',
    career: 'Assistant(e) ressources humaines'
  },
  {
    title: 'Commerce International',
    icon: Globe,
    description: 'Formation aux techniques du commerce international et aux échanges mondiaux.',
    career: 'Assistant(e) commercial export'
  },
  {
    title: 'Communication et Marketing Digital',
    icon: TrendingUp,
    description: 'Maîtrise des outils de communication moderne et du marketing numérique.',
    career: 'Chargé(e) de communication digitale'
  },
  {
    title: 'Banque Finance',
    icon: DollarSign,
    description: 'Formation aux métiers bancaires et de la finance d\'entreprise.',
    career: 'Chargé(e) de clientèle bancaire'
  },
  {
    title: 'Transit Douane',
    icon: Briefcase,
    description: 'Spécialisation dans les opérations de transit et les procédures douanières.',
    career: 'Agent de transit et douane'
  },
  {
    title: 'Gestion Maritime et Portuaire',
    icon: MapPin,
    description: 'Formation à la gestion des opérations maritimes et portuaires.',
    career: 'Agent de gestion portuaire'
  }
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de scolarité annuels', amount: '850 000 FCFA' },
  { item: 'Frais de dossier', amount: 'Inclus dans l\'inscription' }
];

const requirements = [
  'Copie certifiée du Baccalauréat',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  '2 rames de papier',
  '9 rouleaux de papier hygiénique',
  'Chemise cartonnée'
];

const curriculum = [
  {
    semester: 'Semestre 1-2',
    title: 'Fondamentaux de Gestion',
    modules: [
      'Introduction à la gestion',
      'Comptabilité générale',
      'Mathématiques de gestion',
      'Économie générale',
      'Communication professionnelle',
      'Informatique de gestion'
    ]
  },
  {
    semester: 'Semestre 3-4',
    title: 'Spécialisation et Approfondissement',
    modules: [
      'Choix de la spécialisation',
      'Gestion financière',
      'Marketing fondamental',
      'Droit des affaires',
      'Anglais des affaires',
      'Stage en entreprise'
    ]
  }
];

export default function GestionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-purple-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-12 w-12 text-purple-200 mr-4" />
                <span className="text-purple-200 font-medium">Formation Diplômante - DUT</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sciences de Gestion
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Formation diplômante de niveau DUT dans le domaine des sciences de gestion, 
                préparant aux métiers de la gestion d'entreprise avec plusieurs spécialisations 
                professionnelles reconnues sur le marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-purple-200 mr-3" />
                    <span>Durée : 2 années universitaires</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-purple-200 mr-3" />
                    <span>Bacheliers toutes séries</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-purple-200 mr-3" />
                    <span>120 crédits ECTS</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-purple-200 mr-3" />
                    <span>7 spécialisations</span>
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
              7 Spécialisations Professionnelles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez votre spécialisation selon vos aspirations professionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-purple-50">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{spec.description}</p>
                
                <div className="bg-white p-3 rounded-lg border-l-4 border-purple-600">
                  <p className="text-xs text-gray-500 mb-1">Débouché principal :</p>
                  <p className="font-semibold text-purple-700 text-sm">{spec.career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Structure du Programme
              </h2>
              
              <div className="space-y-6">
                {curriculum.map((period, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{period.semester}</h3>
                        <p className="text-purple-600 font-medium">{period.title}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {period.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informations Pratiques
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Durée et Structure</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Durée : 2 années universitaires</li>
                    <li>• Rythme : Formation initiale avec stages obligatoires</li>
                    <li>• Crédits : 120 crédits ECTS</li>
                    <li>• Diplôme : DUT Sciences de Gestion</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Public Cible</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bacheliers toutes séries</li>
                    <li>• Étudiants en réorientation</li>
                    <li>• Professionnels en reconversion</li>
                    <li>• Candidats en reprise d'études</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">
                    Coût de la Formation
                  </h3>
                  <div className="space-y-3">
                    {costs.map((cost, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-purple-200 last:border-b-0">
                        <span className="text-purple-800">{cost.item}</span>
                        <span className="font-semibold text-purple-900">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Careers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      <FileText className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Note importante
                  </h4>
                  <p className="text-yellow-800 text-sm">
                    Les fournitures demandées (papier, chemises) sont utilisées 
                    tout au long de la formation pour les travaux pratiques et les projets.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  Selon votre spécialisation, vous pourrez exercer dans différents secteurs :
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Secteur Privé</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Entreprises industrielles et commerciales</li>
                      <li>• Banques et institutions financières</li>
                      <li>• Sociétés de conseil</li>
                      <li>• PME et startups</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Secteur Public</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Administrations publiques</li>
                      <li>• Collectivités territoriales</li>
                      <li>• Établissements publics</li>
                      <li>• ONG et associations</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Poursuite d'Études
                  </h4>
                  <p className="text-green-800 text-sm">
                    Possibilité de poursuivre en Licence professionnelle ou 
                    en école de commerce pour approfondir votre spécialisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Construisez Votre Avenir en Gestion
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et obtenez un DUT reconnu qui vous ouvrira 
            les portes du monde professionnel dans le domaine de votre choix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
