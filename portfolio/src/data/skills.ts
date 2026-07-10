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

const skillCategoriesByLocale: Record<Locale, SkillCategory[]> = { //TODO order + cateogories + show where they were used on hover and a way for mobile too
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
        { name: "Vue.js", icon: "vuedotjs", proficiency: 3 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 5 },
        { name: "Expo / React Native", icon: "expo", proficiency: 4 },
        { name: "SwiftUI", icon: "swift", proficiency: 3 },
        { name: "Three.js", icon: "threedotjs", proficiency: 3 },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg", proficiency: 4 },
      ],
    },
    {
      id: "foundations",
      label: "Computer science foundations",
      items: [
        { name: "Functional programming", icon: "functional-programming", proficiency: 4 },
        { name: "Logic", icon: "logic", proficiency: 4 },
        { name: "Computability", icon: "computability", proficiency: 4 },
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
        { name: "NLP", icon: "nlp", proficiency: 4 },
        { name: "Supervised learning", icon: "supervised-learning", proficiency: 4 },
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
        { name: "Cybersecurity", icon: "security", proficiency: 4 },
      ],
    },
    {
      id: "scientific",
      label: "Scientific computing",
      items: [
        { name: "HPC", icon: "hpc", proficiency: 5 },
        { name: "Distributed algorithms", icon: "distributed-algorithms", proficiency: 4 },
        { name: "Graph algorithms", icon: "graph-algorithms", proficiency: 4 },
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
        // TODO
        // myqlm/qat
        // PHP
        // GLSL
        // Processing
        // Jupyter
        // MATLAB
        // MIPS assembly
        // LaTeX
      ],
    },
    {
      id: "frontend",
      label: "Front-end",
      items: [
        { name: "Angular", icon: "angular", proficiency: 5, favorite: true },
        { name: "React", icon: "react", proficiency: 4 },
        { name: "Vue.js", icon: "vuedotjs", proficiency: 3 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 5 },
        { name: "Expo / React Native", icon: "expo", proficiency: 4 },
        { name: "SwiftUI", icon: "swift", proficiency: 3 },
        { name: "Three.js", icon: "threedotjs", proficiency: 3 },
        // TODO
        // HTML, CSS
      ],
    },
    {
      id: "fondements",
      label: "Fondements de l’informatique",
      items: [
        { name: "Programmation fonctionnelle", icon: "functional-programming", proficiency: 4 },
        { name: "Logique", icon: "logic", proficiency: 4 },
        { name: "Calculabilité", icon: "computability", proficiency: 4 },
        // TODO
        // Logique
      ],
    },
    {
      id: "concepts",
      label: "Concepts avancés",
      items: [
        { name: "Programmation orientée objet", icon: "oop", proficiency: 4 },
        { name: "Programmation concurrente", icon: "concurrent-programming", proficiency: 4 },
        { name: "Programmation distribuée", icon: "distributed-programming", proficiency: 4 },
        // TODO
        // API REST
        // Design Patterns
        // UML
        // Agile
        // Informatique quantique
        // API Security
        // Cloud Security
        // Cloud Computing
        // Distributed Systems
        // Containerization
      ]
    },
    {
      id: "backend",
      label: "Back-end & API",
      items: [
        { name: "Node.js", icon: "nodedotjs", proficiency: 5 },
        { name: "Express", icon: "express", proficiency: 5 },
        { name: "REST APIs", icon: "rest", proficiency: 5 },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg", proficiency: 4 },
        { name: "OpenAPI", icon: "openapiinitiative", proficiency: 4 },
        { name: "MCP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg", proficiency: 5 },
        { name: "LangChain", icon: "langchain", proficiency: 5 },
        // TODO
        // Bun
        // Zod
        // turtle files
        // Linux
      ],
    },
    {
      id: "libraries",
      label: "Bibliothèques & frameworks",
      items: [
        // TODO
        // SDL2
        // framaC (ACNL + AFL)
      ],
    },
    {
      id: "tools",
      label: "Outils & DevOps",
      items: [
        // TODO
        // Git, CI/CD, Docker, Postman, OpenAPI, Packaging, Tomcat, VMware, Hugging Face, LaTeX}
        // Figma, Trello, Jira, Google Colab, Supabase, Vercel, Chrome DevTools
        // Cloudflare
        // Vercel
      ],
    },
    {
      id: "ai-data",
      label: "IA & données",
      items: [
        { name: "LLM", icon: "llm", proficiency: 5 }, // TODO change all to "Modèles de langage de grande taille (LLM)"
        { name: "RAG", icon: "rag", proficiency: 5 },
        { name: "LoRA", icon: "lora", proficiency: 4 },
        { name: "NLP", icon: "nlp", proficiency: 4 },
        { name: "Apprentissage supervisé", icon: "supervised-learning", proficiency: 4 },
        { name: "PyTorch", icon: "pytorch", proficiency: 4 },
        { name: "NumPy", icon: "numpy", proficiency: 4 },
        { name: "pandas", icon: "pandas", proficiency: 4 },
        { name: "scikit-learn", icon: "scikitlearn", proficiency: 4 },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "Hugging Face", icon: "huggingface", proficiency: 4 },
        // TODO
        // LangChain
        // PACT
        // MCP
        // Agents IA, entraînement et évaluation de modèles, Prétraitement des données, Big Data, PCA, apprentissage supervisé/non supervisé
        // Artificial Neural Networks
        // MiniMax, agent/LLM testing, skills
        // MSE/MLE/MDL, GMM, k-fold, kNN, SVM, KDD, LCM, apriori, transformer, tokenizer, finetuning, RLHF, cosine sim
        // - Google Agent Development Kit (ADK)
        // - A2A
        // - Data Visualization
        // - Visualization
        // - Data Analysis
        // - Model Training
        // - Fine Tuning
        // - Big Data
        // - Text-to-Speech Synthesis (TTS)
        // - Datasets
        // - Agentic AI Development
        // - AI Agents
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
        // TODO
        // Mysql
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
        // TODO
        // Karma
        // PCS (JMeter)
        // Cypress
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
        { name: "Cybersécurité", icon: "security", proficiency: 4 },
      ],
    },
    {
      id: "scientific",
      label: "Calcul scientifique",
      items: [
        { name: "HPC", icon: "hpc", proficiency: 5 },
        { name: "Algorithmes distribués", icon: "distributed-algorithms", proficiency: 4 },
        { name: "Algorithmes de graphe", icon: "graph-algorithms", proficiency: 4 },
        { name: "CUDA", icon: "nvidia", proficiency: 5 },
        { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg", proficiency: 4 },
        { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg", proficiency: 5, favorite: true },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "ODE / PDE", icon: "math", proficiency: 5 }, //// TODO: Résolution
        { name: "PCA / SVD", icon: "math", proficiency: 4 },
        { name: "Modèles probabilistes", icon: "math", proficiency: 4 },
      ],
    },
    // TODO
    // Category name ?????
    // - Research Skills
    // - Scientific Communications
    // - Management
    
    // - Governance, Risk Management, and Compliance (GRC)
    // - Sécurité
    // - Application Security

  ],
  ar: [
    {
      id: "languages",
      label: "لغات البرمجة",
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
      label: "الواجهة الأمامية",
      items: [
        { name: "Angular", icon: "angular", proficiency: 5, favorite: true },
        { name: "React", icon: "react", proficiency: 4 },
        { name: "Vue.js", icon: "vuedotjs", proficiency: 3 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 5 },
        { name: "Expo / React Native", icon: "expo", proficiency: 4 },
        { name: "SwiftUI", icon: "swift", proficiency: 3 },
        { name: "Three.js", icon: "threedotjs", proficiency: 3 },
        { name: "Hono", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg", proficiency: 4 },
      ],
    },
    {
      id: "foundations",
      label: "أساسيات علوم الحاسوب",
      items: [
        { name: "البرمجة الوظيفية", icon: "functional-programming", proficiency: 4 },
        { name: "المنطق", icon: "logic", proficiency: 4 },
        { name: "قابلية الحساب", icon: "computability", proficiency: 4 },
      ],
    },
    {
      id: "backend",
      label: "الخلفية وواجهات البرمجة",
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
      label: "الذكاء الاصطناعي والبيانات",
      items: [
        { name: "LLM", icon: "llm", proficiency: 5 },
        { name: "RAG", icon: "rag", proficiency: 5 },
        { name: "LoRA", icon: "lora", proficiency: 4 },
        { name: "NLP", icon: "nlp", proficiency: 4 },
        { name: "التعلم الخاضع للإشراف", icon: "supervised-learning", proficiency: 4 },
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
      label: "قواعد البيانات والتخزين",
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
      label: "الجودة والاختبار",
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
      label: "الأدوات وDevOps",
      items: [
        { name: "Git", icon: "git", proficiency: 5 },
        { name: "Docker", icon: "docker", proficiency: 5, favorite: true },
        { name: "CI/CD", icon: "cicd", proficiency: 4 },
        { name: "Postman", icon: "postman", proficiency: 4 },
        { name: "Tomcat", icon: "apachetomcat", proficiency: 3 },
        { name: "LaTeX", icon: "latex", proficiency: 5, favorite: true },
        { name: "الأمن السيبراني", icon: "security", proficiency: 4 },
      ],
    },
    {
      id: "scientific",
      label: "الحوسبة العلمية",
      items: [
        { name: "HPC", icon: "hpc", proficiency: 5 },
        { name: "الخوارزميات الموزعة", icon: "distributed-algorithms", proficiency: 4 },
        { name: "خوارزميات الرسوم البيانية", icon: "graph-algorithms", proficiency: 4 },
        { name: "CUDA", icon: "nvidia", proficiency: 5 },
        { name: "MPI", iconUrl: "https://raw.githubusercontent.com/mpi-forum/mpi-forum.github.io/master/images/mpi-forum-icon.jpg", proficiency: 4 },
        { name: "OpenMP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg", proficiency: 5, favorite: true },
        { name: "OpenCV", icon: "opencv", proficiency: 4, favorite: true },
        { name: "معادلات ODE / PDE", icon: "math", proficiency: 5 },
        { name: "PCA / SVD", icon: "math", proficiency: 4 },
        { name: "النماذج الاحتمالية", icon: "math", proficiency: 4 },
      ],
    },
  ],
}

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return skillCategoriesByLocale[locale]
}
