'use client';

import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Nous trouver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre centre de formation est situé au cœur de Paris, facilement accessible 
            en transports en commun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Map placeholder */}
          <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Carte interactive
                </h3>
                <p className="text-gray-600">
                  Ici sera intégrée une carte Google Maps ou OpenStreetMap
                </p>
              </div>
            </div>
            
            {/* Map marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Map info */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚇</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Métro</h4>
                <p className="text-gray-600 text-sm">
                  Ligne 1 - Station Châtelet<br />
                  5 minutes à pied
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚌</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Bus</h4>
                <p className="text-gray-600 text-sm">
                  Lignes 21, 38, 47<br />
                  Arrêt Rivoli
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚗</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                <p className="text-gray-600 text-sm">
                  Parking public à proximité<br />
                  Places réservées étudiants
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Visite du centre
            </h3>
            <p className="text-gray-600 mb-4">
              Vous souhaitez découvrir nos installations ? Nous organisons des visites 
              guidées sur rendez-vous.
            </p>
            <button className="btn-primary">
              Prendre rendez-vous
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Événements
            </h3>
            <p className="text-gray-600 mb-4">
              Découvrez nos prochains événements : journées portes ouvertes, 
              conférences et ateliers.
            </p>
            <button className="btn-outline">
              Voir les événements
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

