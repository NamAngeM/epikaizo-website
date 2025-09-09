'use client';

import { useState } from 'react';
import { Plus, Trash2, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { PreInscriptionData } from './PreInscriptionWizard';
import { Education, Experience } from '@/types';

interface Step3EducationProps {
  data: PreInscriptionData;
  updateData: (data: Partial<PreInscriptionData>) => void;
}


export function Step3Education({ data, updateData }: Step3EducationProps) {
  const [education, setEducation] = useState<Education[]>(
    (data.education || []).map((item, index) => ({
      id: index + 1,
      institution: item.institution || '',
      degree: item.degree || '',
      field: item.field || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      isCompleted: item.isCompleted || false
    })).concat(
      data.education?.length ? [] : [
        { id: 1, institution: '', degree: '', field: '', startDate: '', endDate: '', isCompleted: false }
      ]
    )
  );
  
  const [experience, setExperience] = useState<Experience[]>(
    (data.experience || []).map((item, index) => ({
      id: index + 1,
      company: item.company || '',
      position: item.position || '',
      description: item.description || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      isCurrent: item.isCurrent || false
    })).concat(
      data.experience?.length ? [] : [
        { id: 1, company: '', position: '', description: '', startDate: '', endDate: '', isCurrent: false }
      ]
    )
  );

  const addEducationItem = () => {
    const newEducation = [...education, {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      isCompleted: false
    }];
    setEducation(newEducation);
    updateData({ 
      education: newEducation.map(item => ({
        institution: item.institution,
        degree: item.degree,
        field: item.field,
        startDate: item.startDate,
        endDate: item.endDate,
        isCompleted: item.isCompleted
      }))
    });
  };

  const removeEducationItem = (index: number) => {
    if (education.length > 1) {
      const newEducation = education.filter((_, i) => i !== index);
      setEducation(newEducation);
      updateData({ education: newEducation });
    }
  };

  const updateEducationItem = (index: number, field: keyof Education, value: any) => {
    const newEducation = education.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setEducation(newEducation);
    updateData({ 
      education: newEducation.map(item => ({
        institution: item.institution,
        degree: item.degree,
        field: item.field,
        startDate: item.startDate,
        endDate: item.endDate,
        isCompleted: item.isCompleted
      }))
    });
  };

  const addExperienceItem = () => {
    const newExperience = [...experience, {
      id: Date.now(),
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
      isCurrent: false
    }];
    setExperience(newExperience);
    updateData({ 
      experience: newExperience.map(item => ({
        company: item.company,
        position: item.position,
        description: item.description,
        startDate: item.startDate,
        endDate: item.endDate,
        isCurrent: item.isCurrent
      }))
    });
  };

  const removeExperienceItem = (index: number) => {
    if (experience.length > 1) {
      const newExperience = experience.filter((_, i) => i !== index);
      setExperience(newExperience);
      updateData({ experience: newExperience });
    }
  };

  const updateExperienceItem = (index: number, field: keyof Experience, value: any) => {
    const newExperience = experience.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setExperience(newExperience);
    updateData({ 
      experience: newExperience.map(item => ({
        company: item.company,
        position: item.position,
        description: item.description,
        startDate: item.startDate,
        endDate: item.endDate,
        isCurrent: item.isCurrent
      }))
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Formation et expérience
        </h2>
        <p className="text-gray-600">
          Renseignez votre parcours éducatif et professionnel pour évaluer votre admissibilité.
        </p>
      </div>

      {/* Education Section */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Formation académique
            </h3>
          </div>
          <button
            onClick={addEducationItem}
            className="btn-outline btn-sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </button>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">
                  Formation {index + 1}
                </h4>
                {education.length > 1 && (
                  <button
                    onClick={() => removeEducationItem(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Établissement *</label>
                  <input
                    type="text"
                    value={item.institution}
                    onChange={(e) => updateEducationItem(index, 'institution', e.target.value)}
                    className="input"
                    placeholder="Université de Paris"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Diplôme *</label>
                  <input
                    type="text"
                    value={item.degree}
                    onChange={(e) => updateEducationItem(index, 'degree', e.target.value)}
                    className="input"
                    placeholder="Master en Management"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Domaine d'études *</label>
                  <input
                    type="text"
                    value={item.field}
                    onChange={(e) => updateEducationItem(index, 'field', e.target.value)}
                    className="input"
                    placeholder="Sciences de Gestion"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Statut</label>
                  <select
                    value={item.isCompleted ? 'completed' : 'in-progress'}
                    onChange={(e) => updateEducationItem(index, 'isCompleted', e.target.value === 'completed')}
                    className="select"
                  >
                    <option value="completed">Terminé</option>
                    <option value="in-progress">En cours</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Date de début *</label>
                  <input
                    type="date"
                    value={item.startDate}
                    onChange={(e) => updateEducationItem(index, 'startDate', e.target.value)}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Date de fin {!item.isCompleted && '(optionnel)'}
                  </label>
                  <input
                    type="date"
                    value={item.endDate}
                    onChange={(e) => updateEducationItem(index, 'endDate', e.target.value)}
                    className="input"
                    disabled={!item.isCompleted}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Expérience professionnelle
            </h3>
          </div>
          <button
            onClick={addExperienceItem}
            className="btn-outline btn-sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </button>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">
                  Expérience {index + 1}
                </h4>
                {experience.length > 1 && (
                  <button
                    onClick={() => removeExperienceItem(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Entreprise *</label>
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => updateExperienceItem(index, 'company', e.target.value)}
                    className="input"
                    placeholder="Nom de l'entreprise"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Poste *</label>
                  <input
                    type="text"
                    value={item.position}
                    onChange={(e) => updateExperienceItem(index, 'position', e.target.value)}
                    className="input"
                    placeholder="Titre du poste"
                  />
                </div>

                <div className="form-group md:col-span-2">
                  <label className="form-label">Description des missions</label>
                  <textarea
                    value={item.description}
                    onChange={(e) => updateExperienceItem(index, 'description', e.target.value)}
                    className="textarea"
                    rows={3}
                    placeholder="Décrivez vos principales missions et responsabilités..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date de début *</label>
                  <input
                    type="date"
                    value={item.startDate}
                    onChange={(e) => updateExperienceItem(index, 'startDate', e.target.value)}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Date de fin {!item.isCurrent && '(optionnel)'}
                  </label>
                  <input
                    type="date"
                    value={item.endDate}
                    onChange={(e) => updateExperienceItem(index, 'endDate', e.target.value)}
                    className="input"
                    disabled={item.isCurrent}
                  />
                </div>

                <div className="form-group md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.isCurrent}
                      onChange={(e) => updateExperienceItem(index, 'isCurrent', e.target.checked)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Poste actuel
                    </span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Additional skills */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Compétences supplémentaires (optionnel)
        </h3>
        <p className="text-blue-800 text-sm mb-4">
          Mentionnez toute compétence, certification ou formation complémentaire 
          qui pourrait être pertinente pour votre candidature.
        </p>
        <textarea
          className="textarea w-full"
          rows={4}
          placeholder="Ex: Certifications professionnelles, langues parlées, compétences techniques..."
        />
      </div>
    </div>
  );
}
