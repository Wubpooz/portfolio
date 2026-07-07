import type { Locale } from "@/i18n"

export type ProjectLinkKey = "live" | "source" | "caseStudy" | "demo" | "dataset"

export type ProjectStatus = "completed" | "in-progress" | "won"

export type ProjectLink = {
  labelKey: ProjectLinkKey
  href: string
}

export type ProjectItem = {
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
}

const cover = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1200/675`

const datasetUrl = "https://huggingface.co/datasets/Bluefir/hetus-time-use"
const maltaRepo = "https://github.com/Wubpooz/Malta-TTS"
const streamlitDemo = "https://malta-tts-deegsodm2ehla4cupq6bxb.streamlit.app/"
const streamlitSearch = "https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/"

const addCaseStudy = (slug: string) => `/projects/${slug}`

const projectsByLocale: Record<Locale, ProjectItem[]> = {
  en: [
    {
      slug: "how-europe-spends-its-time",
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
      stack: ["Python", "pandas", "Data Visualization", "Accessibility", "Hugging Face"],
      links: [
        { labelKey: "live", href: datasetUrl },
        { labelKey: "caseStudy", href: addCaseStudy("how-europe-spends-its-time") },
      ],
      featured: true,
    },
    {
      slug: "deloitte-google-cloud-hackathon",
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
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("deloitte-google-cloud-hackathon") },
      ],
      featured: true,
    },
    {
      slug: "xtts-finetuning",
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
      stack: ["Git", "PyTorch", "GPT-2", "XTTS", "Streamlit", "Hugging Face"],
      links: [
        { labelKey: "source", href: maltaRepo },
        { labelKey: "live", href: streamlitDemo },
        { labelKey: "demo", href: streamlitSearch },
        { labelKey: "caseStudy", href: addCaseStudy("xtts-finetuning") },
      ],
      featured: true,
    },
    {
      slug: "quizine",
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
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("quizine") },
      ],
      featured: true,
    },
    {
      slug: "magnus-carlos",
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
      stack: ["C", "SDL2", "3D Simulation", "Agile", "Visualization"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("magnus-carlos") },
      ],
    },
    {
      slug: "nyxen",
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
      stack: ["CSS", "SPA Routing", "3D", "Animation", "Git"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("nyxen") },
      ],
    },
  ],
  fr: [
    {
      slug: "how-europe-spends-its-time",
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
        "Pipelines de mapping robustes en Python et pandas pour corriger la dérive de codification.",
        "Application web accessible et navigable au clavier avec visualisations interactives.",
        "Publié sous forme de dataset Hugging Face.",
      ],
      stack: ["Python", "pandas", "Visualisation", "Accessibilité", "Hugging Face"],
      links: [
        { labelKey: "live", href: datasetUrl },
        { labelKey: "caseStudy", href: addCaseStudy("how-europe-spends-its-time") },
      ],
      featured: true,
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      title: "Hackathon Deloitte x Google Cloud",
      subtitle: "Système multi-agent lauréat pour automatiser les campagnes marketing.",
      summary:
        "Création d’un système distribué multi-agent avec ADK et MCP pour automatiser la génération de campagnes marketing, orchestration via A2A et intégration de BigQuery, Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
      organization: "Deloitte x Google Cloud",
      period: "nov. 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "Aperçu du hackathon Deloitte x Google Cloud",
      highlights: [
        "Système multi-agent distribué avec ADK, MCP et orchestration A2A.",
        "Intégration Cloud native : BigQuery, Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
        "Lauréat du hackathon.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("deloitte-google-cloud-hackathon") },
      ],
      featured: true,
    },
    {
      slug: "xtts-finetuning",
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
      stack: ["Git", "PyTorch", "GPT-2", "XTTS", "Streamlit", "Hugging Face"],
      links: [
        { labelKey: "source", href: maltaRepo },
        { labelKey: "live", href: streamlitDemo },
        { labelKey: "demo", href: streamlitSearch },
        { labelKey: "caseStudy", href: addCaseStudy("xtts-finetuning") },
      ],
      featured: true,
    },
    {
      slug: "quizine",
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
        "Architecture WebSockets pour synchroniser les questions, les scores et les reconnexions.",
        "Frontend Angular modulaire avec routing, AuthGuard, notifications et contrat API.",
        "Du mockup Figma au déploiement continu.",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("quizine") },
      ],
      featured: true,
    },
    {
      slug: "magnus-carlos",
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
        "Projet de simulation scientifique 3D sur l’effet Magnus.",
        "Visualisation avec SDL2 : textures, caméras et rotations.",
        "Pilotage d’une équipe de six étudiants.",
      ],
      stack: ["C", "SDL2", "Simulation 3D", "Agile", "Visualisation"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("magnus-carlos") },
      ],
    },
    {
      slug: "nyxen",
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
      stack: ["CSS", "SPA Routing", "3D", "Animation", "Git"],
      links: [
        { labelKey: "caseStudy", href: addCaseStudy("nyxen") },
      ],
    },
  ],
}

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale]
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug)
}

