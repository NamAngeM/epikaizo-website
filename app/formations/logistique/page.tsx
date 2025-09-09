import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Truck, 
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
  Package,
  Ship,
  Fuel
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'École Spécialisée de Logistique - Licence | EPIKAÏZO University',
  description: 'Formation diplômante de niveau Licence en logistique avec spécialisations : pétrolière, aéroportuaire, maritime, approvisionnement et achat.',
  keywords: ['logistique', 'licence', 'supply chain', 'transport', 'maritime', 'pétrolière', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations', href: '/formations' },
  { label: 'Logistique', href: '/formations/logistique' },
];

const specializations = [
  {
    title: 'Logistique Pétrolière et Industrielle',
    icon: Fuel,
    description: 'Spécialisation dans la gestion logistique des produits pétroliers et industriels.',
    skills: [
      'Gestion des stocks pétroliers',
      'Transport de matières dangereuses',
      'Réglementation industrielle',
      'Optimisation des flux'
    ]
  },
  {
    title: 'Logistique Aéroportuaire',
    icon: Package,
    description: 'Formation spécialisée dans la logistique et le fret aéroportuaire.',
    skills: [
      'Gestion du fret aérien',
      'Opérations cargo',
      'Réglementation IATA',
      'Coordination aéroportuaire'
    ]
  },
  {
    title: 'Logistique Approvisionnement et Gestion de Stock',
    icon: Package,
    description: 'Maîtrise de la chaîne d\'approvisionnement et gestion optimale des stocks.',
    skills: [
      'Planification des approvisionnements',
      'Gestion des stocks',
      'Prévision de la demande',
      'Optimisation des coûts'
    ]
  },
  {
    title: 'Logistique Achat et Vente Prestations',
    icon: Briefcase,
    description: 'Formation aux achats stratégiques et à la vente de prestations logistiques.',
    skills: [
      'Négociation commerciale',
      'Achats stratégiques',
      'Gestion des fournisseurs',
      'Développement commercial'
    ]
  },
  {
    title: 'Logistique Maritime Internationale',
    icon: Ship,
    description: 'Spécialisation dans le transport maritime et les opérations portuaires.',
    skills: [
      'Transport maritime',
      'Gestion portuaire',
      'Commerce international',
      'Réglementation maritime'
    ]
  }
];

const careers = [
  'Responsable logistique',
  'Chef de dépôt',
  'Analyste de la supply chain',
  'Coordinateur transport',
  'Gestionnaire de stocks',
  'Agent de transit international',
  'Responsable approvisionnements',
  'Chef de projet logistique',
  'Consultant en supply chain'
];

const requirements = [
  'Copie certifiée du Baccalauréat',
  'Relevé de notes du Bac',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'CV et lettre de motivation pour les professionnels',
  'Certificat de travail (pour les professionnels)'
];

const programStructure = [
  {
    year: 'Licence 1',
    title: 'Fondamentaux de la Logistique',
    modules: [
      'Introduction à la logistique',
      'Mathématiques appliquées',
      'Économie générale',
      'Informatique de gestion',
      'Communication professionnelle'
    ]
  },
  {
    year: 'Licence 2',
    title: 'Logistique Opérationnelle',
    modules: [
      'Gestion des stocks',
      'Transport et distribution',
      'Supply chain management',
      'Qualité et normes',
      'Anglais professionnel'
    ]
  },
  {
    year: 'Licence 3',
    title: 'Spécialisation et Professionnalisation',
    modules: [
      'Spécialisation choisie',
      'Projet professionnel',
      'Stage en entreprise',
      'Mémoire de fin d\'études',
      'Management d\'équipe'
    ]
  }
];

export default function LogistiquePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-orange-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="h-12 w-12 text-orange-200 mr-4" />
                <span className="text-orange-200 font-medium">Formation Diplômante</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                École Spécialisée de Logistique
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Formation diplômante de niveau Licence dans le domaine de la logistique 
                avec différentes spécialisations sectorielles. Maîtrisez la supply chain 
                et devenez un expert en logistique moderne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-orange-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-orange-200 mr-3" />
                    <span>Durée : 3 années universitaires</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-orange-200 mr-3" />
                    <span>Niveau Bac requis</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-200 mr-3" />
                    <span>180 crédits ECTS</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-orange-200 mr-3" />
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
              Spécialisations Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cinq spécialisations sectorielles pour répondre aux besoins du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{spec.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{spec.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Compétences :</h4>
                  {spec.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{skill}</span>
                    </div>
                  ))}
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
              Structure du Programme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un cursus progressif de 3 années pour maîtriser tous les aspects de la logistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programStructure.map((year, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{year.year}</h3>
                  <p className="text-orange-600 font-medium">{year.title}</p>
                </div>
                
                <div className="space-y-3">
                  {year.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center">
                      <BookOpen className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details and Careers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Durée et Structure
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Formation</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Durée : 3 années universitaires</li>
                    <li>• Rythme : Formation initiale avec stages obligatoires</li>
                    <li>• Crédits : 180 crédits ECTS</li>
                    <li>• Diplôme : Licence en Logistique</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Public Cible</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Titulaires d'un Baccalauréat</li>
                    <li>• Titulaires d'un DUT/BTS en logistique</li>
                    <li>• Professionnels en reconversion</li>
                    <li>• Étudiants en réorientation</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">
                    Frais de Formation
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-800">Frais d'inscription</span>
                      <span className="font-semibold text-orange-900">100 000 FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-800">Frais de scolarité annuels</span>
                      <span className="font-semibold text-orange-900">À confirmer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Débouchés Professionnels
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-6">
                  La licence en logistique ouvre les portes vers de nombreuses opportunités 
                  dans tous les secteurs d'activité :
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

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">
                  Secteurs d'Activité
                </h3>
                <ul className="space-y-2 text-orange-800">
                  <li>• Transport et logistique</li>
                  <li>• Distribution et grande distribution</li>
                  <li>• Industrie manufacturière</li>
                  <li>• Commerce international</li>
                  <li>• Secteur pétrolier et énergétique</li>
                  <li>• Ports et aéroports</li>
                  <li>• Conseil et audit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Documents Requis
              </h2>
              <p className="text-lg text-gray-600">
                Pièces nécessaires pour constituer votre dossier d'admission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Documents Standards
                </h3>
                <div className="space-y-3">
                  {requirements.slice(0, 4).map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Documents Professionnels
                </h3>
                <div className="space-y-3">
                  {requirements.slice(4).map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note :</strong> Les professionnels peuvent bénéficier de la VAE 
                    (Validation des Acquis de l'Expérience) pour une admission directe en L2 ou L3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Optimisez Votre Avenir Professionnel
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et devenez un expert en logistique. 
            Nos formations reconnues vous préparent aux défis de la supply chain moderne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
