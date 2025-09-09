-- Schema SQL pour EPIKAIZO sur Supabase
-- Exécutez ces commandes dans l'éditeur SQL de Supabase

-- Table des formations
CREATE TABLE IF NOT EXISTS formations (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('debutant', 'intermediaire', 'avance', 'expert')),
  duration INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'FCFA',
  start_date DATE,
  end_date DATE,
  max_students INTEGER DEFAULT 25,
  current_students INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_online BOOLEAN DEFAULT false,
  is_in_person BOOLEAN DEFAULT true,
  location TEXT,
  prerequisites JSONB DEFAULT '[]',
  objectives JSONB DEFAULT '[]',
  program JSONB DEFAULT '[]',
  instructor JSONB,
  images JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  formation TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des inscriptions
CREATE TABLE IF NOT EXISTS inscriptions (
  id BIGSERIAL PRIMARY KEY,
  formation_id BIGINT REFERENCES formations(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE,
  nationality TEXT,
  address JSONB,
  education JSONB DEFAULT '[]',
  experience JSONB DEFAULT '[]',
  documents JSONB DEFAULT '[]',
  payment_method TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des actualités
CREATE TABLE IF NOT EXISTS news (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  category TEXT,
  tags JSONB DEFAULT '[]',
  featured_image TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des témoignages
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  formation_id BIGINT REFERENCES formations(id),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insertion de données d'exemple pour les formations
INSERT INTO formations (title, slug, description, short_description, category, level, duration, price, currency, start_date, end_date, location, prerequisites, objectives) VALUES
('Formation Agent d''Escale Commercial', 'formation-agent-escale-commercial', 'Formation complète pour devenir agent d''escale commercial avec option accueil et enregistrement.', 'Devenez agent d''escale commercial avec notre formation certifiante de 6 mois.', 'Aviation', 'debutant', 480, 1000000, 'FCFA', '2024-09-15', '2025-03-15', 'Charbonnage, Libreville, Gabon', '["Bac ou Terminale", "4 photos", "Acte de naissance"]', '["Maîtriser l''accueil et l''enregistrement", "Gérer la billeterie", "Assurer le service client"]'),

('Formation Agent de Piste', 'formation-agent-piste', 'Formation spécialisée dans les opérations au sol et la maintenance légère des aéronefs.', 'Spécialisez-vous dans les opérations aéroportuaires au sol.', 'Aviation', 'debutant', 360, 800000, 'FCFA', '2024-10-01', '2025-02-01', 'Charbonnage, Libreville, Gabon', '["Niveau 5ème à Terminale", "Permis B (pour conduite d''engins)", "Certificat médical"]', '["Maîtriser la manutention des bagages", "Conduire les engins légers", "Assurer les services au sol"]'),

('Gestion Logistique et Supply Chain', 'gestion-logistique-supply-chain', 'Formation complète en gestion de la chaîne d''approvisionnement et logistique internationale.', 'Devenez expert en logistique et supply chain management.', 'Logistique', 'intermediaire', 720, 1500000, 'FCFA', '2024-11-01', '2025-05-01', 'Charbonnage, Libreville, Gabon', '["Bac+2 ou équivalent", "Notions d''anglais", "Connaissance de base en informatique"]', '["Maîtriser la chaîne logistique", "Optimiser les flux", "Gérer les stocks et approvisionnements"]');

-- Insertion de témoignages d'exemple
INSERT INTO testimonials (name, position, company, content, rating, formation_id, is_published) VALUES
('Marie Kouadio', 'Agent d''Escale', 'Air France', 'Excellente formation qui m''a permis de décrocher un emploi rapidement. Les formateurs sont très compétents et l''approche pratique est remarquable.', 5, 1, true),
('Jean Baptiste Nzé', 'Responsable Logistique', 'Bolloré Logistics', 'La formation en logistique m''a ouvert de nouvelles perspectives de carrière. Le contenu est très complet et adapté aux réalités du marché.', 5, 3, true),
('Fatima Al-Rashid', 'Agent de Piste', 'Aéroports du Gabon', 'Formation pratique et professionnelle. J''ai acquis toutes les compétences nécessaires pour exceller dans mon poste.', 4, 2, true);

-- Insertion d'actualités d'exemple
INSERT INTO news (title, slug, content, excerpt, author, category, is_published, published_at) VALUES
('Nouvelle promotion en Aviation', 'nouvelle-promotion-aviation', 'Nous sommes fiers d''annoncer l''ouverture des inscriptions pour notre nouvelle promotion en formation aviation...', 'Ouverture des inscriptions pour la formation en aviation', 'Direction EPIKAIZO', 'Formation', true, NOW()),
('Partenariat avec Air France', 'partenariat-air-france', 'EPIKAIZO University renforce son partenariat avec Air France pour offrir plus d''opportunités...', 'Nouveau partenariat stratégique avec Air France', 'Direction EPIKAIZO', 'Partenariat', true, NOW());

-- Activer RLS (Row Level Security) pour la sécurité
ALTER TABLE formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité (lecture publique pour les données publiques)
CREATE POLICY "Public formations are viewable by everyone" ON formations FOR SELECT USING (is_active = true);
CREATE POLICY "Public news are viewable by everyone" ON news FOR SELECT USING (is_published = true);
CREATE POLICY "Public testimonials are viewable by everyone" ON testimonials FOR SELECT USING (is_published = true);

-- Permettre l'insertion pour les contacts et inscriptions (formulaires publics)
CREATE POLICY "Anyone can insert contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert inscriptions" ON inscriptions FOR INSERT WITH CHECK (true);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers pour updated_at
CREATE TRIGGER update_formations_updated_at BEFORE UPDATE ON formations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inscriptions_updated_at BEFORE UPDATE ON inscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
