'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Globe,
  User,
  Search,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Formations',
    href: '/formations',
    children: [
      { name: 'Aviation', href: '/formations/aviation' },
      { name: 'Logistique', href: '/formations/logistique' },
      { name: 'Tourisme & Hôtelerie', href: '/formations/tourisme' },
      { name: 'QHSE & Développement Durable', href: '/formations/qhse' },
      { name: 'Science de l\'Information et Communication', href: '/formations/communication' },
    ],
  },
  { name: 'Admission', href: '/admission' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white shadow-sm'
      )}
    >
      {/* Top bar */}
      <div className="bg-epikaizo-red text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>076 55 83 38 | 065 12 76 31 | 066 83 85 63</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>universityepikaizo@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/newsletter" className="hover:text-red-200 transition-colors">
                Newsletter
              </Link>
              <Link href="/espace-etudiant" className="hover:text-red-200 transition-colors">
                Espace Étudiant
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <img
                src="/logo-epk.png"
                alt="EPIKAIZO UNIVERSITY Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-epikaizo-red">
                EPIKAIZO UNIVERSITY
              </span>
              <span className="text-xs text-epikaizo-blue font-medium">
                Let's promote excellence - excellence first
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === item.href
                      ? 'text-epikaizo-red bg-red-50'
                      : 'text-gray-700 hover:text-epikaizo-red hover:bg-gray-50'
                  )}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-epikaizo-red transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/pre-inscription"
              className="bg-epikaizo-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Inscriptions Ouvertes
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-epikaizo-red hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                      pathname === item.href
                        ? 'text-epikaizo-red bg-red-50'
                        : 'text-gray-700 hover:text-epikaizo-red hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-epikaizo-red hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/pre-inscription"
                  className="block w-full text-center bg-epikaizo-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Inscriptions Ouvertes
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

