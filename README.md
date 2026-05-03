# MaxIt V3 — Guide de démarrage

## Prérequis

- **Node.js** >= 18 — [Télécharger ici](https://nodejs.org/)
- **npm** >= 9 (inclus avec Node.js)

Vérifie ta version :
```bash
node -v
npm -v
```

---

## Installation & lancement

```bash
# 1. Installe les dépendances
npm install

# 2. Lance le serveur de développement
npm run dev
```

L'application s'ouvre automatiquement sur **http://localhost:5173**

---

## Autres commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (hot-reload) |
| `npm run build` | Build de production dans `/dist` |
| `npm run preview` | Prévisualiser le build de production |

---

## Structure du projet

```
MaxIt_V3/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Composant racine (routing entre vues)
│   │   └── components/
│   │       ├── LandingPage.tsx  # Page d'accueil
│   │       ├── AuthPage.tsx     # Page de connexion / inscription
│   │       ├── StudentPortal.tsx # Portail étudiant
│   │       ├── Home.tsx
│   │       ├── ui/              # Composants shadcn/ui
│   │       └── figma/           # Composants utilitaires Figma
│   ├── imports/                 # Images du projet
│   ├── lib/
│   │   └── utils.ts             # Utilitaire cn() pour Tailwind
│   └── styles/
│       ├── index.css            # CSS principal
│       └── theme.css            # Variables de thème
├── index.html                   # Point d'entrée HTML
├── vite.config.ts               # Config Vite
├── tailwind.config.js           # Config Tailwind CSS
├── tsconfig.json                # Config TypeScript
└── package.json                 # Dépendances Node.js
```

---

## Stack technique

- **React 18** + **TypeScript**
- **Vite 6** — bundler ultra-rapide
- **Tailwind CSS 4** — styles utilitaires
- **shadcn/ui** + **Radix UI** — composants accessibles
- **MUI** — composants Material Design
- **React Router 7** — navigation
- **Recharts** — graphiques
- **Lucide React** — icônes
