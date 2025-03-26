-- Création de la base de données
CREATE DATABASE IF NOT EXISTS banksen_db;
USE banksen_db;

-- Table des agences
CREATE TABLE branches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  transactions_count INT NOT NULL DEFAULT 0,
  revenue DECIMAL(15,2) NOT NULL DEFAULT 0,
  customer_satisfaction DECIMAL(5,2) NOT NULL DEFAULT 0,
  efficiency DECIMAL(5,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des transactions
CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des métriques financières
CREATE TABLE financial_metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  metric_name VARCHAR(255) NOT NULL,
  current_value DECIMAL(10,2) NOT NULL,
  previous_value DECIMAL(10,2) NOT NULL,
  target_value DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des métriques de risque
CREATE TABLE risk_metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  current_value DECIMAL(10,2) NOT NULL,
  threshold DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des activités utilisateurs
CREATE TABLE user_activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  action VARCHAR(255) NOT NULL,
  details TEXT NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des données de test
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