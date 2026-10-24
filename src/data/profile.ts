import type { ImageMetadata } from 'astro';
import type { L } from '../i18n';

import ecamPhoto from '../assets/photos/ecam-ceremonie.jpg';
import sialPhoto from '../assets/photos/sial.jpg';
import enedisPhoto from '../assets/companies/enedis.jpg';
import alfaLavalLogo from '../assets/companies/alfa-laval-logo.png';
import packinoxPhoto from '../assets/projects/alfa-laval/packinox.jpg';
import imtCampus from '../assets/campus/imt-campus.jpg';
import imtBatiment from '../assets/campus/imt-batiment.jpg';
import ecamCampus from '../assets/campus/ecam-campus.jpg';
import ecamBatiment from '../assets/campus/ecam-batiment.jpg';
import cyCampus from '../assets/campus/cy-campus.jpg';
import cyPelouse from '../assets/campus/cy-pelouse.jpg';
import iucCampus from '../assets/campus/iuc-campus.jpg';

export const profile = {
  name: 'Jonathan Simo Kuate',
  firstName: 'Jonathan',
  title: { fr: 'Ingénieur Systèmes & DevOps', en: 'Systems & DevOps Engineer' } as L,
  roles: [
    { fr: 'Ingénieur Systèmes & DevOps', en: 'Systems & DevOps Engineer' },
    { fr: 'Intégration & validation système', en: 'System integration & validation' },
    { fr: 'Conseil en systèmes d’information', en: 'Information systems consulting' },
    { fr: 'CI/CD · Docker · Cloud', en: 'CI/CD · Docker · Cloud' },
    { fr: 'Développement Java & Python', en: 'Java & Python development' },
  ] as L[],
  tagline: {
    fr: "J'intègre les systèmes, je fiabilise les logiciels et j'accompagne les projets en environnement industriel, de l'analyse du besoin jusqu'à la mise en production.",
    en: 'I integrate systems, make software reliable and support projects in industrial environments, from requirements analysis all the way to production.',
  } as L,
  availability: {
    fr: 'Disponible immédiatement · CDI partout en France',
    en: 'Available now · Permanent roles across France',
  } as L,
  location: { fr: 'Île-de-France · mobile partout en France · permis B', en: 'Paris area · open to relocation in France · driving licence (B)' } as L,
  email: 'simojonathan02@gmail.com',
  phone: '+33 6 16 50 88 14',
  phoneHref: 'tel:+33616508814',
  linkedin: 'https://www.linkedin.com/in/jonathan-simo-511322264',
  github: 'https://github.com/Jonathan0237',
  cv: '/cv/Jonathan_Simo_Kuate_CV.pdf',
  about: [
    {
      fr: "Ingénieur diplômé de l'ECAM-EPMI (titre CTI) et du Mastère Spécialisé Conseil et Management en Système d'Information de l'IMT Business School, j'ai passé trois ans en alternance dans deux grands groupes industriels.",
      en: "I graduated as an engineer from ECAM-EPMI (CTI-accredited) and hold a post-master's degree in IS Consulting and Management from IMT Business School, after three years of work-study in two major industrial groups.",
    },
    {
      fr: "Chez Enedis (groupe EDF), j'ai contribué à l'intégration et à la qualification du contrôle-commande virtualisé des postes électriques, sous la norme IEC 61850. Chez Alfa Laval, j'ai aidé à faire évoluer un logiciel métier Java utilisé au sein du groupe, et participé à la mise en place de ses API REST, des premières recherches aux premières briques.",
      en: 'At Enedis (EDF group), I helped integrate and qualify the virtualised control systems of electrical substations, under the IEC 61850 standard. At Alfa Laval, I helped evolve a Java business application used across the group, and took part in setting up its REST APIs, from the initial research to the first building blocks.',
    },
    {
      fr: "Je suis aujourd'hui à la recherche de nouvelles opportunités et disponible immédiatement. En parallèle, je construis JHouns, une application web pour trouver des partenaires de sport, qui me sert de terrain d'apprentissage DevOps. J'aime les systèmes qui marchent, et comprendre pourquoi ils marchent.",
      en: "I'm now looking for new opportunities and can start immediately. Meanwhile, I'm building JHouns, a web app to find sports partners, which doubles as my DevOps playground. I like systems that work, and understanding why they work.",
    },
  ] as L[],
  stats: [
    { value: 3, suffix: '', label: { fr: "ans d'alternance en industrie", en: 'years of industrial work-study' } },
    { value: 5, suffix: '', label: { fr: 'expériences en entreprise', en: 'professional experiences' } },
    { value: 6, suffix: '', label: { fr: 'projets personnels et d’école', en: 'personal and school projects' } },
    { value: 6, prefix: 'Bac+', suffix: '', label: { fr: 'Ingénieur CTI + Mastère Spécialisé', en: 'MEng + post-master degree' } },
  ] as { value: number; prefix?: string; suffix: string; label: L }[],
};

