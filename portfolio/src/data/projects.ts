import type { Locale } from "@/i18n"

export type ProjectLinkKey = "live" | "source" | "caseStudy"

export type ProjectLink = {
  labelKey: ProjectLinkKey
  href: string
}

export type ProjectItem = {
  slug: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
}

const cover = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1200/675`

const projectsByLocale: Record<Locale, ProjectItem[]> = {
  en: [
    {
      slug: "vibehealth",
      title: "VibeHealth",
      subtitle: "Offline-first health and lifestyle companion with bilingual UX.",
      image: cover("vibehealth"),
      imageAlt: "VibeHealth preview",
      highlights: [
        "Offline-first architecture with strong TypeScript safety.",
        "EN/FR product experience with polished mobile-oriented UX.",
        "Health, tracking, and motivation loop designed as one cohesive app.",
      ],
      stack: ["TypeScript", "React Native", "Expo", "SQLite", "Tailwind"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/VibeHealth" },
        { labelKey: "caseStudy", href: "/projects/vibehealth" },
      ],
      featured: true,
    },
    {
      slug: "watchlist-service",
      title: "Watchlist Service",
      subtitle: "Service-oriented architecture project focused on backend structure.",
      image: cover("watchlist-service"),
      imageAlt: "Watchlist Service preview",
      highlights: [
        "Designed around service-oriented architecture principles.",
        "Backend-oriented project with clean API and domain boundaries.",
        "Strong fit for your architecture and engineering positioning.",
      ],
      stack: ["TypeScript", "Node.js", "Express", "PostgreSQL"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/Watchlist-Service" },
        { labelKey: "caseStudy", href: "/projects/watchlist-service" },
      ],
    },
    {
      slug: "app5-ai-game-project",
      title: "AI Game Project",
      subtitle: "Board-game AI and game systems engineering.",
      image: cover("ai-game-project-dark-grid"),
      imageAlt: "AI Game Project preview",
      highlights: [
        "Game logic and AI-oriented project with technical depth.",
        "Good bridge between software architecture and strategy systems.",
        "Strong portfolio piece for your game/AI identity.",
      ],
      stack: ["Java", "HTML", "AI", "Game Systems"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/app5-ai-game-project" },
        { labelKey: "caseStudy", href: "/projects/ai-game-project" },
      ],
    },
    {
      slug: "gpu-rendering",
      title: "GPU Rendering Experiments",
      subtitle: "Shaders, rendering, and graphics exploration.",
      image: cover("gpu-rendering-lights"),
      imageAlt: "GPU Rendering preview",
      highlights: [
        "Visual and technical project with strong differentiation value.",
        "Perfect place to embed shaders or interactive previews.",
        "Supports your graphics, simulation, and creative coding angle.",
      ],
      stack: ["CUDA", "GLSL", "C++", "Visualization"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/2526-app5-programmationgpu" },
        { labelKey: "caseStudy", href: "/projects/gpu-rendering" },
      ],
    },
  ],
  fr: [
    {
      slug: "vibehealth",
      title: "VibeHealth",
      subtitle: "Compagnon santé et bien-être hors ligne avec expérience bilingue.",
      image: cover("vibehealth"),
      imageAlt: "Aperçu de VibeHealth",
      highlights: [
        "Architecture hors ligne avec une forte sécurité TypeScript.",
        "Expérience produit EN/FR avec une UX mobile soignée.",
        "Boucle santé, suivi et motivation pensée comme une application cohérente.",
      ],
      stack: ["TypeScript", "React Native", "Expo", "SQLite", "Tailwind"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/VibeHealth" },
        { labelKey: "caseStudy", href: "/projects/vibehealth" },
      ],
      featured: true,
    },
    {
      slug: "watchlist-service",
      title: "Watchlist Service",
      subtitle: "Projet d’architecture orientée services centré sur la structure back-end.",
      image: cover("watchlist-service"),
      imageAlt: "Aperçu de Watchlist Service",
      highlights: [
        "Conçu autour des principes d’architecture orientée services.",
        "Projet back-end avec API propre et frontières de domaine claires.",
        "Très aligné avec un positionnement architecture et ingénierie.",
      ],
      stack: ["TypeScript", "Node.js", "Express", "PostgreSQL"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/Watchlist-Service" },
        { labelKey: "caseStudy", href: "/projects/watchlist-service" },
      ],
    },
    {
      slug: "app5-ai-game-project",
      title: "AI Game Project",
      subtitle: "IA pour jeux de plateau et ingénierie des systèmes de jeu.",
      image: cover("ai-game-project-dark-grid"),
      imageAlt: "Aperçu de AI Game Project",
      highlights: [
        "Projet de logique de jeu et d’IA avec une vraie profondeur technique.",
        "Bon pont entre architecture logicielle et systèmes stratégiques.",
        "Une pièce forte pour votre identité jeu / IA.",
      ],
      stack: ["Java", "HTML", "AI", "Game Systems"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/app5-ai-game-project" },
        { labelKey: "caseStudy", href: "/projects/ai-game-project" },
      ],
    },
    {
      slug: "gpu-rendering",
      title: "GPU Rendering Experiments",
      subtitle: "Exploration des shaders, du rendu et des graphismes.",
      image: cover("gpu-rendering-lights"),
      imageAlt: "Aperçu de GPU Rendering",
      highlights: [
        "Projet visuel et technique avec une vraie valeur de différenciation.",
        "Endroit idéal pour intégrer des shaders ou des aperçus interactifs.",
        "Met en valeur votre axe graphisme, simulation et code créatif.",
      ],
      stack: ["CUDA", "GLSL", "C++", "Visualization"],
      links: [
        { labelKey: "source", href: "https://github.com/Wubpooz/2526-app5-programmationgpu" },
        { labelKey: "caseStudy", href: "/projects/gpu-rendering" },
      ],
    },
  ],
}

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale]
}
