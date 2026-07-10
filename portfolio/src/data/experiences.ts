import type { Locale } from "@/i18n"
import type { ExperienceEntry } from "./types"

const experiencesByLocale: Record<Locale, ExperienceEntry[]> = { // TODO icons for companies
  en: [
    {
      id: "dassault",
      role: "Fullstack & AI Engineer Apprentice",
      company: "Dassault Systèmes",
      location: "Vélizy-Villacoublay, France",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Led the development of a distributed computing queue, coordinating with cross-functional teams, which increased reliability from 40% to 100%, even under load.",
        "Engineered a robust LangChain AI agent and an MCP server for molecule conversion, validated by mock servers, PACT contracts, and LLM routing tests.",
        "Autonomously delivered features across multiple environments, ensuring quality through unit/integration testing (Jasmine, Page Objects, JUnit, JMeter) and code reviews.",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP", "TDD"],
    },
    {
      id: "malta",
      role: "Research Intern (NLP)",
      company: "University of Malta - Dept. of AI",
      location: "Malta",
      startDate: "June 2025",
      endDate: "August 2025",
      description: [
        "Conducted a state-of-the-art review in Text-to-Speech (TTS) and developed an accelerated paper retrieval app with a ranking system using Streamlit.",
        "Formatted data, fine-tuned, and ran inference for XTTS on Google Colab (PyTorch & GPT-2) to add Maltese language support without regressions.",
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
        // TODO Conception et développement full-stack des applications scientifiques \href{https://www.3ds.com/products/biovia/scientific-notebook}{Scientific Notebook} et \href{https://blog.3ds.com/brands/biovia/retrosynthetic-analysis-made-easy-with-biovia-reaction-planner/}{Reaction Planner}, en environnement Agile (Angular, Java, TypeScript, Python, SPARQL) et documentation
        "Pilotage d'une file de calcul distribuée (de la spécification à la production) augmentant la fiabilité de 40 à 100%, même en charge.",
        // TODO \textbf{Pilotage} et développement (à l'aide de design patterns) d'une file de calcul distribuée, de la spécification et d'une PoC à la mise en production en \textbf{coordonnant} Dev/PM/QA/UX augmentant \textbf{la fiabilité de 40 à 100\%, même en charge.
        "Définition et création d'un Agent IA LangChain et d'un serveur MCP pour la conversion de molécules, validés par des contrats PACT et des tests de routage LLM.",
        // TODO Définition et création d'un \textbf{Agent IA LangChain} robuste et d'un serveur \textbf{MCP} permettant de convertir des molécules dans un format standard, de calculer des scores de synthétisabilité et de les interpréter via des outils à partir de requêtes en langage naturel. Validation du système par un serveur MCP mock, des contrats de flux \textbf{PACT} et des tests évaluant les décisions de routage des LLM. Toutes les erreurs sont gérées par des états spéciaux et du pré/post-processing.
        "Livraison autonome de fonctionnalités multi-environnements assurée par des tests d'intégration et unitaires (Jasmine, Page Objects, JMeter).",
        // TODO Livraison \textbf{autonome} de fonctionnalités \textbf{multi-environnements} (Java, Node.js, Docker, Python, Angular) dont la qualité est assurée par tests unitaires/intégration (Jasmine, Page Objects, PCS) et revues de code. Formation et documentation rigoureuse à l'usage des équipes.
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP", "TDD"],
      // TODO
      // Méthodes agiles
      // API Postman
      // Node.js
      // Patrons de conception
      // Jest
      // SPARQL
      // Ingénierie
      // HTML
      // JUnit
      // Git
      // Développement de carrière
      // Jasmine
      // Bases de données
      // Cascading Style Sheets (CSS)
      // Modélisation
      // Résolution de problèmes
      // JavaScript
      // Linux
      // Développement front-end
      // Docker
      // TypeScript
      // Java
      // Python (langage de programmation)
      // Gestion humaine
      // Script Shell
      // Representational State Transfer (REST)
      // Angular
      // Algorithmes
      // Anglais
      // LangChain
      // Large Language Models (LLM)
      // Agentic AI Development
      // AI Agents
      // Cloud Computing
      // Distributed Systems
      // API Security
      // Cloud Security
      // Containerization
      // Docker Products
      // Développement web back-end
      // Développement web
      // Express.js
      // Langage de modélisation unifié (UML)
      // Model Context Protocol (MCP)
      // Test Driven Development
    },
    {
      id: "malta",
      role: "Stagiaire Recherche (NLP)",
      company: "University of Malta - Dept. of AI", // TODO Department of Artificial Intelligence, Faculty of ICT, L-Università ta' Malta (University of Malta)
      location: "Malte",
      startDate: "Juin 2025",
      endDate: "Août 2025",
      description: [
        // TODO Réalisé une revue de l'état de l'art en \textbf{synthèse vocale} (TTS). Développé une application de recherche accélérée d’articles avec système de classement et filtres (\href{https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/}{Streamlit})
        "Réalisé une revue de l'état de l'art en synthèse vocale (TTS) et développé une application de recherche d’articles avec Streamlit.",
        // TODO Formaté les données, réalisé le \textbf{fine-tuning} et l'inférence de \href{https://arxiv.org/abs/2406.04904}{XTTS} sur Google Colab (\textbf{PyTorch} \& GPT-2) pour y ajouter le maltais sans régression. Le code documenté et robuste est disponible sur \href{https://github.com/Wubpooz/Malta-TTS/tree/main/FineTuning}{GitHub} et Hugging Face.
        "Formaté les données et réalisé le fine-tuning de XTTS sur Google Colab (PyTorch & GPT-2) pour ajouter le maltais sans régression.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "Hugging Face"],
      // TODO
      // Anglais
      // PyTorch
      // Git
      // Apprentissage automatique
      // Modélisation
      // Résolution de problèmes
      // Python (langage de programmation)
      // Model Training
      // Fine Tuning
      // Big Data
      // Text-to-Speech Synthesis
      // TTS
      // Research Skills
      // Scientific Communications
      // Datasets
    },
    { //TODO
      id: "apprenti-chercheur",
      role: "Stagiare pour le programme Apprenti Chercheur de Polytechnique",
      company: "Institut d'Électronique Fondamentale & Synchrotron Soleil",
      location: "Orsay, France",
      startDate: "2016",
      endDate: "2019",
      description: [
        "Étude de la distribution spatiale et diamétrale de nanofils AuGe"
      ]
    },
    { // TODO
      id: "3eme",
      role: "Stage 3ème",
      company: "Synchrotron Soleil",
      location: "Orsay, France",
      startDate: "2019",
      endDate: "2020",
      description: [
        "Contrôle de faisceaux lumineux, coloration et  traitement d’images UV"
      ]
    }
  ],
  ar: [
    {
      id: "dassault",
      role: "متدرّب مهندس Fullstack وذكاء اصطناعي",
      company: "Dassault Systèmes",
      location: "فيليزي-فياكو بلو، فرنسا",
      startDate: "2023",
      endDate: "حاليًا",
      description: [
        "قدت تطوير طابور حوسبة موزّع بالتنسيق مع فرق متعددة التخصصات، ما رفع الاعتمادية من 40% إلى 100% حتى تحت الضغط.",
        "صممت وطورّت وكيلًا ذكياًا باستخدام LangChain وخادم MCP لتحويل الجزيئات، وتم التحقق منه عبر خوادم وهمية وعقود PACT واختبارات توجيه LLM.",
        "سلّمت ميزات بشكل مستقل عبر عدة بيئات مع ضمان الجودة عبر اختبارات الوحدة/التكامل (Jasmine وPage Objects وJUnit وJMeter) ومراجعات الكود.",
      ],
      tags: ["Angular", "Java", "TypeScript", "Python", "LangChain", "MCP", "TDD"],
    },
    {
      id: "malta",
      role: "متدرب بحث (معالجة اللغة الطبيعية)",
      company: "جامعة مالطا - قسم الذكاء الاصطناعي",
      location: "مالطا",
      startDate: "يونيو 2025",
      endDate: "أغسطس 2025",
      description: [
        "أعددت مراجعة حديثة في تحويل النص إلى كلام (TTS) وطوّرت تطبيقًا لتسريع البحث في الأوراق العلمية مع نظام ترتيب باستخدام Streamlit.",
        "هيّأت البيانات، وأجريت fine-tuning و inference لنموذج XTTS على Google Colab (PyTorch وGPT-2) لإضافة دعم المالطية دون أي تراجع في الأداء.",
      ],
      tags: ["Python", "PyTorch", "XTTS", "Streamlit", "Hugging Face"],
    },
  ],
}

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return experiencesByLocale[locale]
}