/** Période au format AAAA-MM ; sans fin = en cours. Sert à la vue d'ensemble en barres. */
export type Span = { start: string; end?: string };

/** Facettes pour lire le parcours sous un angle. */
export const facets: { key: string; label: L }[] = [
  { key: 'systemes', label: { fr: 'Systèmes & test', en: 'Systems & testing' } },
  { key: 'dev', label: { fr: 'Développement', en: 'Development' } },
  { key: 'client', label: { fr: 'Relation client', en: 'Customer relations' } },
  { key: 'orga', label: { fr: 'Gestion & organisation', en: 'Operations & organisation' } },
];

export type Experience = {
  role: L;
  /** Intitulé court pour la vue d'ensemble. */
  short: L;
  kind: 'alternance' | 'job';
  span: Span;
  facets: string[];
  company: string;
  initials: string;
  hue: number;
  url?: string;
  place: L;
  period: L;
  type: L;
  current?: boolean;
  /** Slug de la page qui détaille la mission (diagrammes, résultats). */
  mission?: string;
  /** Visuels à côté de l'expérience : photo, courte vidéo, logo ou panneau graphique. */
  media?: {
    photo?: ImageMetadata;
    /** Format d'affichage de la photo (4 / 5 par défaut). */
    ratio?: string;
    video?: { src: string; poster: string };
    logo?: ImageMetadata;
    /** Panneau dessiné quand aucune photo libre de droits n'existe. */
    panel?: { title: string; sub: L; badge?: L; icons: string[] };
    caption: L;
    icon?: string;
  };
  /** Missions clés, affichées en bulles avec une icône. */
  bubbles: { icon: string; label: L }[];
  summary: L;
  points: L[];
  details?: L[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: { fr: 'Consultant', en: 'Consultant' },
    short: { fr: 'Consultant', en: 'Consultant' },
    kind: 'job',
    span: { start: '2026-09', end: '2026-10' },
    facets: ['client', 'orga'],
    company: "Bazar N'Guélé International",
    initials: 'BN',
    hue: 32,
    place: { fr: 'Paris · import-export', en: 'Paris · import-export' },
    period: { fr: 'sept. 2026 — oct. 2026', en: 'Sep 2026 — Oct 2026' },
    type: { fr: 'Mission de conseil', en: 'Consulting assignment' },
    summary: {
      fr: "Mission de conseil pour une société d'import-export dont les clients comptent des enseignes de la grande distribution.",
      en: 'Consulting assignment for an import-export company whose customers include major retail chains.',
    },
    bubbles: [
      { icon: 'database', label: { fr: 'Données de commandes', en: 'Order data' } },
      { icon: 'chart', label: { fr: 'Analyse de l’activité', en: 'Activity analysis' } },
      { icon: 'truck', label: { fr: 'Suivi des commandes', en: 'Order tracking' } },
      { icon: 'globe', label: { fr: 'SIAL Paris 2026', en: 'SIAL Paris 2026' } },
    ],
    points: [
      {
        fr: 'Collecte, structuration et analyse des données de commandes pour suivre l’activité commerciale.',
        en: 'Collecting, structuring and analysing order data to track sales activity.',
      },
      {
        fr: 'Suivi des commandes des clients de la grande distribution, dont Carrefour et Auchan.',
        en: 'Tracking orders from major retail customers, including Carrefour and Auchan.',
      },
      {
        fr: 'Représentation de l’entreprise au SIAL Paris 2026 : présentation de la société et de son offre, échanges avec les professionnels du secteur.',
        en: 'Represented the company at SIAL Paris 2026: presenting the company and its offer, meeting industry professionals.',
      },
    ],
    media: {
      photo: sialPhoto,
      video: { src: '/media/sial-villepinte.mp4', poster: '/media/sial-villepinte.jpg' },
      caption: { fr: 'Au SIAL Paris 2026, Paris-Nord Villepinte', en: 'At SIAL Paris 2026, Paris-Nord Villepinte' },
    },
    tags: ['Données de commandes', 'Suivi des commandes', 'Grande distribution', 'Import-export'],
  },
  {
    role: { fr: 'Ingénieur DevOps Test Système', en: 'DevOps System Test Engineer' },
    short: { fr: 'Ingénieur DevOps test système', en: 'DevOps system test engineer' },
    kind: 'alternance',
    span: { start: '2025-09', end: '2026-09' },
    facets: ['systemes', 'dev'],
    company: 'Enedis',
    initials: 'E',
    hue: 205,
    url: 'https://www.enedis.fr/',
    place: { fr: 'Courbevoie · Direction Technique', en: 'Courbevoie · Technical Department' },
    period: { fr: 'sept. 2025 — sept. 2026', en: 'Sep 2025 — Sep 2026' },
    type: { fr: 'Alternance · 12 mois', en: 'Work-study · 12 months' },
    summary: {
      fr: 'Au sein de la Direction Technique, j’ai participé à la mise en place de la nouvelle génération de contrôle-commande des postes électriques, au sein du lot intégration et test système.',
      en: 'In the Technical Department, I took part in rolling out the new generation of substation control systems, within the system integration and test work package.',
    },
    bubbles: [
      { icon: 'bolt', label: { fr: 'IEC 61850', en: 'IEC 61850' } },
      { icon: 'server', label: { fr: 'Contrôle-commande virtualisé', en: 'Virtualised control' } },
      { icon: 'globe', label: { fr: 'Réseaux et switchs', en: 'Networks & switches' } },
      { icon: 'target', label: { fr: 'Test et qualification', en: 'Test and qualification' } },
      { icon: 'code', label: { fr: 'Outillage Python', en: 'Python tooling' } },
      { icon: 'book', label: { fr: 'Documentation', en: 'Documentation' } },
    ],
    media: {
      photo: enedisPhoto,
      ratio: '1 / 1',
      caption: { fr: 'Enedis, gestionnaire du réseau public de distribution d’électricité', en: 'Enedis, operator of the French public power distribution grid' },
      icon: 'bolt',
    },
    points: [
      {
        fr: 'Intégration et qualification d’équipements de contrôle-commande de plusieurs fournisseurs, au regard de la norme IEC 61850.',
        en: 'Integration and qualification of control equipment from several vendors, against the IEC 61850 standard.',
      },
      {
        fr: 'Contribution à la plateforme de test et à son outillage.',
        en: 'Contributed to the test platform and its tooling.',
      },
      {
        fr: 'Mise en œuvre des réseaux de communication de la plateforme : routeurs, switchs, process bus, réseaux d’exploitation et d’administration.',
        en: 'Worked on the platform’s communication networks: routers, switches, process bus, operations and administration networks.',
      },
      {
        fr: 'Partage des pratiques dans l’équipe : versionnement et documentation.',
        en: 'Shared practices within the team: versioning and documentation.',
      },
    ],
    mission: 'enedis',
    tags: ['IEC 61850', 'Intégration système', 'Test système', 'Virtualisation', 'Python', 'GitLab'],
  },
  {
    role: { fr: 'Ingénieur développement logiciel', en: 'Software Development Engineer' },
    short: { fr: 'Ingénieur développement logiciel', en: 'Software development engineer' },
    kind: 'alternance',
    span: { start: '2023-09', end: '2025-08' },
    facets: ['dev'],
    company: 'Alfa Laval Packinox',
    initials: 'AL',
    hue: 18,
    url: 'https://www.alfalaval.fr/',
    place: { fr: 'Chalon-sur-Saône', en: 'Chalon-sur-Saône' },
    period: { fr: 'sept. 2023 — août 2025', en: 'Sep 2023 — Aug 2025' },
    type: { fr: 'Alternance · 24 mois', en: 'Work-study · 24 months' },
    summary: {
      fr: 'Alfa Laval Packinox conçoit de grands échangeurs thermiques pour l’industrie. J’ai aidé à faire évoluer un logiciel métier Java utilisé au sein du groupe.',
      en: 'Alfa Laval Packinox designs large heat exchangers for industry. I helped evolve a Java business application used across the group.',
    },
    bubbles: [
      { icon: 'code', label: { fr: 'Java · JavaFX', en: 'Java · JavaFX' } },
      { icon: 'plug', label: { fr: 'API REST', en: 'REST API' } },
      { icon: 'flame', label: { fr: 'Échangeurs thermiques', en: 'Heat exchangers' } },
      { icon: 'database', label: { fr: 'Données métier', en: 'Business data' } },
      { icon: 'users', label: { fr: 'Démos aux métiers', en: 'Demos to engineers' } },
    ],
    media: {
      photo: packinoxPhoto,
      ratio: '4 / 3',
      logo: alfaLavalLogo,
      caption: { fr: 'Échangeur Packinox · visuel Alfa Laval', en: 'Packinox heat exchanger · Alfa Laval visual' },
      icon: 'flame',
    },
    points: [
      {
        fr: 'Nouvelles fonctionnalités conçues avec les ingénieurs, du cahier des charges à la mise en service.',
        en: 'New features designed with engineers, from specification to rollout.',
      },
      {
        fr: 'Participation à la mise en place d’API REST : premières recherches, fonctionnement des échanges et premières briques.',
        en: 'Took part in setting up REST APIs: initial research, how the exchanges work and the first building blocks.',
      },
      {
        fr: 'Travail sur un code existant de longue date, avec un objectif zéro régression.',
        en: 'Worked on long-standing existing code, aiming for zero regressions.',
      },
    ],
    mission: 'alfa-laval',
    tags: ['Java', 'JavaFX', 'Spring Boot', 'API REST', 'Git'],
  },
  {
    role: { fr: 'Conseiller de vente · outils numériques & stock', en: 'Sales Associate · Digital Tools & Stock' },
    short: { fr: 'Conseiller de vente', en: 'Sales associate' },
    kind: 'job',
    span: { start: '2023-07', end: '2023-09' },
    facets: ['client', 'orga'],
    company: 'Lacoste',
    initials: 'LC',
    hue: 145,
    place: { fr: 'Beaugrenelle, Paris 15e · mission Adecco', en: 'Beaugrenelle, Paris · via Adecco' },
    period: { fr: 'juil. — sept. 2023', en: 'Jul — Sep 2023' },
    type: { fr: 'Intérim via Adecco · 3 mois', en: 'Temp via Adecco · 3 months' },
    summary: {
      fr: 'Mission d’intérim pour Adecco dans la boutique Lacoste du centre Beaugrenelle, en pleine saison des soldes : les outils informatiques du magasin au cœur du travail quotidien, au service du client.',
      en: 'Temp assignment through Adecco at the Lacoste store in the Beaugrenelle centre, during the sales season: the store’s IT tools at the heart of daily work, in service of customers.',
    },
    bubbles: [
      { icon: 'monitor', label: { fr: 'Outils de gestion du magasin', en: 'Store management tools' } },
      { icon: 'database', label: { fr: 'Stocks informatisés', en: 'Digital stock tracking' } },
      { icon: 'box', label: { fr: 'Inventaires', en: 'Inventories' } },
      { icon: 'heart', label: { fr: 'Relation client', en: 'Customer care' } },
      { icon: 'globe', label: { fr: 'Clientèle internationale', en: 'International customers' } },
    ],
    points: [
      {
        fr: 'Utilisation quotidienne des outils informatiques du magasin : consultation des stocks en temps réel, recherche d’un article, d’une taille ou d’une couleur pour un client.',
        en: 'Daily use of the store’s IT tools: checking stock in real time, finding an item, size or colour for a customer.',
      },
      {
        fr: 'Suivi informatisé des stocks : enregistrement des livraisons, contrôle des quantités et participation aux inventaires.',
        en: 'Digital stock tracking: recording deliveries, checking quantities and taking part in inventories.',
      },
      {
        fr: 'Accueil, écoute et conseil d’une clientèle internationale, en français et en anglais, jusqu’à la vente.',
        en: 'Welcoming, listening to and advising international customers, in French and English, through to the sale.',
      },
      {
        fr: 'Travail en équipe en période de forte affluence, avec sens du service et de l’organisation.',
        en: 'Teamwork during peak periods, with a strong sense of service and organisation.',
      },
    ],
    media: {
      panel: {
        title: 'Lacoste',
        sub: { fr: 'Centre Beaugrenelle · Paris 15e', en: 'Beaugrenelle centre · Paris' },
        badge: { fr: 'Mission Adecco', en: 'Through Adecco' },
        icons: ['monitor', 'box', 'heart', 'users'],
      },
      caption: { fr: 'Boutique du centre Beaugrenelle, Paris 15e', en: 'Store in the Beaugrenelle centre, Paris' },
    },
    tags: ['Outils de gestion', 'Suivi des stocks', 'Inventaires', 'Relation client', 'Anglais'],
  },
  {
    role: { fr: 'Assistant informatique & bureautique', en: 'IT & Office Assistant' },
    short: { fr: 'Assistant informatique · stage', en: 'IT assistant · internship' },
    kind: 'job',
    span: { start: '2022-06', end: '2022-08' },
    facets: ['orga'],
    company: 'Hôpital de District de la Cité des Palmiers',
    initials: 'H',
    hue: 0,
    place: { fr: 'Douala, Cameroun', en: 'Douala, Cameroon' },
    period: { fr: 'juin — août 2022', en: 'Jun — Aug 2022' },
    type: { fr: 'Stage · 3 mois', en: 'Internship · 3 months' },
    summary: {
      fr: 'Premier stage en informatique, dans un hôpital de district de Douala : assistance aux utilisateurs et outils bureautiques au quotidien.',
      en: 'First IT internship, in a district hospital in Douala: user support and everyday office tools.',
    },
    bubbles: [
      { icon: 'users', label: { fr: 'Support utilisateurs', en: 'User support' } },
      { icon: 'monitor', label: { fr: 'Postes de travail', en: 'Workstations' } },
      { icon: 'chart', label: { fr: 'Tableaux Excel', en: 'Excel spreadsheets' } },
      { icon: 'file', label: { fr: 'Suite Microsoft Office', en: 'Microsoft Office' } },
    ],
    points: [
      {
        fr: 'Assistance aux utilisateurs : prise en main des postes de travail et des logiciels du quotidien, aide à la résolution des problèmes courants.',
        en: 'User support: helping staff with their workstations and everyday software, and with common issues.',
      },
      {
        fr: 'Création de tableaux de suivi sous Excel et de documents sous Word et PowerPoint pour les services.',
        en: 'Built Excel tracking sheets and Word and PowerPoint documents for the departments.',
      },
      {
        fr: 'Rédaction de rapports et de comptes rendus pour les services de l’hôpital.',
        en: 'Writing reports and minutes for hospital departments.',
      },
    ],
    media: {
      panel: {
        title: 'Douala',
        sub: { fr: 'Hôpital de District de la Cité des Palmiers', en: 'Cité des Palmiers District Hospital' },
        badge: { fr: 'Premier stage', en: 'First internship' },
        icons: ['monitor', 'file', 'chart', 'heart'],
      },
      caption: { fr: 'Douala, Cameroun', en: 'Douala, Cameroon' },
    },
    tags: ['Support utilisateurs', 'Postes de travail', 'Microsoft Office', 'Excel', 'Documentation'],
  },
];

