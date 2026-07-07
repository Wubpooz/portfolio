import type { Locale } from "./types"

export type UiContent = {
  nav: {
    home: string
    projects: string
    blog: string
  }
  hero: {
    role: string
    location: string
    summary: string
    contactCta: string
    downloadCta: string
    scrollCta: string
    backgroundAlt: string
    portraitAlt: string
  }
  sections: {
    experience: string
    education: string
    skillsEyebrow: string
    skillsTitle: string
    skillsDescription: string
    selectedWork: string
    projects: string
    certifications: string
    contactEyebrow: string
    contactTitle: string
    contactSubtitle: string
  }
  project: {
    live: string
    source: string
    caseStudy: string
    viewAll: string
    moreSuffix: string
  }
  projectsPage: {
    title: string
    subtitle: string
    searchPlaceholder: string
    filterAll: string
    filterCompleted: string
    filterInProgress: string
    filterWon: string
    statusCompleted: string
    statusInProgress: string
    statusWon: string
    noResults: string
    backHome: string
    detailTitle: string
    organization: string
    period: string
    status: string
    technologies: string
    highlights: string
    links: string
    openProject: string
    openSource: string
    openLive: string
    openDemo: string
    openDataset: string
  }
  certifications: {
    showMore: string
    showLess: string
  }
  contact: {
    emailCta: string
    resumeCta: string
    openResumeCta: string
  }
  resume: {
    title: string
    description: string
    backHome: string
    download: string
    openInNewTab: string
  }
  footer: {
    sourceCode: string
    licence: string
    copyright: string
  }
  notFound: {
    title: string
    subtitle: string
    backHome: string
    goProjects: string
    goResume: string
  }
  theme: {
    light: string
    dark: string
    system: string
    useLight: string
    useDark: string
    useSystem: string
  }
}

