/*
  # Schéma de la base de données pour le tableau de bord bancaire

  1. Nouvelles Tables
    - `branches` : Agences bancaires
      - `id` (uuid, clé primaire)
      - `name` (text) : Nom de l'agence
      - `transactions_count` (int) : Nombre de transactions
      - `revenue` (numeric) : Revenus
      - `customer_satisfaction` (numeric) : Satisfaction client
      - `efficiency` (numeric) : Efficacité
      - `created_at` (timestamptz)

    - `transactions` : Transactions bancaires
      - `id` (uuid, clé primaire)
      - `type` (text) : Type de transaction
      - `amount` (numeric) : Montant
      - `status` (text) : Statut
      - `customer_name` (text) : Nom du client
      - `created_at` (timestamptz)

    - `financial_metrics` : Métriques financières
      - `id` (uuid, clé primaire)
      - `metric_name` (text) : Nom de la métrique
      - `current_value` (numeric) : Valeur actuelle
      - `previous_value` (numeric) : Valeur précédente
      - `target_value` (numeric) : Valeur cible
      - `created_at` (timestamptz)

    - `risk_metrics` : Métriques de risque
      - `id` (uuid, clé primaire)
      - `category` (text) : Catégorie de risque
      - `current_value` (numeric) : Valeur actuelle
      - `threshold` (numeric) : Seuil
      - `status` (text) : Statut
      - `created_at` (timestamptz)

    - `user_activities` : Journal d'activités utilisateurs
      - `id` (uuid, clé primaire)
      - `user_id` (text) : ID utilisateur
      - `action` (text) : Action effectuée
      - `details` (text) : Détails
      - `status` (text) : Statut
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques de lecture pour les utilisateurs authentifiés
*/

-- Création des tables
CREATE TABLE branches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  transactions_count int NOT NULL DEFAULT 0,
  revenue numeric NOT NULL DEFAULT 0,
  customer_satisfaction numeric NOT NULL DEFAULT 0,
  efficiency numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL,
  customer_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE financial_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  current_value numeric NOT NULL,
  previous_value numeric NOT NULL,
  target_value numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE risk_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  current_value numeric NOT NULL,
  threshold numeric NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE user_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  action text NOT NULL,
  details text NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation de la sécurité RLS
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE risk_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activities ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Lecture des agences autorisée" ON branches
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Lecture des transactions autorisée" ON transactions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Lecture des métriques financières autorisée" ON financial_metrics
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Lecture des métriques de risque autorisée" ON risk_metrics
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Lecture des activités utilisateurs autorisée" ON user_activities
  FOR SELECT TO authenticated USING (true);

-- Insertion des données initiales
INSERT INTO branches (name, transactions_count, revenue, customer_satisfaction, efficiency) VALUES
  ('Dakar Plateau', 1250, 450000000, 92, 88),
  ('Médina', 980, 320000000, 88, 85),
  ('Almadies', 750, 280000000, 90, 82);

INSERT INTO transactions (type, amount, status, customer_name) VALUES
  ('Transfert', 500000, 'Terminé', 'Moussa Diop'),
  ('Prêt', 1500000, 'En attente', 'Fatou Sow'),
  ('Retrait', 200000, 'Terminé', 'Aminata Ndiaye'),
  ('Dépôt', 1000000, 'Terminé', 'Abdoulaye Fall');

INSERT INTO financial_metrics (metric_name, current_value, previous_value, target_value) VALUES
  ('Rendement des Actifs (ROA)', 1.8, 1.5, 2.0),
  ('Rendement des Capitaux Propres (ROE)', 15.2, 14.1, 16.0),
  ('Marge Nette d''Intérêt (MNI)', 3.5, 3.4, 3.8);

INSERT INTO risk_metrics (category, current_value, threshold, status) VALUES
  ('Risque de Crédit', 2.8, 5, 'low'),
  ('Risque de Liquidité', 4.2, 4, 'medium'),
  ('Risque Opérationnel', 6.1, 5, 'high'),
  ('Risque de Marché', 3.5, 6, 'low');

INSERT INTO user_activities (user_id, action, details, status) VALUES
  ('USR001', 'Connexion', 'Connexion réussie depuis IP 192.168.1.1', 'success'),
  ('USR002', 'Approbation de Transaction', 'Approbation du prêt #LA789', 'success'),
  ('USR003', 'Échec d''Authentification', 'Plusieurs tentatives de connexion échouées', 'error'),
  ('USR004', 'Mise à jour du Profil', 'Mise à jour des informations de contact', 'success');