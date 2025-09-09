'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Step1Formation } from './Step1Formation';
import { Step2PersonalInfo } from './Step2PersonalInfo';
import { Step3Education } from './Step3Education';
import { Step4Documents } from './Step4Documents';
import { Step5Review } from './Step5Review';
import { Step6Confirmation } from './Step6Confirmation';

export interface PreInscriptionData {
  // Étape 1: Formation
  formationId?: number;
  formationTitle?: string;
  startDate?: string;
  paymentMethod?: string;
  
  // Étape 2: Informations personnelles
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  address?: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  
  // Étape 3: Formation et expérience
  education?: Array<{
    institution?: string;
    degree?: string;
    field?: string;
    startDate?: string;
    endDate?: string;
    isCompleted?: boolean;
  }>;
  experience?: Array<{
    company?: string;
    position?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
  }>;
  
  // Étape 4: Documents
  documents?: Array<{
    type?: string;
    file?: File;
    url?: string;
  }>;
  
  // Étape 5: Révision
  consent?: boolean;
  newsletter?: boolean;
  notes?: string;
}

const steps = [
  { id: 1, title: 'Formation', description: 'Choisissez votre formation' },
  { id: 2, title: 'Informations', description: 'Vos données personnelles' },
  { id: 3, title: 'Formation', description: 'Votre parcours éducatif' },
  { id: 4, title: 'Documents', description: 'Pièces justificatives' },
  { id: 5, title: 'Révision', description: 'Vérifiez vos informations' },
  { id: 6, title: 'Confirmation', description: 'Inscription confirmée' },
];

export function PreInscriptionWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<PreInscriptionData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateData = (newData: Partial<PreInscriptionData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Simuler l'envoi des données
      await new Promise(resolve => setTimeout(resolve, 2000));
      nextStep();
    } catch (error) {
      setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
      console.error('Erreur lors de l\'inscription:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Formation data={data} updateData={updateData} />;
      case 2:
        return <Step2PersonalInfo data={data} updateData={updateData} />;
      case 3:
        return <Step3Education data={data} updateData={updateData} />;
      case 4:
        return <Step4Documents data={data} updateData={updateData} />;
      case 5:
        return <Step5Review data={data} onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      case 6:
        return <Step6Confirmation data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
        <h1 className="text-2xl font-heading font-bold text-white mb-2">
          Pré-inscription
        </h1>
        <p className="text-primary-100">
          Suivez les étapes pour vous inscrire à votre formation
        </p>
      </div>

      {/* Progress bar */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => goToStep(step.id)}
                disabled={step.id > currentStep}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  step.id < currentStep
                    ? 'bg-green-500 border-green-500 text-white'
                    : step.id === currentStep
                    ? 'bg-primary-600 border-primary-600 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {step.id < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.id}</span>
                )}
              </button>
              
              <div className="ml-3 hidden sm:block">
                <div className={`text-sm font-medium ${
                  step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-500">
                  {step.description}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                  step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {currentStep < 6 && (
        <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Précédent
            </button>
            
            <div className="text-sm text-gray-500">
              Étape {currentStep} sur {steps.length - 1}
            </div>
            
            <button
              onClick={nextStep}
              className="btn-primary"
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

