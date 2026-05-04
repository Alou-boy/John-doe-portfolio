# 🎨 Portfolio John Doe - React.JS

Site portfolio développé avec **React.JS** et **Bootstrap 5** dans le cadre d'un devoir au **Centre Européen de Formation (CEF)**.

Ce site présente John Doe, un développeur web full stack en formation, et lui permet de se présenter sur le marché de l'emploi.

---

## 🚀 Démo

Pour voir le site, suivez les instructions d'installation ci-dessous puis ouvrez `http://localhost:5173`

---

## 📋 Prérequis

Avant de commencer, vérifiez que vous avez installé sur votre machine :

- **Node.js** (version 18 ou plus) → [Télécharger ici](https://nodejs.org)
- **npm** (installé automatiquement avec Node.js)
- **Git** → [Télécharger ici](https://git-scm.com)

Vous pouvez vérifier les versions avec :
```bash
node --version
npm --version
git --version
```

---

## 📦 Installation

**1.** Clonez le repository :
```bash
git clone https://github.com/Alou-boy/John-doe-portfolio.git
```

**2.** Entrez dans le dossier du projet :
```bash
cd John-doe-portfolio
```

**3.** Installez les dépendances :
```bash
npm install
```

---

## ▶️ Lancement du projet

Pour lancer le serveur de développement :
```bash
npm run dev
```

Puis ouvrez votre navigateur sur **http://localhost:5173**

Pour créer une version optimisée pour la production :
```bash
npm run build
```

---

## 🛠️ Technologies utilisées

- ⚛️ **React 18** – bibliothèque JavaScript pour l'interface utilisateur
- 🔀 **React Router DOM** – navigation entre les pages
- 🅱️ **Bootstrap 5** – framework CSS responsive
- 🎨 **Bootstrap Icons** – icônes
- ⚡ **Vite** – outil de développement rapide
- 🔤 **Nunito Sans** (Google Fonts) – police du site

---

## 📁 Structure du projet 

john-doe-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── GithubModal.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── MentionsLegales.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

---

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** : section hero, à propos, barres de compétences
- 💼 **Services** : 3 prestations (UX Design, Développement web, Référencement)
- 🎨 **Portfolio** : 6 réalisations avec images et technologies
- 📞 **Contact** : formulaire complet + Google Maps
- ⚖️ **Mentions légales** : éditeur, hébergeur, crédits (accordéon Bootstrap)
- 🔗 **Modale GitHub** : récupère les infos du profil via l'API GitHub
- 📱 **100% responsive** : adapté mobile, tablette et desktop
- ✅ **Code valide W3C** (HTML & CSS)

---

## 👤 Auteur

**Alou-boy** – Étudiant développeur web au CEF

---

## 📄 Licence

Projet réalisé dans le cadre d'une formation au Centre Européen de Formation.