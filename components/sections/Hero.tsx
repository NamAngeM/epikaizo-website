'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-blue-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-epikaizo-red to-primary-600 text-white rounded-full text-sm font-medium shadow-lg"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Inscriptions ouvertes • Rentrée 15 septembre 2025
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight"
              >
                Let's promote{' '}
                <span className="text-epikaizo-red">excellence</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Premier établissement d'enseignement supérieur privé au Gabon spécialisé en aviation, 
                logistique, tourisme & hôtelerie, QHSE et communication. Formez-vous avec des experts 
                reconnus et intégrez le marché de l'emploi gabonais et de l'Afrique Centrale.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: '🎓', text: 'Formations certifiantes' },
                { icon: '👨‍🏫', text: 'Experts reconnus' },
                { icon: '💼', text: 'Insertion professionnelle' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/pre-inscription"
                className="bg-epikaizo-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 inline-flex items-center group shadow-xl"
              >
                🎓 S'inscrire Maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/formations"
                className="border-2 border-epikaizo-blue text-epikaizo-blue px-6 py-4 rounded-lg font-medium hover:bg-epikaizo-blue hover:text-white transition-colors inline-flex items-center group"
              >
                Découvrir nos formations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: '500+', label: 'Étudiants formés' },
                { number: '95%', label: 'Taux de réussite' },
                { number: '50+', label: 'Formations disponibles' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-epikaizo-red">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-image.jpg"
                alt="Formation EPIKAIZO"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Video overlay */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                  >
                    <Play className="h-8 w-8 text-primary-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certification garantie</div>
                  <div className="text-sm text-gray-600">Reconnue par l'industrie</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">👨‍🏫</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Experts reconnus</div>
                  <div className="text-sm text-gray-600">Plus de 10 ans d'expérience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Présentation EPIKAIZO"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

