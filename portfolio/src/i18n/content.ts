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
  certifications: {
    showMore: string
    showLess: string
  }
  contact: {
    emailCta: string
    resumeCta: string
  }
  footer: {
    sourceCode: string
    licence: string
    copyright: string
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
    certifications: {
      showMore: "Show more",
      showLess: "Show less",
    },
    contact: {
      emailCta: "Email me",
      resumeCta: "Download resume",
    },
    footer: {
      sourceCode: "Source code",
      licence: "Licence",
      copyright: "Copyright © 2026 Mathieu Waharte. All rights reserved.",
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
    certifications: {
      showMore: "Voir plus",
      showLess: "Voir moins",
    },
    contact: {
      emailCta: "M’écrire",
      resumeCta: "Télécharger le CV",
    },
    footer: {
      sourceCode: "Code source",
      licence: "Licence",
      copyright: "Copyright © 2026 Mathieu Waharte. Tous droits réservés.",
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