export const uiContent: Record<Locale, UiContent> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      blog: "Blog",
    },
    hero: {
      role: "Fullstack Engineer & AI — Apprentice at Dassault Systèmes",
      location: "Polytech Paris-Saclay · Paris, France",
      summary:
        "I build full-stack applications, AI agents, and scientific simulations. I like well-designed systems, clean interfaces, and the space between software, AI, and computation.",
      contactCta: "Contact me",
      downloadCta: "Download CV",
      scrollCta: "Scroll to projects",
      backgroundAlt: "Hero background",
      portraitAlt: "Portrait of Mathieu Waharte",
    },
    sections: {
      experience: "Experience",
      education: "Education",
      skillsEyebrow: "Skill arsenal",
      skillsTitle: "Tools of modern engineering",
      skillsDescription:
        "A curated set of languages, frameworks, protocols, and scientific methods I use across full-stack, AI, and computational projects.",
      selectedWork: "Selected work",
      projects: "Projects",
      certifications: "Certifications",
      contactEyebrow: "Contact",
      contactTitle: "Let’s connect",
      contactSubtitle: "LinkedIn, GitHub, or email.",
    },
    project: {
      live: "Live",
      source: "Source",
      caseStudy: "Case Study",
      viewAll: "View all projects",
      moreSuffix: "more",
    },
    projectsPage: {
      title: "Projects",
      subtitle:
        "A selection of projects spanning data visualization, AI systems, web apps, and scientific computing.",
      searchPlaceholder: "Search projects, tech, or organizations",
      filterAll: "All",
      filterCompleted: "Completed",
      filterInProgress: "In progress",
      filterWon: "Won",
      statusCompleted: "Completed",
      statusInProgress: "In progress",
      statusWon: "Won",
      noResults: "No projects match your search.",
      backHome: "Back to home",
      detailTitle: "Project details",
      organization: "Organization",
      period: "Period",
      status: "Status",
      technologies: "Technologies",
      highlights: "Highlights",
      links: "Links",
      openProject: "Open project",
      openSource: "Source code",
      openLive: "Live demo",
      openDemo: "Demo",
      openDataset: "Dataset",
    },
    certifications: {
      showMore: "Show more",
      showLess: "Show less",
    },
    contact: {
      emailCta: "Email me",
      resumeCta: "Download resume",
      openResumeCta: "Open resume",
    },
    resume: {
      title: "Resume",
      description:
        "The resume is automatically shown in the language best matched to your browser or location preference.",
      backHome: "Back to home",
      download: "Download PDF",
      openInNewTab: "Open in new tab",
    },
    footer: {
      sourceCode: "Source code",
      licence: "Licence",
      copyright: "Copyright © 2026 Mathieu Waharte. All rights reserved.",
    },
    notFound: {
      title: "404 — Page not found",
      subtitle:
        "You’ve wandered into the void between pixels. Let’s get you back to something useful.",
      backHome: "Back to home",
      goProjects: "View projects",
      goResume: "Open resume",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
      useLight: "Use light theme",
      useDark: "Use dark theme",
      useSystem: "Use system theme",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      blog: "Blog",
    },
    hero: {
      role: "Ingénieur fullstack & IA — Apprenti chez Dassault Systèmes",
      location: "Polytech Paris-Saclay · Paris, France",
      summary:
        "Je construis des applications fullstack, des agents IA et des simulations scientifiques. J’aime les systèmes bien conçus, les interfaces sobres et les sujets à la frontière entre logiciel, IA et calcul.",
      contactCta: "Me contacter",
      downloadCta: "Télécharger le CV",
      scrollCta: "Aller aux projets",
      backgroundAlt: "Fond d’écran du hero",
      portraitAlt: "Portrait de Mathieu Waharte",
    },
    sections: {
      experience: "Expérience",
      education: "Formation",
      skillsEyebrow: "Arsenal de compétences",
      skillsTitle: "Les outils de l’ingénierie moderne",
      skillsDescription:
        "Un ensemble sélectionné de langages, frameworks, protocoles et méthodes scientifiques que j’utilise dans mes projets fullstack, IA et calcul scientifique.",
      selectedWork: "Travaux sélectionnés",
      projects: "Projets",
      certifications: "Certifications",
      contactEyebrow: "Contact",
      contactTitle: "Restons en contact",
      contactSubtitle: "LinkedIn, GitHub ou email.",
    },
    project: {
      live: "Démo",
      source: "Code",
      caseStudy: "Étude de cas",
      viewAll: "Voir tous les projets",
      moreSuffix: "autres",
    },
    projectsPage: {
      title: "Projets",
      subtitle:
        "Une sélection de projets en visualisation de données, systèmes IA, applications web et calcul scientifique.",
      searchPlaceholder: "Rechercher un projet, une techno ou une organisation",
      filterAll: "Tous",
      filterCompleted: "Terminés",
      filterInProgress: "En cours",
      filterWon: "Lauréats",
      statusCompleted: "Terminé",
      statusInProgress: "En cours",
      statusWon: "Lauréat",
      noResults: "Aucun projet ne correspond à votre recherche.",
      backHome: "Retour à l’accueil",
      detailTitle: "Détails du projet",
      organization: "Organisation",
      period: "Période",
      status: "Statut",
      technologies: "Technologies",
      highlights: "Points forts",
      links: "Liens",
      openProject: "Ouvrir le projet",
      openSource: "Code source",
      openLive: "Démo live",
      openDemo: "Démo",
      openDataset: "Dataset",
    },
    certifications: {
      showMore: "Voir plus",
      showLess: "Voir moins",
    },
    contact: {
      emailCta: "M’écrire",
      resumeCta: "Télécharger le CV",
      openResumeCta: "Ouvrir le CV",
    },
    resume: {
      title: "CV",
      description:
        "Le CV s’affiche automatiquement dans la langue correspondant le mieux à la langue ou à la localisation de votre navigateur.",
      backHome: "Retour à l’accueil",
      download: "Télécharger le PDF",
      openInNewTab: "Ouvrir dans un nouvel onglet",
    },
    footer: {
      sourceCode: "Code source",
      licence: "Licence",
      copyright: "Copyright © 2026 Mathieu Waharte. Tous droits réservés.",
    },
    notFound: {
      title: "404 — Page introuvable",
      subtitle:
        "Vous avez quitté le chemin connu des pixels. Revenons vers quelque chose d’utile.",
      backHome: "Retour à l’accueil",
      goProjects: "Voir les projets",
      goResume: "Ouvrir le CV",
    },
    theme: {
      light: "Clair",
      dark: "Sombre",
      system: "Système",
      useLight: "Utiliser le thème clair",
      useDark: "Utiliser le thème sombre",
      useSystem: "Utiliser le thème système",
    },
  },
}

export function getUiContent(locale: Locale) {
  return uiContent[locale]
}

export function getResumeAsset(locale: Locale) {
  return locale === "fr"
    ? "/assets/CV_Mathieu_WAHARTE.pdf"
    : "/assets/Resume_Mathieu_WAHARTE.pdf"
}

