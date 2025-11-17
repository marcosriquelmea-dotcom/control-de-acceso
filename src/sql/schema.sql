-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'concierge', 'resident')),
  building_id UUID,
  apartment_number TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Desactivar RLS para permitir registro desde UI
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Tabla de edificios/condominios
CREATE TABLE IF NOT EXISTS buildings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT DEFAULT 'Chile',
  total_apartments INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de residentes
CREATE TABLE IF NOT EXISTS residents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  apartment_number TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  vehicle_plate TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de visitas
CREATE TABLE IF NOT EXISTS visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resident_id UUID REFERENCES residents(id) ON DELETE CASCADE,
  visitor_name TEXT NOT NULL,
  visitor_id_number TEXT,
  visitor_phone TEXT,
  visit_date DATE NOT NULL,
  entry_time TIMESTAMPTZ,
  exit_time TIMESTAMPTZ,
  qr_code TEXT UNIQUE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'authorized', 'rejected', 'completed')),
  authorized_by UUID REFERENCES users(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de encomiendas/paquetes
CREATE TABLE IF NOT EXISTS packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resident_id UUID REFERENCES residents(id) ON DELETE CASCADE,
  package_type TEXT NOT NULL,
  sender_company TEXT,
  received_by UUID REFERENCES users(id),
  received_date TIMESTAMPTZ DEFAULT NOW(),
  delivery_date TIMESTAMPTZ,
  delivered_to TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'delivered', 'returned')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de registros de acceso (para concerjes)
CREATE TABLE IF NOT EXISTS access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  person_name TEXT NOT NULL,
  person_type TEXT NOT NULL CHECK (person_type IN ('resident', 'visitor', 'delivery', 'service')),
  entry_time TIMESTAMPTZ DEFAULT NOW(),
  exit_time TIMESTAMPTZ,
  authorized_by UUID REFERENCES users(id),
  vehicle_plate TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insertar edificio de ejemplo
INSERT INTO buildings (name, address, city, total_apartments)
VALUES ('Condominio Central', 'Av. Principal 123', 'Santiago, Chile', 50);

-- Insertar usuario administrador de ejemplo
INSERT INTO users (email, password, full_name, role, phone)
VALUES ('admin@visiion.cl', 'admin123', 'Administrador VISSION', 'admin', '+56 9 4563 7999');

-- Insertar concerje de ejemplo
INSERT INTO users (email, password, full_name, role, phone)
VALUES ('concierge@visiion.cl', 'concierge123', 'Concierge Principal', 'concierge', '+56 9 3402 9500');
