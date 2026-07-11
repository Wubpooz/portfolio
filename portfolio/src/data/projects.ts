import type { Locale } from "@/i18n"

export type ProjectLinkKey = "live" | "source" | "details" | "demo" | "dataset" | "search"

export type ProjectStatus = "completed" | "in-progress" | "won"

export interface ProjectLink {
  labelKey: ProjectLinkKey
  href: string
  label?: Record<Locale, string>
}

export interface ProjectItem {
  slug: string
  title: string
  subtitle: string
  summary: string
  organization: string
  period: string
  status: ProjectStatus
  image: string
  imageAlt: string
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
  relevance: number
}

const cover = (seed: string) =>
  `/assets/projects/${seed}.webp`

const datasetUrl = "https://huggingface.co/datasets/Bluefir/hetus-time-use"
const maltaRepo = "https://github.com/Wubpooz/Malta-TTS"
const streamlitDemo = "https://malta-tts-deegsodm2ehla4cupq6bxb.streamlit.app/" // XTTS demo
const streamlitSearch = "https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/" // Paper Relevance Dashboard
const escampeUrl = "https://escampe.vercel.app/" // Escampe web
const watchlistUrl = "https://watchlist-service.vercel.app/landing?redirect=/" // Watchlist web

const addDetails = (slug: string) => `/projects/${slug}`;

