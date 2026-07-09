import type { Locale } from "@/i18n"
import type { EducationEntry } from "./types"

const educationsByLocale: Record<Locale, EducationEntry[]> = {
  en: [
    {
      id: "polytech",
      degree: "Computer Science & Mathematical Engineering Engineer",
      school: "Polytech Paris-Saclay",
      location: "Orsay, France",
      startDate: "2023",
      endDate: "Present",
      tags: ["Advanced C++", "HPC", "Distributed Algorithms", "Graph Algorithms", "ILP", "SVD", "ODE/PDE", "NLP", "Cybersecurity"],
    },
    {
      id: "licence",
      degree: "Computer Science Bachelor's degree - with honors",
      school: "Université Paris-Saclay",
      location: "Orsay, France",
      startDate: "2021",
      endDate: "2023",
      tags: ["Supervised Learning", "OOP", "Functional Programming", "Logic", "Computability"],
    },
    {
      id: "prepa",
      degree: "PSI Preparatory Classes",
      school: "Lycée de l'Essouriau",
      location: "Les Ulis, France",
      startDate: "2019",
      endDate: "2021",
      tags: ["Mathematics", "Physics", "Modeling", "Problem Solving"],
    },
  ],
  fr: [
    {
      id: "polytech",
      degree: "Ingénieur Informatique & Ingénierie Mathématique",
      school: "Polytech Paris-Saclay",
      location: "Orsay, France",
      startDate: "2023",
      endDate: "Présent",
      tags: ["C++ Avancé", "HPC", "Algorithmes Distribués", "Théorie des Graphes", "SVD", "ODE/PDE", "NLP", "Cybersécurité"],
    },
    {
      id: "licence",
      degree: "Licence d'informatique - mention bien",
      school: "Université Paris-Saclay",
      location: "Orsay, France",
      startDate: "2021",
      endDate: "2023",
      tags: ["Apprentissage Supervisé", "POO", "Programmation Fonctionnelle", "Logique", "Calculabilité"],
    },
    {
      id: "prepa",
      degree: "Classes Préparatoires PSI",
      school: "Lycée de l'Essouriau",
      location: "Les Ulis, France",
      startDate: "2019",
      endDate: "2021",
      tags: ["Mathématiques", "Physique", "Modélisation", "Résolution de problèmes"],
    },
  ],
  ar: [
    {
      id: "polytech",
      degree: "مهندس في علوم الحاسوب والهندسة الرياضية",
      school: "Polytech Paris-Saclay",
      location: "أورسيه، فرنسا",
      startDate: "2023",
      endDate: "حاليًا",
      tags: ["C++ متقدم", "الحوسبة عالية الأداء", "الخوارزميات الموزعة", "خوارزميات الرسوم البيانية", "البرمجة الخطية الصحيحة", "تحليل القيم المفردة", "معادلات تفاضلية عادية وجزئية", "معالجة اللغة الطبيعية", "الأمن السيبراني"],
    },
    {
      id: "licence",
      degree: "إجازة في علوم الحاسوب - بتقدير جيد",
      school: "Université Paris-Saclay",
      location: "أورسيه، فرنسا",
      startDate: "2021",
      endDate: "2023",
      tags: ["التعلم الخاضع للإشراف", "البرمجة كائنية التوجه", "البرمجة الوظيفية", "المنطق", "قابلية الحساب"],
    },
    {
      id: "prepa",
      degree: "الأقسام التحضيرية PSI",
      school: "Lycée de l'Essouriau",
      location: "لي ألز، فرنسا",
      startDate: "2019",
      endDate: "2021",
      tags: ["الرياضيات", "الفيزياء", "النمذجة", "حل المشكلات"],
    },
  ],
}

export function getEducations(locale: Locale): EducationEntry[] {
  return educationsByLocale[locale]
}
