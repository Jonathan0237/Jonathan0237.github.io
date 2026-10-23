export type Lang = 'fr' | 'en';
export type L = { fr: string; en: string };

export const t = (value: L | string, lang: Lang): string =>
  typeof value === 'string' ? value : value[lang];

export const homePath = (lang: Lang) => (lang === 'fr' ? '/' : '/en/');

export const projectPath = (slug: string, lang: Lang) =>
  lang === 'fr' ? `/projets/${slug}/` : `/en/projects/${slug}/`;

export const missionPath = (slug: string, lang: Lang) =>
  lang === 'fr' ? `/parcours/${slug}/` : `/en/experience/${slug}/`;

export const ui = {
  nav: {
    about: { fr: 'À propos', en: 'About' },
    experience: { fr: 'Parcours', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    skills: { fr: 'Compétences', en: 'Skills' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  hero: {
    hello: { fr: 'Bonjour, je suis', en: "Hi, I'm" },
    seeProjects: { fr: 'Voir mes projets', en: 'See my projects' },
    downloadCv: { fr: 'Télécharger mon CV', en: 'Download my resume' },
  },
  sections: {
    about: { fr: 'À propos', en: 'About me' },
    experience: { fr: 'Expériences', en: 'Experience' },
    education: { fr: 'Formations', en: 'Education' },
    projects: { fr: 'Projets', en: 'Projects' },
    projectsTitle: { fr: 'Ce que j’ai construit', en: 'What I’ve built' },
    projectsIntro: {
      fr: 'Mes projets personnels et d’école, en dehors de l’alternance : du logiciel et de l’ingénierie. Tous ne sont pas finalisés : je continue de les faire évoluer et je mets cette page à jour à chaque nouvelle étape.',
      en: 'My personal and school projects, outside work-study: software and engineering. Not all of them are finished: I keep improving them and update this page at each new step.',
    },
    experienceIntro: {
      fr: 'Trois ans d’alternance en industrie, puis une expérience terrain dans l’agroalimentaire. Mes missions d’alternance ont chacune une page de présentation.',
      en: 'Three years of industrial work-study, then field experience in the food industry. Each work-study mission has its own overview page.',
    },
    educationIntro: {
      fr: 'Une formation scientifique, puis l’énergie et le numérique, puis le management des systèmes d’information.',
      en: 'A science foundation, then energy and digital, then information systems management.',
    },
    skillsIntro: {
      fr: 'Ce que je sais faire, et où je l’ai mis en pratique.',
      en: 'What I can do, and where I put it into practice.',
    },
    soft: { fr: 'Savoir-être, et où je l’ai mis en pratique', en: 'Soft skills, and where I showed them' },
    skills: { fr: 'Compétences', en: 'Skills' },
    certifications: { fr: 'Certifications', en: 'Certifications' },
    languages: { fr: 'Langues', en: 'Languages' },
    interests: { fr: "Centres d'intérêt", en: 'Interests' },
    contact: { fr: 'Travaillons ensemble', en: "Let's work together" },
  },
  project: {
    caseStudy: { fr: "Lire l'étude de cas", en: 'Read the case study' },
    video: { fr: 'Le projet en vidéo', en: 'The project in a video' },
    videoNote: { fr: 'Présentation animée, sans son, réalisée à partir des captures et du schéma.', en: 'Silent animated walkthrough, made from the screenshots and the diagram.' },
    videoBadge: { fr: 'Vidéo', en: 'Video' },
    code: { fr: 'Code source', en: 'Source code' },
    demo: { fr: 'Démo', en: 'Live demo' },
    back: { fr: 'Tous les projets', en: 'All projects' },
    backMission: { fr: 'Retour au parcours', en: 'Back to experience' },
    mission: { fr: 'Mission en alternance', en: 'Work-study mission' },
    nextMission: { fr: 'Mission suivante', en: 'Next mission' },
    context: { fr: 'Contexte', en: 'Context' },
    role: { fr: 'Mon rôle', en: 'My role' },
    stack: { fr: 'Technologies', en: 'Tech stack' },
    period: { fr: 'Période', en: 'Period' },
    challenge: { fr: 'Le problème', en: 'The challenge' },
    approach: { fr: 'Ma démarche', en: 'My approach' },
    outcome: { fr: 'Résultats', en: 'Outcome' },
    learned: { fr: "Ce que j'en retiens", en: 'What I learned' },
    gallery: { fr: 'Captures', en: 'Screenshots' },
    next: { fr: 'Projet suivant', en: 'Next project' },
    confidential: {
      fr: 'Cette page donne les grandes lignes de la mission. Les détails sont confidentiels : je les raconte volontiers de vive voix, en entretien.',
      en: 'This page gives the broad outline of the mission. The details are confidential: I am happy to talk them through in an interview.',
    },
    themes: { fr: 'Ce que j’y ai fait', en: 'What I worked on' },
    context2: { fr: 'L’enjeu', en: 'The stakes' },
    evolving: {
      fr: 'Projet en évolution : je continue de l’améliorer et cette page est mise à jour à chaque nouvelle étape.',
      en: 'Evolving project: I keep improving it, and this page is updated at each new step.',
    },
    evolvingBadge: { fr: 'Projets en évolution · mis à jour régulièrement · dernière mise à jour : octobre 2026', en: 'Evolving projects · updated regularly · last update: October 2026' },
    verify: { fr: 'Vérifier', en: 'Verify' },
    doc: { fr: 'Attestation', en: 'Certificate' },
    architecture: { fr: 'Comment ça marche', en: 'How it works' },
  },
  filters: {
    all: { fr: 'Tous', en: 'All' },
    software: { fr: 'Informatique', en: 'Software' },
    engineering: { fr: 'Ingénierie', en: 'Engineering' },
    company: { fr: 'En entreprise', en: 'At work' },
    progress: { fr: 'En cours', en: 'In progress' },
  },
  states: {
    progress: { fr: 'En cours', en: 'In progress' },
    done: { fr: 'Terminé', en: 'Completed' },
    prototype: { fr: 'Prototype', en: 'Prototype' },
  },
  categories: {
    software: { fr: 'Informatique', en: 'Software' },
    engineering: { fr: 'Ingénierie', en: 'Engineering' },
  },
  exp: {
    more: { fr: 'Voir le détail', en: 'Show details' },
    less: { fr: 'Masquer le détail', en: 'Hide details' },
    current: { fr: 'En poste', en: 'Current' },
    mission: { fr: 'Découvrir la mission', en: 'About this mission' },
    keyMissions: { fr: 'Missions clés', en: 'Key missions' },
    overview: { fr: 'Mon parcours en un coup d’œil', en: 'My path at a glance' },
    formation: { fr: 'Formation', en: 'Education' },
    alternance: { fr: 'Alternance', en: 'Work-study' },
    job: { fr: 'Expérience professionnelle', en: 'Professional experience' },
    facets: { fr: 'Lire par facette', en: 'Read by facet' },
    all: { fr: 'Tout', en: 'All' },
  },
  edu: {
    learned: { fr: 'Ce que j’y ai appris', en: 'What I learned' },
    diploma: { fr: 'Voir le diplôme', en: 'View diploma' },
    attestation: { fr: 'Voir l’attestation', en: 'View certificate' },
    masked: { fr: 'Données personnelles masquées', en: 'Personal data hidden' },
  },
  contact: {
    text: {
      fr: "Je suis ouvert aux postes d'ingénieur en CDI, partout en France. Disponible immédiatement. Le plus simple est de m'écrire : je réponds rapidement.",
      en: "I'm open to permanent engineering roles anywhere in France. Available now. The easiest way to reach me is by email; I reply quickly.",
    },
    email: { fr: "M'écrire", en: 'Email me' },
    phone: { fr: "M'appeler", en: 'Call me' },
    copy: { fr: 'Copier', en: 'Copy' },
    copied: { fr: 'Copié', en: 'Copied' },
  },
  footer: {
    built: { fr: 'Conçu et développé par Jonathan Simo Kuate.', en: 'Designed and built by Jonathan Simo Kuate.' },
  },
  theme: { fr: 'Changer de thème', en: 'Toggle theme' },
  menu: { fr: 'Menu', en: 'Menu' },
  skip: { fr: 'Aller au contenu', en: 'Skip to content' },
} as const;