export type Education = {
  /** Intitulé court pour la vue d'ensemble. */
  short: L;
  span: Span;
  school: string;
  url?: string;
  degree: L;
  period: string;
  place: L;
  detail: L;
  learned: L[];
  /** Diplôme ou attestation en ligne ; absent tant qu'il n'est pas disponible. */
  diploma?: { href: string; thumb: ImageMetadata; kind: 'diploma' | 'attestation' };
  /** Distinction mise en avant sur la carte (grade, mention). */
  highlight?: L;
  /** Photos en fond de l'en-tête de carte (remise de diplôme, campus), en fondu enchaîné. */
  photos?: ImageMetadata[];
  initials: string;
  hue: number;
};

export const education: Education[] = [
  {
    school: 'IMT Business School',
    short: { fr: 'Mastère Spécialisé CMSI', en: 'Post-master’s CMSI' },
    span: { start: '2025-09', end: '2026-09' },
    url: 'https://executive-education.imt-bs.eu/formation/ms-conseil-et-management-en-systemes-dinformation/',
    degree: { fr: 'Mastère Spécialisé CMSI', en: "Post-master's in IS Consulting & Management" },
    period: '2025 — 2026',
    place: { fr: 'Paris', en: 'Paris' },
    detail: {
      fr: 'Conseil et Management en Système d’Information, en alternance avec Enedis. Mémoire de recherche sur la structuration des pratiques de test système dans un projet industriel.',
      en: 'Information Systems Consulting and Management, work-study with Enedis. Research thesis on how system-testing practices take shape in an industrial project.',
    },
    learned: [
      { fr: 'Gestion de projet SI', en: 'IT project management' },
      { fr: 'Conseil et audit', en: 'Consulting & audit' },
      { fr: 'Stratégie et gouvernance des SI', en: 'IS strategy & governance' },
    ],
    highlight: { fr: 'Diplômé · jury du 8 octobre 2026', en: 'Graduated · jury of 8 October 2026' },
    photos: [imtCampus, imtBatiment],
    initials: 'IMT',
    hue: 280,
  },
  {
    school: 'ECAM-EPMI',
    short: { fr: 'Diplôme d’ingénieur', en: 'Engineering degree' },
    span: { start: '2022-09', end: '2025-08' },
    url: 'https://www.ecam-epmi.fr/',
    degree: { fr: "Diplôme d'ingénieur (CTI)", en: 'Master of Engineering (CTI)' },
    period: '2022 — 2025',
    place: { fr: 'Cergy', en: 'Cergy, France' },
    detail: {
      fr: 'Transition énergétique et transformation numérique, en alternance avec Alfa Laval.',
      en: 'Energy transition and digital transformation, work-study with Alfa Laval.',
    },
    learned: [
      { fr: 'Énergétique et efficacité énergétique', en: 'Energy & energy efficiency' },
      { fr: 'Data, IoT et capteurs', en: 'Data, IoT & sensors' },
      { fr: 'Développement logiciel', en: 'Software development' },
    ],
    highlight: { fr: 'Grade de master', en: "Master's degree level" },
    photos: [ecamPhoto, ecamCampus, ecamBatiment],
    initials: 'ECAM',
    hue: 170,
  },
  {
    school: 'CY Cergy Paris Université',
    short: { fr: 'Licence EEA', en: 'Bachelor’s EEA' },
    span: { start: '2022-09', end: '2023-06' },
    url: 'https://www.cyu.fr/',
    degree: { fr: 'Licence Électronique, Énergie électrique, Automatique', en: "Bachelor's in Electronics, Electrical Energy & Automation" },
    period: '2022 — 2023',
    place: { fr: 'Cergy', en: 'Cergy, France' },
    detail: {
      fr: 'Licence Sciences, Technologies, Santé (EEA) à CY Sup, l’école universitaire des premiers cycles.',
      en: 'Science, Technology & Health bachelor (EEA) at CY Sup, the university’s undergraduate school.',
    },
    learned: [
      { fr: 'Électronique de puissance', en: 'Power electronics' },
      { fr: 'Systèmes électriques', en: 'Electrical systems' },
      { fr: 'Microcontrôleurs', en: 'Microcontrollers' },
    ],
    highlight: { fr: 'Mention Assez Bien', en: 'Passed with merit' },
    photos: [cyCampus, cyPelouse],
    initials: 'CY',
    hue: 210,
  },
  {
    school: 'Institut Universitaire de la Côte',
    short: { fr: 'Classes préparatoires', en: 'Preparatory classes' },
    span: { start: '2020-09', end: '2022-06' },
    degree: { fr: 'Classes préparatoires scientifiques', en: 'Science preparatory classes' },
    period: '2020 — 2022',
    place: { fr: 'Douala, Cameroun', en: 'Douala, Cameroon' },
    detail: {
      fr: 'Deux années intensives qui m’ont donné des bases solides en sciences.',
      en: 'Two intensive years that gave me solid foundations in science.',
    },
    learned: [
      { fr: 'Mathématiques', en: 'Mathematics' },
      { fr: 'Physique', en: 'Physics' },
      { fr: 'Sciences de l’ingénieur', en: 'Engineering sciences' },
    ],
    photos: [iucCampus],
    initials: 'IUC',
    hue: 45,
  },
];

