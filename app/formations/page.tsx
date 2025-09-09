import { Metadata } from 'next';
import { FormationsList } from '@/components/formations/FormationsList';
import { FormationsFilters } from '@/components/formations/FormationsFilters';
import { FormationsHero } from '@/components/formations/FormationsHero';

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez toutes nos formations professionnelles en aviation, logistique, sciences de gestion et QHSE. Formations certifiantes avec des experts reconnus.',
  openGraph: {
    title: 'Formations Professionnelles - EPIKAIZO',
    description: 'Découvrez toutes nos formations professionnelles en aviation, logistique, sciences de gestion et QHSE.',
  },
};

export default function FormationsPage() {
  return (
    <div className="pt-16">
      <FormationsHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FormationsFilters />
          </div>
          <div className="lg:col-span-3">
            <FormationsList />
          </div>
        </div>
      </div>
    </div>
  );
}

