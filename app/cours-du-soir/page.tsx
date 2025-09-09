import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Moon, 
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
  Star,
  Building,
  Plane
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cours du Soir | EPIKAÏZO University',
  description: 'Formations en cours du soir à EPIKAÏZO University. Horaires 14h-18h et 17h-20h. Sciences de Gestion et Aviation Civile pour professionnels en activité.',
  keywords: ['cours du soir', 'formation continue', 'horaires flexibles', 'professionnels', 'EPIKAÏZO'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Cours du Soir', url: '/cours-du-soir' },
];

const schedules = [
  {
    title: 'Horaires Après-midi',
    time: '14h - 18h',
    description: 'Parfait pour les professionnels avec horaires matinaux',
    target: 'Salariés du matin, entrepreneurs'
  },
  {
    title: 'Horaires Soirée',
    time: '17h - 20h',
    description: 'Idéal pour les employés avec journée standard',
    target: 'Salariés de bureau, fonctionnaires'
  }
];

const eveningPrograms = [
  {
    title: 'Sciences de Gestion - DUT',
    duration: '2.5 ans en cours du soir',
    specializations: [
      'QHSE',
      'Gestion des ressources humaines',
      'Commerce international',
      'Communication et marketing digital',
      'Banque finance',
      'Transit douane',
      'Gestion maritime et portuaire'
    ],
    cost: '850 000 FCFA/an',
    description: 'Formation DUT adaptée aux professionnels en activité'
  },
  {
    title: 'Aviation Civile',
    duration: '12-24 mois selon spécialisation',
    specializations: [
      'Agent d\'escale commercial',
      'Hôtesse de l\'air et steward',
      'Management des opérations aéroportuaires'
    ],
    cost: '1 000 000 - 1 200 000 FCFA',
    description: 'Formations aviation pour reconversion professionnelle'
  }
];

const advantages = [
  'Conciliation travail-études',
  'Rythme adapté aux professionnels',
  'Mêmes diplômes que la formation classique',
  'Accompagnement personnalisé',
  'Groupes restreints',
  'Flexibilité des horaires'
];

const targetAudience = [
  'Professionnels en activité',
  'Entrepreneurs souhaitant se former',
  'Fonctionnaires en évolution de carrière',
  'Parents avec contraintes familiales',
  'Personnes en reconversion professionnelle',
  'Salariés en formation continue'
];

export default function CoursduSoirPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 to-purple-900 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-indigo-200 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Moon className="h-12 w-12 text-indigo-300 mr-4" />
                <span className="text-indigo-300 font-medium">Spécial Cours du Soir</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Formations en Cours du Soir
              </h1>
              <p className="text-xl text-indigo-200 leading-relaxed mb-8">
                Conciliez votre activité professionnelle avec vos ambitions académiques. 
                EPIKAÏZO University propose des formations diplômantes en horaires aménagés 
                pour les professionnels en activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pre-inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  S'inscrire aux Cours du Soir
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-800 transition-colors"
                >
                  Plus d'Informations
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Horaires Flexibles</h3>
                <div className="space-y-6">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="text-lg font-bold text-white">{schedule.title}</h4>
                      <p className="text-2xl font-bold text-yellow-400 mb-2">{schedule.time}</p>
                      <p className="text-indigo-200 text-sm">{schedule.description}</p>
                      <p className="text-indigo-300 text-xs mt-1">{schedule.target}</p>
                    </div>
                  ))}
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
              Formations Disponibles en Cours du Soir
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les mêmes formations diplômantes avec des horaires adaptés à votre vie professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eveningPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    {index === 0 ? <Building className="h-8 w-8 text-white" /> : <Plane className="h-8 w-8 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-indigo-600 font-medium">{program.duration}</p>
                    <p className="text-yellow-600 font-bold">{program.cost}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Spécialisations disponibles :</h4>
                  {program.specializations.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={index === 0 ? "/formations/gestion" : "/formations/aviation"}
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Voir les détails de la formation
                    <BookOpen className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Avantages des Cours du Soir
              </h2>
              
              <div className="space-y-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  💡 Conseil EPIKAÏZO
                </h3>
                <p className="text-yellow-800">
                  Les cours du soir vous permettent de continuer à travailler tout en vous formant. 
                  C'est l'investissement idéal pour faire évoluer votre carrière sans interruption de revenus.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Public Cible
              </h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <p className="text-gray-600 mb-6">
                  Les cours du soir s'adressent particulièrement à :
                </p>
                
                <div className="space-y-3">
                  {targetAudience.map((target, index) => (
                    <div key={index} className="flex items-center">
                      <Users className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{target}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  📅 Modalités Pratiques
                </h3>
                <div className="space-y-3 text-indigo-800">
                  <div className="flex justify-between">
                    <span>Rentrée académique :</span>
                    <span className="font-semibold">15 septembre 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inscriptions :</span>
                    <span className="font-semibold text-green-600">Ouvertes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stages :</span>
                    <span className="font-semibold">Offerts et intégrés</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cours :</span>
                    <span className="font-semibold">Lundi à Vendredi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Évoluez Professionnellement Sans Contrainte
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Rejoignez nos cours du soir et donnez une nouvelle dimension à votre carrière 
            tout en conservant votre activité professionnelle actuelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
            >
              <Moon className="h-5 w-5 mr-2" />
              S'inscrire aux Cours du Soir
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-800 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
