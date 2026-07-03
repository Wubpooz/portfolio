import type { Locale } from "@/i18n"
import type { ExperienceEntry } from "./types"

const experiencesByLocale: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      id: "dassault",
      role: "Fullstack & AI Engineer Apprentice",
      company: "Dassault Systèmes",
      location: "Vélizy-Villacoublay, France",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Designed and developed the Scientific Notebook and Reaction Planner scientific applications end to end.",
        "Steered a distributed computation queue that improved reliability from 40% to 100%.",
        "Defined and built a LangChain AI agent and an MCP server for molecule conversion.",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP"],
    },
    {
      id: "malta",
      role: "Research Intern (NLP)",
      company: "University of Malta — Dept. of AI",
      location: "Malta",
      startDate: "June 2025",
      endDate: "August 2025",
      description: [
        "Reviewed the state of the art in speech synthesis (TTS).",
        "Fine-tuned and ran XTTS inference on Google Colab to add Maltese without regressions.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "HuggingFace"],
    },
  ],
  fr: [
    {
      id: "dassault",
      role: "Ingénieur Fullstack & IA (Apprenti)",
      company: "Dassault Systèmes",
      location: "Vélizy-Villacoublay, France",
      startDate: "2023",
      endDate: "Présent",
      description: [
        "Conception et développement full-stack des applications scientifiques Scientific Notebook et Reaction Planner.",
        "Pilotage d'une file de calcul distribuée augmentant la fiabilité de 40 à 100%.",
        "Définition et création d'un Agent IA LangChain et d'un serveur MCP pour la conversion de molécules.",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP"],
    },
    {
      id: "malta",
      role: "Stagiaire Recherche (NLP)",
      company: "University of Malta — Dept. of AI",
      location: "Malte",
      startDate: "Juin 2025",
      endDate: "Août 2025",
      description: [
        "Revue de l'état de l'art en synthèse vocale (TTS).",
        "Fine-tuning et inférence de XTTS sur Google Colab pour ajouter le maltais sans régression.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "HuggingFace"],
    },
  ],
}

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return experiencesByLocale[locale]
}
