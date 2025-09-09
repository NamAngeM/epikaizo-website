import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'EPIKAIZO UNIVERSITY - Formations Professionnelles d\'Excellence',
    template: '%s | EPIKAIZO UNIVERSITY',
  },
  description: 'Premier établissement d\'enseignement supérieur privé au Gabon. Formations d\'excellence en aviation, logistique, tourisme & hôtelerie, QHSE et communication. Let\'s promote excellence - excellence first avec EPIKAIZO UNIVERSITY.',
  keywords: [
    'formation aviation',
    'formation logistique',
    'tourisme hôtelerie',
    'QHSE développement durable',
    'science information communication',
    'formation professionnelle',
    'EPIKAIZO UNIVERSITY',
    'certification',
    'qualité',
    'sécurité',
    'environnement',
    'Gabon',
    'Libreville',
  ],
  authors: [{ name: 'EPIKAIZO UNIVERSITY' }],
  creator: 'EPIKAIZO UNIVERSITY',
  publisher: 'EPIKAIZO UNIVERSITY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'EPIKAIZO - Formations Professionnelles d\'Excellence',
    description: 'Découvrez nos formations professionnelles en aviation, logistique, sciences de gestion et QHSE. Inscrivez-vous en ligne.',
    siteName: 'EPIKAIZO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EPIKAIZO - Formations Professionnelles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPIKAIZO - Formations Professionnelles d\'Excellence',
    description: 'Découvrez nos formations professionnelles en aviation, logistique, sciences de gestion et QHSE.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}

