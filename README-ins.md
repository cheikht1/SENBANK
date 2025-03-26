# Tableau de Bord Bancaire BankSen - Guide d'Installation

## Prérequis

1. **XAMPP**
   - Téléchargez et installez XAMPP depuis [https://www.apachefriends.org/fr/index.html](https://www.apachefriends.org/fr/index.html)
   - Version recommandée : 8.0 ou supérieure

2. **Node.js**
   - Téléchargez et installez Node.js depuis [https://nodejs.org/](https://nodejs.org/)
   - Version recommandée : 18.0 ou supérieure

## Installation

1. **Configuration de la base de données**
   - Démarrez XAMPP et activez Apache et MySQL
   - Ouvrez phpMyAdmin (http://localhost/phpmyadmin)
   - Créez une nouvelle base de données nommée `banksen_db`
   - Importez le fichier SQL fourni dans `supabase/migrations/20250323173318_humble_pine.sql`

2. **Configuration du projet**
   ```bash
   # Clonez le projet
   git clone [votre-repo]
   cd banking-dashboard

   # Installez les dépendances
   npm install
   ```

3. **Configuration des variables d'environnement**
   - Copiez le fichier `.env.example` vers `.env`
   - Modifiez les variables selon votre configuration locale :
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=banksen_db
   PORT=3001
   ```

## Démarrage

1. **Démarrez le serveur de développement**
   ```bash
   npm run dev
   ```

2. **Accédez à l'application**
   - Frontend : [http://localhost:5173](http://localhost:5173)
   - API : [http://localhost:3001](http://localhost:3001)

## Structure du Projet

```
banking-dashboard/
├── server/              # Serveur Express + MySQL
├── src/                 # Frontend React
│   ├── components/      # Composants React
│   ├── hooks/          # Hooks personnalisés
│   └── types/          # Types TypeScript
├── .env                # Variables d'environnement
└── package.json        # Dépendances
```

## Points d'API

- `GET /api/branches` - Liste des agences
- `GET /api/transactions` - Transactions récentes
- `GET /api/financial-metrics` - Métriques financières
- `GET /api/risk-metrics` - Métriques de risque
- `GET /api/user-activities` - Activités utilisateurs

## Dépannage

1. **Erreur de connexion à la base de données**
   - Vérifiez que MySQL est bien démarré dans XAMPP
   - Vérifiez les identifiants dans le fichier `.env`
   - Assurez-vous que la base de données `banksen_db` existe

2. **Le serveur ne démarre pas**
   - Vérifiez que le port 3001 est disponible
   - Assurez-vous que toutes les dépendances sont installées

3. **Problèmes courants avec XAMPP**
   - Si MySQL ne démarre pas, vérifiez qu'aucun autre service MySQL n'est en cours
   - Ports par défaut : Apache (80, 443), MySQL (3306)

## Support

Pour toute question ou problème :
1. Consultez la documentation
2. Vérifiez les logs dans la console
3. Ouvrez une issue sur GitHub

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.