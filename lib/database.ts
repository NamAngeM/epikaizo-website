import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
  pool,
};

// Fonction pour initialiser la base de données
export async function initializeDatabase() {
  try {
    // Vérifier la connexion
    await db.query('SELECT NOW()');
    console.log('✅ Connexion à PostgreSQL établie');
    
    // Créer les tables si elles n'existent pas
    await createTables();
    
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion à PostgreSQL:', error);
    return false;
  }
}

async function createTables() {
  // Table des formations
  await db.query(`
    CREATE TABLE IF NOT EXISTS formations (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      description TEXT,
      short_description VARCHAR(500),
      content TEXT,
      category_id INTEGER,
      level VARCHAR(50) NOT NULL,
      duration INTEGER NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      currency VARCHAR(3) DEFAULT 'EUR',
      language VARCHAR(5) DEFAULT 'fr',
      start_date DATE,
      end_date DATE,
      max_students INTEGER DEFAULT 20,
      current_students INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT true,
      is_online BOOLEAN DEFAULT false,
      is_in_person BOOLEAN DEFAULT true,
      location VARCHAR(255),
      prerequisites JSONB,
      objectives JSONB,
      program JSONB,
      instructor_id INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des catégories de formations
  await db.query(`
    CREATE TABLE IF NOT EXISTS formation_categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) UNIQUE NOT NULL,
      slug VARCHAR(100) UNIQUE NOT NULL,
      description TEXT,
      icon VARCHAR(10),
      color VARCHAR(20),
      "order" INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des instructeurs
  await db.query(`
    CREATE TABLE IF NOT EXISTS instructors (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      bio TEXT,
      specializations JSONB,
      experience INTEGER,
      avatar_url VARCHAR(500),
      social_links JSONB,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des étudiants
  await db.query(`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      phone VARCHAR(20) NOT NULL,
      date_of_birth DATE,
      nationality VARCHAR(100),
      address JSONB,
      education JSONB,
      experience JSONB,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des inscriptions
  await db.query(`
    CREATE TABLE IF NOT EXISTS inscriptions (
      id SERIAL PRIMARY KEY,
      formation_id INTEGER REFERENCES formations(id),
      student_id INTEGER REFERENCES students(id),
      status VARCHAR(50) DEFAULT 'pending',
      payment_status VARCHAR(50) DEFAULT 'pending',
      payment_method VARCHAR(50),
      total_amount DECIMAL(10,2),
      paid_amount DECIMAL(10,2) DEFAULT 0,
      notes TEXT,
      confirmation_number VARCHAR(50) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des actualités
  await db.query(`
    CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      content TEXT NOT NULL,
      excerpt VARCHAR(500),
      author_id INTEGER REFERENCES instructors(id),
      category VARCHAR(100),
      tags JSONB,
      featured_image_url VARCHAR(500),
      is_published BOOLEAN DEFAULT false,
      published_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des témoignages
  await db.query(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      position VARCHAR(100),
      company VARCHAR(100),
      content TEXT NOT NULL,
      rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
      avatar_url VARCHAR(500),
      formation_id INTEGER REFERENCES formations(id),
      is_published BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des partenaires
  await db.query(`
    CREATE TABLE IF NOT EXISTS partners (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      logo_url VARCHAR(500) NOT NULL,
      website VARCHAR(255),
      description TEXT,
      is_active BOOLEAN DEFAULT true,
      "order" INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des contacts
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      formation VARCHAR(255),
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Créer les index pour améliorer les performances
  await db.query('CREATE INDEX IF NOT EXISTS idx_formations_slug ON formations(slug)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_formations_category ON formations(category_id)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_formations_active ON formations(is_active)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_inscriptions_student ON inscriptions(student_id)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_inscriptions_formation ON inscriptions(formation_id)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug)');
  await db.query('CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published)');

  console.log('✅ Tables de base de données créées/vérifiées');
}

// Fonction pour insérer des données de test
export async function seedDatabase() {
  try {
    // Vérifier si des données existent déjà
    const { rows } = await db.query('SELECT COUNT(*) FROM formation_categories');
    if (parseInt(rows[0].count) > 0) {
      console.log('📊 Données de test déjà présentes');
      return;
    }

    // Insérer des catégories de formations
    await db.query(`
      INSERT INTO formation_categories (name, slug, description, icon, color, "order") VALUES
      ('Aviation', 'aviation', 'Formations spécialisées en aviation civile et commerciale', '✈️', 'blue', 1),
      ('Logistique', 'logistique', 'Gestion de la chaîne logistique et supply chain', '📦', 'green', 2),
      ('Sciences de Gestion', 'sciences-gestion', 'Management, finance et stratégie d''entreprise', '📊', 'purple', 3),
      ('QHSE', 'qhse', 'Qualité, Hygiène, Sécurité et Environnement', '🛡️', 'orange', 4)
    `);

    // Insérer des instructeurs
    await db.query(`
      INSERT INTO instructors (first_name, last_name, email, bio, specializations, experience) VALUES
      ('Jean', 'Dupont', 'jean.dupont@epikaizo.com', 'Pilote expérimenté avec 15 ans d''expérience', '["Aviation commerciale", "Formation pilote"]', 15),
      ('Marie', 'Martin', 'marie.martin@epikaizo.com', 'Experte en logistique avec 10 ans d''expérience', '["Supply Chain", "Logistique internationale"]', 10),
      ('Pierre', 'Durand', 'pierre.durand@epikaizo.com', 'Consultant en management avec 20 ans d''expérience', '["Leadership", "Stratégie d''entreprise"]', 20)
    `);

    // Insérer des formations
    await db.query(`
      INSERT INTO formations (title, slug, description, short_description, category_id, level, duration, price, start_date, end_date, max_students, current_students, instructor_id) VALUES
      ('Formation Pilote de Ligne', 'formation-pilote-ligne', 'Formation complète pour devenir pilote de ligne commercial.', 'Devenez pilote de ligne avec notre formation certifiée.', 1, 'intermediaire', 1200, 85000, '2024-03-15', '2024-12-15', 20, 12, 1),
      ('Gestion de la Chaîne Logistique', 'gestion-chaine-logistique', 'Maîtrisez les enjeux de la supply chain moderne.', 'Optimisez votre chaîne logistique avec nos experts.', 2, 'debutant', 40, 1200, '2024-02-20', '2024-03-20', 25, 18, 2),
      ('Management Stratégique', 'management-strategique', 'Développez vos compétences en management et leadership.', 'Devenez un leader efficace avec notre formation.', 3, 'avance', 60, 1800, '2024-04-10', '2024-06-10', 15, 8, 3)
    `);

    console.log('🌱 Données de test insérées avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de l\'insertion des données de test:', error);
  }
}
