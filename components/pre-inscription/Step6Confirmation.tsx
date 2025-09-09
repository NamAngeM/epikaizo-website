'use client';

import { CheckCircle, Download, Mail, Phone, Calendar } from 'lucide-react';
import { PreInscriptionData } from './PreInscriptionWizard';
import { formatDate } from '@/lib/utils';

interface Step6ConfirmationProps {
  data: PreInscriptionData;
}

export function Step6Confirmation({ data }: Step6ConfirmationProps) {
  const confirmationNumber = `EPK-${Date.now().toString().slice(-8)}`;

  const handleDownloadReceipt = () => {
    // Simuler le téléchargement du reçu
    const receiptContent = `
REÇU DE PRÉ-INSCRIPTION - EPIKAIZO
Numéro: ${confirmationNumber}
Date: ${formatDate(new Date().toISOString())}

ÉTUDIANT:
${data.firstName} ${data.lastName}
${data.email}
${data.phone}

FORMATION:
${data.formationTitle}
Date de début: ${data.startDate ? formatDate(data.startDate) : 'À définir'}

STATUT: Pré-inscription confirmée

Prochaines étapes:
1. Vérification de votre dossier
2. Entretien d'admission (si requis)
3. Confirmation définitive
4. Paiement des frais de formation

Merci de votre confiance !
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recu-pre-inscription-${confirmationNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="text-center space-y-8">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      {/* Main message */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Félicitations !
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Votre pré-inscription a été confirmée avec succès.
        </p>
        <p className="text-gray-600">
          Nous avons bien reçu votre dossier et allons l'examiner dans les plus brefs délais.
        </p>
      </div>

      {/* Confirmation details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Détails de votre pré-inscription
        </h3>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">Numéro de confirmation :</span>
            <span className="font-medium text-gray-900">{confirmationNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Formation :</span>
            <span className="font-medium text-gray-900">{data.formationTitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Étudiant :</span>
            <span className="font-medium text-gray-900">
              {data.firstName} {data.lastName}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email :</span>
            <span className="font-medium text-gray-900">{data.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date de soumission :</span>
            <span className="font-medium text-gray-900">
              {formatDate(new Date().toISOString())}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Statut :</span>
            <span className="font-medium text-green-600">Pré-inscription confirmée</span>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Prochaines étapes
        </h3>
        
        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Vérification du dossier</h4>
              <p className="text-sm text-blue-800">
                Notre équipe examine votre dossier sous 48h
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Entretien d'admission</h4>
              <p className="text-sm text-blue-800">
                Si requis, nous vous contacterons pour planifier un entretien
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Confirmation définitive</h4>
              <p className="text-sm text-blue-800">
                Vous recevrez la confirmation d'admission par email
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              4
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Paiement et inscription</h4>
              <p className="text-sm text-blue-800">
                Finalisation de l'inscription et paiement des frais
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact information */}
      <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Besoin d'aide ?
        </h3>
        <p className="text-gray-600 mb-4">
          Notre équipe est à votre disposition pour toute question.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@epikaizo.com"
            className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <Mail className="h-4 w-4" />
            <span>contact@epikaizo.com</span>
          </a>
          <a
            href="tel:+33123456789"
            className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <Phone className="h-4 w-4" />
            <span>+33 1 23 45 67 89</span>
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleDownloadReceipt}
          className="btn-outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Télécharger le reçu
        </button>
        
        <a
          href="/formations"
          className="btn-primary"
        >
          Découvrir d'autres formations
        </a>
      </div>

      {/* Additional information */}
      <div className="text-sm text-gray-500 max-w-2xl mx-auto">
        <p>
          Un email de confirmation a été envoyé à l'adresse {data.email}. 
          Conservez ce numéro de confirmation ({confirmationNumber}) pour vos échanges futurs avec notre équipe.
        </p>
      </div>
    </div>
  );
}
