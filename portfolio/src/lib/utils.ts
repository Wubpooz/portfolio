import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSkillCategories } from "@/data/skills";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const INVERT_ICONS = [
  "github",
  "vercel",
  "three.js",
  "threedotjs",
  "angular",
  "java",
  "openjdk",
  "pact",
  "mcp",
  "model_context_protocol",
  "anthropic",
  "claude",
  "express",
  "bun",
  "expo",
  "prisma",
  "linux",
  "bash",
  "posthog",
  "betterauth"
];

export function shouldInvertIcon(slugOrName?: string) {
  if (!slugOrName) return false;
  const localInverts = ["ode.svg", "graph.svg", "data-viz.svg"];
  if (localInverts.some(file => slugOrName.endsWith(file))) {
    return true;
  }
  if (slugOrName.startsWith("http://") || slugOrName.startsWith("https://") || slugOrName.startsWith("/") || slugOrName.includes("/") || slugOrName.includes(".")) {
    return false;
  }
  const lower = slugOrName.toLowerCase();
  if (lower === "javascript") {
    return false;
  }
  return INVERT_ICONS.some(icon => lower.includes(icon));
}

const CUSTOM_ICON_URLS: Record<string, string> = {
  java: "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg",
  sql: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  sparql: "https://cygri.github.io/rdf-logos/svg/sparql.svg",
  processing: "https://camo.githubusercontent.com/8df70a42f70a84f0d563c02d0483ceb01532efd8cf9074313425ee16a56d222d/68747470733a2f2f70726f63657373696e672e6f72672f66617669636f6e2e737667",
  myqlm: "/icons/myqlm.svg",
  mips: "https://assets.exercism.org/tracks/mips.svg",
  matlab: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1280px-Matlab_Logo.png",
  hono: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg",
  mcp: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg",
  a2a: "https://raw.githubusercontent.com/a2aproject/A2A/refs/heads/main/docs/assets/a2a_logo/icon/color/SVG/a2a_icon_color.svg",
  postgresql: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  rdf: "https://cygri.github.io/rdf-logos/svg/no-text.svg",
  ssh: "https://upload.wikimedia.org/wikipedia/en/6/65/OpenSSH_logo.png",
  kathara: "https://avatars.githubusercontent.com/u/42912149",
  pact: "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg",
  karma: "/icons/Karma.svg",
  framac: "/icons/frama-c.png",
  graph: "/icons/graph.svg",
  mpi: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg",
  openmp: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg",
  ode: "/icons/ode.svg",
  sdl2: "https://upload.wikimedia.org/wikipedia/commons/1/16/Simple_DirectMedia_Layer%2C_Logo.svg",
  solidworks: "/icons/solidworks.png",
  antigravity: "/icons/antigravity.png",
  glsl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opengl.svg",
  openjdk: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openjdk.svg",
  opengl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opengl.svg",
  "data-viz": "/icons/data-viz.svg",
  "google-adk": "/icons/agent-development-kit.png",
  "google adk": "/icons/agent-development-kit.png",
  um: "/icons/UM.svg",
  "apprenti-chercheur": "/icons/apprenti_chercheur.png",
  synchrotron: "/icons/synchrotron_logo_chatgpt.png",
  polytech: "/icons/Logo_Polytech.svg",
  ups: "/icons/logo-ups.svg",
  essouriau: "/icons/logo_essouriau.jpg",
  guyonnerie: "/icons/logo-guyonnerie.png",
  linkedin: "/icons/linkedin.svg",
};

export function getIconUrl(iconName: string): string {
  if (!iconName) return "";

  const lower = iconName.toLowerCase();
  
  // 1. Check custom URLs first
  if (CUSTOM_ICON_URLS[lower]) {
    return CUSTOM_ICON_URLS[lower];
  }

  // 2. Check if it's already an absolute/relative path or URL
  if (iconName.startsWith("http://") || iconName.startsWith("https://")) {
    return iconName;
  }
  if (iconName.startsWith("/") || iconName.includes("/") || iconName.includes(".")) {
    return iconName.startsWith("/") ? iconName : `/${iconName}`;
  }

  let slug = iconName.toLowerCase();
  if (slug === "css3") {
    slug = "css";
  }

  if (shouldInvertIcon(slug)) {
    return `https://cdn.simpleicons.org/${slug}/000`;
  }
  return `https://cdn.simpleicons.org/${slug}`;
}

