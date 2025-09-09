import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const { rows } = await db.query(`
      SELECT 
        f.*,
        fc.name as category_name,
        fc.slug as category_slug,
        fc.icon as category_icon,
        fc.color as category_color,
        i.first_name as instructor_first_name,
        i.last_name as instructor_last_name,
        i.email as instructor_email,
        i.bio as instructor_bio,
        i.specializations as instructor_specializations,
        i.experience as instructor_experience
      FROM formations f
      LEFT JOIN formation_categories fc ON f.category_id = fc.id
      LEFT JOIN instructors i ON f.instructor_id = i.id
      WHERE f.slug = $1 AND f.is_active = true
    `, [slug]);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Formation non trouvée' },
        { status: 404 }
      );
    }

    const formation = rows[0];

    // Transformer les données
    const transformedFormation = {
      id: formation.id,
      title: formation.title,
      slug: formation.slug,
      description: formation.description,
      shortDescription: formation.short_description,
      content: formation.content,
      category: {
        id: formation.category_id,
        name: formation.category_name,
        slug: formation.category_slug,
        icon: formation.category_icon,
        color: formation.category_color,
      },
      level: formation.level,
      duration: formation.duration,
      price: parseFloat(formation.price),
      currency: formation.currency,
      language: formation.language,
      startDate: formation.start_date,
      endDate: formation.end_date,
      maxStudents: formation.max_students,
      currentStudents: formation.current_students,
      isActive: formation.is_active,
      isOnline: formation.is_online,
      isInPerson: formation.is_in_person,
      location: formation.location,
      prerequisites: formation.prerequisites,
      objectives: formation.objectives,
      program: formation.program,
      instructor: {
        id: formation.instructor_id,
        firstName: formation.instructor_first_name,
        lastName: formation.instructor_last_name,
        email: formation.instructor_email,
        bio: formation.instructor_bio,
        specializations: formation.instructor_specializations,
        experience: formation.instructor_experience,
      },
      createdAt: formation.created_at,
      updatedAt: formation.updated_at,
    };

    return NextResponse.json({ data: transformedFormation });
  } catch (error) {
    console.error('Erreur lors de la récupération de la formation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la formation' },
      { status: 500 }
    );
  }
}
