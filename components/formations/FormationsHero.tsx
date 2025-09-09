'use client';

import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

export function FormationsHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Nos Formations
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez notre catalogue complet de formations professionnelles. 
            Trouvez la formation qui correspond à vos objectifs et développez 
            vos compétences avec nos experts.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary">
                Rechercher
              </button>
            </div>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { number: '50+', label: 'Formations disponibles' },
              { number: '4', label: 'Domaines d\'expertise' },
              { number: '500+', label: 'Étudiants formés' },
              { number: '95%', label: 'Taux de réussite' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

