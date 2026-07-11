import type { Locale } from "@/i18n";

export interface LanguageEntry {
  name: string;
  level: string;
  details?: string[];
};

export interface InterestEntry {
  name: string;
  icon: string; // Lucide icon name
};

const languagesByLocale: Record<Locale, LanguageEntry[]> = {
  en: [
    {
      name: "French",
      level: "Bilingual or native proficiency",
    },
    {
      name: "English",
      level: "Professional working proficiency",
      details: [
        "TOEIC (Test of English for International Communication): 990, CEFR C1",
        "English CEFR C1 (Oral/Written Expression & Comprehension) - ICIMS",
        "Duolingo Score: 130 (May 2026)"
      ]
    },
    {
      name: "German",
      level: "Limited working proficiency",
    },
    {
      name: "Arabic",
      level: "Elementary proficiency",
    }
  ],
  fr: [
    {
      name: "Français",
      level: "Bilingue ou langue natale",
    },
    {
      name: "Anglais",
      level: "Capacité professionnelle fonctionnelle",
      details: [
        "Score Duolingo : 130 (Mai 2026)",
        "TOEIC (Test of English for International Communication) : 990, C1",
        "English CEFR C1 (Expression/Compréhension orale, Expression/Compréhension écrite) - ICIMS"
      ]
    },
    {
      name: "Allemand",
      level: "Capacité professionnelle limitée",
    },
    {
      name: "Arabe",
      level: "Notions de base",
    }
  ],
  ar: [
    {
      name: "الفرنسية",
      level: "ثنائية اللغة أو اللغة الأم",
    },
    {
      name: "الإنجليزية",
      level: "كفاءة مهنية عملية",
      details: [
        "رصيد دولينجو: 130 (مايو 2026)",
        "اختبار TOEIC (اختبار اللغة الإنجليزية للتواصل الدولي): 990، مستوى CEFR C1",
        "معيار CEFR C1 للغة الإنجليزية (التعبير/الفهم الشفهي والكتابي) - ICIMS"
      ]
    },
    {
      name: "الألمانية",
      level: "كفاءة مهنية محدودة",
    },
    {
      name: "العربية",
      level: "معرفة أساسية",
    }
  ]
}

const interestsByLocale: Record<Locale, InterestEntry[]> = {
  en: [
    { name: "Operations Research (OR)", icon: "Network" },
    { name: "Cryptography", icon: "Lock" },
    { name: "Image & Signal (Wavelets)", icon: "Waves" },
    { name: "Artificial Intelligence (AI)", icon: "Brain" },
    { name: "Bioinformatics", icon: "Dna" },
    { name: "Cheerleading", icon: "Sparkles" },
    { name: "Photography", icon: "Camera" },
    { name: "Horse Riding", icon: "Award" }
  ],
  fr: [
    { name: "Recherche Opérationnelle (RO)", icon: "Network" },
    { name: "Cryptographie", icon: "Lock" },
    { name: "Traitement d'Image / Signal (Ondelettes)", icon: "Waves" },
    { name: "Intelligence Artificielle (IA)", icon: "Brain" },
    { name: "Bioinformatique", icon: "Dna" },
    { name: "Cheerleading", icon: "Sparkles" },
    { name: "Photographie", icon: "Camera" },
    { name: "Équitation", icon: "Award" }
  ],
  ar: [
    { name: "بحوث العمليات (RO)", icon: "Network" },
    { name: "علم التعمية (Crypto)", icon: "Lock" },
    { name: "معالجة الصور والإشارات (المويجات)", icon: "Waves" },
    { name: "الذكاء الاصطناعي (IA)", icon: "Brain" },
    { name: "المعلوماتية الحيوية", icon: "Dna" },
    { name: "المشجعات (Cheerleading)", icon: "Sparkles" },
    { name: "التصوير الفوتوغرافي", icon: "Camera" },
    { name: "الفروسية", icon: "Award" }
  ]
};

export function getLanguages(locale: Locale): LanguageEntry[] {
  return languagesByLocale[locale];
};

export function getInterests(locale: Locale): InterestEntry[] {
  return interestsByLocale[locale];
};
