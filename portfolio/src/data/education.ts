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
      //TODO logos
      //TODO add https://www.francecompetences.fr/recherche/rncp/40952/
      id: "polytech",
      degree: "Ingénieur Informatique & Ingénierie Mathématique",
      school: "Polytech Paris-Saclay",
      location: "Orsay, France",
      startDate: "2023",
      endDate: "Présent",
      tags: ["C++ Avancé", "HPC", "Algorithmes Distribués", "Théorie des Graphes", "SVD", "ODE/PDE", "NLP", "Cybersécurité"],
      //TODO more section with the projects done, a recap and stuff like this:
      // Most relevants: 
      // - C++ avancé
      // - GPU + CUDA
      // - HPC (MPI, OpenMP, SIMD)
      // - algo distrib (leader election, consensus with Byzantine nodes & crashes)
      // - Apprentissage automatique (supervised/unsupervised learning & frequent pattern mining)
      // - Recherche Opérationnelle (algo génétique, prog dynamique, OLNE, Branch & Bound, simplexe)
      // - Méthodes numériques (approximation moindres carrés, SVD, résolution, factorisation QR)
      // - Calcul scientifique (LU, Cholesky, Gaus-Seidel, méthode de Newton R^n, résolution d'EDP, algorithme de Thomas & schémas explicites and implicites)
      // - NLP (cosine similarity, tokenizer, transformer, finetuning, RAG, MCP)
      // - Cybersécurité

      // ==== Management ====
      // Stratégies d'entreprises en environnement complexe
      // Piloter une entreprise comme un leader
      // Gestion de projet
      // Economie générale & d'entreprise
      // Droit social
      // Management

      // ==== Maths =====
      // Proba & Stats (MATLAB)
      // Analyse
      // Algèbre

      // ==== Languages ====
      // C++ (types, encapsulation, most vexing parse, surcharge, polymorphisme, SOLID, lvalue/rvalue, transfert, RAII, génériques, anonymes, templates variadiques, traits, ...)
      // Frameworks professionnels (front-end, Angular 21, Tailwind CSS)
      // Architectures orientées services (Docker, TS, Node + bun, Hono, Zod, Prisma, BetterAuth, Postman, OpenAPI)
      // Programmation sur cartes graphiques (CUDA, GPU memory, reductions, matrix multiplication)
      // Systèmes de gestion de bases de données (SQL, MCD, clés)
      // Développement Orienté Objet (Java & C++)

      // ==== Algorithms ====
      // Calcul haute performance (openmp)
      // Informatique Quantique définitions, produit tensoriel, qubits, gates, DeutschJozsa, Grover, QFT, myqlm/qat)
      // Algorithmes et programmation distribués (communication, leader election, HS algo, consensus w. Byzantin & crashes, p2p chats, FloodSet, Avalanche & Snowball, blockchain)
      // Apprentissage automatique (supervised/unsupervised learning, kNN, naive bayes, SVM, decision trees + frequent pattern mining, KDD,PCA, clustering, apriori algorithm, LCM)
      // IA (minimax with alpha beta pruning, game theory + Project with  new AI Band aware dual perspective ResNet)
      // Recherche Opérationnelle (algo génétique, prog dynamique, OLNE, Branch & Bound, simplexe,
      // Méthodes numériques (approximation moindres carrés, SVD, résolution, factorisation QR)
      // Compilation (lexeur, ASA, sémantique, AST, optimisations => C avec loops, fonctions, malloc/free, tableaux, IO, pointeurs, stdlib, includes) 
      // Programmation parallèle (MPI, OpenMP, SIMD, efficacité & accélration)
      // Algorithmique (invariants, variants, complexité, tris
      // Algorithmique des graphes (connexité, parcours, arbres couvrants, flots, DFS, BFS, algos composantes fortement connexes, tri topologique, DIjkstra, Bellman-Ford, Kruskal, coloring, Prim, Ford & Fulkerson poru flot max)
      // Calcul scientifique (LU, Cholesky, Gaus-Seidel, méthode de Newton R^n, résolution d'EDP, algorithme de Thomas & schémas explicites and implicites)

      // ==== Other technical skills ====
      // Informatique graphique (GLSL Shader)
      // Tests de logiciels (cycle V, boites noirs/blanches, fonctionnels, régression, TDD, RIPR, JUNIT, pariwise, fuzzing, coverage, GFC, MC/DC coverage)
      // Réseaux
      // Qualité logicielle (framac, specs avec ACNL, AFL)
      // Science des données (complexité kolmogorov, MDL, PCA, MSE/MLE, GMM, training/overfitting, k-fold cross validation, loss, supervised learning, linear/logistic regression, linear classifier, neural networks) 
      // Sécurité (PDCA, définition risque, CIA, cryptographie, certificat, identitificaiton, firewall)
      // Visualisation des données (database normalisation, data extraction, pitfalls, how to)
      // Cybersécurité (crypto sym/asym, IGC, certificats, TPM, XSS, injection SQL, prompt injection...)
      // Architecture (MIPS, assembly)
      // Système (processus, threads, ordonnancement, virtualisation, synchronisation)
      // UML
      // Vibecoding (skills, agents, opencode)
      // NLP (word2vec, cosine similarity, tokenizer, data biais, cross/self attention,encoder/decoder transformer, pretraining with masking or next word prediction, finetuning with PEFT and LORA, RAG with chunking/retrival/vector DB, A2A, MCP,Document AI, VLM, RLHF & Alignment with supervised FT + reward training + RL opti)



      // Java
      // Mathématiques
      // Langage de modélisation unifié (UML)
      // Apprentissage supervisé
      // GNU Make
      // Informatique quantique
      // JUnit
      // OpenCV
      // Scikit-learn
      // MySQL
      // Développement front-end
      // Anglais
      // Python (langage de programmation)
      // Programmation sur carte graphique
      // Object-Oriented Programming (OOP)
      // Apprentissage automatique
      // C++
      // Bases de données
      // Angular
      // Ingénierie
      // JavaScript
      // HTML
      // Développement de carrière
      // Modélisation
      // Linux
      // Algorithmes
      // VMware
      // Cascading Style Sheets (CSS)
      // C (Programming Language)
      // Résolution de problèmes
      // Management
      // PHP
      // Git
      // Data Analysis

    },
    {
      //TODO https://ecole-universitaire-paris-saclay.fr/formation/licence/informatique/l2-informatique
      id: "licence",
      degree: "Licence d'informatique - mention bien", // 15.22/20, 7e/89
      school: "Université Paris-Saclay",
      location: "Orsay, France",
      startDate: "2021",
      endDate: "2023",
      tags: ["Apprentissage Supervisé", "POO", "Programmation Fonctionnelle", "Logique", "Calculabilité"],
      // TODO pandas, scikit-learn, OOP, BDD, Ocaml, Linux, Calculabilité, C, Programation fonctionnelle, Git
    },
    {
      //TODO https://lyceedelessouriau.fr/index.php/enseignement-superieur/la-cpge-pcsi-psi/
      id: "prepa",
      degree: "Classes Préparatoires PSI",
      // TODO Classes Préparatoires aux Grandes Ecoles PSI , Maths, Physique, Chimie et Sciences de L’ingénieur
      // TODO CPGE PSI du Lycée de l'Essouriau en partenariat étroit avec l'Université Paris-Saclay
      school: "Lycée de l'Essouriau",
      location: "Les Ulis, France",
      startDate: "2019",
      endDate: "2021",
      tags: ["Mathématiques", "Physique", "Modélisation", "Résolution de problèmes"], // Python, Anglais
    },
    {
      id: "baccalaureat",
      degree: "Baccalauréat scientifique",
      school: "Lycée de l'Essouriau",
      location: "Les Ulis, France",
      startDate: "2016",
      endDate: "2019",
      tags: ["Java", "HTML", "Cascading Style Sheets (CSS)", "Résolution de problèmes"],
    },
    {
      id: "college",
      degree: "Brevet des collèges",
      school: "Collège de La Guyonnerie",
      location: "Les Ulis, France",
      startDate: "2012",
      endDate: "2016",
    }
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