export type SkillDomain = {
  icon: string;
  title: L;
  desc: L;
  items: string[];
  usedAt: string[];
  hue: number;
};

export const skillDomains: SkillDomain[] = [
  {
    icon: 'target',
    title: { fr: 'Ingénierie système', en: 'Systems engineering' },
    desc: {
      fr: 'Du besoin à la validation : je traduis une demande en exigences testables.',
      en: 'From needs to validation: I turn a request into testable requirements.',
    },
    items: ['Analyse du besoin', 'Exigences', 'Spécifications fonctionnelles', 'Architecture fonctionnelle', 'Stratégie de vérification', 'Évaluation fournisseurs'],
    usedAt: ['Enedis', 'Alfa Laval'],
    hue: 170,
  },
  {
    icon: 'flask',
    title: { fr: 'Tests & qualification', en: 'Testing & qualification' },
    desc: {
      fr: 'Des campagnes de test reproductibles et automatisées, et l’analyse des écarts.',
      en: 'Repeatable, automated test campaigns and deviation analysis.',
    },
    items: ['Tests automatisés', 'Cahiers de test', 'Qualification', 'Tests de conformité', 'IEC 61850', 'IED', 'Postman'],
    usedAt: ['Enedis', 'JHouns'],
    hue: 200,
  },
  {
    icon: 'infinity',
    title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' },
    desc: {
      fr: 'Conteneuriser, automatiser les builds et livrer en continu.',
      en: 'Containerise, automate builds and ship continuously.',
    },
    items: ['Docker', 'Docker Compose', 'GitLab CI/CD', 'GitHub Actions', 'Kubernetes', 'Ansible', 'AWS', 'Azure'],
    usedAt: ['Enedis', 'JHouns', 'SSOCE'],
    hue: 250,
  },
  {
    icon: 'code',
    title: { fr: 'Développement', en: 'Development' },
    desc: {
      fr: 'Du logiciel métier Java à l’application web moderne.',
      en: 'From business Java software to modern web apps.',
    },
    items: ['Java', 'Spring Boot', 'JavaFX', 'Python', 'TypeScript', 'Next.js', 'React', 'NestJS', 'JavaScript', 'HTML / CSS', 'PHP', 'API REST', 'C / C++', 'VBA'],
    usedAt: ['Alfa Laval', 'JHouns', 'Jestion'],
    hue: 290,
  },
  {
    icon: 'database',
    title: { fr: 'Données & tableaux de bord', en: 'Data & dashboards' },
    desc: {
      fr: 'Modéliser, stocker et exploiter les données, de la base SQL au tableau de bord Excel.',
      en: 'Model, store and use data, from SQL databases to Excel dashboards.',
    },
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite', 'Access', 'Excel avancé', 'Tableaux de bord', 'Mise en forme conditionnelle'],
    usedAt: ['Alfa Laval', 'JHouns', 'SSOCE', 'Suivi de stock Excel'],
    hue: 140,
  },
  {
    icon: 'server',
    title: { fr: 'Systèmes & réseaux', en: 'Systems & networks' },
    desc: {
      fr: 'Environnements Linux et Windows, routeurs, switchs et réseaux de communication industriels.',
      en: 'Linux and Windows environments, routers, switches and industrial communication networks.',
    },
    items: ['Linux', 'Windows Server', 'Routeurs', 'Switchs', 'Réseaux de communication', 'Process bus', 'Réseaux d’exploitation et d’administration', 'Protocoles IEC 61850', 'Cisco Packet Tracer'],
    usedAt: ['Enedis'],
    hue: 220,
  },
  {
    icon: 'bolt',
    title: { fr: 'Énergie & électronique', en: 'Energy & electronics' },
    desc: {
      fr: 'Ma formation d’origine : énergie, électronique et systèmes embarqués.',
      en: 'My original training: energy, electronics and embedded systems.',
    },
    items: ['Efficacité énergétique', 'Bâtiment à énergie positive', 'Électronique de puissance', 'Arduino', 'Matlab'],
    usedAt: ['ECAM-EPMI', 'SSOCE'],
    hue: 50,
  },
  {
    icon: 'compass',
    title: { fr: 'Gestion de projet & conseil', en: 'Project management & consulting' },
    desc: {
      fr: 'Piloter, communiquer avec les métiers et faire avancer un projet.',
      en: 'Steer, talk with business teams and move a project forward.',
    },
    items: ['Gestion de projet SI', 'Gantt', 'MS Project', 'Jira', 'Git & revue de code', 'Conseil', 'Audit', 'Word', 'PowerPoint', 'Claude Code'],
    usedAt: ['Alfa Laval', 'IMT-BS', "Bazar N'Guélé"],
    hue: 330,
  },
];

