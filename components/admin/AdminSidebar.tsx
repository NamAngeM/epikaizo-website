'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  Mail, 
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Formations',
    href: '/admin/formations',
    icon: BookOpen,
    children: [
      { name: 'Toutes les formations', href: '/admin/formations' },
      { name: 'Créer une formation', href: '/admin/formations/create' },
      { name: 'Catégories', href: '/admin/formations/categories' },
    ],
  },
  {
    name: 'Étudiants',
    href: '/admin/students',
    icon: Users,
    children: [
      { name: 'Tous les étudiants', href: '/admin/students' },
      { name: 'Nouveaux étudiants', href: '/admin/students/new' },
      { name: 'Import/Export', href: '/admin/students/import' },
    ],
  },
  {
    name: 'Inscriptions',
    href: '/admin/inscriptions',
    icon: FileText,
    children: [
      { name: 'Toutes les inscriptions', href: '/admin/inscriptions' },
      { name: 'En attente', href: '/admin/inscriptions/pending' },
      { name: 'Confirmées', href: '/admin/inscriptions/confirmed' },
    ],
  },
  {
    name: 'Actualités',
    href: '/admin/news',
    icon: MessageSquare,
    children: [
      { name: 'Tous les articles', href: '/admin/news' },
      { name: 'Créer un article', href: '/admin/news/create' },
    ],
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    name: 'Calendrier',
    href: '/admin/calendar',
    icon: Calendar,
  },
  {
    name: 'Messages',
    href: '/admin/messages',
    icon: Mail,
  },
  {
    name: 'Sécurité',
    href: '/admin/security',
    icon: Shield,
  },
  {
    name: 'Paramètres',
    href: '/admin/settings',
    icon: Settings,
  },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={cn(
      'bg-white border-r border-gray-200 transition-all duration-300',
      collapsed ? 'w-16' : 'w-64'
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-epikaizo-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-semibold text-gray-900">EPIKAIZO</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedItems.includes(item.name);
          const active = isActive(item.href);

          return (
            <div key={item.name}>
              <div className="flex items-center">
                {hasChildren ? (
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className={cn(
                      'flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      active
                        ? 'bg-red-100 text-epikaizo-red'
                        : 'text-gray-700 hover:text-epikaizo-red hover:bg-gray-100'
                    )}
                  >
                    <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.name}</span>
                        {isExpanded ? (
                          <ChevronLeft className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      active
                        ? 'bg-red-100 text-epikaizo-red'
                        : 'text-gray-700 hover:text-epikaizo-red hover:bg-gray-100'
                    )}
                  >
                    <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                )}
              </div>

              {/* Children */}
              {hasChildren && isExpanded && !collapsed && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        'block px-3 py-2 text-sm rounded-md transition-colors',
                        isActive(child.href)
                          ? 'bg-red-50 text-epikaizo-red'
                          : 'text-gray-600 hover:text-epikaizo-red hover:bg-gray-50'
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User info */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-500 truncate">
                admin@epikaizo.com
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
