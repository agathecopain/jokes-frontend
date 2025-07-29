# Blagues Carambar - Projet CDA

Mini application web réalisée dans le cadre du projet de sélection CDA.  
Elle permet d’afficher des blagues aléatoires depuis une API personnalisée.

## Liens utiles

| Élement             | Lien                                                                 |
|---------------------|----------------------------------------------------------------------|
| 🔗 API (Back)        | [https://jokes-backend-lo7h.onrender.com](https://jokes-backend-lo7h.onrender.com) |
| 📘 Swagger (Docs)    | [https://jokes-backend-lo7h.onrender.com/api-docs/](https://jokes-backend-lo7h.onrender.com/api-docs/) |
| 🎨 Front (Landing)   | [https://jokes-frontend-coral.vercel.app/](https://jokes-frontend-coral.vercel.app/) |
| 💻 Repo GitHub (Back)| [https://github.com/agathecopain/jokes-backend](https://github.com/agathecopain/jokes-backend) |
| 💾 Repo GitHub (Front)| [https://github.com/agathecopain/jokes-frontend](https://github.com/agathecopain/jokes-frontend) |


## Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/agathecopain/jokes-frontend.git
```
### 2. Installer le backend
```bash
cd jokes-frontend
yarn
```
### 3. Créer un fichier .env
```bash
VITE_API_URL=https://jokes-backend-lo7h.onrender.com/api
```

### 4. Lancer le serveur
```bash
yarn dev
```

## Structure du projet (Frontend)
```
jokes-frontend/
├── public/                 # Fichiers statiques
│   └── 10530-carambar-candies-food.gif
│   └── favicon-32x32.png
├── src/
│   ├── components/         # Composants React (Footer.jsx, Header.jsx)
│   ├── pages/              # Page principale (Landing.jsx)
│   ├── service/            # Services API (api.js, joke.service.js)
│   ├── App.jsx             
│   ├── main.jsx            # Point d’entrée de l’application
│   └── index.css          
├── .env                    # Variables d’environnement (optionnel)
├── .gitignore
├── index.html             
├── package.json
├── vite.config.js         
└── README.md
```
