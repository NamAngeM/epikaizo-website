import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    const search = searchParams.get('search');
    const isOnline = searchParams.get('isOnline');
    const isInPerson = searchParams.get('isInPerson');

    const offset = (page - 1) * limit;

    // Construire la requête SQL
    let query = `
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
      WHERE f.is_active = true
    `;

    const params: any[] = [];
    let paramCount = 0;

    if (category) {
      paramCount++;
      query += ` AND fc.slug = $${paramCount}`;
      params.push(category);
    }

    if (level) {
      paramCount++;
      query += ` AND f.level = $${paramCount}`;
      params.push(level);
    }

    if (search) {
      paramCount++;
      query += ` AND (f.title ILIKE $${paramCount} OR f.description ILIKE $${paramCount})`;
      params.push(`%${search}%`);
    }

    if (isOnline === 'true') {
      query += ` AND f.is_online = true`;
    }

    if (isInPerson === 'true') {
      query += ` AND f.is_in_person = true`;
    }

    query += ` ORDER BY f.created_at DESC LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
    params.push(limit, offset);

    const { rows: formations } = await db.query(query, params);

    // Compter le total pour la pagination
    let countQuery = `
      SELECT COUNT(*) 
      FROM formations f
      LEFT JOIN formation_categories fc ON f.category_id = fc.id
      WHERE f.is_active = true
    `;
    
    const countParams: any[] = [];
    let countParamCount = 0;

    if (category) {
      countParamCount++;
      countQuery += ` AND fc.slug = $${countParamCount}`;
      countParams.push(category);
    }

    if (level) {
      countParamCount++;
      countQuery += ` AND f.level = $${countParamCount}`;
      countParams.push(level);
    }

    if (search) {
      countParamCount++;
      countQuery += ` AND (f.title ILIKE $${countParamCount} OR f.description ILIKE $${countParamCount})`;
      countParams.push(`%${search}%`);
    }

    if (isOnline === 'true') {
      countQuery += ` AND f.is_online = true`;
    }

    if (isInPerson === 'true') {
      countQuery += ` AND f.is_in_person = true`;
    }

    const { rows: countResult } = await db.query(countQuery, countParams);
    const total = parseInt(countResult[0].count);

    // Transformer les données
    const transformedFormations = formations.map(formation => ({
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
    }));

    return NextResponse.json({
      data: transformedFormations,
      meta: {
        pagination: {
          page,
          pageSize: limit,
          pageCount: Math.ceil(total / limit),
          total,
        },
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des formations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des formations' },
      { status: 500 }
    );
  }
}
