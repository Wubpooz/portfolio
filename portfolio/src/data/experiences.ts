import type { ExperienceEntry } from './types'

export const experiences: ExperienceEntry[] = [
  {
    id: 'dassault',
    role: 'Ingénieur Fullstack & IA (Apprenti)',
    company: 'Dassault Systèmes',
    location: 'Vélizy-Villacoublay, France',
    startDate: '2023',
    endDate: 'Présent',
    description: [
      'Conception et développement full-stack des applications scientifiques Scientific Notebook et Reaction Planner.',
      "Pilotage d'une file de calcul distribuée augmentant la fiabilité de 40 à 100%.",
      "Définition et création d'un Agent IA LangChain et d'un serveur MCP pour la conversion de molécules.",
    ],
    tags: ['Angular', 'Java', 'TypeScript', 'Python', 'LangChain', 'MCP'],
  },
  {
    id: 'malta',
    role: 'Stagiaire Recherche (NLP)',
    company: 'University of Malta — Dept. of AI',
    location: 'Malte',
    startDate: 'Juin 2025',
    endDate: 'Août 2025',
    description: [
      'Revue de l\'état de l\'art en synthèse vocale (TTS).',
      'Fine-tuning et inférence de XTTS sur Google Colab pour ajouter le maltais sans régression.',
    ],
    tags: ['Python', 'PyTorch', 'XTTS', 'Streamlit', 'HuggingFace'],
  },
]