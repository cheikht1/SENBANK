import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuration de la connexion MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Routes pour les agences
app.get('/api/branches', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM branches');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes pour les transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM transactions ORDER BY created_at DESC LIMIT 10');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes pour les métriques financières
app.get('/api/financial-metrics', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM financial_metrics');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes pour les métriques de risque
app.get('/api/risk-metrics', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM risk_metrics');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes pour les activités utilisateurs
app.get('/api/user-activities', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM user_activities ORDER BY created_at DESC LIMIT 10');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});