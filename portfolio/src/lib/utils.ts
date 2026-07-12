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

export function getIconUrl(iconName: string): string {
  if (!iconName) return "";
  if (iconName.startsWith("http://") || iconName.startsWith("https://")) {
    return iconName;
  }
  if (iconName.startsWith("/") || iconName.includes("/") || iconName.includes(".")) {
    return iconName.startsWith("/") ? iconName : `/${iconName}`;
  }
  if (iconName === "linkedin") return "/icons/linkedin.svg";

  const slug = iconName;

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

interface TechIconMeta {
  icon?: string;
  iconUrl?: string;
}

const techIconMap: Partial<Record<string, TechIconMeta>> = {
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
  Java: {
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openjdk.svg",
  },
  GLSL: {
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opengl.svg",
  },
};

// Helper to look up a tech in the skills database across all categories and locales
export function findSkillIcon(techName: string): { icon?: string; iconUrl?: string } | undefined {
  // First, check our hardcoded map
  const mapped = techIconMap[techName];
  if (mapped?.icon || mapped?.iconUrl) {
    return mapped;
  }

  const locales: ("en" | "fr" | "ar")[] = ["en", "fr", "ar"];
  
  for (const loc of locales) {
    try {
      const categories = getSkillCategories(loc);
      if (!categories) continue;
      for (const cat of categories) {
        for (const item of cat.items) {
          if (item.name.toLowerCase() === techName.toLowerCase()) {
            if (item.icon || item.iconUrl) {
              return {
                icon: item.icon,
                iconUrl: item.iconUrl
              };
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
              if (item.icon || item.iconUrl) {
                return {
                  icon: item.icon,
                  iconUrl: item.iconUrl
                };
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