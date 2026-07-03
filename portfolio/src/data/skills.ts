import type { Locale } from "@/i18n"

export interface SkillItem {
  name: string
  icon?: string
  iconUrl?: string
  note?: string
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
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "C++", icon: "cplusplus" },
      { name: "C", icon: "c" },
      { name: "SQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
      { name: "Bash", icon: "gnubash" },
      { name: "SPARQL", iconUrl: "https://cygri.github.io/rdf-logos/svg/sparql.svg" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      items: [
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Expo / React Native", icon: "expo" },
      { name: "SwiftUI", icon: "swift" },
      { name: "Three.js", icon: "threedotjs" },
      { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg" },
      ],
    },
    {
      id: "backend",
      label: "Backend & APIs",
      items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "rest" },
      { name: "OpenAPI", icon: "openapiinitiative" },
      { name: "MCP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg" },
      { name: "LangChain", icon: "langchain" },
      ],
    },
    {
      id: "ai-data",
      label: "AI & data",
      items: [
      { name: "LLM", icon: "llm" },
      { name: "RAG", icon: "rag" },
      { name: "LoRA", icon: "lora" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "NumPy", icon: "numpy" },
      { name: "pandas", icon: "pandas" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Hugging Face", icon: "huggingface" },
      ],
    },
    {
      id: "db",
      label: "Databases & storage",
      items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" },
      { name: "RDF", iconUrl: "https://cygri.github.io/rdf-logos/svg/no-text.svg" },
      ],
    },
    {
      id: "quality",
      label: "Quality & testing",
      items: [
      { name: "Jest", icon: "jest" },
      { name: "Jasmine", icon: "jasmine" },
      { name: "JUnit", icon: "junit5" },
      { name: "PACT", iconUrl: "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg" },
      { name: "Page Objects", icon: "page-objects" },
      { name: "TDD", icon: "tdd" },
      ],
    },
    {
      id: "tools",
      label: "Tools & DevOps",
      items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Postman", icon: "postman" },
      { name: "Tomcat", icon: "apachetomcat" },
      { name: "LaTeX", icon: "latex" },
      ],
    },
    {
      id: "scientific",
      label: "Scientific computing",
      items: [
      { name: "CUDA", icon: "nvidia" },
      { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg" },
      { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg" },
      { name: "OpenCV", icon: "opencv" },
      { name: "ODE / PDE", icon: "math" },
      { name: "PCA / SVD", icon: "math" },
      { name: "Probabilistic models", icon: "math" },
      ],
    },
  ],
  fr: [
    {
      id: "languages",
      label: "Langages de programmation",
      items: [
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "openjdk" },
        { name: "C++", icon: "cplusplus" },
        { name: "C", icon: "c" },
        { name: "SQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { name: "Bash", icon: "gnubash" },
        { name: "SPARQL", iconUrl: "https://cygri.github.io/rdf-logos/svg/sparql.svg" },
      ],
    },
    {
      id: "frontend",
      label: "Front-end",
      items: [
        { name: "Angular", icon: "angular" },
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Expo / React Native", icon: "expo" },
        { name: "SwiftUI", icon: "swift" },
        { name: "Three.js", icon: "threedotjs" },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg" },
      ],
    },
    {
      id: "backend",
      label: "Back-end & API",
      items: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express", icon: "express" },
        { name: "REST APIs", icon: "rest" },
        { name: "OpenAPI", icon: "openapiinitiative" },
        { name: "MCP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg" },
        { name: "LangChain", icon: "langchain" },
      ],
    },
    {
      id: "ai-data",
      label: "IA & données",
      items: [
        { name: "LLM", icon: "llm" },
        { name: "RAG", icon: "rag" },
        { name: "LoRA", icon: "lora" },
        { name: "PyTorch", icon: "pytorch" },
        { name: "NumPy", icon: "numpy" },
        { name: "pandas", icon: "pandas" },
        { name: "scikit-learn", icon: "scikitlearn" },
        { name: "OpenCV", icon: "opencv" },
        { name: "Hugging Face", icon: "huggingface" },
      ],
    },
    {
      id: "db",
      label: "Bases de données & stockage",
      items: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Redis", icon: "redis" },
        { name: "Prisma", icon: "prisma" },
        { name: "RDF", iconUrl: "https://cygri.github.io/rdf-logos/svg/no-text.svg" },
      ],
    },
    {
      id: "quality",
      label: "Qualité & tests",
      items: [
        { name: "Jest", icon: "jest" },
        { name: "Jasmine", icon: "jasmine" },
        { name: "JUnit", icon: "junit5" },
        { name: "PACT", iconUrl: "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg" },
        { name: "Page Objects", icon: "page-objects" },
        { name: "TDD", icon: "tdd" },
      ],
    },
    {
      id: "tools",
      label: "Outils & DevOps",
      items: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "CI/CD", icon: "cicd" },
        { name: "Postman", icon: "postman" },
        { name: "Tomcat", icon: "apachetomcat" },
        { name: "LaTeX", icon: "latex" },
      ],
    },
    {
      id: "scientific",
      label: "Calcul scientifique",
      items: [
        { name: "CUDA", icon: "nvidia" },
        { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg" },
        { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg" },
        { name: "OpenCV", icon: "opencv" },
        { name: "ODE / PDE", icon: "math" },
        { name: "PCA / SVD", icon: "math" },
        { name: "Modèles probabilistes", icon: "math" },
      ],
    },
  ],
}

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return skillCategoriesByLocale[locale]
}
