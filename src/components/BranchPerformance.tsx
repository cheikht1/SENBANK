import React from 'react';
import { Building2, Users, Banknote, LineChart } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { Branch } from '../types';

const BranchPerformance: React.FC = () => {
  const { data: branches, loading, error } = useApi<Branch>('getBranches');

  if (loading) return <div>Chargement des données...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Performance des Agences</h2>
        <Building2 className="w-6 h-6 text-blue-600" />
      </div>
      <div className="space-y-6">
        {branches.map((branch) => (
          <div key={branch.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">{branch.name}</h3>
              <span className="text-sm text-gray-500">ID: {branch.id}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <LineChart className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Transactions</p>
                  <p className="font-semibold">{branch.transactions_count}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Banknote className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Revenus</p>
                  <p className="font-semibold">{branch.revenue.toLocaleString()} XOF</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Satisfaction</p>
                  <p className="font-semibold">{branch.customer_satisfaction}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-500">Efficacité</p>
                  <p className="font-semibold">{branch.efficiency}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchPerformance;