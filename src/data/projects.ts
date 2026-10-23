import type { ImageMetadata } from 'astro';
import type { L } from '../i18n';

import jhAccueil from '../assets/projects/jhouns/bloc-9-accueil.png';
import jhCarte from '../assets/projects/jhouns/bloc-9-carte.png';
import jhPartie from '../assets/projects/jhouns/bloc-9-partie.png';
import jhCreer from '../assets/projects/jhouns/bloc-9-creer.png';
import jhApres from '../assets/projects/jhouns/bloc-9-apres-partie.png';
import jhNotifs from '../assets/projects/jhouns/bloc-9-notifications.png';
import jhProfil from '../assets/projects/jhouns/bloc-10-profil.png';
import jhModeration from '../assets/projects/jhouns/bloc-10-moderation.png';
import jhNuitAccueil from '../assets/projects/jhouns/bloc-12-nuit-accueil.png';
import jhNuitTerrain from '../assets/projects/jhouns/bloc-12-nuit-terrain.png';
import jhCriteres from '../assets/projects/jhouns/bloc-15-criteres.png';
import jhAnglais from '../assets/projects/jhouns/bloc-14-anglais.png';
import jhPcAccueil from '../assets/projects/jhouns/bloc-13-ordinateur-accueil.png';
import jhPcNuit from '../assets/projects/jhouns/bloc-13-ordinateur-nuit.png';
import jeConnexion from '../assets/projects/jestion/connexion.png';
import jeDashboard from '../assets/projects/jestion/tableau-de-bord.png';
import jeUsers from '../assets/projects/jestion/utilisateurs.png';
import jeRequests from '../assets/projects/jestion/demandes.png';
import jeNewRequest from '../assets/projects/jestion/nouvelle-demande.png';
import ssConnexion from '../assets/projects/ssoce/connexion.png';
import ssProfil from '../assets/projects/ssoce/profil.png';
import ssMesures from '../assets/projects/ssoce/mesures.png';
import ssHistorique from '../assets/projects/ssoce/historique.png';
import ssParametres from '../assets/projects/ssoce/parametres.png';
import enedisPhoto from '../assets/companies/enedis.jpg';
import alPackinox from '../assets/projects/alfa-laval/packinox.jpg';
import alHypercut from '../assets/projects/alfa-laval/hypercut.jpg';
import piAccueil from '../assets/projects/pole-it/accueil.jpg';
import piAdmission from '../assets/projects/pole-it/admission.png';
import piFiche from '../assets/projects/pole-it/stage-fiche.png';
import piAdmin from '../assets/projects/pole-it/admin.png';
import piSombre from '../assets/projects/pole-it/contact-sombre.png';
import piAvant from '../assets/projects/pole-it/avant-2022.jpg';
import xlDashboard from '../assets/projects/suivi-stock-excel/tableau-de-bord.png';
import xlAlertes from '../assets/projects/suivi-stock-excel/alertes.png';
import xlReceptions from '../assets/projects/suivi-stock-excel/receptions.png';
import xlStock from '../assets/projects/suivi-stock-excel/stock.png';
import xlAccueil from '../assets/projects/suivi-stock-excel/accueil.png';

export type Shot = { src: ImageMetadata; alt: L };

/** Visuel de contexte en paysage (produit, site), avec crédit si l'image n'est pas de moi. */
export type Visual = { src: ImageMetadata; alt: L; credit?: string };

export type Metric = { value: string; label: L };

/** Tableau avant / après. */
export type Compare = { before: L; after: L; rows: { label: L; before: L; after: L }[] };

/** Chapitre d'une étude de cas : un sous-projet ou une facette du travail. */
export type Chapter = { title: L; text: L; points?: L[]; diagram?: string; compare?: Compare };

export type Project = {
  slug: string;
  name: string;
  /** software = projet purement informatique ; engineering = projet d'ingénierie (matériel, prototype). */
  category: 'software' | 'engineering';
  state: 'progress' | 'done' | 'prototype';
  confidential?: boolean;
  diagram?: string;
  metrics?: Metric[];
  visuals?: Visual[];
  /** Deux visuels de même largeur, montrés en entier (avant / après, vues ordinateur). */
  pair?: boolean;
  chapters?: Chapter[];
  summary: L;
  context: L;
  role: L;
  period: L;
  stack: string[];
  repo?: string;
  demo?: string;
  /** Couleur d'accent de la couverture générée quand il n'y a pas de capture. */
  hue: number;
  icon: 'ball' | 'bolt' | 'bank' | 'flame' | 'chip' | 'box' | 'egg' | 'globe' | 'chart';
  cover?: ImageMetadata;
  shots?: Shot[];
  /** Captures d'une application de bureau, montrées dans une fenêtre. */
  screens?: Shot[];
  /** Vidéo de présentation dans public/media/projets/<slug>-<lang>.mp4 (+ affiche .jpg). */
  video?: boolean;
  challenge: L;
  approach?: L[];
  /** Domaines d'intervention d'une mission, sans détail confidentiel. */
  themes?: { icon: string; title: L; text: L }[];
  outcome?: L[];
  learned?: L;
};

