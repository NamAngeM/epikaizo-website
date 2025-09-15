'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FormationCategory } from '@/types';

const categories: FormationCategory[] = [
  {
    id: 1,
    name: 'Aviation',
    slug: 'aviation',
    description: 'Formations spécialisées en aviation civile et commerciale',
    icon: '✈️',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Logistique',
    slug: 'logistique',
    description: 'Gestion de la chaîne logistique et supply chain',
    icon: '📦',
    color: 'green',
  },
  {
    id: 3,
    name: 'Tourisme & Hôtelerie',
    slug: 'tourisme',
    description: 'Formations en tourisme et hôtellerie de luxe',
    icon: '🏨',
    color: 'purple',
  },
  {
    id: 4,
    name: 'QHSE & Développement Durable',
    slug: 'qhse',
    description: 'Qualité, Hygiène, Sécurité et Environnement',
    icon: '🛡️',
    color: 'orange',
  },
  {
    id: 5,
    name: 'Science de l\'Information et Communication',
    slug: 'communication',
    description: 'Formations en communication et technologies de l\'information',
    icon: '📡',
    color: 'indigo',
  },
];

const getCategoryColors = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      hover: 'hover:bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200',
    },
    green: {
      bg: 'bg-green-50',
      hover: 'hover:bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
    },
    purple: {
      bg: 'bg-purple-50',
      hover: 'hover:bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200',
    },
    orange: {
      bg: 'bg-orange-50',
      hover: 'hover:bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200',
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export function Categories() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Nos domaines de formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos différents domaines d'expertise et trouvez la formation 
            qui correspond à vos objectifs professionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const colors = getCategoryColors(category.color);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/formations/${category.slug}`}
                  className={`block p-8 rounded-2xl border-2 ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${colors.bg} ${colors.border} border-2 mb-4 group-hover:scale-110 transition-transform`}>
                      {typeof category.icon === 'string' ? (
                        <span className="text-4xl">{category.icon}</span>
                      ) : (
                        <category.icon size="2xl" color="primary" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`text-xl font-semibold ${colors.text} mb-3`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* CTA */}
                    <div className={`inline-flex items-center text-sm font-medium ${colors.text} group-hover:translate-x-1 transition-transform`}>
                      Découvrir
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Besoin d'aide pour choisir ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'orientation est là pour vous accompagner dans le choix 
              de votre formation. Contactez-nous pour un conseil personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Nous contacter
              </Link>
              <Link
                href="/admission"
                className="btn-outline"
              >
                Processus d'admission
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

