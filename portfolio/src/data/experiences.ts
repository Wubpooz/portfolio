import type { Locale } from "@/i18n";
import type { ExperienceEntry } from "./types";

const experiencesByLocale: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      id: "dassault",
      role: "Fullstack & AI Engineer Apprentice",
      company: "[Dassault Systèmes](https://www.3ds.com)",
      location: "Vélizy-Villacoublay, France",
      startDate: "2023",
      endDate: "Present",
      logo: "dassaultsystemes",
      description: [
        "Conception and full-stack development (front-end and back-end) of scientific applications [Scientific Notebook](https://www.3ds.com/products/biovia/scientific-notebook) and [Reaction Planner](https://blog.3ds.com/brands/biovia/retrosynthetic-analysis-made-easy-with-biovia-reaction-planner/) under Agile methodology (Angular, Java, TypeScript, Python, SPARQL).",
        "Documentation and team training on delivered features, new technologies, development best practices, and design patterns.",
        "Led the development of a distributed computing queue (from specification to production) by coordinating Dev/PM/QA/UX teams, increasing the reliability of our synthesisability calculation API from 40% to 100%, even under heavy load.",
        "Engineered a robust LangChain AI agent and a Model Context Protocol (MCP) server to convert molecules, calculate synthesisability scores, and interpret them in natural language, validated by PACT flow contracts, unit/integration tests, and LLM situational evaluations. Errors are handled with custom states and pre/post-processing to ensure system robustness and output quality.",
        "Autonomously delivered features across multi-environment setups (Java, Node.js, Docker, Python, Angular) with unit and integration tests (Jasmine, Page Objects, JUnit, JMeter) and code reviews."
      ],
      tags: ["Angular", "Java", "TypeScript", "JavaScript", "Python", "LangChain", "MCP", "TDD", "Node.js", "Docker", "REST", "Jasmine", "JUnit", "Postman", "Express.js", "Distributed Systems", "AI Agents", "Cloud Computing", "API Security", "Agile", "UML", "Design Patterns", "Git", "Linux", "BDD", "SQL", "SPARQL", "English"],
    },
    {
      id: "malta",
      role: "Research Intern (NLP)",
      company: "[Department of Artificial Intelligence - L-Università ta' Malta (University of Malta)](https://www.um.edu.mt/ict/ai/)",
      location: "Malta",
      startDate: "June 2025",
      endDate: "August 2025",
      logo: "um",
      description: [
        "Conducted a state-of-the-art review in Text-to-Speech (TTS) and developed an accelerated scientific paper retrieval application with a ranking system and filters.",
        "Formatted data, fine-tuned, and ran inference for the [XTTS](https://arxiv.org/abs/2406.04904) model on Google Colab (PyTorch & GPT-2) to add Maltese language support without regressions on other languages.",
        "Code available on [GitHub](https://github.com/Wubpooz/Malta-TTS/tree/main/FineTuning) and Hugging Face. Search application available on [Streamlit](https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/)."
      ],
      tags: ["Python", "PyTorch", "TTS", "Model Training", "Fine Tuning", "Big Data", "Research", "Streamlit", "Hugging Face", "English"],
    },
    {
      id: "apprenti-chercheur",
      role: "Research Apprentice Intern (Polytechnique Program)",
      company: "[Centre for Nanosciences and Nanotechnology](https://www.c2n.universite-paris-saclay.fr/en/laboratory/presentation/)",
      location: "Orsay, France",
      startDate: "2016",
      endDate: "2016",
      logo: "apprenti-chercheur",
      description: [
        "Study of spatial and diametrical distribution of AuGe nanowires"
      ],
      tags: ["Physics", "Nanotechnology", "Electron Microscopy", "Data Analysis"]
    },
    {
      id: "3eme",
      role: "Short Internship (9th Grade)",
      company: "[Synchrotron SOLEIL](https://www.synchrotron-soleil.fr)",
      location: "Orsay, France",
      startDate: "2016",
      endDate: "2016",
      logo: "synchrotron",
      description: [
        "Beam control and alignment, coloration and UV image processing, and introduction to mass spectrometry and circular dichroism."
      ],
      tags: ["Optics", "Image Processing", "Electron Microscopy"]
    }
  ],
  fr: [
    {
      id: "dassault",
      role: "Ingénieur Fullstack & IA (Apprenti)",
      company: "[Dassault Systèmes](https://www.3ds.com)",
      location: "Vélizy-Villacoublay, France",
      startDate: "2023",
      endDate: "Présent",
      logo: "dassaultsystemes",
      description: [
        //TODO add mistral ai and more details
        "Conception et développement full-stack (front end et back end) des applications scientifiques [Scientific Notebook](https://www.3ds.com/products/biovia/scientific-notebook) et [Reaction Planner](https://blog.3ds.com/brands/biovia/retrosynthetic-analysis-made-easy-with-biovia-reaction-planner/), en environnement Agile (Angular, Java, TypeScript, Python, SPARQL).",
        "Documentation et formation des équipes sur les fonctionnalités livrées, les nouvelles technologies, les bonnes pratiques de développement et les design patterns.",
        "Pilotage et développement d'une file de calcul distribuée (de la spécification à la production) en coordonnant les équipes Dev/PM/QA/UX, augmenting la fiabilité de 40 à 100% de notre API de calcul de la synthétisabilité, même en charge.",
        "Définition et création d'un Agent IA LangChain et d'un serveur Model Context Protocol (MCP) permettant de convertir des molécules, calculer des scores de synthétisabilité et les interpréter en langage naturel, validés par des contrats de flux PACT, des tests unitaires, d'intégration et d'évaluation situationnelle du Large Language Model (LLM). Les erreurs sont gérées par des états spéciaux et du pré/post-processing afin d'assurer la robustesse du système et la qualité des résultats.",
        "Livraison autonome de fonctionnalités multi-environnements (Java, Node.js, Docker, Python, Angular) assurée par des tests d'intégration et unitaires (Jasmine, Page Objects, JUnit, JMeter) et revues de code."
      ],
      tags: ["Angular", "Java", "TypeScript", "JavaScript", "Python", "LangChain", "MCP", "TDD", "Node.js", "Docker", "REST", "Jasmine", "JUnit", "Postman", "Express.js", "Distributed Systems", "Agents IA", "Cloud Computing", "API Security", "Agile", "UML", "Design Patterns", "Git", "Linux", "BDD", "SQL", "SPARQL", "Anglais"],
    },
    {
      id: "malta",
      role: "Stagiaire Recherche (NLP)",
      company: "[Department of Artificial Intelligence - L-Università ta' Malta (Université de Malte)](https://www.um.edu.mt/ict/ai/)",
      location: "Malte",
      startDate: "Juin 2025",
      endDate: "Août 2025",
      logo: "um",
      description: [
        "Réalisation d'une revue de l'état de l'art en synthèse vocale (TTS) et développement d'une application de recherche accélérée d'articles scientifiques avec système de classement et filtres.",
        "Formatage des données, entraînement par fine-tuning et inférence du modèle [XTTS](https://arxiv.org/abs/2406.04904) sur Google Colab (PyTorch & GPT-2) pour y ajouter la langue maltaise sans régression sur les autres langues.",
        "Code disponible sur [GitHub](https://github.com/Wubpooz/Malta-TTS/tree/main/FineTuning) et Hugging Face. Application de recherche disponible sur [Streamlit](https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/)."
      ],
      tags: ["Python", "PyTorch", "TTS", "Model Training", "Fine Tuning", "Big Data", "Research", "Streamlit", "Hugging Face", "Anglais"],
    },
    {
      id: "apprenti-chercheur",
      role: "Stagiaire Apprenti Chercheur (Programme Polytechnique)",
      company: "[Centre de Nanosciences et de Nanotechnologies](https://www.c2n.universite-paris-saclay.fr/fr/laboratoire/presentation/)",
      location: "Orsay, France",
      startDate: "2016",
      endDate: "2016",
      logo: "apprenti-chercheur",
      description: [
        "Étude de la distribution spatiale et diamétrale de nanofils AuGe"
      ],
      tags: ["Physique", "Nanotechnologie", "Microscopie Électronique", "Analyse de Données"]
    },
    {
      id: "3eme",
      role: "Stage de 3ème",
      company: "[Synchrotron SOLEIL](https://www.synchrotron-soleil.fr)",
      location: "Orsay, France",
      startDate: "2016",
      endDate: "2016",
      logo: "synchrotron",
      description: [
        "Contrôle et alignement de faisceaux de lumière, coloration et traitement d’images UV et découverte de la spectrométrie de masse et du dichroïsme circulaire."
      ],
      tags: ["Optique", "Traitement d'Image", "Microscopie Électronique"]
    }
  ],
  ar: [
    {
      id: "dassault",
      role: "متدرّب مهندس Fullstack وذكاء اصطناعي",
      company: "[Dassault Systèmes](https://www.3ds.com)",
      location: "فيليزي-فياكوبلاي، فرنسا",
      startDate: "2023",
      endDate: "حاليًا",
      logo: "dassaultsystemes",
      description: [
        "تصميم وتطوير full-stack (الواجهة الأمامية والخلفية) للتطبيقات العلمية [Scientific Notebook](https://www.3ds.com/products/biovia/scientific-notebook) و [Reaction Planner](https://blog.3ds.com/brands/biovia/retrosynthetic-analysis-made-easy-with-biovia-reaction-planner/) ضمن منهجية Agile (Angular, Java, TypeScript, Python, SPARQL).",
        "توثيق وتدريب الفرق على الميزات المسلمة، والتقنيات الجديدة، وأفضل ممارسات التطوير وأنماط التصميم (design patterns).",
        "قيادة وتطوير طابور حوسبة موزع (من المواصفات إلى الإنتاج) بالتنسيق مع فرق Dev/PM/QA/UX، مما زاد من موثوقية واجهة برمجة التطبيقات (API) لحساب التوليف من 40% إلى 100% حتى تحت الضغط العالي.",
        "تحديد وإنشاء وكيل ذكاء اصطناعي (LangChain) قوي وخادم Model Context Protocol (MCP) لتحويل الجزيئات، وحساب درجات التوليف، وتفسيرها بلغة طبيعية، مع التحقق عبر عقود تدفق PACT، واختبارات الوحدة والتكامل، وتقييم LLM الموقفي. يتم التعامل مع الأخطاء عبر حالات مخصصة ومعالجة مسبقة ولاحقة لضمان قوة النظام وجودة النتائج.",
        "تسليم ميزات بشكل مستقل عبر بيئات متعددة (Java, Node.js, Docker, Python, Angular) مع اختبارات الوحدة والتكامل (Jasmine, Page Objects, JUnit, JMeter) ومراجعات الكود."
      ],
      tags: ["Angular", "Java", "TypeScript", "JavaScript", "Python", "LangChain", "MCP", "TDD", "Node.js", "Docker", "REST", "Jasmine", "JUnit", "Postman", "Express.js", "Distributed Systems", "وكلاء الذكاء الاصطناعي", "Cloud Computing", "API Security", "Agile", "UML", "Design Patterns", "Git", "Linux", "BDD", "SQL", "SPARQL", "الإنجليزية"],
    },
    {
      id: "malta",
      role: "متدرب بحث (معالجة اللغة الطبيعية)",
      company: "[قسم الذكاء الاصطناعي - جامعة مالطا](https://www.um.edu.mt/ict/ai/)",
      location: "مالطا",
      startDate: "يونيو 2025",
      endDate: "أغسطس 2025",
      logo: "um",
      description: [
        "إجراء مراجعة لأحدث التقنيات في مجال تحويل النص إلى كلام (TTS) وتطوير تطبيق بحث لتسريع العثور على الأوراق العلمية مع نظام ترتيب وتصنيف وفلاتر.",
        "تهيئة البيانات وتدريب نموذج [XTTS](https://arxiv.org/abs/2406.04904) (Fine-tuning) وتشغيل الاستدلال على Google Colab (PyTorch و GPT-2) لإضافة دعم اللغة المالطية دون تراجعات في اللغات الأخرى.",
        "الكود متاح على [GitHub](https://github.com/Wubpooz/Malta-TTS/tree/main/FineTuning) و Hugging Face. تطبيق البحث متاح على [Streamlit](https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/)."
      ],
      tags: ["Python", "PyTorch", "TTS", "Model Training", "Fine Tuning", "Big Data", "Research", "Streamlit", "Hugging Face", "الإنجليزية"],
    },
    {
      id: "apprenti-chercheur",
      role: "متدرب باحث مبتدئ (برنامج Polytechnique)",
      company: "[مركز علوم النانو والتكنولوجيا النانوية](https://www.c2n.universite-paris-saclay.fr/en/laboratory/presentation/)",
      location: "أورسيه، فرنسا",
      startDate: "2016",
      endDate: "2016",
      logo: "apprenti-chercheur",
      description: [
        "دراسة التوزيع المكاني والقطري لأسلاك AuGe النانوية"
      ],
      tags: ["الفيزياء", "تكنولوجيا النانو", "المجهر الإلكتروني", "تحليل البيانات"]
    },
    {
      id: "3eme",
      role: "تدريب قصير (الصف التاسع)",
      company: "[Synchrotron SOLEIL](https://www.synchrotron-soleil.fr)",
      location: "أورسيه، فرنسا",
      startDate: "2016",
      endDate: "2016",
      logo: "synchrotron",
      description: [
        "التحكم في حزم الضوء ومحاذاتها، التلوين ومعالجة صور الأشعة فوق البنفسجية، والتعرف على مطيافية الكتلة والثنائية اللون الدائرية."
      ],
      tags: ["البصريات", "معالجة الصور", "المجهر الإلكتروني"]
    }
  ],
}

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return experiencesByLocale[locale];
};
