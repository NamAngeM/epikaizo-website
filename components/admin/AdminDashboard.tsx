'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  FileText, 
  Mail, 
  TrendingUp, 
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

interface DashboardStats {
  totalStudents: number;
  totalFormations: number;
  totalInscriptions: number;
  totalRevenue: number;
  pendingInscriptions: number;
  activeFormations: number;
  recentInscriptions: Array<{
    id: number;
    studentName: string;
    formationTitle: string;
    date: string;
    status: string;
  }>;
  upcomingFormations: Array<{
    id: number;
    title: string;
    startDate: string;
    enrolledStudents: number;
    maxStudents: number;
  }>;
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setStats({
        totalStudents: 245,
        totalFormations: 12,
        totalInscriptions: 189,
        totalRevenue: 125000,
        pendingInscriptions: 23,
        activeFormations: 8,
        recentInscriptions: [
          {
            id: 1,
            studentName: 'Marie Dubois',
            formationTitle: 'Formation Pilote de Ligne',
            date: '2024-01-15',
            status: 'pending',
          },
          {
            id: 2,
            studentName: 'Jean Martin',
            formationTitle: 'Gestion Logistique',
            date: '2024-01-14',
            status: 'confirmed',
          },
          {
            id: 3,
            studentName: 'Sophie Leroy',
            formationTitle: 'Management Stratégique',
            date: '2024-01-13',
            status: 'pending',
          },
        ],
        upcomingFormations: [
          {
            id: 1,
            title: 'Formation Pilote de Ligne',
            startDate: '2024-03-15',
            enrolledStudents: 12,
            maxStudents: 20,
          },
          {
            id: 2,
            title: 'Gestion de la Chaîne Logistique',
            startDate: '2024-02-20',
            enrolledStudents: 18,
            maxStudents: 25,
          },
        ],
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loader-lg mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du dashboard...</p>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const statCards = [
    {
      title: 'Étudiants',
      value: stats.totalStudents,
      icon: Users,
      color: 'blue',
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Formations',
      value: stats.totalFormations,
      icon: BookOpen,
      color: 'green',
      change: '+2',
      changeType: 'positive' as const,
    },
    {
      title: 'Inscriptions',
      value: stats.totalInscriptions,
      icon: FileText,
      color: 'purple',
      change: '+8%',
      changeType: 'positive' as const,
    },
    {
      title: 'Revenus',
      value: `€${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'yellow',
      change: '+15%',
      changeType: 'positive' as const,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'cancelled':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
              <p className="text-gray-600">Tableau de bord EPIKAIZO</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-outline">
                <Calendar className="h-4 w-4 mr-2" />
                Aujourd'hui
              </button>
              <button className="btn-primary">
                Nouvelle formation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">vs mois dernier</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Inscriptions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Inscriptions récentes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.recentInscriptions.map((inscription) => (
                  <div key={inscription.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{inscription.studentName}</p>
                      <p className="text-sm text-gray-600">{inscription.formationTitle}</p>
                      <p className="text-xs text-gray-500">{inscription.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(inscription.status)}`}>
                      {getStatusIcon(inscription.status)}
                      <span className="capitalize">{inscription.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Voir toutes les inscriptions →
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Formations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Formations à venir</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.upcomingFormations.map((formation) => (
                  <div key={formation.id} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{formation.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Début: {formation.startDate}</span>
                      <span>{formation.enrolledStudents}/{formation.maxStudents} étudiants</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Progression</span>
                        <span>{Math.round((formation.enrolledStudents / formation.maxStudents) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${(formation.enrolledStudents / formation.maxStudents) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Voir toutes les formations →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Gérer les étudiants</p>
                <p className="text-sm text-gray-600">Voir et modifier les profils</p>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BookOpen className="h-8 w-8 text-green-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Créer une formation</p>
                <p className="text-sm text-gray-600">Ajouter un nouveau programme</p>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="h-8 w-8 text-purple-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Envoyer un email</p>
                <p className="text-sm text-gray-600">Communiquer avec les étudiants</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
