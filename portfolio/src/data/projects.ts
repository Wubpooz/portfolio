export type ProjectLink = {
  label: "Live" | "Source" | "Case Study"
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

export const projects: ProjectItem[] = [
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
      { label: "Source", href: "https://github.com/Wubpooz/VibeHealth" },
      { label: "Case Study", href: "/projects/vibehealth" },
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
      { label: "Source", href: "https://github.com/Wubpooz/Watchlist-Service" },
      { label: "Case Study", href: "/projects/watchlist-service" },
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
      { label: "Source", href: "https://github.com/Wubpooz/app5-ai-game-project" },
      { label: "Case Study", href: "/projects/ai-game-project" },
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
      { label: "Source", href: "https://github.com/Wubpooz/2526-app5-programmationgpu" },
      { label: "Case Study", href: "/projects/gpu-rendering" },
    ],
  },
]