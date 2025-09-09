'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
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
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet de formation. N'hésitez pas à nous contacter.
          </p>

          {/* Quick contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '📞',
                title: 'Appelez-nous',
                description: '+33 1 23 45 67 89',
                action: 'tel:+33123456789',
              },
              {
                icon: '✉️',
                title: 'Écrivez-nous',
                description: 'contact@epikaizo.com',
                action: 'mailto:contact@epikaizo.com',
              },
              {
                icon: '📍',
                title: 'Visitez-nous',
                description: '123 Avenue des Formations, Paris',
                action: '#map',
              },
            ].map((option, index) => (
              <motion.a
                key={index}
                href={option.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 group-hover:text-primary-600 transition-colors">
                  {option.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

