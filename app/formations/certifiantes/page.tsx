import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Wrench, 
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
  Truck,
  Zap,
  Package,
  Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formations Certifiantes 6 mois | EPIKAÏZO University',
  description: 'Programmes intensifs de spécialisation technique : traitement bagages, conduite d\'engins, GPU, marshalling, arrimage. Formations certifiantes de 6 mois.',
  keywords: ['formations certifiantes', 'bagages', 'engins', 'GPU', 'marshalling', 'arrimage', 'aéroportuaire', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Formations', url: '/formations' },
  { name: 'Formations Certifiantes', url: '/formations/certifiantes' },
];

const programs = [
  {
    title: 'Traitement de Bagages et Chargement Avion',
    icon: Package,
    description: 'Formation aux techniques de traitement des bagages et de chargement/déchargement des avions.',
    level: 'Niveau 3ème minimum',
    skills: ['Tri et traitement des bagages', 'Chargement cargo', 'Respect des procédures sécurité', 'Utilisation des équipements']
  },
  {
    title: 'Traitement de la Touché',
    icon: Wrench,
    description: 'Spécialisation dans les opérations de maintenance légère et de nettoyage des aéronefs.',
    level: 'Niveau 5ème minimum',
    skills: ['Nettoyage intérieur/extérieur', 'Vérifications visuelles', 'Procédures de sécurité', 'Rapport d\'anomalies']
  },
  {
    title: 'Conduite d\'Engins Légers',
    icon: Truck,
    description: 'Formation à la conduite des véhicules et engins spécialisés aéroportuaires.',
    level: 'Permis B requis',
    skills: ['Conduite sécurisée', 'Entretien préventif', 'Règles de circulation', 'Manutention cargo']
  },
  {
    title: 'Service Toilette et Eau Potable',
    icon: Droplets,
    description: 'Formation aux services d\'avitaillement en eau et de vidange des avions.',
    level: 'Niveau 5ème minimum',
    skills: ['Systèmes hydrauliques', 'Normes d\'hygiène', 'Équipements spécialisés', 'Procédures sanitaires']
  },
  {
    title: 'GPU (Ground Power Unit)',
    icon: Zap,
    description: 'Spécialisation dans la fourniture d\'énergie électrique aux aéronefs au sol.',
    level: 'Niveau Terminale',
    skills: ['Systèmes électriques', 'Sécurité électrique', 'Maintenance préventive', 'Diagnostic pannes']
  },
  {
    title: 'Marshalling (Guidage d\'Avion)',
    icon: MapPin,
    description: 'Formation au guidage et positionnement des aéronefs sur les aires de stationnement.',
    level: 'Niveau 3ème minimum',
    skills: ['Signalisation aéronautique', 'Communication radio', 'Sécurité au sol', 'Procédures d\'urgence']
  },
  {
    title: 'Arrimage et Palettisation',
    icon: Package,
    description: 'Techniques d\'arrimage des marchandises et de palettisation pour le transport aérien.',
    level: 'Niveau 5ème minimum',
    skills: ['Techniques d\'arrimage', 'Calcul de centrage', 'Normes IATA', 'Manutention sécurisée']
  }
];

const costs = [
  { item: 'Frais d\'inscription', amount: '100 000 FCFA' },
  { item: 'Frais de formation', amount: '1 200 000 FCFA' },
  { item: 'Acompte à l\'inscription', amount: '500 000 FCFA' },
  { item: 'Uniforme', amount: '100 000 FCFA' },
  { item: 'Uniforme TP', amount: '50 000 FCFA' }
];

const requirements = [
  'Copie des derniers diplômes',
  'Relevé de notes',
  'Extrait d\'acte de naissance',
  '4 photos d\'identité',
  'Permis de conduire (pour certaines formations)',
  'Certificat médical d\'aptitude'
];

const careers = [
  'Agent de piste',
  'Agent de handling',
  'Chauffeur d\'engins aéroportuaires',
  'Agent de service technique',
  'Agent de rampe',
  'Technicien de maintenance au sol'
];

export default function CertifiantesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-emerald-100 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-12 w-12 text-emerald-200 mr-4" />
                <span className="text-emerald-200 font-medium">Formations Certifiantes</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Formations Techniques Spécialisées
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Programmes intensifs de spécialisation technique dans les métiers de l'aviation 
                et de la logistique aéroportuaire. Formations de 6 mois pour une insertion 
                professionnelle rapide et efficace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire Maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-emerald-700 transition-colors"
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
                    <Clock className="h-6 w-6 text-emerald-200 mr-3" />
                    <span>Durée : 6 mois intensifs</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-emerald-200 mr-3" />
                    <span>Niveau 5ème à Terminale</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-emerald-200 mr-3" />
                    <span>Certification professionnelle</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-emerald-200 mr-3" />
                    <span>70% pratique, 30% théorique</span>
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
              7 Programmes Spécialisés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formations techniques intensives pour les métiers de l'aéroportuaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-emerald-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                    <p className="text-emerald-600 text-sm font-medium">{program.level}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Compétences acquises :</h4>
                  {program.skills.map((skill, skillIndex) => (
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

      {/* Program Details */}
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
                    <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Durée et Rythme</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Durée : 6 mois intensifs</li>
                    <li>• Rythme : 70% pratique, 30% théorique</li>
                    <li>• Validation : Certification professionnelle</li>
                    <li>• Stages : Formation en situation réelle</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Public Cible</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Niveau 5ème à Terminale selon les formations</li>
                    <li>• Permis B requis pour la conduite d'engins</li>
                    <li>• Aptitude physique requise</li>
                    <li>• Motivation pour les métiers techniques</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                    Avantages de la Formation
                  </h3>
                  <ul className="space-y-2 text-emerald-800">
                    <li>• Formation pratique en conditions réelles</li>
                    <li>• Équipements professionnels modernes</li>
                    <li>• Encadrement par des experts métier</li>
                    <li>• Insertion professionnelle rapide</li>
                    <li>• Certification reconnue par les employeurs</li>
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
                  Nos formations certifiantes vous préparent aux métiers techniques 
                  de l'aéroportuaire avec des débouchés immédiats :
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

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                  Secteurs d'Emploi
                </h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>• Compagnies aériennes</li>
                  <li>• Sociétés de handling</li>
                  <li>• Gestionnaires d'aéroports</li>
                  <li>• Sociétés de maintenance</li>
                  <li>• Prestataires de services aéroportuaires</li>
                  <li>• Entreprises de fret aérien</li>
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
                Coût de la Formation
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
                    <li>• Acompte de 500 000 FCFA à l'inscription</li>
                    <li>• Solde payable en plusieurs échéances</li>
                    <li>• Frais non remboursables ni transférables</li>
                    <li>• Uniforme obligatoire pour la formation</li>
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
                      <FileText className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Conditions Spécifiques
                    </h4>
                    <p className="text-yellow-800 text-sm">
                      Le permis de conduire (permis B) est obligatoire pour la formation 
                      "Conduite d'engins légers". Un certificat médical d'aptitude 
                      est requis pour toutes les formations.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Insertion Professionnelle
                    </h4>
                    <p className="text-green-800 text-sm">
                      Taux d'insertion professionnelle élevé grâce à nos partenariats 
                      avec les acteurs du secteur aéroportuaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Devenez Expert en 6 Mois
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Nos formations certifiantes vous permettent d'acquérir rapidement 
            les compétences techniques recherchées par les employeurs du secteur aéronautique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
