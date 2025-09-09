'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '@/types';

// Mock data - sera remplacé par les données de Strapi
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    position: 'Pilote de ligne',
    company: 'Air France',
    content: 'La formation EPIKAIZO m\'a permis de réaliser mon rêve de devenir pilote. Les instructeurs sont exceptionnels et la qualité de l\'enseignement est remarquable.',
    rating: 5,
    isPublished: true,
    createdAt: '2024-01-01',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    position: 'Responsable Logistique',
    company: 'Amazon',
    content: 'Excellente formation en logistique ! J\'ai pu appliquer immédiatement les concepts appris dans mon travail. Je recommande vivement EPIKAIZO.',
    rating: 5,
    isPublished: true,
    createdAt: '2024-01-01',
  },
  {
    id: 3,
    name: 'Marie Leroy',
    position: 'Directrice QHSE',
    company: 'Total Energies',
    content: 'Formation QHSE très complète et adaptée aux enjeux actuels. Les formateurs sont des experts reconnus dans leur domaine.',
    rating: 5,
    isPublished: true,
    createdAt: '2024-01-01',
  },
  {
    id: 4,
    name: 'Pierre Moreau',
    position: 'Manager',
    company: 'Capgemini',
    content: 'La formation en management stratégique m\'a donné les outils nécessaires pour évoluer dans ma carrière. Un investissement qui en vaut la peine.',
    rating: 5,
    isPublished: true,
    createdAt: '2024-01-01',
  },
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setTestimonials(mockTestimonials);
      setLoading(false);
    }, 1000);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="loader-lg mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des témoignages...</p>
          </div>
        </div>
      </section>
    );
  }

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
            Ce que disent nos étudiants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos anciens étudiants qui ont transformé 
            leur carrière grâce à nos formations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-primary-600" />
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-center mb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex]?.content}"
                  </p>
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < (testimonials[currentIndex]?.rating || 0)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentIndex]?.name
                        ?.split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex]?.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex]?.position} chez{' '}
                    <span className="font-medium">{testimonials[currentIndex]?.company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne des formations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Étudiants satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
            <div className="text-gray-600">Taux d'insertion professionnelle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

