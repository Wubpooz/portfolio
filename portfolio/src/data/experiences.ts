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
        "Led the development of a distributed computing queue, coordinating with cross-functional teams, which increased reliability from **40% to 100%**, even under load.",
        "Engineered a robust **LangChain AI agent** and an **MCP server** for molecule conversion, validated by mock servers, **PACT** contracts, and LLM routing tests.",
        "Autonomously delivered features across multiple environments, ensuring quality through unit/integration testing (**Jasmine**, **Page Objects**, **JUnit**, **JMeter**) and code reviews.",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP", "TDD"],
    },
    {
      id: "malta",
      role: "Research Intern (NLP)",
      company: "University of Malta — Dept. of AI",
      location: "Malta",
      startDate: "June 2025",
      endDate: "August 2025",
      description: [
        "Conducted a state-of-the-art review in Text-to-Speech (TTS) and developed an accelerated paper retrieval app with a ranking system using **Streamlit**.",
        "Formatted data, fine-tuned, and ran inference for **XTTS** on Google Colab (**PyTorch** & GPT-2) to add Maltese language support without regressions.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "Hugging Face"],
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
        "Pilotage d'une file de calcul distribuée (de la spécification à la production) augmentant la fiabilité de **40 à 100%**, même en charge.",
        "Définition et création d'un **Agent IA LangChain** et d'un serveur **MCP** pour la conversion de molécules, validés par des contrats **PACT** et des tests de routage LLM.",
        "Livraison autonome de fonctionnalités multi-environnements assurée par des tests d'intégration et unitaires (**Jasmine**, **Page Objects**, **JMeter**).",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP", "TDD"],
    },
    {
      id: "malta",
      role: "Stagiaire Recherche (NLP)",
      company: "University of Malta — Dept. of AI",
      location: "Malte",
      startDate: "Juin 2025",
      endDate: "Août 2025",
      description: [
        "Réalisé une revue de l'état de l'art en synthèse vocale (TTS) et développé une application de recherche d’articles avec **Streamlit**.",
        "Formaté les données et réalisé le fine-tuning de **XTTS** sur Google Colab (**PyTorch** & GPT-2) pour ajouter le maltais sans régression.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "Hugging Face"],
    },
  ],
}

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return experiencesByLocale[locale]
}
