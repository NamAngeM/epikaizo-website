import { Hero } from '@/components/sections/Hero';
import { FeaturedFormations } from '@/components/sections/FeaturedFormations';
import { Categories } from '@/components/sections/Categories';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { News } from '@/components/sections/News';
import { CTA } from '@/components/sections/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Découvrez EPIKAIZO, votre partenaire de confiance pour des formations professionnelles d\'excellence en aviation, logistique, sciences de gestion et QHSE.',
  openGraph: {
    title: 'EPIKAIZO - Formations Professionnelles d\'Excellence',
    description: 'Découvrez nos formations professionnelles en aviation, logistique, sciences de gestion et QHSE. Inscrivez-vous en ligne.',
  },
};

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedFormations />
      <Categories />
      <Stats />
      <Testimonials />
      <News />
      <CTA />
    </div>
  );
}

