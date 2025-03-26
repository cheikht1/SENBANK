# Tableau de Bord Bancaire BankSen

Un tableau de bord moderne pour la gestion bancaire, conçu spécifiquement pour le contexte sénégalais.

## 🌟 Fonctionnalités

- 📊 Suivi en temps réel des métriques financières
- 💰 Gestion des transactions
- 🏦 Surveillance des performances des agences
- 📈 Analyse des risques
- 👥 Suivi des activités utilisateurs
- 🔐 Authentification sécurisée
- 💱 Support de la monnaie XOF

## 🚀 Technologies Utilisées

- React.js
- TypeScript
- Tailwind CSS
- Firebase
- Recharts pour les graphiques
- Lucide React pour les icônes

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Un compte Firebase

## 🛠️ Installation

1. Clonez le dépôt :
```bash
git clone [url-du-repo]
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez vos variables d'environnement Firebase :
```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_auth_domain
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## 📱 Captures d'écran

![Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## 🔧 Configuration

### Firebase

1. Créez un nouveau projet dans Firebase
2. Activez Firestore Database
3. Configurez les règles de sécurité
4. Ajoutez vos informations d'identification dans le fichier `.env`

### Structure de la Base de Données

- `branches` : Informations sur les agences
- `transactions` : Historique des transactions
- `financial_metrics` : Métriques financières
- `risk_metrics` : Indicateurs de risque
- `user_activities` : Journal d'activités

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmeliorationIncroyable`)
3. Commit vos changements (`git commit -m 'Ajout de quelque chose d'incroyable'`)
4. Push sur la branche (`git push origin feature/AmeliorationIncroyable`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à nous contacter directement.

## 🙏 Remerciements

- L'équipe de développement
- Nos utilisateurs pour leurs retours précieux
- La communauté open source pour leurs contributions inestimables