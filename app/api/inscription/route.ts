import { NextRequest, NextResponse } from 'next/server';
import { inscriptionsApi } from '@/lib/strapi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { 
      formationId, 
      studentData, 
      paymentMethod, 
      notes 
    } = body;
    
    if (!formationId || !studentData) {
      return NextResponse.json(
        { error: 'Données d\'inscription manquantes' },
        { status: 400 }
      );
    }

    // Validation des données étudiant
    const { firstName, lastName, email, phone } = studentData;
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Informations étudiant incomplètes' },
        { status: 400 }
      );
    }

    // Générer un numéro de confirmation
    const confirmationNumber = `EPK-${Date.now().toString().slice(-8)}`;

    // Préparer les données pour Strapi
    const inscriptionData = {
      formation: formationId,
      student: studentData,
      paymentMethod: paymentMethod || 'full',
      status: 'pending',
      paymentStatus: 'pending',
      totalAmount: 0, // Sera calculé côté Strapi
      paidAmount: 0,
      notes: notes || '',
      confirmationNumber,
      createdAt: new Date().toISOString(),
    };

    // Créer l'inscription
    const result = await inscriptionsApi.create(inscriptionData);

    // Ici, vous pourriez aussi :
    // - Envoyer un email de confirmation
    // - Créer une notification admin
    // - Intégrer avec un système de paiement

    return NextResponse.json(
      { 
        message: 'Votre pré-inscription a été enregistrée avec succès',
        confirmationNumber,
        inscriptionId: result.data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de votre inscription' },
      { status: 500 }
    );
  }
}
