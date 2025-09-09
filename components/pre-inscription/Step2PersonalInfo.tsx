'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PreInscriptionData } from './PreInscriptionWizard';

interface Step2PersonalInfoProps {
  data: PreInscriptionData;
  updateData: (data: Partial<PreInscriptionData>) => void;
}

const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  dateOfBirth: z.string().min(1, 'Date de naissance requise'),
  nationality: z.string().min(2, 'Nationalité requise'),
  address: z.object({
    street: z.string().min(5, 'Adresse requise'),
    city: z.string().min(2, 'Ville requise'),
    postalCode: z.string().min(5, 'Code postal invalide'),
    country: z.string().min(2, 'Pays requis'),
  }),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const countries = [
  'France', 'Belgique', 'Suisse', 'Canada', 'Maroc', 'Tunisie', 'Algérie',
  'Sénégal', 'Côte d\'Ivoire', 'Cameroun', 'Autre'
];

export function Step2PersonalInfo({ data, updateData }: Step2PersonalInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || '',
      dateOfBirth: data.dateOfBirth || '',
      nationality: data.nationality || '',
      address: {
        street: data.address?.street || '',
        city: data.address?.city || '',
        postalCode: data.address?.postalCode || '',
        country: data.address?.country || '',
      },
    },
  });

  const onSubmit = (formData: PersonalInfoFormData) => {
    updateData(formData);
  };

  // Auto-save on change
  const watchedData = watch();
  React.useEffect(() => {
    const subscription = watch((value) => {
      updateData(value as Partial<PreInscriptionData>);
    });
    return () => subscription.unsubscribe();
  }, [watch, updateData]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Informations personnelles
        </h2>
        <p className="text-gray-600">
          Renseignez vos informations personnelles pour finaliser votre inscription.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Prénom *
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className={`input ${errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="Votre prénom"
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Nom *
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className={`input ${errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="Votre nom"
            />
            {errors.lastName && (
              <p className="form-error">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Contact fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        {/* Birth date and nationality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="dateOfBirth" className="form-label">
              Date de naissance *
            </label>
            <input
              {...register('dateOfBirth')}
              type="date"
              id="dateOfBirth"
              className={`input ${errors.dateOfBirth ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            />
            {errors.dateOfBirth && (
              <p className="form-error">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="nationality" className="form-label">
              Nationalité *
            </label>
            <select
              {...register('nationality')}
              id="nationality"
              className={`select ${errors.nationality ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            >
              <option value="">Sélectionnez votre nationalité</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.nationality && (
              <p className="form-error">{errors.nationality.message}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Adresse de résidence
          </h3>
          
          <div className="form-group mb-6">
            <label htmlFor="street" className="form-label">
              Adresse *
            </label>
            <input
              {...register('address.street')}
              type="text"
              id="street"
              className={`input ${errors.address?.street ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="123 Rue de la Formation"
            />
            {errors.address?.street && (
              <p className="form-error">{errors.address.street.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="form-group">
              <label htmlFor="city" className="form-label">
                Ville *
              </label>
              <input
                {...register('address.city')}
                type="text"
                id="city"
                className={`input ${errors.address?.city ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Paris"
              />
              {errors.address?.city && (
                <p className="form-error">{errors.address.city.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="postalCode" className="form-label">
                Code postal *
              </label>
              <input
                {...register('address.postalCode')}
                type="text"
                id="postalCode"
                className={`input ${errors.address?.postalCode ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="75001"
              />
              {errors.address?.postalCode && (
                <p className="form-error">{errors.address.postalCode.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Pays *
              </label>
              <select
                {...register('address.country')}
                id="country"
                className={`select ${errors.address?.country ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              >
                <option value="">Sélectionnez votre pays</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.address?.country && (
                <p className="form-error">{errors.address.country.message}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}