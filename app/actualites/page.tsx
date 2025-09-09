import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Actualités | EPIKAÏZO University',
  description: 'Découvrez les dernières actualités d\'EPIKAÏZO University : événements, nouvelles formations, partenariats et vie étudiante.',
  keywords: ['actualités', 'news', 'EPIKAÏZO', 'university', 'événements', 'formations'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Actualités', url: '/actualites' },
];

// Données d'exemple pour les actualités
const featuredNews = {
  id: 1,
  title: 'EPIKAÏZO University lance sa nouvelle formation en Cybersécurité',
  excerpt: 'Une formation innovante pour répondre aux défis numériques actuels et former les experts en sécurité informatique de demain.',
  content: 'EPIKAÏZO University est fière d\'annoncer le lancement de sa nouvelle formation en Cybersécurité, conçue pour répondre aux besoins croissants du marché en matière de sécurité informatique...',
  image: '/images/news/cybersecurity.jpg',
  author: 'Direction Académique',
  date: '2024-03-15',
  category: 'Formations',
  readTime: '5 min',
};

const recentNews = [
  {
    id: 2,
    title: 'Partenariat stratégique avec Air Congo',
    excerpt: 'EPIKAÏZO University signe un accord de partenariat avec Air Congo pour renforcer la formation en aviation.',
    image: '/images/news/air-congo-partnership.jpg',
    author: 'Service Communication',
    date: '2024-03-10',
    category: 'Partenariats',
    readTime: '3 min',
  },
  {
    id: 3,
    title: 'Journée Portes Ouvertes 2024',
    excerpt: 'Découvrez nos formations et rencontrez nos étudiants lors de notre journée portes ouvertes annuelle.',
    image: '/images/news/open-day.jpg',
    author: 'Service Admission',
    date: '2024-03-05',
    category: 'Événements',
    readTime: '2 min',
  },
  {
    id: 4,
    title: 'Nos étudiants remportent le concours national de logistique',
    excerpt: 'L\'équipe d\'étudiants en logistique d\'EPIKAÏZO remporte la première place du concours national.',
    image: '/images/news/logistics-competition.jpg',
    author: 'Département Logistique',
    date: '2024-02-28',
    category: 'Réussites',
    readTime: '4 min',
  },
  {
    id: 5,
    title: 'Nouvelle infrastructure : Laboratoire de Simulation Aéronautique',
    excerpt: 'EPIKAÏZO investit dans un laboratoire de simulation de dernière génération pour ses étudiants en aviation.',
    image: '/images/news/flight-simulator.jpg',
    author: 'Direction Technique',
    date: '2024-02-20',
    category: 'Infrastructure',
    readTime: '3 min',
  },
  {
    id: 6,
    title: 'Conférence sur l\'Intelligence Artificielle dans le Tourisme',
    excerpt: 'Une conférence exclusive sur l\'impact de l\'IA dans l\'industrie touristique avec des experts internationaux.',
    image: '/images/news/ai-tourism.jpg',
    author: 'Département Tourisme',
    date: '2024-02-15',
    category: 'Conférences',
    readTime: '6 min',
  },
];

const categories = [
  'Toutes les actualités',
  'Formations',
  'Partenariats',
  'Événements',
  'Réussites',
  'Infrastructure',
  'Conférences',
];

function NewsCard({ news, featured = false }: { news: any; featured?: boolean }) {
  const cardClass = featured 
    ? 'col-span-1 lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow'
    : 'bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow';

  return (
    <article className={cardClass}>
      <div className={featured ? 'lg:flex' : ''}>
        <div className={featured ? 'lg:w-1/2' : ''}>
          <div className="aspect-video bg-gray-200 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-epikaizo-red text-white">
                {news.category}
              </span>
            </div>
          </div>
        </div>
        
        <div className={featured ? 'p-8 lg:w-1/2' : 'p-6'}>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{news.author}</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{new Date(news.date).toLocaleDateString('fr-FR')}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{news.readTime}</span>
          </div>
          
          <h2 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
            <a href={`/actualites/${news.id}`} className="hover:text-epikaizo-red transition-colors">
              {news.title}
            </a>
          </h2>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {news.excerpt}
          </p>
          
          <a
            href={`/actualites/${news.id}`}
            className="inline-flex items-center text-epikaizo-red font-medium hover:text-red-700 transition-colors"
          >
            Lire la suite
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-epikaizo-blue to-blue-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-blue-100 mb-6" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualités EPIKAÏZO
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Restez informé des dernières nouvelles d'EPIKAÏZO University : 
              nouvelles formations, partenariats, événements et réussites de nos étudiants.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Toutes les actualités'
                    ? 'bg-epikaizo-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <NewsCard news={featuredNews} featured={true} />
            
            {/* Recent Articles */}
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Charger plus d'actualités
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-epikaizo-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ne Manquez Aucune Actualité
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles 
            d'EPIKAÏZO University directement dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-white text-epikaizo-red font-medium rounded-md hover:bg-gray-100 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
