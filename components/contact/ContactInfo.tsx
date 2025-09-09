'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Award } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: '123 Avenue des Formations\n75001 Paris, France',
    action: 'https://maps.google.com/?q=123+Avenue+des+Formations+Paris',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+33 1 23 45 67 89',
    action: 'tel:+33123456789',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@epikaizo.com',
    action: 'mailto:contact@epikaizo.com',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun - Ven: 9h00 - 18h00\nSam: 9h00 - 12h00',
    action: null,
  },
];

const quickFacts = [
  {
    icon: Users,
    title: 'Équipe dédiée',
    description: 'Plus de 20 formateurs experts',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Formations certifiantes reconnues',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact information */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Informations de contact
        </h3>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            );

            return info.action ? (
              <a
                key={index}
                href={info.action}
                className="block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Quick facts */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Pourquoi nous choisir ?
        </h3>
        
        <div className="space-y-4">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {fact.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {fact.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Questions fréquentes
        </h3>
        
        <div className="space-y-4">
          {[
            {
              question: 'Quels sont les prérequis pour s\'inscrire ?',
              answer: 'Les prérequis varient selon la formation. Consultez la page de chaque formation pour plus de détails.',
            },
            {
              question: 'Proposez-vous des formations en ligne ?',
              answer: 'Oui, nous proposons des formations en ligne, en présentiel et en mode hybride.',
            },
            {
              question: 'Comment se déroule l\'admission ?',
              answer: 'Le processus d\'admission comprend un dossier de candidature et un entretien.',
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-2">
                {faq.question}
              </h4>
              <p className="text-gray-600 text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <a
            href="/faq"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Voir toutes les questions →
          </a>
        </div>
      </motion.div>

      {/* Social media */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Suivez-nous
        </h3>
        
        <div className="flex space-x-4">
          {[
            { name: 'Facebook', href: '#', icon: '📘' },
            { name: 'LinkedIn', href: '#', icon: '💼' },
            { name: 'Twitter', href: '#', icon: '🐦' },
            { name: 'Instagram', href: '#', icon: '📷' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
              aria-label={social.name}
            >
              <span className="text-xl">{social.icon}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

