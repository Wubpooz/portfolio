import type { Locale } from "@/i18n"

export interface SkillItem {
  name: string
  icon?: string
  iconUrl?: string
  note?: string
  proficiency?: number // 1 to 5
  favorite?: boolean
}

export interface SkillCategory {
  id: string
  label: string
  items: SkillItem[]
}

const skillCategoriesByLocale: Record<Locale, SkillCategory[]> = {
  en: [
    {
      id: "languages",
      label: "Programming languages",
      items: [
        { name: "TypeScript", icon: "typescript", proficiency: 5, favorite: true },
        { name: "JavaScript", icon: "javascript", proficiency: 5 },
        { name: "Python", icon: "python", proficiency: 4 },
        { name: "Java", icon: "openjdk", proficiency: 4 },
        { name: "C++", icon: "cplusplus", proficiency: 5, favorite: true },
        { name: "C", icon: "c", proficiency: 4 },
        { name: "OCaml", icon: "ocaml", proficiency: 4, favorite: true },
        { name: "SQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", proficiency: 3 },
        { name: "Bash", icon: "gnubash", proficiency: 3 },
        { name: "SPARQL", iconUrl: "https://cygri.github.io/rdf-logos/svg/sparql.svg", proficiency: 3 },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      items: [
        { name: "Angular", icon: "angular", proficiency: 5, favorite: true },
        { name: "React", icon: "react", proficiency: 4 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 5 },
        { name: "Expo / React Native", icon: "expo", proficiency: 4 },
        { name: "SwiftUI", icon: "swift", proficiency: 3 },
        { name: "Three.js", icon: "threedotjs", proficiency: 3 },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg", proficiency: 4 },
      ],
    },
    {
      id: "backend",
      label: "Backend & APIs",
      items: [
        { name: "Node.js", icon: "nodedotjs", proficiency: 5 },
        { name: "Express", icon: "express", proficiency: 5 },
        { name: "REST APIs", icon: "rest", proficiency: 5 },
        { name: "OpenAPI", icon: "openapiinitiative", proficiency: 4 },
        { name: "MCP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg", proficiency: 5 },
        { name: "LangChain", icon: "langchain", proficiency: 5 },
      ],
    },
    {
      id: "ai-data",
      label: "AI & data",
      items: [
        { name: "LLM", icon: "llm", proficiency: 5 },
        { name: "RAG", icon: "rag", proficiency: 5 },
        { name: "LoRA", icon: "lora", proficiency: 4 },
        { name: "PyTorch", icon: "pytorch", proficiency: 4 },
        { name: "NumPy", icon: "numpy", proficiency: 4 },
        { name: "pandas", icon: "pandas", proficiency: 4 },
        { name: "scikit-learn", icon: "scikitlearn", proficiency: 4 },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "Hugging Face", icon: "huggingface", proficiency: 4 },
      ],
    },
    {
      id: "db",
      label: "Databases & storage",
      items: [
        { name: "PostgreSQL", icon: "postgresql", proficiency: 5 },
        { name: "SQLite", icon: "sqlite", proficiency: 4 },
        { name: "Redis", icon: "redis", proficiency: 3 },
        { name: "Prisma", icon: "prisma", proficiency: 4 },
        { name: "RDF", iconUrl: "https://cygri.github.io/rdf-logos/svg/no-text.svg", proficiency: 4 },
      ],
    },
    {
      id: "quality",
      label: "Quality & testing",
      items: [
        { name: "Jest", icon: "jest", proficiency: 4 },
        { name: "Jasmine", icon: "jasmine", proficiency: 5 },
        { name: "JUnit", icon: "junit5", proficiency: 4 },
        { name: "PACT", iconUrl: "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg", proficiency: 5 },
        { name: "Page Objects", icon: "page-objects", proficiency: 4 },
        { name: "TDD", icon: "tdd", proficiency: 5 },
      ],
    },
    {
      id: "tools",
      label: "Tools & DevOps",
      items: [
        { name: "Git", icon: "git", proficiency: 5 },
        { name: "Docker", icon: "docker", proficiency: 5, favorite: true },
        { name: "CI/CD", icon: "cicd", proficiency: 4 },
        { name: "Postman", icon: "postman", proficiency: 4 },
        { name: "Tomcat", icon: "apachetomcat", proficiency: 3 },
        { name: "LaTeX", icon: "latex", proficiency: 5, favorite: true },
      ],
    },
    {
      id: "scientific",
      label: "Scientific computing",
      items: [
        { name: "CUDA", icon: "nvidia", proficiency: 5 },
        { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg", proficiency: 4 },
        { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg", proficiency: 5, favorite: true },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "ODE / PDE", icon: "math", proficiency: 5 },
        { name: "PCA / SVD", icon: "math", proficiency: 4 },
        { name: "Probabilistic models", icon: "math", proficiency: 4 },
      ],
    },
  ],
  fr: [
    {
      id: "languages",
      label: "Langages de programmation",
      items: [
        { name: "TypeScript", icon: "typescript", proficiency: 5, favorite: true },
        { name: "JavaScript", icon: "javascript", proficiency: 5 },
        { name: "Python", icon: "python", proficiency: 4 },
        { name: "Java", icon: "openjdk", proficiency: 4 },
        { name: "C++", icon: "cplusplus", proficiency: 5, favorite: true },
        { name: "C", icon: "c", proficiency: 4 },
        { name: "OCaml", icon: "ocaml", proficiency: 4, favorite: true },
        { name: "SQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", proficiency: 3 },
        { name: "Bash", icon: "gnubash", proficiency: 3 },
        { name: "SPARQL", iconUrl: "https://cygri.github.io/rdf-logos/svg/sparql.svg", proficiency: 3 },
      ],
    },
    {
      id: "frontend",
      label: "Front-end",
      items: [
        { name: "Angular", icon: "angular", proficiency: 5, favorite: true },
        { name: "React", icon: "react", proficiency: 4 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 5 },
        { name: "Expo / React Native", icon: "expo", proficiency: 4 },
        { name: "SwiftUI", icon: "swift", proficiency: 3 },
        { name: "Three.js", icon: "threedotjs", proficiency: 3 },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg", proficiency: 4 },
      ],
    },
    {
      id: "backend",
      label: "Back-end & API",
      items: [
        { name: "Node.js", icon: "nodedotjs", proficiency: 5 },
        { name: "Express", icon: "express", proficiency: 5 },
        { name: "REST APIs", icon: "rest", proficiency: 5 },
        { name: "OpenAPI", icon: "openapiinitiative", proficiency: 4 },
        { name: "MCP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg", proficiency: 5 },
        { name: "LangChain", icon: "langchain", proficiency: 5 },
      ],
    },
    {
      id: "ai-data",
      label: "IA & données",
      items: [
        { name: "LLM", icon: "llm", proficiency: 5 },
        { name: "RAG", icon: "rag", proficiency: 5 },
        { name: "LoRA", icon: "lora", proficiency: 4 },
        { name: "PyTorch", icon: "pytorch", proficiency: 4 },
        { name: "NumPy", icon: "numpy", proficiency: 4 },
        { name: "pandas", icon: "pandas", proficiency: 4 },
        { name: "scikit-learn", icon: "scikitlearn", proficiency: 4 },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "Hugging Face", icon: "huggingface", proficiency: 4 },
      ],
    },
    {
      id: "db",
      label: "Bases de données & stockage",
      items: [
        { name: "PostgreSQL", icon: "postgresql", proficiency: 5 },
        { name: "SQLite", icon: "sqlite", proficiency: 4 },
        { name: "Redis", icon: "redis", proficiency: 3 },
        { name: "Prisma", icon: "prisma", proficiency: 4 },
        { name: "RDF", iconUrl: "https://cygri.github.io/rdf-logos/svg/no-text.svg", proficiency: 4 },
      ],
    },
    {
      id: "quality",
      label: "Qualité & tests",
      items: [
        { name: "Jest", icon: "jest", proficiency: 4 },
        { name: "Jasmine", icon: "jasmine", proficiency: 5 },
        { name: "JUnit", icon: "junit5", proficiency: 4 },
        { name: "PACT", iconUrl: "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg", proficiency: 5 },
        { name: "Page Objects", icon: "page-objects", proficiency: 4 },
        { name: "TDD", icon: "tdd", proficiency: 5 },
      ],
    },
    {
      id: "tools",
      label: "Outils & DevOps",
      items: [
        { name: "Git", icon: "git", proficiency: 5 },
        { name: "Docker", icon: "docker", proficiency: 5, favorite: true },
        { name: "CI/CD", icon: "cicd", proficiency: 4 },
        { name: "Postman", icon: "postman", proficiency: 4 },
        { name: "Tomcat", icon: "apachetomcat", proficiency: 3 },
        { name: "LaTeX", icon: "latex", proficiency: 5, favorite: true },
      ],
    },
    {
      id: "scientific",
      label: "Calcul scientifique",
      items: [
        { name: "CUDA", icon: "nvidia", proficiency: 5 },
        { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg", proficiency: 4 },
        { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg", proficiency: 5, favorite: true },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "ODE / PDE", icon: "math", proficiency: 5 },
        { name: "PCA / SVD", icon: "math", proficiency: 4 },
        { name: "Modèles probabilistes", icon: "math", proficiency: 4 },
      ],
    },
  ],
}

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return skillCategoriesByLocale[locale]
}
