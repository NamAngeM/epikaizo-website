import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Chargement dynamique du wizard pour éviter les erreurs SSR
const PreInscriptionWizard = dynamic(
  () => import('@/components/pre-inscription/PreInscriptionWizard').then(mod => ({ default: mod.PreInscriptionWizard })),
  {
    ssr: false,
    loading: () => (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-epikaizo-red mx-auto"></div>
        <p className="mt-4 text-gray-600">Chargement du formulaire d'inscription...</p>
      </div>
    )
  }
);

export const metadata: Metadata = {
  title: 'Pré-inscription',
  description: 'Inscrivez-vous à nos formations professionnelles en quelques étapes simples. Processus d\'inscription rapide et sécurisé.',
  openGraph: {
    title: 'Pré-inscription - EPIKAIZO',
    description: 'Inscrivez-vous à nos formations professionnelles en quelques étapes simples.',
  },
};

export default function PreInscriptionPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Pré-inscription EPIKAÏZO University
            </h1>
            <p className="text-lg text-gray-600">
              Commencez votre parcours vers l'excellence avec nos formations professionnelles
            </p>
          </div>
          
          <Suspense fallback={
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-epikaizo-red mx-auto"></div>
              <p className="mt-4 text-gray-600">Préparation du formulaire...</p>
            </div>
          }>
            <PreInscriptionWizard />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

