import React from 'react';
import { Clock, User, AlertCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { UserActivity } from '../types';

const UserActivityLog: React.FC = () => {
  const { data: activities, loading, error } = useApi<UserActivity>('getUserActivities');

  if (loading) return <div>Chargement des activités...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Journal d'Activité des Utilisateurs</h2>
        <Clock className="w-6 h-6 text-blue-600" />
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{activity.user_id}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                activity.status === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {activity.status === 'success' ? 'Succès' : 'Échec'}
              </span>
            </div>
            <div className="ml-7">
              <p className="text-gray-700">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.details}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(activity.created_at).toLocaleString('fr-FR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivityLog;