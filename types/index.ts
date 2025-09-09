// Types pour les formations
export interface Formation {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  content: string;
  category: FormationCategory;
  level: FormationLevel;
  duration: number; // en heures
  price: number;
  currency: string;
  language: string;
  startDate: string;
  endDate: string;
  maxStudents: number;
  currentStudents: number;
  isActive: boolean;
  isOnline: boolean;
  isInPerson: boolean;
  location?: string;
  prerequisites: string[];
  objectives: string[];
  program: FormationProgram[];
  instructor: Instructor;
  images: Media[];
  documents: Media[];
  createdAt: string;
  updatedAt: string;
}

export interface FormationCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export type FormationLevel = 'debutant' | 'intermediaire' | 'avance' | 'expert';

export interface FormationProgram {
  id: number;
  title: string;
  description: string;
  duration: number;
  order: number;
}

export interface Instructor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  specializations: string[];
  experience: number;
  avatar?: Media;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
  url: string;
  mime: string;
  size: number;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Types pour les inscriptions
export interface Inscription {
  id: number;
  formation: Formation;
  student: Student;
  status: InscriptionStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: string;
  totalAmount: number;
  paidAmount: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type InscriptionStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'partial' | 'paid' | 'refunded';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: Address;
  education: Education[];
  experience: Experience[];
  documents: Media[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
}

// Types pour les pages
export interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// Types pour les actualités
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: Instructor;
  category: string;
  tags: string[];
  featuredImage?: Media;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// Types pour les témoignages
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: Media;
  formation?: Formation;
  isPublished: boolean;
  createdAt: string;
}

// Types pour les partenaires
export interface Partner {
  id: number;
  name: string;
  logo: Media;
  website?: string;
  description: string;
  isActive: boolean;
  order: number;
}

// Types pour les filtres
export interface FormationFilters {
  category?: string;
  level?: FormationLevel;
  isOnline?: boolean;
  isInPerson?: boolean;
  priceMin?: number;
  priceMax?: number;
  durationMin?: number;
  durationMax?: number;
  startDate?: string;
  search?: string;
}

// Types pour les réponses API
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

// Types pour les formulaires
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  formation?: string;
}

export interface NewsletterForm {
  email: string;
  interests: string[];
}

// Types pour la configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: Media;
  favicon: Media;
  socialLinks: SocialLinks;
  contact: {
    email: string;
    phone: string;
    address: Address;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}

