import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CheckCircle, Clock, FileText, Users, Calendar, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admission | EPIKAÏZO University',
  description: 'Découvrez le processus d\'admission à EPIKAÏZO University. Conditions d\'admission, procédures et calendrier pour intégrer nos formations.',
  keywords: ['admission', 'inscription', 'EPIKAÏZO', 'university', 'conditions', 'procédure'],
};

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Admission', url: '/admission' },
];

const admissionSteps = [
  {
    icon: FileText,
    title: 'Dossier de candidature',
    description: 'Constituer et soumettre votre dossier complet avec tous les documents requis.',
  },
  {
    icon: Clock,
    title: 'Étude du dossier',
    description: 'Examen de votre candidature par notre commission d\'admission.',
  },
  {
    icon: Users,
    title: 'Entretien',
    description: 'Entretien individuel avec l\'équipe pédagogique (selon la formation).',
  },
  {
    icon: CheckCircle,
    title: 'Admission',
    description: 'Notification de la décision et procédure d\'inscription définitive.',
  },
];

const requiredDocuments = [
  'Copie certifiée du diplôme de fin d\'études secondaires',
  'Relevés de notes des deux dernières années',
  'Copie de la carte d\'identité ou passeport',
  'Certificat médical',
  'Photo d\'identité récente (4x4)',
  'Lettre de motivation manuscrite',
  'CV détaillé',
  'Certificat de bonne vie et mœurs',
];

const admissionCalendar = [
  {
    period: 'Janvier - Mai',
    title: 'Première session',
    description: 'Dépôt des candidatures pour la rentrée de septembre',
  },
  {
    period: 'Juin - Juillet',
    title: 'Examens et entretiens',
    description: 'Évaluation des candidatures et entretiens',
  },
  {
    period: 'Août',
    title: 'Résultats',
    description: 'Publication des résultats d\'admission',
  },
  {
    period: 'Septembre',
    title: 'Rentrée académique',
    description: 'Début des cours pour l\'année académique',
  },
];

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-epikaizo-red to-red-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} className="text-red-100 mb-6" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admission à EPIKAÏZO University
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Rejoignez notre communauté d'étudiants et lancez votre carrière dans l'aviation, 
              la logistique, le tourisme, ou la communication. Découvrez notre processus 
              d'admission transparent et accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Processus d'Admission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent en 4 étapes pour intégrer EPIKAÏZO University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-epikaizo-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-epikaizo-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Documents Requis
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Voici la liste complète des documents nécessaires pour constituer 
                votre dossier d'admission :
              </p>
              
              <ul className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Note importante
                </h3>
                <p className="text-blue-800">
                  Tous les documents doivent être certifiés conformes à l'original. 
                  Les documents en langue étrangère doivent être traduits en français 
                  par un traducteur assermenté.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Calendrier d'Admission
              </h2>
              
              <div className="space-y-6">
                {admissionCalendar.map((period, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-epikaizo-red rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-epikaizo-red">
                        {period.period}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">
                        {period.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {period.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions d'Admission
              </h2>
              <p className="text-lg text-gray-600">
                Critères généraux d'admission à EPIKAÏZO University
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-epikaizo-red mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Diplôme Requis
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Diplôme d'État (D6) ou équivalent</li>
                  <li>• Baccalauréat international</li>
                  <li>• Diplôme étranger reconnu équivalent</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-epikaizo-red mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Critères Généraux
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Âge minimum : 17 ans révolus</li>
                  <li>• Maîtrise du français (oral et écrit)</li>
                  <li>• Motivation et projet professionnel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-epikaizo-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Commencer Votre Aventure ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Rejoignez EPIKAÏZO University et donnez un nouvel élan à votre carrière. 
            Nos équipes sont là pour vous accompagner dans votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-epikaizo-red hover:bg-gray-100 transition-colors"
            >
              Commencer ma Pré-inscription
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-epikaizo-red transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