/** Savoir-être, chacun relié à des situations vécues. */
export const softSkills: { icon: string; title: L; proof: L }[] = [
  {
    icon: 'target',
    title: { fr: 'Rigueur', en: 'Rigour' },
    proof: {
      fr: 'Qualification d’équipements au regard d’une norme chez Enedis, objectif zéro régression sur un logiciel métier chez Alfa Laval.',
      en: 'Qualifying equipment against a standard at Enedis, zero-regression goal on a business application at Alfa Laval.',
    },
  },
  {
    icon: 'heart',
    title: { fr: 'Écoute et sens du client', en: 'Listening and customer focus' },
    proof: {
      fr: 'Conseil d’une clientèle internationale chez Lacoste, échanges avec les professionnels du secteur au SIAL Paris pour Bazar N’Guélé.',
      en: 'Advising international customers at Lacoste, meeting industry professionals at SIAL Paris for Bazar N’Guélé.',
    },
  },
  {
    icon: 'users',
    title: { fr: 'Communication et travail en équipe', en: 'Communication and teamwork' },
    proof: {
      fr: 'Démonstrations régulières aux ingénieurs chez Alfa Laval, documentation partagée avec l’équipe chez Enedis.',
      en: 'Regular demos to engineers at Alfa Laval, documentation shared with the team at Enedis.',
    },
  },
  {
    icon: 'globe',
    title: { fr: 'Adaptabilité', en: 'Adaptability' },
    proof: {
      fr: 'De Douala à Paris, de l’énergie à l’industrie puis au commerce : des environnements très différents en quelques années.',
      en: 'From Douala to Paris, from energy to industry and then retail: very different environments in a few years.',
    },
  },
  {
    icon: 'sparkles',
    title: { fr: 'Curiosité et apprentissage continu', en: 'Curiosity and continuous learning' },
    proof: {
      fr: 'Mastère Spécialisé, formations en ligne et projets personnels.',
      en: 'Post-master’s degree, online courses and personal projects.',
    },
  },
  {
    icon: 'compass',
    title: { fr: 'Autonomie et initiative', en: 'Autonomy and initiative' },
    proof: {
      fr: 'JHouns, mené sur mon temps libre de l’idée aux premières versions, comme un vrai produit.',
      en: 'JHouns, taken from idea to first releases in my free time, like a real product.',
    },
  },
];

