'use client';

import { useState } from 'react';
import { CheckCircle, Edit, File, User, GraduationCap, Briefcase } from 'lucide-react';
import { PreInscriptionData } from './PreInscriptionWizard';
import { formatPrice, formatDate } from '@/lib/utils';

interface Step5ReviewProps {
  data: PreInscriptionData;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function Step5Review({ data, onSubmit, isSubmitting }: Step5ReviewProps) {
  const [consent, setConsent] = useState(data.consent || false);
  const [newsletter, setNewsletter] = useState(data.newsletter || false);
  const [notes, setNotes] = useState(data.notes || '');

  const handleSubmit = () => {
    if (consent) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Vérification de votre inscription
        </h2>
        <p className="text-gray-600">
          Vérifiez toutes les informations avant de finaliser votre inscription.
        </p>
      </div>

      {/* Formation Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Formation sélectionnée</h3>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">
            {data.formationTitle}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Date de début :</span>
              <span className="ml-2 font-medium">
                {data.startDate ? formatDate(data.startDate) : 'À définir'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Mode de paiement :</span>
              <span className="ml-2 font-medium">
                {data.paymentMethod === 'full' && 'Paiement intégral'}
                {data.paymentMethod === 'installments' && 'Paiement échelonné'}
                {data.paymentMethod === 'financing' && 'Financement'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Statut :</span>
              <span className="ml-2 font-medium text-green-600">Pré-inscription</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Informations personnelles</h3>
          </div>
          <button className="text-primary-600 hover:text-primary-700 text-sm">
            <Edit className="h-4 w-4 mr-1 inline" />
            Modifier
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Nom complet :</span>
            <span className="ml-2 font-medium">
              {data.firstName} {data.lastName}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Email :</span>
            <span className="ml-2 font-medium">{data.email}</span>
          </div>
          <div>
            <span className="text-gray-600">Téléphone :</span>
            <span className="ml-2 font-medium">{data.phone}</span>
          </div>
          <div>
            <span className="text-gray-600">Date de naissance :</span>
            <span className="ml-2 font-medium">
              {data.dateOfBirth ? formatDate(data.dateOfBirth) : ''}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Nationalité :</span>
            <span className="ml-2 font-medium">{data.nationality}</span>
          </div>
          <div>
            <span className="text-gray-600">Adresse :</span>
            <span className="ml-2 font-medium">
              {data.address?.street}, {data.address?.city} {data.address?.postalCode}, {data.address?.country}
            </span>
          </div>
        </div>
      </div>

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Formation académique</h3>
            </div>
            <button className="text-primary-600 hover:text-primary-700 text-sm">
              <Edit className="h-4 w-4 mr-1 inline" />
              Modifier
            </button>
          </div>
          
          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">
                  {edu.degree} - {edu.field}
                </h4>
                <p className="text-sm text-gray-600">
                  {edu.institution} • {edu.startDate} - {edu.endDate || 'En cours'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Expérience professionnelle</h3>
            </div>
            <button className="text-primary-600 hover:text-primary-700 text-sm">
              <Edit className="h-4 w-4 mr-1 inline" />
              Modifier
            </button>
          </div>
          
          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">
                  {exp.position} chez {exp.company}
                </h4>
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.isCurrent ? 'En cours' : exp.endDate}
                </p>
                {exp.description && (
                  <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documents */}
      {data.documents && data.documents.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <File className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Documents téléchargés</h3>
            </div>
            <button className="text-primary-600 hover:text-primary-700 text-sm">
              <Edit className="h-4 w-4 mr-1 inline" />
              Modifier
            </button>
          </div>
          
          <div className="space-y-2">
            {data.documents.map((doc, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">{doc.type}</span>
                <span className="text-green-600 font-medium">Téléchargé</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional notes */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Notes supplémentaires (optionnel)
        </h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="textarea w-full"
          rows={4}
          placeholder="Ajoutez toute information supplémentaire que vous souhaitez partager..."
        />
      </div>

      {/* Consent and newsletter */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Consentements
        </h3>
        
        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">
              J'accepte les{' '}
              <a href="/conditions-generales" className="text-primary-600 hover:text-primary-700">
                conditions générales
              </a>{' '}
              et la{' '}
              <a href="/confidentialite" className="text-primary-600 hover:text-primary-700">
                politique de confidentialité
              </a>
              . Je confirme que toutes les informations fournies sont exactes. *
            </span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">
              Je souhaite recevoir la newsletter EPIKAIZO avec les dernières actualités 
              et offres de formations.
            </span>
          </label>
        </div>
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!consent || isSubmitting}
          className="btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="loader-sm mr-2"></div>
              Finalisation en cours...
            </>
          ) : (
            'Finaliser mon inscription'
          )}
        </button>
        
        {!consent && (
          <p className="text-red-600 text-sm mt-2">
            Vous devez accepter les conditions générales pour continuer.
          </p>
        )}
      </div>
    </div>
  );
}
