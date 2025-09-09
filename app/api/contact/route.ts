import { NextRequest, NextResponse } from 'next/server';
import { contactApi } from '@/lib/strapi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { name, email, phone, subject, message, formation } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Préparer les données pour Strapi
    const contactData = {
      name,
      email,
      phone: phone || '',
      subject,
      message,
      formation: formation || '',
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // Envoyer à Strapi
    const result = await contactApi.sendMessage(contactData);

    // Ici, vous pourriez aussi envoyer un email de notification
    // await sendNotificationEmail(contactData);

    return NextResponse.json(
      { 
        message: 'Votre message a été envoyé avec succès',
        id: result.data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de votre message' },
      { status: 500 }
    );
  }
}
