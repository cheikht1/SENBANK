import React from 'react';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { FinancialMetric } from '../types';

const FinancialMetrics: React.FC = () => {
  const { data: metrics, loading, error } = useApi<FinancialMetric>('getFinancialMetrics');

  if (loading) return <div>Chargement des métriques financières...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Métriques de Performance Financière</h2>
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">{metric.metric_name}</span>
              <div className="flex items-center space-x-2">
                {(metric.current_value - metric.previous_value) >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm ${(metric.current_value - metric.previous_value) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {((metric.current_value - metric.previous_value) > 0 ? '+' : '')}{(metric.current_value - metric.previous_value).toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Actuel: {metric.current_value}%</span>
              <span>Précédent: {metric.previous_value}%</span>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                <span>Objectif: {metric.target_value}%</span>
              </div>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${(metric.current_value / metric.target_value) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialMetrics;