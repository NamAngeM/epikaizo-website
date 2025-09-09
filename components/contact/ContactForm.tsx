'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
  formation: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Vous devez accepter les conditions'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  'Information sur une formation',
  'Demande de devis',
  'Question sur l\'admission',
  'Problème technique',
  'Partenariat',
  'Autre',
];

const formations = [
  'Formation Pilote de Ligne',
  'Gestion de la Chaîne Logistique',
  'Management Stratégique',
  'Formation QHSE',
  'Autre',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Ici, vous feriez l'appel API réel
      // await contactApi.sendMessage(data);
      
      toast.success('Votre message a été envoyé avec succès !');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Message envoyé !
        </h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Envoyez-nous un message
        </h2>
        <p className="text-gray-600">
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nom complet *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`input ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="Votre nom complet"
            />
            {errors.name && (
              <p className="form-error">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Adresse email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Téléphone *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`input ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="+33 1 23 45 67 89"
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Sujet *
            </label>
            <select
              {...register('subject')}
              id="subject"
              className={`select ${errors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            >
              <option value="">Sélectionnez un sujet</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="form-error">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Formation */}
        <div className="form-group">
          <label htmlFor="formation" className="form-label">
            Formation d'intérêt (optionnel)
          </label>
          <select
            {...register('formation')}
            id="formation"
            className="select"
          >
            <option value="">Sélectionnez une formation</option>
            {formations.map((formation) => (
              <option key={formation} value={formation}>
                {formation}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`textarea ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Décrivez votre demande en détail..."
          />
          {errors.message && (
            <p className="form-error">{errors.message.message}</p>
          )}
        </div>

        {/* Consent */}
        <div className="form-group">
          <label className="flex items-start space-x-3">
            <input
              {...register('consent')}
              type="checkbox"
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">
              J'accepte que mes données personnelles soient utilisées pour traiter ma demande 
              conformément à la{' '}
              <a href="/confidentialite" className="text-primary-600 hover:text-primary-700">
                politique de confidentialité
              </a>
              . *
            </span>
          </label>
          {errors.consent && (
            <p className="form-error">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary btn-lg w-full group"
        >
          {isSubmitting ? (
            <>
              <div className="loader-sm mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

