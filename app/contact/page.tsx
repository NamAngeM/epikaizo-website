import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez EPIKAIZO pour toute question sur nos formations. Notre équipe est à votre disposition pour vous accompagner dans votre projet de formation.',
  openGraph: {
    title: 'Contact - EPIKAIZO',
    description: 'Contactez EPIKAIZO pour toute question sur nos formations.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  );
}

