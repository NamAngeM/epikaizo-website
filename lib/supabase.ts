import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Configuration pour les uploads de fichiers
export const supabaseStorage = supabase.storage

// Helper pour les requêtes avec gestion d'erreur
export const supabaseQuery = async <T>(query: Promise<any>): Promise<T | null> => {
  try {
    const { data, error } = await query
    if (error) {
      console.error('Supabase error:', error)
      return null
    }
    return data
  } catch (error) {
    console.error('Query error:', error)
    return null
  }
}

// Types pour les tables Supabase (à adapter selon vos besoins)
export interface SupabaseFormation {
  id: number
  title: string
  slug: string
  description: string
  short_description: string
  category: string
  level: string
  duration: number
  price: number
  currency: string
  start_date: string
  end_date: string
  max_students: number
  current_students: number
  is_active: boolean
  is_online: boolean
  is_in_person: boolean
  location?: string
  created_at: string
  updated_at: string
}

export interface SupabaseContact {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  formation?: string
  status: 'new' | 'read' | 'replied'
  created_at: string
}

export interface SupabaseInscription {
  id: number
  formation_id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  date_of_birth: string
  nationality: string
  address: any // JSON
  education: any // JSON
  experience: any // JSON
  documents: any // JSON
  payment_method: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
  updated_at: string
}
