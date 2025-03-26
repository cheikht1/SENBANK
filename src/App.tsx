import React from 'react';
import { Activity, Users, CreditCard, TrendingUp, Bell, Search, Menu } from 'lucide-react';
import KPICard from './components/KPICard';
import TransactionTable from './components/TransactionTable';
import PerformanceChart from './components/PerformanceChart';
import RiskDashboard from './components/RiskDashboard';
import UserActivityLog from './components/UserActivityLog';
import FinancialMetrics from './components/FinancialMetrics';
import BranchPerformance from './components/BranchPerformance';

const mockTransactions = [
  { id: '1', type: 'Transfert', amount: 500000, status: 'Terminé', date: '2024-03-15', customer: 'Cheikh Thiam' },
  { id: '2', type: 'Prêt', amount: 1500000, status: 'En attente', date: '2024-03-14', customer: 'Faty Mbacke Diop' },
  { id: '3', type: 'Retrait', amount: 200000, status: 'Terminé', date: '2024-03-14', customer: 'Ousseynou Ndiaye' },
  { id: '4', type: 'Dépôt', amount: 1000000, status: 'Terminé', date: '2024-03-13', customer: 'Yacine Sarr' },
];

const performanceData = [
  { name: 'Jan', value: 85 },
  { name: 'Fév', value: 88 },
  { name: 'Mar', value: 92 },
  { name: 'Avr', value: 89 },
  { name: 'Mai', value: 94 },
  { name: 'Juin', value: 91 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* En-tête */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* <Activity className="h-8 w-8 text-blue-600" /> */}
              <img src="/sn.png" alt="Logo BankSen" className="h-8 w-8 object-contain" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">BankSen</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cartes KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Coût Opérationnel"
            value={125000000}
            change={-2.5}
            icon="CreditCard"
            format="currency"
          />
          <KPICard
            title="Taux de Réussite des Transactions"
            value={98.5}
            change={1.2}
            icon="TrendingUp"
            format="percentage"
          />
          <KPICard
            title="Utilisateurs Actifs"
            value={15420}
            change={5.1}
            icon="Users"
            format="number"
          />
          <KPICard
            title="Ratio NPL"
            value={3.2}
            change={-0.8}
            icon="Activity"
            format="percentage"
          />
        </div>

        {/* Métriques Financières et Gestion des Risques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FinancialMetrics />
          <RiskDashboard />
        </div>

        {/* Graphiques de Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PerformanceChart
            data={performanceData}
            title="Tendance de Performance Opérationnelle"
          />
          <BranchPerformance />
        </div>

        {/* Transactions et Activité Utilisateurs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TransactionTable transactions={mockTransactions} />
          <UserActivityLog />
        </div>
      </main>
    </div>
  );
}

export default App;