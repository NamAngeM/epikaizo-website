'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { FormationFilters, FormationLevel } from '@/types';

interface FormationsFiltersProps {
  onFiltersChange?: (filters: FormationFilters) => void;
}

export function FormationsFilters({ onFiltersChange }: FormationsFiltersProps) {
  const [filters, setFilters] = useState<FormationFilters>({});
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { value: 'aviation', label: 'Aviation', icon: '✈️' },
    { value: 'logistique', label: 'Logistique', icon: '📦' },
    { value: 'sciences-gestion', label: 'Sciences de Gestion', icon: '📊' },
    { value: 'qhse', label: 'QHSE', icon: '🛡️' },
  ];

  const levels: { value: FormationLevel; label: string }[] = [
    { value: 'debutant', label: 'Débutant' },
    { value: 'intermediaire', label: 'Intermédiaire' },
    { value: 'avance', label: 'Avancé' },
    { value: 'expert', label: 'Expert' },
  ];

  const updateFilter = (key: keyof FormationFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFiltersChange?.({});
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== '' && value !== false
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Effacer
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Domaine
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={filters.category === category.value}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-3 text-sm text-gray-700 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Niveau
          </label>
          <div className="space-y-2">
            {levels.map((level) => (
              <label key={level.value} className="flex items-center">
                <input
                  type="radio"
                  name="level"
                  value={level.value}
                  checked={filters.level === level.value}
                  onChange={(e) => updateFilter('level', e.target.value as FormationLevel)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {level.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Format
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.isOnline === true}
                onChange={(e) => updateFilter('isOnline', e.target.checked ? true : undefined)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">En ligne</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.isInPerson === true}
                onChange={(e) => updateFilter('isInPerson', e.target.checked ? true : undefined)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">En présentiel</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Prix (€)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin || ''}
              onChange={(e) => updateFilter('priceMin', e.target.value ? Number(e.target.value) : undefined)}
              className="input text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax || ''}
              onChange={(e) => updateFilter('priceMax', e.target.value ? Number(e.target.value) : undefined)}
              className="input text-sm"
            />
          </div>
        </div>

        {/* Duration Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Durée (heures)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.durationMin || ''}
              onChange={(e) => updateFilter('durationMin', e.target.value ? Number(e.target.value) : undefined)}
              className="input text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.durationMax || ''}
              onChange={(e) => updateFilter('durationMax', e.target.value ? Number(e.target.value) : undefined)}
              className="input text-sm"
            />
          </div>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Date de début
          </label>
          <input
            type="date"
            value={filters.startDate || ''}
            onChange={(e) => updateFilter('startDate', e.target.value || undefined)}
            className="input text-sm"
          />
        </div>
      </div>

      {/* Mobile expand/collapse */}
      <div className="lg:hidden mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-sm font-medium text-gray-700"
        >
          <span>Filtres avancés</span>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>
    </div>
  );
}

