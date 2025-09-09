'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Award,
    title: 'Certifications reconnues',
    description: 'Toutes nos formations délivrent des certifications reconnues par l\'industrie',
  },
  {
    icon: Users,
    title: 'Experts reconnus',
    description: 'Nos formateurs sont des professionnels expérimentés dans leur domaine',
  },
  {
    icon: Clock,
    title: 'Formations flexibles',
    description: 'Formations en présentiel, en ligne ou en mode hybride selon vos besoins',
  },
];

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-epikaizo-red to-red-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Prêt à transformer votre carrière ?
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                Rejoignez des centaines d'étudiants qui ont choisi EPIKAIZO pour 
                développer leurs compétences et accéder à de nouvelles opportunités professionnelles.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-red-100">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/pre-inscription"
                className="bg-white text-epikaizo-red px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center group"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-epikaizo-red px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Inscription en 3 étapes
                </h3>
                <p className="text-primary-100">
                  Processus simple et rapide
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Choisissez votre formation', description: 'Parcourez notre catalogue' },
                  { step: '2', title: 'Remplissez le formulaire', description: 'Informations personnelles' },
                  { step: '3', title: 'Confirmez votre inscription', description: 'Validation et paiement' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-primary-100">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-primary-100">Étudiants formés</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-primary-100">Taux de réussite</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

