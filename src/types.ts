export interface Branch {
  id: number;
  name: string;
  transactions_count: number;
  revenue: number;
  customer_satisfaction: number;
  efficiency: number;
  created_at: string;
}

export interface Transaction {
  id: number;
  type: string;
  amount: number;
  status: string;
  customer_name: string;
  created_at: string;
}

export interface FinancialMetric {
  id: number;
  metric_name: string;
  current_value: number;
  previous_value: number;
  target_value: number;
  created_at: string;
}

export interface RiskMetric {
  id: number;
  category: string;
  current_value: number;
  threshold: number;
  status: string;
  created_at: string;
}

export interface UserActivity {
  id: number;
  user_id: string;
  action: string;
  details: string;
  status: string;
  created_at: string;
}

export interface ChartData {
  name: string;
  value: number;
}