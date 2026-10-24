import type { L } from '../i18n';

export type DNode = { id: string; x: number; y: number; w?: number; label: L | string; sub?: L | string; hue: number };
export type DEdge = { from: string; to: string; label?: L | string; dashed?: boolean; bend?: number };
export type DGroup = { x: number; y: number; w: number; h: number; label: L | string };
export type Diagram = { caption: L; width: number; height: number; nodes: DNode[]; edges: DEdge[]; groups?: DGroup[] };

export const diagrams: Record<string, Diagram> = {
  jhouns: {
    caption: {
      fr: 'Architecture de JHouns : le site, l’API et la base tournent ensemble avec Docker Compose, et chaque pull request passe par la CI.',
      en: 'JHouns architecture: site, API and database run together with Docker Compose, and every pull request goes through CI.',
    },
    width: 730,
    height: 380,
    groups: [{ x: 180, y: 40, w: 520, h: 150, label: 'Docker Compose' }],
    nodes: [
      { id: 'user', x: 90, y: 115, w: 120, label: { fr: 'Joueur', en: 'Player' }, sub: { fr: 'navigateur', en: 'browser' }, hue: 45 },
      { id: 'web', x: 280, y: 115, label: 'Next.js', sub: { fr: 'site web', en: 'web app' }, hue: 220 },
      { id: 'api', x: 450, y: 115, label: 'NestJS', sub: 'API REST', hue: 340 },
      { id: 'db', x: 620, y: 115, label: 'PostgreSQL', sub: { fr: 'base de données', en: 'database' }, hue: 205 },
      { id: 'pr', x: 280, y: 300, label: 'Pull request', sub: 'GitHub', hue: 260 },
      { id: 'ci', x: 450, y: 300, label: 'GitHub Actions', sub: 'build + tests', hue: 170 },
      { id: 'main', x: 620, y: 300, label: 'main', sub: { fr: 'branche protégée', en: 'protected branch' }, hue: 130 },
    ],
    edges: [
      { from: 'user', to: 'web' },
      { from: 'web', to: 'api' },
      { from: 'api', to: 'db' },
      { from: 'pr', to: 'ci' },
      { from: 'ci', to: 'main', label: '✓' },
    ],
  },
  ssoce: {
    caption: {
      fr: 'Du capteur à l’écran : les relevés passent par un serveur, puis l’application de bureau les affiche et prévient l’utilisateur.',
      en: 'From sensor to screen: readings go through a server, then the desktop app displays them and alerts the user.',
    },
    width: 880,
    height: 320,
    groups: [{ x: 560, y: 16, w: 290, h: 290, label: { fr: 'Application de bureau', en: 'Desktop app' } }],
    nodes: [
      { id: 'iot', x: 100, y: 160, w: 140, label: { fr: 'Capteur', en: 'Sensor' }, sub: { fr: 'température', en: 'temperature' }, hue: 150 },
      { id: 'api', x: 330, y: 160, w: 160, label: 'API REST', sub: 'Spring Boot', hue: 200 },
      { id: 'chart', x: 705, y: 112, w: 200, label: { fr: 'Temps réel', en: 'Real time' }, sub: { fr: 'suivi des mesures', en: 'live readings' }, hue: 280 },
      { id: 'alert', x: 705, y: 240, w: 200, label: { fr: 'Alertes', en: 'Alerts' }, sub: { fr: 'notifications', en: 'notifications' }, hue: 15 },
    ],
    edges: [
      { from: 'iot', to: 'api' },
      { from: 'api', to: 'chart' },
      { from: 'api', to: 'alert' },
    ],
  },
  'pole-it': {
    caption: {
      fr: 'Architecture du site Pôle IT : des pages et formulaires PHP valident chaque envoi avant de l’écrire en base SQLite, l’espace admin lit les mêmes données, et chaque push passe par la CI avant le déploiement.',
      en: 'Pôle IT architecture: PHP pages and forms validate every submission before writing it to SQLite, the admin area reads the same data, and every push goes through CI before deployment.',
    },
    width: 880,
    height: 390,
    groups: [{ x: 185, y: 30, w: 670, h: 232, label: 'Docker' }],
    nodes: [
      { id: 'user', x: 85, y: 105, w: 130, label: { fr: 'Visiteur', en: 'Visitor' }, sub: { fr: 'navigateur', en: 'browser' }, hue: 45 },
      { id: 'admin', x: 85, y: 205, w: 130, label: { fr: 'Administrateur', en: 'Administrator' }, sub: { fr: 'connexion', en: 'login' }, hue: 300 },
      { id: 'pages', x: 300, y: 105, w: 150, label: { fr: 'Site public', en: 'Public site' }, sub: { fr: '6 pages PHP', en: '6 PHP pages' }, hue: 228 },
      { id: 'forms', x: 515, y: 105, w: 170, label: { fr: 'Formulaires', en: 'Forms' }, sub: { fr: 'validation · CSRF', en: 'validation · CSRF' }, hue: 340 },
      { id: 'back', x: 515, y: 205, w: 170, label: { fr: 'Espace admin', en: 'Admin area' }, sub: { fr: 'recherche · CSV', en: 'search · CSV' }, hue: 260 },
      { id: 'db', x: 765, y: 155, w: 130, label: 'SQLite', sub: { fr: 'requêtes PDO', en: 'PDO queries' }, hue: 205 },
      { id: 'push', x: 300, y: 330, w: 150, label: 'git push', sub: 'GitHub', hue: 220 },
      { id: 'ci', x: 515, y: 330, w: 190, label: 'GitHub Actions', sub: { fr: 'lint · 24 tests · HTTP', en: 'lint · 24 tests · HTTP' }, hue: 170 },
      { id: 'render', x: 765, y: 330, w: 130, label: 'Render', sub: { fr: 'image Docker', en: 'Docker image' }, hue: 130 },
    ],
    edges: [
      { from: 'user', to: 'pages' },
      { from: 'pages', to: 'forms' },
      { from: 'forms', to: 'db' },
      { from: 'admin', to: 'back' },
      { from: 'back', to: 'db' },
      { from: 'push', to: 'ci' },
      { from: 'ci', to: 'render', label: '✓' },
    ],
  },
  'suivi-stock-excel': {
    caption: {
      fr: 'Organisation du classeur : les feuilles de saisie alimentent les calculs de stock et de péremption, qui nourrissent le tableau de bord. Les paramètres (date d’analyse, seuils) pilotent tous les calculs.',
      en: 'Workbook layout: input sheets feed the stock and expiry calculations, which feed the dashboard. Settings (analysis date, thresholds) drive every calculation.',
    },
    width: 880,
    height: 380,
    groups: [{ x: 20, y: 30, w: 220, h: 330, label: { fr: 'Saisie', en: 'Input' } }],
    nodes: [
      { id: 'prd', x: 130, y: 90, w: 170, label: { fr: 'Produits', en: 'Products' }, sub: { fr: 'prix · seuils', en: 'prices · thresholds' }, hue: 210 },
      { id: 'rec', x: 130, y: 175, w: 170, label: { fr: 'Réceptions', en: 'Deliveries' }, sub: { fr: 'un lot par ligne', en: 'one batch per row' }, hue: 200 },
      { id: 'ven', x: 130, y: 255, w: 170, label: { fr: 'Ventes', en: 'Sales' }, sub: { fr: 'par semaine', en: 'weekly' }, hue: 280 },
      { id: 'vis', x: 130, y: 330, w: 170, label: { fr: 'Visites', en: 'Visits' }, sub: { fr: 'magasins', en: 'stores' }, hue: 330 },
      { id: 'lots', x: 445, y: 100, w: 215, label: { fr: 'Lots', en: 'Batches' }, sub: { fr: 'restant · péremption', en: 'remaining · expiry' }, hue: 25 },
      { id: 'stock', x: 445, y: 215, w: 215, label: 'Stock', sub: { fr: 'par magasin · à commander', en: 'per store · to order' }, hue: 145 },
      { id: 'dash', x: 740, y: 230, w: 190, label: { fr: 'Tableau de bord', en: 'Dashboard' }, sub: { fr: 'indicateurs · alertes', en: 'KPIs · alerts' }, hue: 45 },
      { id: 'par', x: 445, y: 340, w: 215, label: { fr: 'Paramètres', en: 'Settings' }, sub: { fr: 'date · seuils', en: 'date · thresholds' }, hue: 0 },
    ],
    edges: [
      { from: 'rec', to: 'lots' },
      { from: 'ven', to: 'lots' },
      { from: 'prd', to: 'stock' },
      { from: 'ven', to: 'stock' },
      { from: 'lots', to: 'dash' },
      { from: 'stock', to: 'dash' },
      { from: 'vis', to: 'dash', dashed: true },
      { from: 'par', to: 'stock', dashed: true },
    ],
  },
  jestion: {
    caption: {
      fr: 'Architecture MVC de Jestion : deux espaces (utilisateur et administrateur) partagent les mêmes modèles et la même base.',
      en: 'Jestion MVC architecture: two areas (user and admin) share the same models and database.',
    },
    width: 880,
    height: 320,
    nodes: [
      { id: 'client', x: 115, y: 90, w: 165, label: { fr: 'Espace utilisateur', en: 'User area' }, sub: 'FXML', hue: 200 },
      { id: 'admin', x: 110, y: 230, w: 140, label: { fr: 'Espace admin', en: 'Admin area' }, sub: 'FXML', hue: 330 },
      { id: 'ctrl', x: 330, y: 160, w: 150, label: { fr: 'Contrôleurs', en: 'Controllers' }, sub: 'JavaFX', hue: 260 },
      { id: 'model', x: 540, y: 160, label: { fr: 'Modèles', en: 'Models' }, sub: { fr: 'utilisateurs · demandes', en: 'users · requests' }, w: 170, hue: 45 },
      { id: 'db', x: 750, y: 160, label: 'SQLite', sub: { fr: '6 tables', en: '6 tables' }, hue: 210 },
    ],
    edges: [
      { from: 'client', to: 'ctrl' },
      { from: 'admin', to: 'ctrl' },
      { from: 'ctrl', to: 'model' },
      { from: 'model', to: 'db' },
    ],
  },
  incubateur: {
    caption: {
      fr: 'Boucle de régulation, principe de l’incubateur : l’Arduino lit les capteurs et pilote le chauffage et l’humidité pour rester dans la plage cible.',
      en: 'Control loop: the Arduino reads sensors and drives heating and humidity to stay within the target range.',
    },
    width: 880,
    height: 320,
    nodes: [
      { id: 'temp', x: 110, y: 90, w: 140, label: { fr: 'Température', en: 'Temperature' }, sub: { fr: 'capteur', en: 'sensor' }, hue: 15 },
      { id: 'hum', x: 110, y: 230, w: 140, label: { fr: 'Humidité', en: 'Humidity' }, sub: { fr: 'capteur', en: 'sensor' }, hue: 200 },
      { id: 'ard', x: 360, y: 160, w: 150, label: 'Arduino', sub: { fr: 'régulation', en: 'control loop' }, hue: 180 },
      { id: 'heat', x: 640, y: 90, w: 160, label: { fr: 'Chauffage', en: 'Heating' }, sub: { fr: 'actionneur', en: 'actuator' }, hue: 25 },
      { id: 'humid', x: 640, y: 230, w: 160, label: { fr: 'Humidification', en: 'Humidifying' }, sub: { fr: 'actionneur', en: 'actuator' }, hue: 220 },
    ],
    edges: [
      { from: 'temp', to: 'ard' },
      { from: 'hum', to: 'ard' },
      { from: 'ard', to: 'heat' },
      { from: 'ard', to: 'humid' },
    ],
  },
};
