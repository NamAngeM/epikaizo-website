'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { StructuredData } from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Ajouter la page d'accueil au début si elle n'est pas présente
  const breadcrumbItems = items[0]?.url !== '/' 
    ? [{ name: 'Accueil', url: '/' }, ...items]
    : items;

  return (
    <>
      <StructuredData
        type="breadcrumb"
        breadcrumbs={breadcrumbItems}
      />
      <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              
              {item.current ? (
                <span className="text-gray-500 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