export type Cert = {
  name: L;
  issuer: string;
  date: L;
  url?: string;
  /** verify = page de vérification en ligne ; doc = attestation au format PDF. */
  urlKind?: 'verify' | 'doc';
  status?: 'progress';
};

export const certifications: Cert[] = [
  {
    name: { fr: 'DELF, niveau B2', en: 'DELF, B2 level' },
    issuer: 'France Éducation international',
    date: { fr: 'avril 2022 · 80,5 / 100', en: 'April 2022 · 80.5 / 100' },
  },
  {
    name: { fr: 'TOEIC Listening & Reading', en: 'TOEIC Listening & Reading' },
    issuer: 'ETS Global',
    date: { fr: '2025', en: '2025' },
    url: 'https://www.etsglobal.org/global/en/digital-score-report/84F7EBF43C55E4FBC2B48BA45D19B1AD5255413E75F3266A594B58D0A7CA6F22eGdseTJQemp4TFRTN0dzNVZ3czVUb0FYZlp6MzU4STZtN1l1OXB6emwrTnRMZDFu',
  },
  {
    name: { fr: 'Docker pour DevOps', en: 'Docker for DevOps' },
    issuer: 'Udemy',
    date: { fr: '2025', en: '2025' },
  },
  {
    name: { fr: 'Python : la formation complète', en: 'Python: the complete course' },
    issuer: 'Udemy',
    date: { fr: '2025', en: '2025' },
  },
  {
    name: { fr: 'Devenez développeur Java', en: 'Become a Java developer' },
    issuer: 'Udemy',
    date: { fr: '2024', en: '2024' },
  },
  {
    name: { fr: 'Git et GitHub : de débutant à confirmé', en: 'Git & GitHub: beginner to advanced' },
    issuer: 'Udemy',
    date: { fr: '2023', en: '2023' },
    url: 'https://www.udemy.com/certificate/UC-b585a2fb-f07e-4a7f-925b-0690882e2f33/',
  },
];

export const languages: { name: L; level: L; value: number }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' }, value: 100 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Niveau B2', en: 'B2 level' }, value: 70 },
];

export const interests: { icon: string; label: L }[] = [
  { icon: 'ball', label: { fr: 'Football amateur depuis plus de 10 ans', en: 'Amateur football player for 10+ years' } },
  { icon: 'globe', label: { fr: 'Cultures japonaise et coréenne', en: 'Japanese and Korean culture' } },
  { icon: 'book', label: { fr: 'Mangas et animation', en: 'Manga and animation' } },
  { icon: 'heart', label: { fr: "Engagement associatif (EPMI's Heart)", en: "Student volunteering (EPMI's Heart)" } },
];

/** Bandeau défilant de technologies. */
export const marquee = [
  'Python', 'Java', 'Docker', 'GitLab CI', 'Kubernetes', 'Spring Boot', 'IEC 61850', 'PostgreSQL',
  'TypeScript', 'Next.js', 'NestJS', 'AWS', 'Linux', 'Ansible', 'GitHub Actions', 'JavaFX', 'SQL', 'Git',
];