const projectsByLocale: Record<Locale, ProjectItem[]> = {
  en: [
    {
      slug: "watchlist-service",
      relevance: 95,
      title: "Media Watchlist Service",
      subtitle: "Full-stack media catalog and shared collections platform.",
      summary:
        "Designed and implemented a collaborative media watchlist platform featuring granular role-based access control, PostgreSQL data persistency via Prisma ORM, session-based authentication via Better Auth, and an integrated Model Context Protocol (MCP) server.",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "Media Watchlist Service preview",
      highlights: [
        "Collaborative collections with OWNER, COLLABORATOR, and READER roles.",
        "Integrated Model Context Protocol (MCP) server for collections and media tools.",
        "Comprehensive CI/CD pipeline with Vitest, backend mock requests, and automated deployment.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
    },
    {
      slug: "vireli",
      relevance: 90,
      title: "Vireli",
      subtitle: "Progressive Web Application (PWA).",
      summary:
        "Developed a progressive web application (PWA) with Angular 21 and Capacitor, utilizing Hono and Bun for back-end APIs.",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "Vireli PWA preview",
      highlights: [
        "Lead developer for a progressive web application.",
        "Full-stack development with Bun, Hono, and Zod.",
        "Integration with Postman and OpenAPI.",
      ],
      stack: ["PWA", "Angular", "Capacitor", "Bun", "Hono", "Zod", "Prisma", "BetterAuth", "Postman", "OpenAPI"],
      links: [
        { labelKey: "details", href: addDetails("vireli") },
      ],
    },
    {
      slug: "minimax-resnet",
      relevance: 80,
      title: "ResNet Board Game Evaluator",
      subtitle: "Custom ResNet model for position evaluation in a board game.",
      summary:
        "Optimized a ResNet model for evaluating board game positions, implementing the Minimax algorithm with alpha-beta pruning.",
      organization: "Polytech Paris-Saclay",
      period: "Mar 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "Minimax ResNet preview",
      highlights: [
        "Optimized a ResNet for evaluating positions in a board game.",
        "Implemented the Minimax algorithm with alpha-beta pruning.",
        "Developed a custom neural network for position evaluation.",
      ],
      stack: ["Python", "TensorFlow", "Minimax", "ResNet", "ML"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "Turning messy European time-use surveys into a clear visual narrative.",
      summary:
        "Resolved severe codification drift across 20 years of European time-use surveys with resilient Python mapping pipelines, then designed an accessible web app with custom interactive charts for a Hugging Face dataset.",
      organization: "Polytech Paris-Saclay",
      period: "Mar 2026 – Apr 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "How Europe Spends Its Time preview",
      highlights: [
        "Robust data mapping pipelines in Python and pandas to correct codification drift.",
        "Accessible, keyboard-navigable web experience with interactive data visualizations.",
        "Published as a Hugging Face dataset for broader reuse.",
      ],
      stack: ["Python", "pandas", "Data Visualization", "Accessibility", "Hugging Face", "Big Data", "Data Analysis", "Datasets"],
      links: [
        { labelKey: "live", href: datasetUrl },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      featured: true,
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 85,
      title: "Deloitte x Google Cloud Hackathon",
      subtitle: "Award-winning multi-agent system for campaign automation.",
      summary:
        "Built a distributed multi-agent system with ADK and MCP to automate marketing campaign creation, orchestrating specialized agents via A2A and integrating BigQuery, Gemini, Imagen, Cloud Run, and Vertex AI Agent Engine.",
      organization: "Deloitte x Google Cloud",
      period: "Nov 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "Deloitte x Google Cloud Hackathon preview",
      highlights: [
        "Multi-agent distributed system using ADK, MCP, and A2A orchestration.",
        "Native Cloud integration: BigQuery, Gemini, Imagen, Cloud Run, and Vertex AI Agent Engine.",
        "Won the hackathon.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      featured: true,
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "Speech synthesis research and Maltese language support.",
      summary:
        "Reviewed the state of the art in TTS, built a Streamlit app for faster paper discovery, and fine-tuned XTTS on Google Colab with PyTorch and GPT-2 to add Maltese without regressions.",
      organization: "L-Università ta' Malta (University of Malta)",
      period: "Jun 2025 – Aug 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "XTTS Finetuning preview",
      highlights: [
        "State-of-the-art review in TTS with a paper retrieval tool in Streamlit.",
        "XTTS fine-tuning and inference on Google Colab using PyTorch and GPT-2.",
        "Maltese support added without regression.",
      ],
      stack: ["Git", "PyTorch", "GPT-2", "XTTS", "Streamlit", "Hugging Face", "Machine Learning", "Model Training"],
      links: [
        { labelKey: "source", href: maltaRepo },
        {
          labelKey: "live",
          href: streamlitDemo,
          label: {
            en: "Maltese TTS Demo",
            fr: "Synthèse vocale maltaise",
            ar: "عرض توليد الكلام المالطي"
          }
        },
        {
          labelKey: "search",
          href: streamlitSearch,
          label: {
            en: "Paper Discovery Tool",
            fr: "Outil de recherche d'articles",
            ar: "أداة البحث عن الأوراق"
          }
        },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "Real-time multiplayer quiz platform with WebSockets.",
      summary:
        "Designed a robust real-time quiz architecture handling 50 players per room, built a modular Angular frontend, and integrated Redis-backed session management with deployment on Vercel and Supabase.",
      organization: "Polytech Paris-Saclay",
      period: "Jan 2025 – May 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "Quizine preview",
      highlights: [
        "WebSockets-based architecture for synchronized gameplay and reconnect handling.",
        "Angular frontend with routing, AuthGuard, notifications, and API contract.",
        "Documented from Figma mockups to continuous deployment.",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "details", href: addDetails("quizine") },
      ],
      featured: true,
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "C Compiler",
      subtitle: "C compiler written in Java.",
      summary:
        "Developed a C compiler in Java with error handling, code generation, and loops support.",
      organization: "Polytech Paris-Saclay",
      period: "2024 – 2025",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "C Compiler preview",
      highlights: [
        "Developed a C compiler in Java.",
        "Implemented lexical, syntactic, and semantic analysis.",
        "Supports code generation, variables, loops, and error handling.",
      ],
      stack: ["C", "Java", "Compiler", "ANTLR"],
      links: [
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
    },
    {
      slug: "jeux-entreprise",
      relevance: 60,
      title: "Business Simulation Games",
      subtitle: "Management of a fictitious company.",
      summary:
        "Led a team in a competitive business game simulation, managing strategies, financial decisions, and operations of a mock company.",
      organization: "Polytech Paris-Saclay",
      period: "2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "Business Simulation Games preview",
      highlights: [
        "Managed strategy, finance, and operations of a mock company.",
        "Analyzed market trends and competitive landscape.",
        "Coordinated with a multidisciplinary team.",
      ],
      stack: ["Management", "Strategy", "Finance"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
    },
    {
      slug: "magnus-carlos",
      relevance: 55,
      title: "Magnus Carlos",
      subtitle: "3D scientific simulation of the Magnus effect.",
      summary:
        "Managed a 3D scientific simulation project with a six-person team using Agile practices, and implemented the effect’s visualization with SDL2 textures, cameras, and rotations.",
      organization: "Polytech Paris-Saclay",
      period: "Sep 2024 – Dec 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "Magnus Carlos preview",
      highlights: [
        "Managed a 3D scientific simulation project on the Magnus effect.",
        "Used SDL2 for visualization with textures, cameras, and rotations.",
        "Led the work in a team of six students.",
      ],
      stack: ["C", "SDL2", "Simulation 3D", "Agile", "Visualization", "C++", "Physics Modeling", "Project Management"],
      links: [
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
    },
    {
      slug: "nyxen",
      relevance: 50,
      title: "Nyxen",
      subtitle: "Single-page experience with an interactive 3D model.",
      summary:
        "Designed the layout, palette, flows, and SPA routing for a modern web experience while integrating an animated 3D model into the main section.",
      organization: "Polytech Paris-Saclay",
      period: "2023 – 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "Nyxen preview",
      highlights: [
        "Layout, color palette, user flows, and SPA routing design.",
        "Interactive and animated 3D model in the main section.",
        "Strong focus on UI direction and interaction polish.",
      ],
      stack: ["CSS", "SPA Routing", "3D", "Animation", "Git", "Angular", "Three.js", "HTML", "TypeScript", "JavaScript", "Agile", "Frontend"],
      links: [
        { labelKey: "details", href: addDetails("nyxen") },
      ],
    },
    {
      slug: "house-finder",
      relevance: 45,
      title: "House Finder",
      subtitle: "Data modeling and CLI tool.",
      summary:
        "Designed database models to structure housing attributes and connectivity, and developed a CLI tool to rank properties based on custom criteria.",
      organization: "Polytech Paris-Saclay",
      period: "2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "House Finder preview",
      highlights: [
        "Designed data models to structure housing connectivity and attributes.",
        "Developed a Java CLI tool to rank properties using custom criteria.",
      ],
      stack: ["Java", "Open Data", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "Escape the Mummy",
      subtitle: "3D maze game in Processing and GLSL.",
      summary:
        "Developed a 3D maze game where the player must escape a mummy in a procedurally generated desert and pyramid, implementing custom shaders in GLSL.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "Escape the Mummy preview",
      highlights: [
        "Developed a 3D maze game with Processing and GLSL shaders.",
        "Implemented procedural generation for the desert and pyramid.",
        "Created game loop, camera controls, and mummy AI.",
      ],
      stack: ["Processing", "GLSL", "3D Game"],
      links: [
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
    },
    {
      slug: "cli-messaging",
      relevance: 30,
      title: "CLI Messaging",
      subtitle: "TCP/IP socket messaging apps in C.",
      summary:
        "Created client-server messaging applications in C using TCP/IP sockets, supporting multiple client connections and custom communication protocols.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "CLI Messaging preview",
      highlights: [
        "Developed client-server messaging applications in C using TCP/IP sockets.",
        "Implemented multi-client connection management.",
        "Designed a command-line interface for messaging.",
      ],
      stack: ["C", "TCP-IP", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
    },
    {
      slug: "logihub",
      relevance: 25,
      title: "LogiHub",
      subtitle: "Web library hosting custom p5.js games.",
      summary:
        "First online game library hosting custom p5.js games, developed during high school. Features classics like Pong, Space Invaders, Reaction Time, and Number Test.",
      organization: "Lycée de l'Essouriau",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "LogiHub preview",
      highlights: [
        "Developed multiple custom retro games in p5.js (Pong, Space Invaders, Reaction Time).",
        "Built a static HTML/CSS hosting platform for web-playable games.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: "http://mwaharte.free.fr/test/feuille_html_principale.html" },
        { labelKey: "details", href: addDetails("logihub") },
      ],
    }
  ],
  fr: [
    {
      slug: "watchlist-service",
      relevance: 95,
      title: "Service de Watchlist Média",
      subtitle: "Plateforme de catalogue média et de collections partagées (Architecture Orientée Services).",
      summary:
        "Conception et implémentation d'une plateforme collaborative de watchlist média comprenant un contrôle d'accès granulaire basé sur les rôles, la persistance des données PostgreSQL via l'ORM Prisma, l'authentification de session via Better Auth, et un serveur Model Context Protocol (MCP) intégré.",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "Aperçu du Service de Watchlist Média",
      highlights: [
        "Collections collaboratives avec des rôles PROPRIÉTAIRE, COLLABORATEUR et LECTEUR.",
        "Serveur Model Context Protocol (MCP) intégré pour les outils de collections et de médias.",
        "Pipeline CI/CD complet avec Vitest, requêtes mockées pour le back-end et déploiement automatisé.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
    },
    {
      slug: "vireli",
      relevance: 90,
      title: "Vireli",
      subtitle: "Application web progressive (PWA).",
      summary:
        "Développement d'une application web progressive (PWA) avec Angular 21 et Capacitor, s'appuyant sur Hono et Bun pour les API back-end.",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "Aperçu de Vireli PWA",
      highlights: [
        "Développeur principal d'une application web progressive.",
        "Développement full-stack avec Bun, Hono et Zod.",
        "Intégration avec Postman et OpenAPI.",
      ],
      stack: ["PWA", "Angular", "Capacitor", "Bun", "Hono", "Zod", "Prisma", "BetterAuth", "Postman", "OpenAPI"],
      links: [
        { labelKey: "details", href: addDetails("vireli") },
      ],
    },
    {
      slug: "minimax-resnet",
      relevance: 80,
      title: "Evaluateur de Jeu de Plateau ResNet",
      subtitle: "Optimisation d'un ResNet pour l'évaluation de positions dans un jeu de plateau.",
      summary:
        "Optimisation d'un ResNet pour l'évaluation de positions dans un jeu de plateau, implémentant l'algorithme Minimax avec élagage alpha-bêta.",
      organization: "Polytech Paris-Saclay",
      period: "mars 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "Aperçu de Minimax ResNet",
      highlights: [
        "Optimisation d'un ResNet pour l'évaluation de positions dans un jeu de plateau.",
        "Implémentation de l'algorithme Minimax avec élagage alpha-bêta.",
        "Développement d'un réseau de neurones personnalisé pour l'évaluation des positions.",
      ],
      stack: ["Python", "TensorFlow", "Minimax", "ResNet", "ML"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "Transformer des enquêtes européennes brouillonnes en récit visuel.",
      summary:
        "A résolu une forte dérive de codification sur 20 ans d’enquêtes européennes sur l’usage du temps grâce à des pipelines de mapping robustes en Python, puis a conçu une application web accessible avec graphiques interactifs pour un dataset Hugging Face.",
      organization: "Polytech Paris-Saclay",
      period: "mars 2026 – avr. 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "Aperçu de How Europe Spends Its Time",
      highlights: [
        // TODO Conçu et déployé une \href{https://wubpooz.github.io/visualisation-app5/}{application web accessible et navigable au clavier} en utilisant des graphiques interactifs personnalisés pour transformer le \href{https://huggingface.co/datasets/Bluefir/hetus-time-use}{jeu de données Hugging Face} en une narration visuelle intuitive.
        // TODO Résolu une dérive majeure de codification sur 20 ans des enquêtes européennes d'usage du temps, souvent hétérogènes, en développant des pipelines robustes de mise en correspondance des données en \textbf{Python} (pandas).
        "Pipelines de mapping robustes en Python et pandas pour corriger la dérive de codification.",
        "Application web accessible et navigable au clavier avec visualisations interactives.",
        "Publié sous forme de dataset Hugging Face.",
      ],
      stack: ["Python", "pandas", "Visualisation", "Accessibilité", "Hugging Face", "Big Data", "Data Analysis", "Datasets"],
      links: [
        { labelKey: "live", href: datasetUrl },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      featured: true,
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 85,
      title: "Hackathon Deloitte x Google Cloud, Lauréat",
      subtitle: "Système multi-agent lauréat pour automatiser les campagnes marketing.",
      summary:
        "Création d’un système distribué multi-agent avec ADK et MCP pour automatiser la génération de campagnes marketing, orchestration via A2A et intégration de BigQuery, Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
      organization: "Deloitte & Google Cloud",
      period: "nov. 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "Aperçu du hackathon Deloitte x Google Cloud",
      highlights: [
        // TODO Développé un \textbf{système multi-agents distribué} utilisant \textbf{ADK} et le protocole \textbf{MCP} pour automatiser la création de campagnes marketing. Orchestration des agents spécialisés communiquant via le protocole A2A.
        // TODO Intégré des services Cloud natifs pour réaliser des requêtes démographiques via BigQuery, générer du contenu multimodal avec Gemini et Imagen, et déployer sur Cloud Run et Vertex AI Agent Engine.
        "Système multi-agent distribué avec ADK, MCP et orchestration A2A.",
        "Intégration Cloud native : BigQuery, Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
        "Lauréat du hackathon.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      featured: true,
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "Recherche en synthèse vocale et support du maltais.",
      summary:
        "Revue de l’état de l’art en TTS, création d’une application Streamlit pour accélérer la recherche de papiers, puis fine-tuning de XTTS sur Google Colab avec PyTorch et GPT-2 pour ajouter le maltais sans régression.",
      organization: "L-Università ta' Malta (University of Malta)",
      period: "juin 2025 – août 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "Aperçu du projet XTTS Finetuning",
      highlights: [
        "Revue de l’état de l’art en TTS avec un outil de recherche de papiers sous Streamlit.",
        "Fine-tuning et inférence de XTTS sur Google Colab avec PyTorch et GPT-2.",
        "Support du maltais ajouté sans régression.",
      ],
      stack: ["Git", "PyTorch", "GPT-2", "XTTS", "Streamlit", "Hugging Face", "Apprentissage automatique", "Model Training"],
      links: [
        { labelKey: "source", href: maltaRepo },
        { labelKey: "live", href: streamlitDemo },
        { labelKey: "demo", href: streamlitSearch },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "Plateforme de quiz multijoueur en temps réel avec WebSockets.",
      summary:
        "Conception d’une architecture de quiz temps réel capable de gérer 50 joueurs par salle, frontend Angular modulaire et gestion des sessions avec Redis, Vercel et Supabase.",
      organization: "Polytech Paris-Saclay",
      period: "janv. 2025 – mai 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "Aperçu de Quizine",
      highlights: [
        // TODO
        // Conçu une architecture de quiz en temps réel, robuste, via WebSockets pour gérer \textbf{50 joueurs} par salle (questions synchronisées, tableau des scores partagé, gestion des connexions/reconnexions). Frontend Angular \textbf{modulaire} (routing, AuthGuard, notifications, contrat d’API). Mocks locaux et \textbf{session utilisateur Redis}. + et responsive avec Tailwind CSS
        // Organisé et planifié le cycle de vie complet du projet, des maquettes \href{https://www.figma.com/design/aIMeyjUQSQoAYLZoIbqEE4/Quiz-app?node-id=0-1&t=oOwVkBpXpddyvPUO-1}{Figma} au déploiement continu (Vercel, Supabase), incluant la gestion des tâches, la documentation et la coordination des parties prenantes.
        "Architecture WebSockets pour synchroniser les questions, les scores et les reconnexions.",
        "Frontend Angular modulaire avec routing, AuthGuard, notifications et contrat API.",
        "Du mockup Figma au déploiement continu.",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "details", href: addDetails("quizine") },
      ],
      featured: true,
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "Compilateur de C",
      subtitle: "Compilateur de C écrit en Java.",
      summary:
        "Développement d'un compilateur de C en Java, avec gestion des erreurs, compilation et boucles.",
      organization: "Polytech Paris-Saclay",
      period: "2024 – 2025",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "Aperçu du projet Compilateur de C",
      highlights: [
        "Développement d'un compilateur de C en Java.",
        "Gestion des erreurs, compilation et boucles.",
      ],
      stack: ["C", "Java", "Compilateur"],
      links: [
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
    },
    {
      slug: "jeux-entreprise",
      relevance: 60,
      title: "Jeux d'entreprise",
      subtitle: "Pilotage d'une entreprise fictive.",
      summary:
        "Pilotage d'une entreprise fictive dans le cadre d'un jeu d'entreprise.",
      organization: "Polytech Paris-Saclay",
      period: "2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "Aperçu du projet Jeux d'entreprise",
      highlights: [
        "Pilotage d'une entreprise fictive.",
      ],
      stack: ["Gestion", "Stratégie", "Finance"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
    },
    {
      slug: "magnus-carlos",
      relevance: 55,
      title: "Magnus Carlos",
      subtitle: "Simulation scientifique 3D de l’effet Magnus.",
      summary:
        "Gestion d’un projet de simulation scientifique 3D avec une équipe de six étudiants en Agile, et implémentation de la visualisation avec SDL2 (textures, caméras, rotations).",
      organization: "Polytech Paris-Saclay",
      period: "sept. 2024 – déc. 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "Aperçu de Magnus Carlos",
      highlights: [
        // TODO
        // \textbf{Gestion Agile} d'un projet de simulation scientifique et rendu 3D de l’effet Magnus avec une équipe de 6 étudiants.
        // Résolution numérique et implémentation en \textbf{C++} (visualisation temps réel avec \textbf{SDL2}) pour reproduire, modéliser et prédire dynamiquement le comportement d'un système physique complexe (trajectoires, fluides).
        "Projet de simulation scientifique 3D sur l’effet Magnus.",
        "Visualisation avec SDL2 : textures, caméras et rotations.",
        "Pilotage d’une équipe de six étudiants.",
      ],
      stack: ["C", "SDL2", "Simulation 3D", "Agile", "Visualisation", "C++", "Physique Modélisation", "Gestion de projet"],
      links: [
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
    },
    {
      slug: "nyxen",
      relevance: 50,
      title: "Nyxen",
      subtitle: "Expérience single-page avec modèle 3D interactif.",
      summary:
        "Conception de la mise en page, de la palette, des parcours utilisateurs et du routing SPA, avec intégration d’un modèle 3D animé dans la section principale.",
      organization: "Polytech Paris-Saclay",
      period: "2023 – 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "Aperçu de Nyxen",
      highlights: [
        "Mise en page, palette de couleurs, parcours et routing SPA.",
        "Intégration d’un modèle 3D interactif et animé.",
        "Fort accent sur la direction artistique et les interactions.",
      ],
      stack: ["CSS", "SPA Routing", "3D", "Animation", "Git", "Angular", "Three.js", "HTML", "TypeScript", "JavaScript", "Agile", "Frontend"],
      links: [
        { labelKey: "details", href: addDetails("nyxen") },
      ],
    },
    {
      slug: "house-finder",
      relevance: 45,
      title: "House finder",
      subtitle: "Conception de modèles de données et outil CLI.",
      summary:
        "Conception des modèles de données pour structurer la connectivité et les attributs des logements, et développement d’un outil CLI pour classer les biens selon des critères personnalisés.",
      organization: "Polytech Paris-Saclay",
      period: "2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "Aperçu de House finder",
      highlights: [
        "Conception des modèles de données pour structurer la connectivité et les attributs des logements.",
        "Développement d’un outil CLI pour classer les biens selon des critères personnalisés.",
      ],
      stack: ["Java", "Données OpenSource", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "Escape the mummy",
      subtitle: "Jeu de labyrinthe 3D en Processing et GLSL.",
      summary:
        "Développement d’un jeu de labyrinthe 3D où il faut échapper à une momie après être entré dans une pyramide sur un désert généré procéduralement.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "Aperçu de Escape the mummy",
      highlights: [
        "Développement d’un jeu de labyrinthe 3D avec Processing et GLSL.",
        "Génération procédurale d’un désert et d’une pyramide.",
        "Mécanique de jeu où le joueur doit échapper à une momie.",
      ],
      stack: ["Processing", "GLSL", "Jeu 3D"],
      links: [
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
    },
    {
      slug: "cli-messaging",
      relevance: 30,
      title: "CLI Messaging",
      subtitle: "Applications de messagerie TCP-IP en C.",
      summary:
        "Développement d’applications de messagerie serveur et client en TCP-IP avec interface en ligne de commande.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "Aperçu de CLI Messaging",
      highlights: [
        "Développement d’applications de messagerie serveur et client en TCP-IP.",
        "Interface en ligne de commande pour la communication.",
        "Gestion des connexions et des messages entre clients et serveur.",
      ],
      stack: ["C", "TCP-IP", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
    },
    {
      slug: "logihub",
      relevance: 25,
      title: "LogiHub",
      subtitle: "Bibliothèque de jeux en ligne hébergeant des jeux p5.js.",
      summary:
        "Première bibliothèque de jeux en ligne hébergeant des jeux p5.js personnalisés, développée au lycée. Comprend des classiques comme Pong, Space Invaders, Reaction Time et Number Test.",
      organization: "Lycée de l'Essouriau",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "Aperçu de LogiHub",
      highlights: [
        "Développement de plusieurs jeux rétro personnalisés en p5.js (Pong, Space Invaders, Reaction Time).",
        "Création d'une plateforme d'hébergement statique HTML/CSS pour les jeux jouables en ligne.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: "http://mwaharte.free.fr/test/feuille_html_principale.html" },
        { labelKey: "details", href: addDetails("logihub") },
      ],
    }
  ],
  ar: [
    {
      slug: "watchlist-service",
      relevance: 95,
      title: "خدمة قائمة المراقبة الإعلامية",
      subtitle: "منصة لإدارة كتالوج الوسائط والمجموعات المشتركة (هندسة موجهة نحو الخدمات).",
      summary:
        "تصميم وتطوير منصة تعاونية لقوائم المراقبة الإعلامية تتميز بـ تحكم دقيق في الوصول على أساس الأدوار، وحفظ البيانات في قاعدة PostgreSQL عبر Prisma ORM، وإدارة الجلسات باستخدام Better Auth، بالإضافة إلى خادم مدمج لـ بروتوكول سياق النموذج (MCP).",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "معاينة خدمة قائمة المراقبة الإعلامية",
      highlights: [
        "مجموعات تعاونية مع أدوار مالك (OWNER)، ومشارك (COLLABORATOR)، وقارئ (READER).",
        "خادم بروتوكول سياق النموذج (MCP) مدمج لأدوات المجموعات والوسائط.",
        "خط أنابيب CI/CD شامل مع Vitest، واختبارات تكامل للخدمات الخلفية، ونشر مؤتمت.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
    },
    {
      slug: "vireli",
      relevance: 90,
      title: "Vireli",
      subtitle: "تطبيق ويب تقدمي (PWA).",
      summary:
        "تطوير تطبيق ويب تقدمي (PWA) باستخدام Angular 21 و Capacitor، بالاعتماد على Hono و Bun لواجهات برمجة التطبيقات الخلفية.",
      organization: "Polytech Paris-Saclay",
      period: "2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "معاينة تطبيق Vireli PWA",
      highlights: [
        "المطور الرئيسي لتطبيق ويب تقدمي.",
        "تطوير كامل (Full-stack) باستخدام Bun و Hono و Zod.",
        "التكامل مع Postman و OpenAPI.",
      ],
      stack: ["PWA", "Angular", "Capacitor", "Bun", "Hono", "Zod", "Prisma", "BetterAuth", "Postman", "OpenAPI"],
      links: [
        { labelKey: "details", href: addDetails("vireli") },
      ],
    },
    {
      slug: "minimax-resnet",
      relevance: 80,
      title: "مقيّم ألعاب لوحية ResNet",
      subtitle: "تحسين نموذج ResNet لتقييم الوضعيات في لعبة لوحية.",
      summary:
        "تحسين نموذج ResNet لتقييم الوضعيات في لعبة لوحية، مع تطبيق خوارزمية Minimax وتقليم ألفا-بيتا.",
      organization: "Polytech Paris-Saclay",
      period: "مارس 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "معاينة Minimax ResNet",
      highlights: [
        "تحسين نموذج ResNet لتقييم الوضعيات في لعبة لوحية.",
        "تطبيق خوارزمية Minimax مع تقليم ألفا-بيتا.",
        "تطوير شبكة عصبية مخصصة لتقييم الوضعيات.",
      ],
      stack: ["Python", "TensorFlow", "Minimax", "ResNet", "ML"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "تحويل استبيانات استخدام الوقت الأوروبية المبعثرة إلى سرد بصري واضح.",
      summary:
        "حُلّت مشكلة انحراف الترميز الشديد عبر 20 عامًا من استبيانات استخدام الوقت الأوروبية باستخدام خطوط معالجة مرنة في Python، ثم صُممت واجهة ويب سهلة الوصول مع رسوم بيانية تفاعلية مخصصة لمجموعة بيانات Hugging Face.",
      organization: "Polytech Paris-Saclay",
      period: "مارس 2026 – أبريل 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "معاينة How Europe Spends Its Time",
      highlights: [
        "خطوط معالجة بيانات قوية في Python وpandas لتصحيح انحراف الترميز.",
        "تجربة ويب سهلة الوصول وقابلة للتنقل بلوحة المفاتيح مع تصورات بيانات تفاعلية.",
        "نُشر كمجموعة بيانات على Hugging Face لإعادة الاستخدام على نطاق أوسع.",
      ],
      stack: ["Python", "pandas", "تصور البيانات", "إتاحة الوصول", "Hugging Face", "Big Data", "Data Analysis", "Datasets"],
      links: [
        { labelKey: "live", href: datasetUrl },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      featured: true,
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 85,
      title: "Hackathon Deloitte x Google Cloud",
      subtitle: "نظام متعدد الوكلاء فائز لأتمتة الحملات التسويقية.",
      summary:
        "بُني نظام موزع متعدد الوكلاء باستخدام ADK وMCP لأتمتة إنشاء الحملات التسويقية، مع تنسيق الوكلاء المتخصصين عبر A2A ودمج BigQuery وGemini وImagen وCloud Run وVertex AI Agent Engine.",
      organization: "Deloitte x Google Cloud",
      period: "نوفمبر 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "معاينة Hackathon Deloitte x Google Cloud",
      highlights: [
        "نظام موزع متعدد الوكلاء باستخدام ADK وMCP وA2A.",
        "تكامل سحابي أصيل: BigQuery وGemini وImagen وCloud Run وVertex AI Agent Engine.",
        "فاز الهاكاثون.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      featured: true,
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "بحث في توليد الكلام ودعم اللغة المالطية.",
      summary:
        "أُجريت مراجعة حديثة في مجال TTS، وطُوّر تطبيق Streamlit لتسريع اكتشاف الأوراق العلمية، ثم نُفذ fine-tuning لنموذج XTTS على Google Colab باستخدام PyTorch وGPT-2 لإضافة المالطية دون تراجع.",
      organization: "L-Università ta' Malta (University of Malta)",
      period: "يونيو 2025 – أغسطس 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "معاينة XTTS Finetuning",
      highlights: [
        "مراجعة حديثة في TTS مع أداة للبحث في الأوراق العلمية عبر Streamlit.",
        "fine-tuning واستدلال XTTS على Google Colab باستخدام PyTorch وGPT-2.",
        "إضافة دعم المالطية دون تراجع في الأداء.",
      ],
      stack: ["Git", "PyTorch", "GPT-2", "XTTS", "Streamlit", "Hugging Face", "Machine Learning", "Model Training"],
      links: [
        { labelKey: "source", href: maltaRepo },
        { labelKey: "live", href: streamlitDemo },
        { labelKey: "demo", href: streamlitSearch },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "منصة مسابقات متعددة اللاعبين في الوقت الحقيقي مع WebSockets.",
      summary:
        "صُممت بنية متينة لمسابقات فورية قادرة على إدارة 50 لاعبًا لكل غرفة، مع واجهة Angular مرنة وإدارة جلسات مدعومة بـ Redis ونشر على Vercel وSupabase.",
      organization: "Polytech Paris-Saclay",
      period: "يناير 2025 – مايو 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "معاينة Quizine",
      highlights: [
        "بنية WebSockets لمزامنة اللعب ومعالجة إعادة الاتصال.",
        "واجهة Angular مرنة مع routing وAuthGuard وإشعارات وعقد API.",
        "توثيق متكامل من نماذج Figma حتى النشر المستمر.",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "details", href: addDetails("quizine") },
      ],
      featured: true,
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "مترجم لغة C",
      subtitle: "مترجم لغة C مكتوب بلغة Java.",
      summary:
        "تطوير مترجم للغة C بلغة Java، مع إدارة الأخطاء، التوليد، ودعم الحلقات التكرارية.",
      organization: "Polytech Paris-Saclay",
      period: "2024 – 2025",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "معاينة مترجم لغة C",
      highlights: [
        "تطوير مترجم للغة C بلغة Java.",
        "تطبيق التحليل المعجمي والنحوي والدلالي.",
        "دعم توليد التعليمات البرمجية، المتغيرات، الحلقات، وإدارة الأخطاء.",
      ],
      stack: ["C", "Java", "Compiler"],
      links: [
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
    },
    {
      slug: "jeux-entreprise",
      relevance: 60,
      title: "ألعاب محاكاة الأعمال",
      subtitle: "إدارة شركة وهمية.",
      summary:
        "قيادة شركة وهمية في إطار لعبة محاكاة إدارة الأعمال المنافسة، مع إدارة القرارات المالية والاستراتيجية والتشغيلية.",
      organization: "Polytech Paris-Saclay",
      period: "2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "معاينة ألعاب محاكاة الأعمال",
      highlights: [
        "إدارة الاستراتيجية والتمويل والعمليات لشركة وهمية.",
        "تحليل اتجاهات السوق والمنافسة.",
        "التنسيق مع فريق متعدد التخصصات.",
      ],
      stack: ["Management", "Strategy", "Finance"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
    },
    {
      slug: "magnus-carlos",
      relevance: 55,
      title: "Magnus Carlos",
      subtitle: "محاكاة علمية ثلاثية الأبعاد لتأثير Magnus.",
      summary:
        "أدرت مشروع محاكاة علمية ثلاثية الأبعاد ضمن فريق من ستة طلاب باستخدام منهجية Agile، وطبّقت تصور التأثير باستخدام SDL2 (الخامات والكاميرات والدورانات).",
      organization: "Polytech Paris-Saclay",
      period: "سبتمبر 2024 – ديسمبر 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "معاينة Magnus Carlos",
      highlights: [
        "مشروع محاكاة علمية ثلاثية الأبعاد لتأثير Magnus.",
        "تصور باستخدام SDL2: الخامات والكاميرات والدورانات.",
        "قيادة العمل ضمن فريق من ستة طلاب.",
      ],
      stack: ["C", "SDL2", "Simulation 3D", "Agile", "Visualization", "C++", "Physics Modeling", "Project Management"],
      links: [
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
    },
    {
      slug: "nyxen",
      relevance: 50,
      title: "Nyxen",
      subtitle: "تجربة صفحة واحدة مع نموذج ثلاثي الأبعاد تفاعلي.",
      summary:
        "صُمم التخطيط ولوحة الألوان ومسارات الاستخدام وSPA routing لتجربة ويب عصرية، مع دمج نموذج ثلاثي الأبعاد متحرك في القسم الرئيسي.",
      organization: "Polytech Paris-Saclay",
      period: "2023 – 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "معاينة Nyxen",
      highlights: [
        "تصميم التخطيط ولوحة الألوان ومسارات المستخدم وSPA routing.",
        "إدماج نموذج ثلاثي الأبعاد تفاعلي ومتحرك.",
        "تركيز قوي على التوجيه البصري ودقة التفاعل.",
      ],
      stack: ["CSS", "SPA Routing", "3D", "Animation", "Git", "Angular", "Three.js", "HTML", "TypeScript", "JavaScript", "Agile", "Frontend"],
      links: [
        { labelKey: "details", href: addDetails("nyxen") },
      ],
    },
    {
      slug: "house-finder",
      relevance: 45,
      title: "مكتشف السكن",
      subtitle: "تصميم نماذج البيانات وأداة CLI.",
      summary:
        "تصميم نماذج بيانات لهيكلة سمات السكن والاتصال، وتطوير أداة CLI لتصنيف العقارات بناءً على معايير مخصصة.",
      organization: "Polytech Paris-Saclay",
      period: "2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "معاينة مكتشف السكن",
      highlights: [
        "تصميم نماذج البيانات لهيكلة سمات السكن واتصالاته.",
        "تطوير أداة CLI بلغة Java لتصنيف العقارات وفق معايير مخصصة.",
      ],
      stack: ["Java", "Open Data", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "الهروب من المومياء",
      subtitle: "لعبة متاهة ثلاثية الأبعاد باستخدام Processing و GLSL.",
      summary:
        "تطوير لعبة متاهة ثلاثية الأبعاد يتعين فيها على اللاعب الهروب من المومياء في صحراء وهرم تم توليدهما إجرائيًا، مع تظليل مخصص في GLSL.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "معاينة الهروب من المومياء",
      highlights: [
        "تطوير لعبة متاهة ثلاثية الأبعاد باستخدام Processing ومظللات GLSL.",
        "تطبيق التوليد الإجرائي للصحراء والهرم.",
        "إنشاء حلقة اللعبة، والتحكم في الكاميرا، وذكاء اصطناعي للمومياء.",
      ],
      stack: ["Processing", "GLSL", "Jeu 3D"],
      links: [
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
    },
    {
      slug: "cli-messaging",
      relevance: 30,
      title: "مراسلة CLI",
      subtitle: "تطبيقات مراسلة عبر مقابس TCP/IP بلغة C.",
      summary:
        "إنشاء تطبيقات مراسلة للعميل والخادم بلغة C باستخدام مقابس TCP/IP، مع دعم اتصالات متعددة للعملاء وبروتوكولات اتصال مخصصة.",
      organization: "Université Paris-Saclay",
      period: "2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "معاينة مراسلة CLI",
      highlights: [
        "تطوير تطبيقات مراسلة خادم وعميل بلغة C باستخدام مقابس TCP/IP.",
        "إدارة اتصالات متعددة العملاء.",
        "تصميم واجهة سطر أوامر للمراسلة.",
      ],
      stack: ["C", "TCP-IP", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
    },
    {
      slug: "logihub",
      relevance: 25,
      title: "LogiHub",
      subtitle: "مكتبة ألعاب على الإنترنت تستضيف ألعاب p5.js مخصصة.",
      summary:
        "أول مكتبة ألعاب على الإنترنت تستضيف ألعاب p5.js مخصصة، تم تطويرها خلال المدرسة الثانوية. تتميز بألعاب كلاسيكية مثل Pong و Space Invaders و Reaction Time و Number Test.",
      organization: "Lycée de l'Essouriau",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "معاينة LogiHub",
      highlights: [
        "تطوير العديد من الألعاب الكلاسيكية المخصصة باستخدام p5.js (بونغ، غزاة الفضاء، زمن رد الفعل).",
        "بناء منصة استضافة ثابتة HTML/CSS للألعاب القابلة للعب على الويب.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: "http://mwaharte.free.fr/test/feuille_html_principale.html" },
        { labelKey: "details", href: addDetails("logihub") },
      ],
    }
  ],
}

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale]
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug)
}
