import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const api = {
  getBranches: () => axios.get(`${API_URL}/branches`),
  getTransactions: () => axios.get(`${API_URL}/transactions`),
  getFinancialMetrics: () => axios.get(`${API_URL}/financial-metrics`),
  getRiskMetrics: () => axios.get(`${API_URL}/risk-metrics`),
  getUserActivities: () => axios.get(`${API_URL}/user-activities`),
};