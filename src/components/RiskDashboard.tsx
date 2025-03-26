import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { RiskMetric } from '../types';

const RiskDashboard: React.FC = () => {
  const { data: riskMetrics, loading, error } = useApi<RiskMetric>('getRiskMetrics');

  if (loading) return <div>Chargement des données de risque...</div>;
  if (error) return <div>Erreur: {error}</div>;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'low':
        return 'Faible';
      case 'medium':
        return 'Moyen';
      case 'high':
        return 'Élevé';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'low':
        return <CheckCircle className="w-5 h-5" />;
      case 'medium':
        return <AlertTriangle className="w-5 h-5" />;
      case 'high':
        return <Shield className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Tableau de Bord des Risques</h2>
        <Shield className="w-6 h-6 text-blue-600" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {riskMetrics.map((metric) => (
          <div
            key={metric.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">{metric.category}</span>
              <div className={`flex items-center ${getStatusColor(metric.status)} px-2 py-1 rounded-full text-sm`}>
                {getStatusIcon(metric.status)}
                <span className="ml-1">{getStatusText(metric.status)}</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-500">Valeur Actuelle</span>
                <span className="font-semibold">{metric.current_value}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Seuil</span>
                <span className="font-semibold">{metric.threshold}%</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    metric.status === 'low'
                      ? 'bg-green-500'
                      : metric.status === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${(metric.current_value / metric.threshold) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskDashboard;