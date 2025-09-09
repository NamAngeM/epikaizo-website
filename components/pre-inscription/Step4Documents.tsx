'use client';

import { useState } from 'react';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';
import { PreInscriptionData } from './PreInscriptionWizard';

interface Step4DocumentsProps {
  data: PreInscriptionData;
  updateData: (data: Partial<PreInscriptionData>) => void;
}

interface DocumentItem {
  type: string;
  file?: File;
  url?: string;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
}

const requiredDocuments = [
  {
    type: 'cv',
    label: 'Curriculum Vitae',
    description: 'Votre CV à jour (PDF, DOC, DOCX)',
    required: true,
    maxSize: '5MB',
  },
  {
    type: 'identity',
    label: 'Pièce d\'identité',
    description: 'Carte d\'identité ou passeport (PDF, JPG, PNG)',
    required: true,
    maxSize: '10MB',
  },
  {
    type: 'diploma',
    label: 'Dernier diplôme',
    description: 'Copie de votre dernier diplôme obtenu (PDF, JPG, PNG)',
    required: true,
    maxSize: '10MB',
  },
  {
    type: 'photo',
    label: 'Photo d\'identité',
    description: 'Photo récente format identité (JPG, PNG)',
    required: true,
    maxSize: '5MB',
  },
];

const optionalDocuments = [
  {
    type: 'motivation',
    label: 'Lettre de motivation',
    description: 'Lettre expliquant votre motivation (PDF, DOC, DOCX)',
    required: false,
    maxSize: '5MB',
  },
  {
    type: 'recommendation',
    label: 'Lettres de recommandation',
    description: 'Lettres de recommandation (PDF, DOC, DOCX)',
    required: false,
    maxSize: '5MB',
  },
  {
    type: 'certificates',
    label: 'Certifications',
    description: 'Certifications professionnelles (PDF, JPG, PNG)',
    required: false,
    maxSize: '10MB',
  },
];

export function Step4Documents({ data, updateData }: Step4DocumentsProps) {
  const [documents, setDocuments] = useState<DocumentItem[]>(
    (data.documents || []).map(item => ({
      type: item.type || '',
      file: item.file,
      url: item.url,
      status: 'pending' as const
    }))
  );
  const [dragOver, setDragOver] = useState<string | null>(null);

  const handleFileUpload = async (type: string, file: File) => {
    // Simuler l'upload
    const newDocument: DocumentItem = {
      type,
      file,
      status: 'uploading',
    };

    setDocuments(prev => {
      const filtered = prev.filter(doc => doc.type !== type);
      return [...filtered, newDocument];
    });

    // Simuler le processus d'upload
    setTimeout(() => {
      setDocuments(prev => 
        prev.map(doc => 
          doc.type === type 
            ? { ...doc, status: 'uploaded', url: URL.createObjectURL(file) }
            : doc
        )
      );
    }, 2000);

    updateData({ 
      documents: documents.map(doc => ({
        type: doc.type,
        file: doc.file,
        url: doc.url
      }))
    });
  };

  const removeDocument = (type: string) => {
    setDocuments(prev => prev.filter(doc => doc.type !== type));
    updateData({ 
      documents: documents.filter(doc => doc.type !== type).map(doc => ({
        type: doc.type,
        file: doc.file,
        url: doc.url
      }))
    });
  };

  const handleDrop = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    setDragOver(null);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(type, files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(type, files[0]);
    }
  };

  const getDocumentStatus = (type: string) => {
    const doc = documents.find(d => d.type === type);
    return doc?.status || 'pending';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploaded':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'uploading':
        return <div className="loader-sm"></div>;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <File className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'uploaded':
        return 'Téléchargé';
      case 'uploading':
        return 'Téléchargement...';
      case 'error':
        return 'Erreur';
      default:
        return 'En attente';
    }
  };

  const renderDocumentUpload = (docType: typeof requiredDocuments[0] | typeof optionalDocuments[0]) => {
    const status = getDocumentStatus(docType.type);
    const isUploaded = status === 'uploaded';
    const isUploading = status === 'uploading';

    return (
      <div
        key={docType.type}
        className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
          dragOver === docType.type
            ? 'border-primary-500 bg-primary-50'
            : isUploaded
            ? 'border-green-300 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(docType.type);
        }}
        onDragLeave={() => setDragOver(null)}
        onDrop={(e) => handleDrop(e, docType.type)}
      >
        <div className="text-center">
          {isUploaded ? (
            <div className="space-y-4">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
              <div>
                <h4 className="font-medium text-green-900">
                  {docType.label} téléchargé
                </h4>
                <p className="text-sm text-green-700">
                  Fichier prêt pour validation
                </p>
              </div>
              <button
                onClick={() => removeDocument(docType.type)}
                className="text-red-600 hover:text-red-700 text-sm"
              >
                Supprimer
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-12 w-12 text-gray-400 mx-auto" />
              <div>
                <h4 className="font-medium text-gray-900">
                  {docType.label}
                  {docType.required && <span className="text-red-500 ml-1">*</span>}
                </h4>
                <p className="text-sm text-gray-600">
                  {docType.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Taille max: {docType.maxSize}
                </p>
              </div>
              
              {isUploading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="loader-sm"></div>
                  <span className="text-sm text-gray-600">Téléchargement...</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <input
                    type="file"
                    id={`file-${docType.type}`}
                    onChange={(e) => handleFileSelect(e, docType.type)}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor={`file-${docType.type}`}
                    className="btn-outline cursor-pointer"
                  >
                    Choisir un fichier
                  </label>
                  <p className="text-xs text-gray-500">
                    ou glissez-déposez ici
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Documents requis
        </h2>
        <p className="text-gray-600">
          Téléchargez les documents nécessaires pour finaliser votre inscription. 
          Tous les documents marqués d'un * sont obligatoires.
        </p>
      </div>

      {/* Required documents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Documents obligatoires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requiredDocuments.map(renderDocumentUpload)}
        </div>
      </div>

      {/* Optional documents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Documents optionnels
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Ces documents peuvent renforcer votre candidature mais ne sont pas obligatoires.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {optionalDocuments.map(renderDocumentUpload)}
        </div>
      </div>

      {/* Upload summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Résumé des téléchargements
        </h3>
        <div className="space-y-3">
          {[...requiredDocuments, ...optionalDocuments].map((docType) => {
            const status = getDocumentStatus(docType.type);
            return (
              <div key={docType.type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(status)}
                  <span className="text-sm text-gray-700">
                    {docType.label}
                    {docType.required && <span className="text-red-500 ml-1">*</span>}
                  </span>
                </div>
                <span className={`text-sm font-medium ${
                  status === 'uploaded' ? 'text-green-600' :
                  status === 'uploading' ? 'text-blue-600' :
                  status === 'error' ? 'text-red-600' :
                  'text-gray-500'
                }`}>
                  {getStatusText(status)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-medium text-blue-900 mb-2">
          Informations importantes
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Tous les documents doivent être lisibles et de bonne qualité</li>
          <li>• Les formats acceptés sont : PDF, DOC, DOCX, JPG, PNG</li>
          <li>• La taille maximale par fichier est de 10MB</li>
          <li>• Vos documents seront traités de manière confidentielle</li>
        </ul>
      </div>
    </div>
  );
}
