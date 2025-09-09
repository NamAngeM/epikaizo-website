import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Building, 
  Users, 
  Award, 
  Target, 
  Heart, 
  CheckCircle,
  Calendar,
  MapPin,
  Lightbulb,
  TrendingUp,
  Globe,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | EPIKAÏZO University',
  description: 'Découvrez l\'histoire, la mission et les valeurs d\'EPIKAÏZO University. Notre engagement pour une formation d\'excellence en aviation, logistique et gestion.',
  keywords: ['EPIKAÏZO', 'université', 'histoire', 'mission', 'valeurs', 'formation', 'excellence'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'À Propos', url: '/a-propos' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence Académique',
    description: 'Nous nous engageons à offrir une formation de qualité supérieure, reconnue par les professionnels du secteur.'
  },
  {
    icon: Users,
    title: 'Accompagnement Personnalisé',
    description: 'Chaque étudiant bénéficie d\'un suivi individualisé pour maximiser ses chances de réussite professionnelle.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Pédagogique',
    description: 'Nos méthodes d\'enseignement allient théorie moderne et pratique professionnelle adaptée au marché.'
  },
  {
    icon: Globe,
    title: 'Ouverture Internationale',
    description: 'Formation aux standards internationaux avec possibilités de stages et partenariats à l\'étranger.'
  },
  {
    icon: Heart,
    title: 'Engagement Social',
    description: 'Nous contribuons au développement socio-économique par la formation de professionnels compétents.'
  },
  {
    icon: TrendingUp,
    title: 'Employabilité',
    description: 'Nos programmes sont conçus pour répondre aux besoins réels du marché de l\'emploi actuel et futur.'
  }
];

const milestones = [
  {
    year: '2015',
    title: 'Création d\'EPIKAÏZO University',
    description: 'Fondation de l\'université avec pour mission de former les professionnels de demain dans les secteurs porteurs.'
  },
  {
    year: '2017',
    title: 'Première Promotion Aviation',
    description: 'Lancement réussi des formations en aviation civile avec nos premiers diplômés intégrant les compagnies aériennes.'
  },
  {
    year: '2019',
    title: 'Extension Logistique',
    description: 'Ouverture de l\'école spécialisée de logistique pour répondre à la demande croissante du secteur.'
  },
  {
    year: '2021',
    title: 'Reconnaissance Internationale',
    description: 'Obtention de certifications internationales et partenariats avec des universités européennes.'
  },
  {
    year: '2023',
    title: 'Campus Moderne',
    description: 'Inauguration de notre nouveau campus équipé des dernières technologies pédagogiques.'
  },
  {
    year: '2025',
    title: 'Vision Numérique',
    description: 'Intégration complète du numérique dans nos formations avec plateforme e-learning avancée.'
  }
];

const stats = [
  { number: '2000+', label: 'Étudiants Diplômés', icon: Users },
  { number: '95%', label: 'Taux d\'Insertion', icon: TrendingUp },
  { number: '50+', label: 'Entreprises Partenaires', icon: Building },
  { number: '15+', label: 'Formations Proposées', icon: BookOpen }
];

const partnerships = [
  'Air Congo - Formation et stages en aviation',
  'Port Autonome de Pointe-Noire - Logistique portuaire',
  'Total Energies - Formations QHSE',
  'Université de Bordeaux - Échanges académiques',
  'Chamber of Commerce - Développement entrepreneurial',
  'Ministère de l\'Enseignement Supérieur - Reconnaissance officielle'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-blue-100 mb-6" />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos d'EPIKAÏZO University
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Depuis 2015, EPIKAÏZO University forme les professionnels de demain dans les secteurs 
              de l'aviation, de la logistique, des sciences de gestion et de la communication. 
              Notre mission : l'excellence au service de votre réussite.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-200 mr-2" />
                    <span className="text-3xl font-bold">{stat.number}</span>
                  </div>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                EPIKAÏZO University s'engage à former des professionnels compétents et éthiques, 
                capables de répondre aux défis économiques et sociaux de notre époque. 
                Nous croyons en une éducation qui transforme les individus et contribue 
                au développement de notre société.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Formation d'Excellence</h3>
                    <p className="text-gray-600">Programmes adaptés aux exigences professionnelles actuelles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600">Suivi individuel de chaque étudiant tout au long de son parcours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ouverture Internationale</h3>
                    <p className="text-gray-600">Partenariats et échanges avec des institutions reconnues</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Nos Domaines d'Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Aviation Civile et Aéroportuaire</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Logistique et Supply Chain</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Sciences de Gestion</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">QHSE et Développement Durable</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Communication et Médias</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Tourisme et Hôtellerie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et notre engagement envers nos étudiants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les étapes clés du développement d'EPIKAÏZO University
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un réseau solide d'entreprises et d'institutions qui soutiennent notre mission éducative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <Building className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{partnership}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Campus
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Situé au cœur de Pointe-Noire, notre campus moderne offre un environnement 
                d'apprentissage optimal avec des équipements de dernière génération.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Emplacement Stratégique</h3>
                    <p className="text-gray-600">Facilement accessible, proche des zones d'activités économiques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Infrastructures Modernes</h3>
                    <p className="text-gray-600">Salles de classe équipées, laboratoires, bibliothèque numérique</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Vie Étudiante</h3>
                    <p className="text-gray-600">Espaces de détente, activités culturelles et sportives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Équipements Disponibles</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Salles de classe climatisées</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Laboratoires informatiques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Bibliothèque et centre de documentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Simulateurs de vol et équipements aéronautiques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Studios audiovisuels</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Espaces de coworking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-blue-800">Cafétéria et espaces de restauration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez la Communauté EPIKAÏZO
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment EPIKAÏZO University peut vous accompagner 
            dans la réalisation de vos ambitions professionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/formations"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Découvrir nos Formations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