export function parseCertDate(dateStr: string): number {
  const match = new RegExp(/^(\d{2})\.(\d{4})$/).exec(dateStr);
  if (match) {
    const month = Number(match[1]);
    const year = Number(match[2]);
    return year * 12 + month;
  }
  if (/^\d{4}$/.test(dateStr)) {
    const year = Number(dateStr);
    return year * 12 + 6;
  }
  return 0;
}

const monthsEn = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const monthsFr = ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];

export function parseProjectPeriod(period: string): number {
  const p = period.toLowerCase();
  const years = p.match(/\b(20\d{2})\b/g);
  if (!years) return 0;
  const maxYear = Math.max(...years.map(Number));

  let monthIdx = 0;
  monthsEn.forEach((m, idx) => {
    if (p.includes(m)) monthIdx = idx + 1;
  });
  monthsFr.forEach((m, idx) => {
    if (p.includes(m)) monthIdx = idx + 1;
  });

  return maxYear * 12 + monthIdx;
}

const techIconMap: Partial<Record<string, { icon: string }>> = {
  "Next.js": { icon: "nextdotjs" },
  TypeScript: { icon: "typescript" },
  "Tailwind CSS": { icon: "tailwindcss" },
  Vercel: { icon: "vercel" },
  React: { icon: "react" },
  "React Native": { icon: "react" },
  Expo: { icon: "expo" },
  "Node.js": { icon: "nodedotjs" },
  Express: { icon: "express" },
  "Express.js": { icon: "express" },
  PostgreSQL: { icon: "postgresql" },
  Prisma: { icon: "prisma" },
  Drizzle: { icon: "drizzle" },
  Docker: { icon: "docker" },
  GraphQL: { icon: "graphql" },
  MongoDB: { icon: "mongodb" },
  Python: { icon: "python" },
  HTML: { icon: "html5" },
  CSS: { icon: "css3" },
  CSS3: { icon: "css3" },
  JavaScript: { icon: "javascript" },
  "C++": { icon: "cplusplus" },
  CUDA: { icon: "nvidia" },
  "Vue 3": { icon: "vuedotjs" },
  Vue: { icon: "vuedotjs" },
  Pinia: { icon: "pinia" },
  "Better Auth": { icon: "betterauth" },
  BetterAuth: { icon: "betterauth" },
  PWA: { icon: "progressivewebapp" },
  Capacitor: { icon: "capacitor" },
  Zod: { icon: "zod" },
  Postman: { icon: "postman" },
  OpenAPI: { icon: "openapiinitiative" },
  TensorFlow: { icon: "tensorflow" },
  pandas: { icon: "pandas" },
  "Hugging Face": { icon: "huggingface" },
  BigQuery: { icon: "googlebigquery" },
  "Cloud Run": { icon: "googlecloudrun" },
  "Vertex AI": { icon: "googlecloud" },
  "Google Cloud": { icon: "googlecloud" },
  "Cloud Computing": { icon: "googlecloud" },
  PyTorch: { icon: "pytorch" },
  Streamlit: { icon: "streamlit" },
  Redis: { icon: "redis" },
  Figma: { icon: "figma" },
  ANTLR: { icon: "antlr" },
  "Three.js": { icon: "threedotjs" },
  "p5.js": { icon: "p5dotjs" },
  Java: { icon: "java" },
  GLSL: { icon: "opengl" },
};

// Helper to look up a tech in the skills database across all categories and locales
export function findSkillIcon(techName: string): string | undefined {
  // First, check our hardcoded map
  const mapped = techIconMap[techName];
  if (mapped?.icon) {
    return mapped.icon;
  }

  const locales: ("en" | "fr" | "ar")[] = ["en", "fr", "ar"];
  
  for (const loc of locales) {
    try {
      const categories = getSkillCategories(loc);
      if (!categories) continue;
      for (const cat of categories) {
        for (const item of cat.items) {
          if (item.name.toLowerCase() === techName.toLowerCase()) {
            if (item.icon) {
              return item.icon;
            }
          }
        }
      }
    } catch (e) {
      // Ignore
    }
  }

  // Substring fallback (only if both names are longer than 2 characters to avoid false matches like C and ML)
  for (const loc of locales) {
    try {
      const categories = getSkillCategories(loc);
      if (!categories) continue;
      for (const cat of categories) {
        for (const item of cat.items) {
          const itemName = item.name.toLowerCase();
          const targetName = techName.toLowerCase();
          if (itemName.length > 2 && targetName.length > 2) {
            if (itemName.includes(targetName) || targetName.includes(itemName)) {
              if (item.icon) {
                return item.icon;
              }
            }
          }
        }
      }
    } catch (e) {
      // Ignore
    }
  }

  return undefined;
}