export const projects: Project[] = [
  {
    slug: 'jhouns',
    video: true,
    name: 'JHouns',
    category: 'software',
    state: 'progress',
    diagram: 'jhouns',
    summary: {
      fr: 'Application web pour trouver des partenaires de sport et des terrains près de chez soi en Île-de-France, construite comme un vrai produit avec une démarche DevOps.',
      en: 'Web app to find sports partners and pitches nearby in the Paris area, built like a real product with a DevOps mindset.',
    },
    context: {
      fr: 'Projet personnel, 2026. Footballeur depuis plus de dix ans, je voulais un moyen simple de compléter une équipe ou de trouver un terrain libre.',
      en: 'Personal project, 2026. As a football player for over ten years, I wanted a simple way to fill a team or find a free pitch.',
    },
    role: { fr: 'Conception, développement full-stack, CI/CD', en: 'Design, full-stack development, CI/CD' },
    period: { fr: '2026 — aujourd’hui', en: '2026 — present' },
    stack: ['TypeScript', 'Next.js 15', 'React 19', 'NestJS 11', 'PostgreSQL', 'PostGIS', 'MapLibre', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/Jonathan0237/JHouns',
    hue: 78,
    icon: 'ball',
    cover: jhAccueil,
    pair: true,
    visuals: [
      { src: jhPcAccueil, alt: { fr: 'Vue ordinateur : l’accueil sur deux colonnes', en: 'Desktop view: the home page in two columns' } },
      { src: jhPcNuit, alt: { fr: 'Vue ordinateur, mode nuit : la fiche d’un terrain', en: 'Desktop view, night mode: a pitch page' } },
    ],
    shots: [
      { src: jhAccueil, alt: { fr: 'Accueil : prochaine partie et parties à venir', en: 'Home: next game and upcoming games' } },
      { src: jhNuitTerrain, alt: { fr: 'Mode nuit : la fiche d’un terrain', en: 'Night mode: a pitch page' } },
      { src: jhCarte, alt: { fr: 'Carte des terrains avec filtres par sport', en: 'Map of pitches with sport filters' } },
      { src: jhPartie, alt: { fr: 'Détail d’une partie et inscription', en: 'Game details and sign-up' } },
      { src: jhCreer, alt: { fr: 'Création d’une partie', en: 'Creating a game' } },
      { src: jhCriteres, alt: { fr: 'Plus de critères : seuls ceux qui donnent des terrains sont proposés', en: 'More filters: only those that return pitches are offered' } },
      { src: jhNuitAccueil, alt: { fr: 'L’accueil en mode nuit', en: 'Home in night mode' } },
      { src: jhAnglais, alt: { fr: 'Le site aussi en anglais', en: 'The site in English too' } },
      { src: jhApres, alt: { fr: 'Après la partie : avis et remerciements', en: 'After the game: ratings and thanks' } },
      { src: jhNotifs, alt: { fr: 'Notifications', en: 'Notifications' } },
      { src: jhProfil, alt: { fr: 'Profil joueur', en: 'Player profile' } },
      { src: jhModeration, alt: { fr: 'Écran de modération', en: 'Moderation screen' } },
    ],
    challenge: {
      fr: "Organiser une partie de foot, de basket ou de tennis entre inconnus pose trois problèmes : savoir où jouer, trouver assez de joueurs au bon niveau, et pouvoir faire confiance aux autres. Je voulais aussi apprendre le DevOps sur un projet concret plutôt qu'avec des exercices isolés.",
      en: 'Organising a football, basketball or tennis game between strangers raises three problems: knowing where to play, finding enough players at the right level, and being able to trust each other. I also wanted to learn DevOps on a concrete project rather than with isolated exercises.',
    },
    approach: [
      {
        fr: 'Monorepo avec une API NestJS, un site Next.js et une base PostgreSQL + PostGIS pour les recherches géographiques, le tout lancé en une commande avec Docker Compose.',
        en: 'Monorepo with a NestJS API, a Next.js site and a PostgreSQL + PostGIS database for geographic queries, all started with a single Docker Compose command.',
      },
      {
        fr: 'Intégration continue GitHub Actions : chaque pull request compile l’API et le site et lance les tests contre une vraie base PostGIS.',
        en: 'GitHub Actions CI: every pull request builds the API and the site and runs tests against a real PostGIS database.',
      },
      {
        fr: 'Branche main protégée et une pull request par bloc fonctionnel (parties, comptes, terrains, présence, avis, notifications), avec captures avant/après.',
        en: 'Protected main branch and one pull request per feature block (games, accounts, pitches, attendance, ratings, notifications), with before/after screenshots.',
      },
      {
        fr: 'Règles métier codées et testées : pas de chevauchement de parties, trois parties à venir au maximum, désinscription gratuite jusqu’à trois heures avant, 17 ans minimum.',
        en: 'Business rules coded and tested: no overlapping games, at most three upcoming games, free cancellation up to three hours before, 17 years minimum.',
      },
      {
        fr: 'Vrais terrains d’Île-de-France issus des données publiques Data ES, affichés sur une carte MapLibre / OpenStreetMap.',
        en: 'Real Paris-area pitches from the public Data ES dataset, displayed on a MapLibre / OpenStreetMap map.',
      },
      {
        fr: 'Recherche de terrains par critères (gratuit, éclairé, couvert, type de sol, distance), en ne proposant que les critères qui donnent des résultats.',
        en: 'Pitch search by filters (free, lit, covered, surface, distance), offering only the filters that return results.',
      },
      {
        fr: 'Une interface soignée partout : mode jour et mode nuit, vue ordinateur dédiée, site en français ou en anglais.',
        en: 'A polished interface everywhere: day and night modes, a dedicated desktop view, site in French or English.',
      },
      {
        fr: 'Un système de confiance bienveillant : seuls les joueurs dont la présence est validée peuvent noter ou signaler, et un signalement seul n’exclut jamais personne.',
        en: 'A fair trust system: only players whose attendance is confirmed can rate or report, and a single report never bans anyone.',
      },
    ],
    outcome: [
      { fr: 'Plus de 25 pull requests fusionnées, une CI verte à chaque étape.', en: 'Over 25 merged pull requests, green CI at every step.' },
      { fr: 'Parcours complet fonctionnel : compte, carte, recherche par critères, création et inscription aux parties, présence, avis, notifications, modération.', en: 'Full working flow: account, map, filtered search, game creation and sign-up, attendance, ratings, notifications, moderation.' },
      { fr: 'Sur téléphone comme sur ordinateur, en mode jour ou nuit, en français ou en anglais.', en: 'On phone and desktop, in day or night mode, in French or English.' },
      { fr: 'Chaque étape DevOps (Docker, CI) documentée dans le dépôt, comme un journal d’apprentissage.', en: 'Each DevOps step (Docker, CI) documented in the repository as a learning journal.' },
    ],
    learned: {
      fr: 'Découper un produit en petits blocs livrables et laisser la CI garder la qualité. Prochaines étapes : mise en ligne, application mobile Expo, Terraform et monitoring.',
      en: 'Slicing a product into small shippable blocks and letting CI guard quality. Next steps: deployment, Expo mobile app, Terraform and monitoring.',
    },
  },
  {
    slug: 'pole-it',
    video: true,
    name: 'Pôle IT · ECAM-EPMI',
    category: 'software',
    state: 'progress',
    diagram: 'pole-it',
    summary: {
      fr: 'Site vitrine et formulaires en ligne pour le Pôle IT d’une école d’ingénieurs : projet de groupe de 2022 en HTML, CSS et JavaScript, refondu en 2026 en application web PHP complète, sécurisée et testée.',
      en: 'Showcase site and online forms for an engineering school’s IT department: a 2022 group project in HTML, CSS and JavaScript, rebuilt in 2026 as a complete, secure and tested PHP web app.',
    },
    context: {
      fr: 'Projet de groupe de 1re année du cycle ingénieur à l’ECAM-EPMI (groupe 12, quatre étudiants), repris seul en 2026. Projet étudiant non officiel, formulaires fictifs.',
      en: 'First-year engineering group project at ECAM-EPMI (group 12, four students), picked up on my own in 2026. Unofficial student project, fictional forms.',
    },
    role: {
      fr: '2022 : développement en équipe. 2026 : refonte complète (back-end, sécurité, tests, CI, Docker)',
      en: '2022: team development. 2026: full rebuild (back end, security, tests, CI, Docker)',
    },
    period: { fr: '2022, refonte en 2026', en: '2022, rebuilt in 2026' },
    stack: ['PHP 8', 'SQLite', 'PDO', 'JavaScript', 'HTML / CSS', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/Jonathan0237/pole-it-ecam',
    demo: 'https://pole-it-ecam.onrender.com',
    hue: 200,
    icon: 'globe',
    metrics: [
      { value: '6', label: { fr: 'pages publiques', en: 'public pages' } },
      { value: '3', label: { fr: 'formulaires traités côté serveur', en: 'server-side forms' } },
      { value: '24', label: { fr: 'tests lancés à chaque push', en: 'tests run on every push' } },
      { value: '2 Mo', label: { fr: 'de médias, contre 15 en 2022', en: 'of media, down from 15 in 2022' } },
    ],
    pair: true,
    visuals: [
      { src: piAvant, alt: { fr: 'Version 2022 : vidéo filmée à la verticale, gabarit copié dans chaque page', en: '2022 version: portrait video, template copied into every page' } },
      { src: piAccueil, alt: { fr: 'Version 2026 : gabarit unique, thème clair et sombre, pensé mobile d’abord', en: '2026 version: single template, light and dark themes, mobile first' } },
    ],
    screens: [
      { src: piAccueil, alt: { fr: 'Accueil : présentation du pôle et accès aux candidatures', en: 'Home: department overview and application links' } },
      { src: piAdmission, alt: { fr: 'Pré-inscription en 3 étapes, validée à chaque étape', en: '3-step pre-registration, validated at each step' } },
      { src: piFiche, alt: { fr: 'Fiche de stage générée, avec référence unique et export PDF', en: 'Generated internship sheet, with unique reference and PDF export' } },
      { src: piAdmin, alt: { fr: 'Espace admin : compteurs, recherche et export CSV', en: 'Admin area: counters, search and CSV export' } },
      { src: piSombre, alt: { fr: 'Page contact en thème sombre', en: 'Contact page in dark theme' } },
    ],
    challenge: {
      fr: 'Le site de 2022 était une maquette : les formulaires ne traitaient rien, le code se répétait de page en page et une saisie pouvait injecter du HTML. L’objectif de la refonte : en faire une vraie application web, sûre et maintenable, sans framework, pour maîtriser les bases du web côté serveur.',
      en: 'The 2022 site was a mock-up: forms processed nothing, code was repeated from page to page and user input could inject HTML. The rebuild’s goal: turn it into a real, safe and maintainable web app, without a framework, to master server-side web fundamentals.',
    },
    chapters: [
      {
        title: { fr: 'Repartir d’un projet d’équipe', en: 'Starting from a team project' },
        text: {
          fr: 'En 2022, notre groupe a conçu six pages en HTML, CSS et JavaScript : un carrousel, un formulaire d’admission en plusieurs étapes et une fiche de stage exportée en PDF. En 2026, j’ai gardé l’esprit et le contenu, et tout repris en profondeur.',
          en: 'In 2022, our group designed six pages in HTML, CSS and JavaScript: a carousel, a multi-step admission form and an internship sheet exported to PDF. In 2026, I kept the spirit and content and reworked everything in depth.',
        },
        compare: {
          before: { fr: '2022', en: '2022' },
          after: { fr: '2026', en: '2026' },
          rows: [
            { label: { fr: 'Formulaires', en: 'Forms' }, before: { fr: 'aucun traitement', en: 'not processed' }, after: { fr: 'validation serveur, base SQLite', en: 'server validation, SQLite database' } },
            { label: { fr: 'Gabarit', en: 'Template' }, before: { fr: 'copié dans chaque page', en: 'copied into every page' }, after: { fr: 'un gabarit PHP et des vues', en: 'one PHP layout and views' } },
            { label: { fr: 'Sécurité', en: 'Security' }, before: { fr: 'injection HTML possible', en: 'HTML injection possible' }, after: { fr: 'échappement, CSRF, anti-spam', en: 'escaping, CSRF, anti-spam' } },
            { label: { fr: 'Affichage', en: 'Display' }, before: { fr: 'responsive partiel', en: 'partly responsive' }, after: { fr: 'mobile d’abord, thème sombre', en: 'mobile first, dark theme' } },
            { label: { fr: 'Mise en ligne', en: 'Deployment' }, before: { fr: 'fichiers à ouvrir', en: 'files to open locally' }, after: { fr: 'Docker, CI, Render', en: 'Docker, CI, Render' } },
          ],
        },
      },
      {
        title: { fr: 'Un vrai back-end PHP, sans framework', en: 'A real PHP back end, no framework' },
        text: {
          fr: 'PHP 8 natif, sans Composer, pour montrer que je maîtrise le cycle requête / réponse, les sessions et l’accès aux données.',
          en: 'Plain PHP 8, no Composer, to show I master the request / response cycle, sessions and data access.',
        },
        points: [
          { fr: 'Contact, pré-inscription en 3 étapes et demande de stage : chaque envoi est validé côté serveur et enregistré en base SQLite.', en: 'Contact, 3-step pre-registration and internship request: each submission is validated server-side and stored in SQLite.' },
          { fr: 'Les formulaires fonctionnent aussi sans JavaScript : en cas d’erreur, le serveur renvoie directement sur l’étape fautive.', en: 'Forms also work without JavaScript: on error, the server sends the user straight back to the faulty step.' },
          { fr: 'Fiche de stage avec référence unique, imprimable en PDF et visible par son seul auteur.', en: 'Internship sheet with a unique reference, printable to PDF and visible to its author only.' },
          { fr: 'Espace admin : tableau de bord, recherche, pagination, réponse par e-mail et export CSV compatible Excel.', en: 'Admin area: dashboard, search, pagination, email reply and Excel-friendly CSV export.' },
        ],
      },
      {
        title: { fr: 'La sécurité dès la conception', en: 'Security by design' },
        text: {
          fr: 'Chaque risque courant d’un site à formulaires a sa protection, testée.',
          en: 'Each common risk of a form-based site has its own tested protection.',
        },
        points: [
          { fr: 'Requêtes préparées PDO et échappement systématique de l’affichage, politique de sécurité du contenu stricte.', en: 'PDO prepared statements, systematic output escaping and a strict Content Security Policy.' },
          { fr: 'Jeton CSRF sur chaque envoi, champ piège anti-spam et délai minimal entre deux envois.', en: 'CSRF token on every submission, honeypot field and minimum delay between submissions.' },
          { fr: 'Connexion admin bloquée après 5 échecs, cookie de session protégé, base de données hors de la racine web.', en: 'Admin login locked after 5 failures, hardened session cookie, database outside the web root.' },
          { fr: 'Données minimales : la version de 2022 demandait un RIB, la refonte ne demande plus aucune donnée bancaire.', en: 'Minimal data: the 2022 version asked for bank details, the rebuild asks for none.' },
        ],
      },
      {
        title: { fr: 'Qualité et mise en ligne', en: 'Quality and deployment' },
        text: {
          fr: 'Le projet se lance en une commande et se vérifie tout seul à chaque modification.',
          en: 'The project starts with one command and checks itself on every change.',
        },
        points: [
          { fr: '24 tests unitaires sans dépendance : validation, règles des formulaires, accès aux données, protections.', en: '24 dependency-free unit tests: validation, form rules, data access, protections.' },
          { fr: 'CI GitHub Actions : syntaxe PHP 8.2 et 8.3, tests, contrôle HTTP de chaque page, construction et essai de l’image Docker.', en: 'GitHub Actions CI: PHP 8.2 and 8.3 syntax, tests, HTTP check of every page, Docker image build and smoke test.' },
          { fr: 'Image Docker prête pour Render, avec des données de démonstration au premier démarrage.', en: 'Docker image ready for Render, with demo data loaded on first start.' },
          { fr: 'Refonte menée avec un agent IA (Claude Code) : cadrage, revue et tests du code produit.', en: 'Rebuild carried out with an AI agent (Claude Code): scoping, reviewing and testing the produced code.' },
        ],
      },
    ],
    outcome: [
      { fr: 'Application complète et en ligne, CI verte, code et captures publiés sur GitHub.', en: 'Complete application, online, green CI, code and screenshots published on GitHub.' },
      { fr: 'Démo en ligne sur Render. Hébergement gratuit : le premier chargement peut prendre une trentaine de secondes.', en: 'Live demo on Render. Free hosting: the first load can take about thirty seconds.' },
      { fr: 'Captures réalisées avec des données fictives. Merci aux coéquipiers du groupe 12 : Emeric Tchoffo, Will Jerph Yemeufack et Fabrice Talla Teneku.', en: 'Screenshots taken with fictional data. Thanks to my group 12 teammates: Emeric Tchoffo, Will Jerph Yemeufack and Fabrice Talla Teneku.' },
    ],
    learned: {
      fr: 'Reprendre un code existant pour le rendre fiable : poser l’architecture, traiter la sécurité, puis laisser les tests et la CI garder la qualité.',
      en: 'Taking over existing code to make it reliable: set the architecture, handle security, then let tests and CI guard quality.',
    },
  },
  {
    slug: 'suivi-stock-excel',
    video: true,
    name: 'Suivi de stock Excel',
    category: 'software',
    state: 'done',
    diagram: 'suivi-stock-excel',
    summary: {
      fr: 'Classeur Excel de pilotage pour un distributeur alimentaire : stock par magasin, lots suivis jusqu’à leur date de péremption, ventes, visites en magasin et tableau de bord mis à jour automatiquement.',
      en: 'Excel management workbook for a food distributor: stock per store, batches tracked up to their expiry date, sales, store visits and an automatically updated dashboard.',
    },
    context: {
      fr: 'Projet personnel, 2026, inspiré de mon expérience dans l’import alimentaire : arrivages, rotation des stocks, dates de péremption. Données fictives.',
      en: 'Personal project, 2026, inspired by my experience in food import: deliveries, stock rotation, expiry dates. Fictional data.',
    },
    role: { fr: 'Conception et réalisation du classeur', en: 'Designed and built the workbook' },
    period: { fr: 'oct. 2026', en: 'Oct 2026' },
    stack: ['Excel', 'SOMME.SI.ENS', 'INDEX / EQUIV', 'Mise en forme conditionnelle', 'Graphiques', 'Validation des données'],
    repo: 'https://github.com/Jonathan0237/suivi-stock-excel',
    hue: 145,
    icon: 'chart',
    metrics: [
      { value: '8', label: { fr: 'feuilles reliées entre elles', en: 'linked sheets' } },
      { value: '4', label: { fr: 'graphiques mis à jour tout seuls', en: 'self-updating charts' } },
      { value: '400+', label: { fr: 'lots suivis jusqu’à leur date', en: 'batches tracked to expiry' } },
      { value: '0', label: { fr: 'erreur sur plus de 8 000 formules', en: 'errors across 8,000+ formulas' } },
    ],
    screens: [
      { src: xlDashboard, alt: { fr: 'Tableau de bord : 6 indicateurs et 4 graphiques', en: 'Dashboard: 6 KPIs and 4 charts' } },
      { src: xlAlertes, alt: { fr: 'Listes d’alerte classées automatiquement', en: 'Automatically ranked alert lists' } },
      { src: xlReceptions, alt: { fr: 'Réceptions : statut de péremption et action conseillée par lot', en: 'Deliveries: expiry status and suggested action per batch' } },
      { src: xlStock, alt: { fr: 'Stock par produit et par magasin', en: 'Stock per product and per store' } },
      { src: xlAccueil, alt: { fr: 'Accueil : mode d’emploi et légende', en: 'Home sheet: how-to and legend' } },
    ],
    challenge: {
      fr: 'Dans un commerce alimentaire, un stock mal suivi coûte deux fois : des ruptures en rayon et des produits jetés parce que leur date est dépassée. Je voulais un outil simple, sans logiciel à installer, qui dise chaque jour quoi commander, quoi retirer du rayon et quoi mettre en avant.',
      en: 'In food retail, poorly tracked stock costs twice: empty shelves and products thrown away past their date. I wanted a simple tool, with nothing to install, that says every day what to order, what to pull from the shelves and what to push.',
    },
    approach: [
      { fr: 'Un modèle de données en feuilles reliées par la référence produit : catalogue, réceptions (une ligne par lot), ventes hebdomadaires, visites en magasin et paramètres centralisés.', en: 'A data model of sheets linked by product reference: catalogue, deliveries (one row per batch), weekly sales, store visits and central settings.' },
      { fr: 'Stock restant de chaque lot calculé en « premier entré, premier sorti » avec des SOMME.SI.ENS cumulées, puis un statut de péremption (périmé, urgent, à surveiller) et une action conseillée.', en: 'Remaining stock of each batch computed first in, first out with cumulative SUMIFS, then an expiry status (expired, urgent, to watch) and a suggested action.' },
      { fr: 'Stock par magasin, statut OK / à commander / rupture, quantité à commander et couverture en semaines au rythme des ventes récentes.', en: 'Stock per store, OK / to order / out-of-stock status, quantity to order and weeks of cover at the recent sales pace.' },
      { fr: 'Tableau de bord : 6 indicateurs, 4 graphiques et des listes d’alerte classées sans tri manuel grâce à PETITE.VALEUR et INDEX + EQUIV.', en: 'Dashboard: 6 KPIs, 4 charts and alert lists ranked without manual sorting, using SMALL and INDEX + MATCH.' },
      { fr: 'Saisie fiable et lisible : listes déroulantes, contrôles de saisie, noms définis, mise en forme conditionnelle, commentaires d’en-tête.', en: 'Reliable, readable input: drop-down lists, input checks, defined names, conditional formatting, header comments.' },
    ],
    outcome: [
      { fr: 'Classeur prêt à l’emploi, recalculé à chaque saisie, sans macro.', en: 'Ready-to-use workbook, recalculated on every entry, no macros.' },
      { fr: 'Les formules clés sont expliquées pas à pas dans le dépôt GitHub.', en: 'The key formulas are explained step by step in the GitHub repository.' },
      { fr: 'Données entièrement fictives, aucun lien avec une entreprise réelle.', en: 'Entirely fictional data, no link to any real company.' },
    ],
    learned: {
      fr: 'Penser un fichier Excel comme une petite application : des données saisies une seule fois, des calculs séparés de la saisie, et une restitution qui répond aux questions du terrain.',
      en: 'Thinking of an Excel file as a small application: data entered once, calculations kept apart from input, and an output that answers real field questions.',
    },
  },
  {
    slug: 'ssoce',
    video: true,
    name: 'SSOCE',
    category: 'software',
    state: 'progress',
    diagram: 'ssoce',
    summary: {
      fr: "Suivi en temps réel de la température d'un local à partir d'un capteur, pour mieux piloter le chauffage et optimiser la consommation d'énergie.",
      en: 'Real-time monitoring of a room’s temperature from a sensor, to better control heating and optimise energy use.',
    },
    context: {
      fr: "Projet d'école puis personnel, lié à ma formation en transition énergétique à l'ECAM-EPMI.",
      en: 'School then personal project, tied to my energy-transition studies at ECAM-EPMI.',
    },
    role: { fr: 'Conception et développement (back-end et application de bureau)', en: 'Design and development (back end and desktop app)' },
    period: { fr: 'nov. 2024 — aujourd’hui', en: 'Nov 2024 — present' },
    stack: ['Java', 'Spring Boot', 'API REST', 'JavaFX', 'PostgreSQL', 'SQLite', 'IoT'],
    repo: 'https://github.com/Jonathan0237/SSOCE_Frontend',
    hue: 150,
    icon: 'chip',
    screens: [
      { src: ssMesures, alt: { fr: 'Graphique des températures en temps réel, avec moyenne, zoom et filtre par dates', en: 'Real-time temperature chart with average, zoom and date filter' } },
      { src: ssHistorique, alt: { fr: 'Historique horodaté des mesures, imprimable', en: 'Printable, time-stamped measurement history' } },
      { src: ssParametres, alt: { fr: 'Paramètres : langue, notifications, alarme', en: 'Settings: language, notifications, alarm' } },
      { src: ssProfil, alt: { fr: 'Profil utilisateur modifiable', en: 'Editable user profile' } },
      { src: ssConnexion, alt: { fr: 'Écran de connexion', en: 'Login screen' } },
    ],
    challenge: {
      fr: 'Transformer un flux brut de mesures de capteur en informations lisibles et en alertes utiles, pour savoir quand et comment agir sur la consommation.',
      en: 'Turn a raw stream of sensor readings into readable information and useful alerts, so users know when and how to act on consumption.',
    },
    approach: [
      { fr: 'Back-end Spring Boot exposant une API REST qui reçoit les relevés du capteur et les restitue, avec un filtre par période.', en: 'Spring Boot back end exposing a REST API that receives sensor readings and serves them back, with a date-range filter.' },
      { fr: 'Application de bureau JavaFX : graphique rafraîchi toutes les 10 secondes, zoom et déplacement, température moyenne, historique imprimable.', en: 'JavaFX desktop app: chart refreshed every 10 seconds, zoom and pan, average temperature, printable history.' },
      { fr: 'Alertes : analyse de tendance sur les 30 dernières mesures, notification et alarme sonore au-delà d’un seuil critique.', en: 'Alerts: trend analysis over the last 30 readings, notification and audible alarm above a critical threshold.' },
      { fr: 'Interface en cinq langues (français, anglais, allemand, italien, espagnol), profil et paramètres enregistrés localement.', en: 'Interface in five languages (French, English, German, Italian, Spanish), profile and settings stored locally.' },
      { fr: 'Fonctionnalités développées en pilotant un agent IA (Claude Code) : cadrage, revue et tests du code généré.', en: 'Features built by steering an AI agent (Claude Code): scoping, reviewing and testing the generated code.' },
    ],
    outcome: [
      { fr: 'Parcours complet fonctionnel : connexion, profil, mesures en temps réel, historique et paramètres.', en: 'Full flow working: login, profile, real-time readings, history and settings.' },
      { fr: 'Prochaines étapes : enregistrer les mesures en base côté serveur, ajouter un simulateur de capteur et sécuriser les comptes.', en: 'Next steps: persist readings server-side, add a sensor simulator and secure user accounts.' },
      { fr: 'Captures réalisées avec un capteur simulé et un compte fictif.', en: 'Screenshots taken with a simulated sensor and a fictional account.' },
    ],
  },
  {
    slug: 'jestion',
    video: true,
    name: 'Jestion',
    category: 'software',
    state: 'done',
    diagram: 'jestion',
    summary: {
      fr: 'Application de bureau pour suivre les demandes entre des demandeurs et des programmeurs : tableau de bord, gestion des utilisateurs, création, suivi et impression des demandes.',
      en: 'Desktop app to track requests between requesters and programmers: dashboard, user management, creating, tracking and printing requests.',
    },
    context: {
      fr: "Projet innovant de 2e année à l'ECAM-EPMI, en équipe de trois, présenté en soutenance le 12 juin 2024.",
      en: 'Second-year innovation project at ECAM-EPMI, team of three, presented on 12 June 2024.',
    },
    role: { fr: 'Développeur, architecture MVC et base de données', en: 'Developer, MVC architecture and database' },
    period: { fr: 'mars — juin 2024', en: 'Mar — Jun 2024' },
    stack: ['Java', 'JavaFX', 'FXML', 'SQLite', 'Maven'],
    repo: 'https://github.com/Jonathan0237/Jestion',
    hue: 260,
    icon: 'bank',
    screens: [
      { src: jeDashboard, alt: { fr: 'Tableau de bord administrateur : graphiques et dernières demandes', en: 'Admin dashboard: charts and latest requests' } },
      { src: jeRequests, alt: { fr: 'Liste des demandes, imprimable', en: 'Printable list of requests' } },
      { src: jeUsers, alt: { fr: 'Gestion des utilisateurs', en: 'User management' } },
      { src: jeNewRequest, alt: { fr: 'Création d’une demande côté utilisateur', en: 'Creating a request as a user' } },
      { src: jeConnexion, alt: { fr: 'Écran de connexion avec choix du profil', en: 'Login screen with profile choice' } },
    ],
    challenge: {
      fr: 'Concevoir en équipe, en un semestre, une application complète avec deux profils d’utilisateurs, une base de données locale et une interface claire.',
      en: 'Design, as a team and within one semester, a complete application with two user profiles, a local database and a clear interface.',
    },
    approach: [
      { fr: 'Architecture MVC : modèles, vues FXML et contrôleurs séparés pour l’espace administrateur et l’espace utilisateur.', en: 'MVC architecture: models, FXML views and controllers split between the admin and user areas.' },
      { fr: 'Base SQLite pour les utilisateurs et les demandes, avec une couche d’accès aux données dédiée.', en: 'SQLite database for users and requests, with a dedicated data-access layer.' },
      { fr: 'Côté administrateur : tableau de bord, création et suppression d’utilisateurs, liste de toutes les demandes, recherche par e-mail. Côté utilisateur : créer une demande, la suivre, l’imprimer.', en: 'Admin side: dashboard, creating and deleting users, list of all requests, search by email. User side: create a request, track it, print it.' },
    ],
    outcome: [
      { fr: 'Application présentée et validée en soutenance.', en: 'Application presented and approved at the final review.' },
      { fr: 'Captures réalisées avec une base de démonstration aux données fictives.', en: 'Screenshots taken with a demo database filled with fictional data.' },
    ],
  },
  {
    slug: 'gestion-de-stock',
    name: 'Gestion de stock',
    category: 'software',
    state: 'done',
    summary: {
      fr: 'Application Java de gestion de stock : interfaces, corrections et optimisation des fonctionnalités.',
      en: 'Java inventory management app: interfaces, bug fixes and feature optimisation.',
    },
    context: {
      fr: 'Projet d’école en classes préparatoires, Douala.',
      en: 'School project during preparatory classes, Douala.',
    },
    role: { fr: 'Développement des interfaces et corrections', en: 'Interface development and bug fixing' },
    period: { fr: 'sept. 2021 — fév. 2022', en: 'Sep 2021 — Feb 2022' },
    stack: ['Java', 'JavaFX', 'XML'],
    hue: 40,
    icon: 'box',
    challenge: {
      fr: 'Suivre les entrées et sorties de produits de façon fiable et simple pour l’utilisateur.',
      en: 'Track product inflows and outflows reliably and simply for the user.',
    },
    approach: [
      { fr: 'Développement des interfaces JavaFX et prise en compte de la charte graphique et de l’ergonomie.', en: 'Built the JavaFX interfaces, following the visual guidelines and usability.' },
      { fr: 'Analyse et exploitation des données de stock.', en: 'Analysis and use of inventory data.' },
      { fr: 'Corrections des anomalies remontées et optimisation des fonctionnalités.', en: 'Fixed reported bugs and optimised features.' },
    ],
    outcome: [{ fr: 'Application livrée en fin de projet.', en: 'Application delivered at the end of the project.' }],
  },
  {
    slug: 'incubateur',
    video: true,
    name: 'Incubateur à œufs connecté',
    category: 'engineering',
    state: 'prototype',
    diagram: 'incubateur',
    summary: {
      fr: 'Étude et conception d’un incubateur à œufs de volaille régulé par Arduino.',
      en: 'Study and design of an Arduino-controlled poultry egg incubator.',
    },
    context: { fr: 'Projet d’école, ECAM-EPMI.', en: 'School project, ECAM-EPMI.' },
    role: { fr: 'Étude des données, maquette et programmation', en: 'Data study, mock-up and programming' },
    period: { fr: '2022 — 2023', en: '2022 — 2023' },
    stack: ['Arduino', 'C++', 'Capteurs', 'AutoCAD'],
    hue: 330,
    icon: 'egg',
    challenge: {
      fr: 'Maintenir température et humidité dans une plage étroite pendant toute la durée d’incubation.',
      en: 'Keep temperature and humidity within a narrow range throughout incubation.',
    },
    approach: [
      { fr: 'Étude des conditions d’incubation et choix des capteurs.', en: 'Studied incubation conditions and chose the sensors.' },
      { fr: 'Maquette réalisée sous AutoCAD.', en: 'Mock-up designed in AutoCAD.' },
      { fr: 'Programmation de la régulation sur Arduino.', en: 'Programmed the control loop on Arduino.' },
    ],
    outcome: [{ fr: 'Prototype conçu et présenté.', en: 'Prototype designed and presented.' }],
  },
];

/** Missions menées en alternance : détaillées depuis le parcours, pas mélangées aux projets. */
export const missions: Project[] = [
  {
    slug: 'enedis',
    name: 'Enedis · Intégration et test système',
    category: 'software',
    state: 'done',
    summary: {
      fr: 'Un an au sein de la Direction Technique d’Enedis, sur un programme de modernisation du contrôle-commande des postes électriques, côté intégration et test système.',
      en: 'One year in Enedis’s Technical Department, on a programme modernising the control systems of electrical substations, on the system integration and test side.',
    },
    context: {
      fr: 'Enedis (groupe EDF) gère le réseau public de distribution d’électricité en France. Le programme vise à faire évoluer les équipements des postes électriques vers des solutions virtualisées et normalisées.',
      en: 'Enedis (EDF group) runs the public power distribution grid in France. The programme moves substation equipment towards virtualised, standardised solutions.',
    },
    role: { fr: 'Ingénieur DevOps test système, en alternance', en: 'DevOps system test engineer, work-study' },
    period: { fr: 'sept. 2025 — sept. 2026', en: 'Sep 2025 — Sep 2026' },
    stack: ['IEC 61850', 'Intégration système', 'Test et qualification', 'Virtualisation', 'Python', 'GitLab'],
    hue: 200,
    icon: 'bolt',
    visuals: [
      {
        src: enedisPhoto,
        alt: { fr: 'Enedis, gestionnaire du réseau public de distribution d’électricité.', en: 'Enedis, operator of the French public power distribution grid.' },
      },
    ],
    challenge: {
      fr: 'Contribuer à vérifier que des équipements de plusieurs fournisseurs respectent les exigences d’Enedis et la norme IEC 61850, dans un programme encore jeune où la méthode se construisait en même temps que les essais.',
      en: 'Help check that equipment from several vendors meets Enedis requirements and the IEC 61850 standard, in a young programme where the method was being built alongside the tests.',
    },
    themes: [
      { icon: 'target', title: { fr: 'Intégration et qualification', en: 'Integration and qualification' }, text: { fr: 'Participation aux campagnes de tests des équipements fournisseurs et à l’analyse des écarts.', en: 'Took part in vendor equipment test campaigns and in deviation analysis.' } },
      { icon: 'server', title: { fr: 'Plateforme de test', en: 'Test platform' }, text: { fr: 'Contribution à la mise en place et à l’outillage de la plateforme d’essais.', en: 'Helped set up and tool the test platform.' } },
      { icon: 'code', title: { fr: 'Outillage', en: 'Tooling' }, text: { fr: 'Développement de petits outils en Python pour faciliter les vérifications.', en: 'Built small Python tools to make checks easier.' } },
      { icon: 'book', title: { fr: 'Pratiques d’équipe', en: 'Team practices' }, text: { fr: 'Versionnement et documentation partagés au sein de l’équipe.', en: 'Shared versioning and documentation within the team.' } },
    ],
    learned: {
      fr: 'Travailler sur un grand programme industriel, au contact d’experts et de fournisseurs, et comprendre comment se structure le test système. Cette expérience a aussi nourri mon mémoire de recherche de Mastère.',
      en: 'Working on a large industrial programme alongside experts and vendors, and understanding how system testing takes shape. This experience also fed my post-master’s research thesis.',
    },
  },
  {
    slug: 'alfa-laval',
    name: 'Alfa Laval · Évolution d’un logiciel métier',
    category: 'software',
    state: 'done',
    summary: {
      fr: 'Deux ans d’alternance chez Alfa Laval Packinox, à aider à faire évoluer un logiciel métier Java utilisé au sein du groupe pour concevoir des échangeurs thermiques.',
      en: 'Two years of work-study at Alfa Laval Packinox, helping evolve a Java business application used across the group to design heat exchangers.',
    },
    context: {
      fr: 'Alfa Laval Packinox conçoit et fabrique de grands échangeurs thermiques à plaques soudées pour l’industrie, notamment la pétrochimie et la transition énergétique.',
      en: 'Alfa Laval Packinox designs and builds large welded-plate heat exchangers for industry, notably petrochemicals and the energy transition.',
    },
    role: { fr: 'Apprenti ingénieur développement, 2 ans', en: 'Software engineering apprentice, 2 years' },
    period: { fr: 'sept. 2023 — août 2025', en: 'Sep 2023 — Aug 2025' },
    stack: ['Java', 'JavaFX', 'Spring Boot', 'API REST', 'Git'],
    hue: 22,
    icon: 'flame',
    visuals: [
      {
        src: alPackinox,
        alt: {
          fr: 'Un échangeur Packinox, à côté d’une silhouette humaine pour l’échelle.',
          en: 'A Packinox heat exchanger, next to a human silhouette for scale.',
        },
        credit: 'Visuel Alfa Laval',
      },
      {
        src: alHypercut,
        alt: {
          fr: 'Une plaque d’échangeur et le trajet des fluides chaud et froid.',
          en: 'An exchanger plate and the path of hot and cold fluids.',
        },
        credit: 'Visuel Alfa Laval',
      },
    ],
    challenge: {
      fr: 'Faire évoluer un logiciel métier ancien, utilisé au sein du groupe, sans perturber le travail des ingénieurs, en simplifiant leurs processus.',
      en: 'Evolve a long-standing business application used across the group, without disrupting engineers’ work, while simplifying their processes.',
    },
    themes: [
      { icon: 'sparkles', title: { fr: 'Nouvelles fonctionnalités', en: 'New features' }, text: { fr: 'Conception et développement de fonctionnalités avec les ingénieurs, du cahier des charges à la mise en service.', en: 'Designed and built features with engineers, from specification to rollout.' } },
      { icon: 'plug', title: { fr: 'Mise en place des API REST', en: 'Setting up REST APIs' }, text: { fr: 'Participation aux premières étapes : recherches, fonctionnement des échanges et premières briques de la connexion.', en: 'Took part in the first steps: research, how the exchanges work and the first building blocks of the connection.' } },
      { icon: 'database', title: { fr: 'Données métier', en: 'Business data' }, text: { fr: 'Évolution de la structure des données pour la partager entre outils.', en: 'Evolved the data structure so it can be shared between tools.' } },
      { icon: 'users', title: { fr: 'Travail avec les métiers', en: 'Working with engineers' }, text: { fr: 'Méthode agile, revues de code et démonstrations régulières aux équipes.', en: 'Agile method, code reviews and regular demos to the teams.' } },
    ],
    learned: {
      fr: 'Comprendre un code existant avant de le modifier, viser zéro régression, et traduire un besoin métier en solution logicielle avec les utilisateurs.',
      en: 'Understanding existing code before changing it, aiming for zero regressions, and turning a business need into software with its users.',
    },
  },
];

export const projectName = (p: Project, lang: 'fr' | 'en') => names[p.slug]?.[lang] ?? p.name;

const names: Record<string, L> = {
  enedis: { fr: 'Enedis · Intégration et test système', en: 'Enedis · System integration and test' },
  'alfa-laval': { fr: 'Alfa Laval · Évolution d’un logiciel métier', en: 'Alfa Laval · Evolving a business application' },
  'gestion-de-stock': { fr: 'Gestion de stock', en: 'Inventory management' },
  'pole-it': { fr: 'Pôle IT · ECAM-EPMI', en: 'IT department · ECAM-EPMI' },
  'suivi-stock-excel': { fr: 'Suivi de stock Excel', en: 'Excel stock tracker' },
  incubateur: { fr: 'Incubateur à œufs connecté', en: 'Connected egg incubator' },
};
