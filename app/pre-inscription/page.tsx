import { Metadata } from 'next';
import { PreInscriptionWizard } from '@/components/pre-inscription/PreInscriptionWizard';

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
          <PreInscriptionWizard />
        </div>
      </div>
    </div>
  );
}

