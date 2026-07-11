import type { Locale } from "./types";

export interface UiContent {
  nav: {
    home: string;
    projects: string;
    resume: string;
    blog: string;
  }
  hero: {
    role: string;
    location: string;
    summary: string;
    contactCta: string;
    downloadCta: string;
    scrollCta: string;
    backgroundAlt: string;
    portraitAlt: string;
  }
  sections: {
    experience: string;
    education: string;
    skillsTitle: string;
    skillsDescription: string;
    projects: string;
    certifications: string;
    languagesAndInterests: string;
    contactTitle: string;
  }
  project: {
    live: string;
    source: string;
    details: string;
    viewAll: string;
    moreSuffix: string;
  }
  projectsPage: {
    title: string;
    subtitle: string;
    hoverPreview: string;
    searchPlaceholder: string;
    filterAll: string;
    filterCompleted: string;
    filterInProgress: string;
    filterWon: string;
    statusCompleted: string;
    statusInProgress: string;
    statusWon: string;
    noResults: string;
    backHome: string;
    backProjects: string;
    openSearch: string;
    organization: string;
    period: string;
    status: string;
    technologies: string;
    highlights: string;
    links: string;
    openProject: string;
    openSource: string;
    openLive: string;
    openDemo: string;
    openDataset: string;
    viewCard: string;
    viewList: string;
    sortRecent: string;
    sortRelevance: string;
  }
  certifications: {
    showMore: string;
    showLess: string;
  }
  contact: {
    emailCta: string;
    resumeCta: string;
    openResumeCta: string;
    vcardCta: string;
  }
  resume: {
    title: string;
    description: string;
    backHome: string;
    download: string;
    openInNewTab: string;
  }
  footer: {
    sourceCode: string;
    licence: string;
    copyright: string;
  }
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
    goProjects: string;
    goResume: string;
  }
  theme: {
    light: string;
    dark: string;
    system: string;
    useLight: string;
    useDark: string;
    useSystem: string;
  }
}

