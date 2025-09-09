import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerNavigation = {
  formations: [
    { name: 'Aviation', href: '/formations/aviation' },
    { name: 'Logistique', href: '/formations/logistique' },
    { name: 'Tourisme & Hôtelerie', href: '/formations/tourisme' },
    { name: 'QHSE & Développement Durable', href: '/formations/qhse' },
    { name: 'Science de l\'Information et Communication', href: '/formations/communication' },
  ],
  entreprise: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Notre équipe', href: '/equipe' },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'Carrières', href: '/carrieres' },
  ],
  etudiants: [
    { name: 'Admission', href: '/admission' },
    { name: 'Pré-inscription', href: '/pre-inscription' },
    { name: 'Espace Étudiant', href: '/espace-etudiant' },
    { name: 'FAQ', href: '/faq' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <img
                  src="/logo-epk.png"
                  alt="EPIKAIZO UNIVERSITY Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-white">
                  EPIKAIZO UNIVERSITY
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  Let's promote excellence - excellence first
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour des formations professionnelles d'excellence 
              en aviation, logistique, tourisme & hôtelerie, QHSE et communication.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-epikaizo-red" />
                <span className="text-gray-300">
                  Charbonnage (100mètres du terrain de basket)<br />
                  Libreville, Gabon
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-epikaizo-red" />
                <span className="text-gray-300">076 55 83 38 | 065 12 76 31 | 066 83 85 63</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-epikaizo-red" />
                <span className="text-gray-300">universityepikaizo@gmail.com</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-epikaizo-red transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Formations</h3>
            <ul className="space-y-3">
              {footerNavigation.formations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerNavigation.entreprise.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Étudiants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Étudiants</h3>
            <ul className="space-y-3">
              {footerNavigation.etudiants.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Restez informé</h3>
              <p className="text-gray-300">
                Recevez nos dernières actualités et offres de formations
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="input bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 rounded-r-none"
              />
              <button
                type="submit"
                className="bg-epikaizo-red text-white px-4 py-2 rounded-l-none rounded-r-lg font-medium hover:bg-red-700 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EPIKAIZO. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              {footerNavigation.support.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

