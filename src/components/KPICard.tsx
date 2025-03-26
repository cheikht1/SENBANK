import React from 'react';
import * as Icons from 'lucide-react';
import { KPICard as KPICardType } from '../types';

const KPICard: React.FC<KPICardType> = ({ title, value, change, icon, format }) => {
  const Icon = Icons[icon as keyof typeof Icons];
  const isPositive = change >= 0;

  const formatValue = (val: number, fmt: string) => {
    if (fmt === 'currency') {
      return `${val.toLocaleString()} XOF`;
    }
    if (fmt === 'percentage') {
      return `${val.toFixed(1)}%`;
    }
    return val.toLocaleString();
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600">{title}</div>
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-2xl font-bold mb-2">
        {formatValue(value, format)}
      </div>
      <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <Icons.TrendingUp className={`w-4 h-4 mr-1 ${isPositive ? '' : 'rotate-180'}`} />
        <span>{Math.abs(change)}% vs mois précédent</span>
      </div>
    </div>
  );
};

export default KPICard;