export const uiContent: Record<Locale, UiContent> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      blog: "Blog",
    },
    hero: {
      role: "Fullstack Engineer & AI @ Dassault Systèmes",
      location: "Polytech Paris-Saclay · Paris, France",
      summary: "I build full-stack applications, AI agents, and scientific simulations. I like well-designed systems, clean interfaces, and the space between software, AI, and computation.",
      contactCta: "Contact me",
      downloadCta: "Download CV",
      scrollCta: "Scroll to projects",
      backgroundAlt: "Hero background",
      portraitAlt: "Portrait of Mathieu Waharte",
    },
    sections: {
      experience: "Experience",
      education: "Education",
      skillsTitle: "Technical Skills",
      skillsDescription: "The languages, frameworks, protocols, and scientific methods I use to design full-stack solutions and AI architectures.",
      projects: "Projects",
      certifications: "Certifications",
      languagesAndInterests: "Languages & Interests",
      contactTitle: "Let’s connect",
    },
    project: {
      live: "Live",
      source: "Source",
      details: "Details",
      viewAll: "View all projects",
      moreSuffix: "more",
    },
    projectsPage: {
      title: "Projects",
      subtitle: "A selection of projects spanning data visualization, AI systems, web apps, and scientific computing.",
      hoverPreview: "Hover preview",
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
      backProjects: "Back to projects",
      openSearch: "Search tool",
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
      viewCard: "Grid view",
      viewList: "List view",
      sortRecent: "Recent",
      sortRelevance: "Relevance",
    },
    certifications: {
      showMore: "Show more",
      showLess: "Show less",
    },
    contact: {
      emailCta: "Email me",
      resumeCta: "Download resume",
      openResumeCta: "Open resume",
      vcardCta: "Save Contact",
    },
    resume: {
      title: "Resume",
      description: "The resume is automatically localized. You can change the language to see it in your preferred language.",
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
      title: "404 - Page not found",
      subtitle: "You’ve wandered into the void between pixels. Let’s get you back to something useful.",
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
      resume: "CV",
      blog: "Blog",
    },
    hero: {
      role: "Ingénieur fullstack & IA @ Dassault Systèmes",
      location: "Polytech Paris-Saclay · Paris, France",
      summary: "Expérimenté dans la conception et le déploiement d'applications scientifiques complexes chez Dassault Systèmes, je cherche à appliquer mes compétences en résolution de problèmes pour développer des technologies innovantes dans le cadre d'un poste d'ingénieur Fullstack, IA ou Machine Learning.",
      contactCta: "Me contacter",
      downloadCta: "Télécharger le CV",
      scrollCta: "Aller aux projets",
      backgroundAlt: "Fond d’écran de la présentation",
      portraitAlt: "Portrait de Mathieu Waharte",
    },
    sections: {
      experience: "Expérience",
      education: "Formation",
      skillsTitle: "Compétences Techniques",
      skillsDescription: "L'ensemble des technologies, protocoles et approches scientifiques que j'utilise pour concevoir des solutions fullstack et des architectures IA.",
      projects: "Projets",
      certifications: "Certifications",
      languagesAndInterests: "Langues & Intérêts",
      contactTitle: "Restons en contact",
    },
    project: {
      live: "Démo",
      source: "Code",
      details: "Détails",
      viewAll: "Voir tous les projets",
      moreSuffix: "autres",
    },
    projectsPage: {
      title: "Projets",
      subtitle: "Une sélection de projets en visualisation de données, systèmes IA, applications web et calcul scientifique.",
      hoverPreview: "Aperçu au survol",
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
      backProjects: "Retour aux projets",
      openSearch: "Outil de recherche",
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
      viewCard: "Vue grille",
      viewList: "Vue liste",
      sortRecent: "Récent",
      sortRelevance: "Pertinence",
    },
    certifications: {
      showMore: "Voir plus",
      showLess: "Voir moins",
    },
    contact: {
      emailCta: "M’écrire",
      resumeCta: "Télécharger le CV",
      openResumeCta: "Ouvrir le CV",
      vcardCta: "Enregistrer le contact",
    },
    resume: {
      title: "CV",
      description: "Le CV est automatiquement localisé. Vous pouvez changer la langue pour le voir dans une autre langue.",
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
      title: "404 - Page introuvable",
      subtitle: "Vous avez quitté le chemin connu des pixels. Revenons vers quelque chose d’utile.",
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
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      resume: "السيرة الذاتية",
      blog: "المدونة",
    },
    hero: {
      role: "مهندس Fullstack وذكاء اصطناعي - متدرّب لدى Dassault Systèmes",
      location: "Polytech Paris-Saclay · باريس، فرنسا",
      summary: "أبني تطبيقات full-stack، ووكلاء ذكاء اصطناعي، ومحاكاة علمية. أُحب الأنظمة المصممة بعناية، والواجهات النظيفة، والمساحة الفاصلة بين البرمجيات والذكاء الاصطناعي والحوسبة.",
      contactCta: "تواصل معي",
      downloadCta: "تنزيل السيرة الذاتية",
      scrollCta: "انتقل إلى المشاريع",
      backgroundAlt: "خلفية القسم الرئيسي",
      portraitAlt: "صورة لMathieu Waharte",
    },
    sections: {
      experience: "الخبرة",
      education: "التعليم",
      skillsTitle: "المهارات التقنية",
      skillsDescription: "اللغات والأطر والبروتوكولات والأساليب العلمية التي أستخدمها لتصميم حلول full-stack وهندسات الذكاء الاصطناعي.",
      projects: "المشاريع",
      certifications: "الشهادات",
      languagesAndInterests: "اللغات والاهتمامات",
      contactTitle: "لنَبقَ على تواصل",
    },
    project: {
      live: "مباشر",
      source: "المصدر",
      details: "التفاصيل",
      viewAll: "عرض كل المشاريع",
      moreSuffix: "إضافية",
    },
    projectsPage: {
      title: "المشاريع",
      subtitle: "مجموعة مختارة من المشاريع في تصور البيانات، وأنظمة الذكاء الاصطناعي، وتطبيقات الويب، والحوسبة العلمية.",
      hoverPreview: "معاينة عند التمرير",
      searchPlaceholder: "ابحث في المشاريع أو التقنيات أو الجهات",
      filterAll: "الكل",
      filterCompleted: "مكتملة",
      filterInProgress: "قيد التنفيذ",
      filterWon: "فائزة",
      statusCompleted: "مكتمل",
      statusInProgress: "قيد التنفيذ",
      statusWon: "فائز",
      noResults: "لا توجد مشاريع تطابق بحثك.",
      backHome: "العودة إلى الرئيسية",
      backProjects: "العودة إلى المشاريع",
      openSearch: "أداة البحث",
      organization: "الجهة",
      period: "الفترة",
      status: "الحالة",
      technologies: "التقنيات",
      highlights: "أبرز النقاط",
      links: "الروابط",
      openProject: "فتح المشروع",
      openSource: "شفرة المصدر",
      openLive: "عرض مباشر",
      openDemo: "عرض توضيحي",
      openDataset: "مجموعة البيانات",
      viewCard: "عرض شبكي",
      viewList: "عرض قائمة",
      sortRecent: "الأحدث",
      sortRelevance: "الأهمية",
    },
    certifications: {
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
    },
    contact: {
      emailCta: "راسلني",
      resumeCta: "تنزيل السيرة الذاتية",
      openResumeCta: "فتح السيرة الذاتية",
      vcardCta: "حفظ جهة الاتصال",
    },
    resume: {
      title: "السيرة الذاتية",
      description: "السيرة الذاتية متوفرة بلغات متعددة. يمكنك تغيير اللغة لرؤية السيرة الذاتية في لغتك المفضلة.",
      backHome: "العودة إلى الرئيسية",
      download: "تنزيل PDF",
      openInNewTab: "فتح في تبويب جديد",
    },
    footer: {
      sourceCode: "الشفرة المصدرية",
      licence: "الترخيص",
      copyright: "حقوق النشر © 2026 Mathieu Waharte. جميع الحقوق محفوظة.",
    },
    notFound: {
      title: "404 - الصفحة غير موجودة",
      subtitle: "يبدو أنك ابتعدت قليلًا عن مسار البكسلات. لنعد إلى شيء مفيد.",
      backHome: "العودة إلى الرئيسية",
      goProjects: "عرض المشاريع",
      goResume: "فتح السيرة الذاتية",
    },
    theme: {
      light: "فاتح",
      dark: "داكن",
      system: "النظام",
      useLight: "استخدام السمة الفاتحة",
      useDark: "استخدام السمة الداكنة",
      useSystem: "استخدام سمة النظام",
    },
  },
};

export function getUiContent(locale: Locale) {
  return uiContent[locale];
}

export function getResumeAsset(locale: Locale) {
  return locale === "fr"
    ? "/assets/CV_Mathieu_WAHARTE.pdf"
    : "/assets/Resume_Mathieu_WAHARTE.pdf";
}

