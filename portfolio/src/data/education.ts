import type { Locale } from "@/i18n";
import type { EducationEntry } from "./types";

const educationsByLocale: Record<Locale, EducationEntry[]> = {
  en: [
    {
      id: "polytech",
      degree: "Engineering Degree in Computer Science & Applied Mathematics",
      school: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      location: "Orsay, France",
      startDate: "2023",
      endDate: "Present",
      logo: "/icons/Logo_Polytech.svg",
      description: [
        "Engineering curriculum accredited by the CTI (Commission des Titres d'Ingénieur, [RNCP 40952](https://www.francecompetences.fr/recherche/rncp/40952/)).",
        "Key coursework: Advanced C++ & GPU (CUDA), High Performance Computing (MPI, OpenMP, SIMD), Distributed Algorithms and Systems, Operations Research (Simplex, OLNE, Branch & Bound, Genetic Algorithms), Quantum Computing (myqlm/qat), Cybersecurity, Numerical Methods, NLP (Transformers, Fine-tuning, PEFT, LoRA, RAG, MCP), Databases (PostgreSQL, MySQL, SPARQL), Compiler Design, Software Quality, Networking and Systems.",
        "Training in management, project management, and business strategies.",
        "Projects completed: [Media Watchlist Service](/projects/watchlist-service), [Vireli](/projects/vireli), [ResNet Board Game Evaluator](/projects/minimax-resnet), [How Europe Spends Its Time](/projects/how-europe-spends-its-time), [Quizine](/projects/quizine), [C Compiler](/projects/compilateur-c-java), [Business Simulation Games](/projects/jeux-entreprise), [Magnus Carlos](/projects/magnus-carlos), [Nyxen](/projects/nyxen), [House Finder](/projects/house-finder)."
      ],
      tags: ["Advanced C++", "HPC", "Distributed Algorithms", "Graph Theory", "SVD", "ODE/PDE", "Quantum Computing", "Databases", "NLP", "Cybersecurity"],
    },
    {
      id: "licence",
      degree: "Computer Science Bachelor's degree - with honors", // 15.22/20, 7th/89
      school: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      location: "Orsay, France",
      startDate: "2021",
      endDate: "2023",
      logo: "/icons/logo-ups.svg",
      description: [
        "In-depth theoretical and practical computer science curriculum ([Program details](https://ecole-universitaire-paris-saclay.fr/formation/licence/informatique/l2-informatique)).",
        "Key coursework: Object-Oriented Programming (Java/C++), Functional Programming (OCaml), Data Structures & Databases, Data Analysis (pandas, scikit-learn), Linux, Computability & Complexity.",
        "Projects completed: [Escape the Mummy](/projects/escape-the-mummy), [CLI Messaging](/projects/cli-messaging)."
      ],
      tags: ["Supervised Learning", "OOP", "Functional Programming", "Logic", "Computability", "Linux", "Databases"],
    },
    {
      id: "prepa",
      degree: "PSI Preparatory Classes",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "Les Ulis, France",
      startDate: "2019",
      endDate: "2021",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "Classes Préparatoires aux Grandes Écoles (CPGE) in PSI (Physics & Engineering Sciences) in close partnership with Université Paris-Saclay ([CPGE details](https://lyceedelessouriau.fr/index.php/enseignement-superieur/la-cpge-pcsi-psi/)).",
        "Intensive two-year curriculum in Mathematics, Physics, Chemistry, and Engineering Sciences, focusing on modeling and solving complex problems."
      ],
      tags: ["Mathematics", "Physics", "Modeling", "Problem Solving"],
    },
    {
      id: "baccalaureat",
      degree: "Scientific Baccalaureate",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "Les Ulis, France",
      startDate: "2016",
      endDate: "2019",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "First website created in high school: [LogiHub](/projects/logihub), an online game library hosting custom p5.js games (Reaction time, Pong, Space Invaders)."
      ],
      tags: ["Java", "HTML", "Cascading Style Sheets (CSS)", "Problem Solving"],
    },
    {
      id: "college",
      degree: "Middle School Certificate",
      school: "[Collège de La Guyonnerie](https://clg-laguyonnerie-bures.ac-versailles.fr/)",
      location: "Les Ulis, France",
      startDate: "2012",
      endDate: "2016",
      logo: "/icons/logo-guyonnerie.png",
    },
  ],
  fr: [
    {
      id: "polytech",
      degree: "Ingénieur Informatique & Ingénierie Mathématique",
      school: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      location: "Orsay, France",
      startDate: "2023",
      endDate: "Présent",
      logo: "/icons/Logo_Polytech.svg",
      description: [
        "Titre d'ingénieur Informatique et Ingénierie Mathématique diplômé (accrédité CTI, [RNCP 40952](https://www.francecompetences.fr/recherche/rncp/40952/)).",
        "Enseignements clés : C++ Avancé & GPU (CUDA), Calcul Haute Performance (MPI, OpenMP, SIMD), Algorithmes et Systèmes Distribués, Recherche Opérationnelle (Simplexe, OLNE, Branch & Bound, Algorithmes Génétiques), Informatique Quantique (myqlm/qat), Cybersécurité, Méthodes Numériques, NLP (Transformers, Fine-tuning, PEFT, LoRA, RAG, MCP), Bases de données (PostgreSQL, MySQL, SPARQL), Compilation, Qualité Logicielle, Réseaux et Systèmes.",
        "Formation au management, gestion de projet et stratégies d'entreprises.",
        "Projets réalisés : [Service de Watchlist Média](/projects/watchlist-service), [Vireli](/projects/vireli), [Évaluateur de Jeu ResNet](/projects/minimax-resnet), [How Europe Spends Its Time](/projects/how-europe-spends-its-time), [Quizine](/projects/quizine), [Compilateur de C](/projects/compilateur-c-java), [Jeux d'entreprise](/projects/jeux-entreprise), [Magnus Carlos](/projects/magnus-carlos), [Nyxen](/projects/nyxen), [House finder](/projects/house-finder)."
      ],
      tags: ["C++ Avancé", "HPC", "Algorithmes Distribués", "Théorie des Graphes", "SVD", "ODE/PDE", "Informatique Quantique", "Bases de données", "NLP", "Cybersécurité"],
      // Détails (don't delete) :
      // - algo distrib (leader election, consensus with Byzantine nodes & crashes)
      // - Apprentissage automatique (supervised/unsupervised learning & frequent pattern mining)
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
      // Recherche Opérationnelle (algo génétique, prog dynamique, OLNE, Branch & Bound, simplexe)
      // Méthodes numériques (approximation moindres carrés, SVD, résolution, factorisation QR)
      // Compilation (lexeur, ASA, sémantique, AST, optimisations => C avec loops, fonctions, malloc/free, tableaux, IO, pointeurs, stdlib, includes) 
      // Programmation parallèle (MPI, OpenMP, SIMD, efficacité & accélration)
      // Algorithmique (invariants, variants, complexité, tris)
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
    },
    {
      id: "licence",
      degree: "Licence d'informatique - mention bien", // 15.22/20, 7e/89
      school: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      location: "Orsay, France",
      startDate: "2021",
      endDate: "2023",
      logo: "/icons/logo-ups.svg",
      description: [
        "Formation approfondie en informatique théorique et pratique ([Détails du programme](https://ecole-universitaire-paris-saclay.fr/formation/licence/informatique/l2-informatique)).",
        "Compétences clés : Programmation orientée objet (Java/C++), Programmation fonctionnelle (OCaml), Structures de données et bases de données, Analyse de données (pandas, scikit-learn), Linux, Calculabilité et complexité.",
        "Projets réalisés : [Escape the Mummy](/projects/escape-the-mummy), [CLI Messaging](/projects/cli-messaging)."
      ],
      tags: ["Apprentissage Supervisé", "POO", "Programmation Fonctionnelle", "Logique", "Calculabilité", "Linux", "Bases de données"],
    },
    {
      id: "prepa",
      degree: "Classes Préparatoires PSI",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "Les Ulis, France",
      startDate: "2019",
      endDate: "2021",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "Classes Préparatoires aux Grandes Écoles (CPGE) en filière PSI (Physique et Sciences de l'Ingénieur), en partenariat avec l'Université Paris-Saclay ([Détails de la CPGE](https://lyceedelessouriau.fr/index.php/enseignement-superieur/la-cpge-pcsi-psi/)).",
        "Formation intensive de deux ans en Mathématiques, Physique, Chimie et Sciences de l'ingénieur, axée sur la modélisation et la résolution de problèmes complexes."
      ],
      tags: ["Mathématiques", "Physique", "Modélisation", "Résolution de problèmes"],
    },
    {
      id: "baccalaureat",
      degree: "Baccalauréat scientifique",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "Les Ulis, France",
      startDate: "2016",
      endDate: "2019",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "Premier site web créé au lycée : [LogiHub](/projects/logihub), une bibliothèque de jeux en ligne hébergeant des jeux p5.js personnalisés (temps de réaction, Pong, Space Invaders)."
      ],
      tags: ["Java", "HTML", "Cascading Style Sheets (CSS)", "Résolution de problèmes"],
    },
    {
      id: "college",
      degree: "Brevet des collèges",
      school: "[Collège de La Guyonnerie](https://clg-laguyonnerie-bures.ac-versailles.fr/)",
      location: "Les Ulis, France",
      startDate: "2012",
      endDate: "2016",
      logo: "/icons/logo-guyonnerie.png",
    }
  ],
  ar: [
    {
      id: "polytech",
      degree: "مهندس في علوم الحاسوب والهندسة الرياضية",
      school: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      location: "أورسيه، فرنسا",
      startDate: "2023",
      endDate: "حاليًا",
      logo: "/icons/Logo_Polytech.svg",
      description: [
        "شهادة مهندس معتمدة من CTI (المسجلة في [RNCP 40952](https://www.francecompetences.fr/recherche/rncp/40952/)).",
        "المساقات الرئيسية: C++ المتقدمة وحوسبة البطاقات الرسومية (CUDA)، الحوسبة عالية الأداء (MPI, OpenMP, SIMD)، الخوارزميات والأنظمة الموزعة، بحوث العمليات (السمبلكس، OLNE، التفريع والحد، الخوارزميات الجينية)، الحوسبة الكمومية (myqlm/qat)، الأمن السيبراني، الطرق العددية، معالجة اللغة الطبيعية (Transformers, Fine-tuning, PEFT, LoRA, RAG, MCP)، قواعد البيانات (PostgreSQL, MySQL, SPARQL)، تصميم المترجمات، جودة البرمجيات، الشبكات والأنظمة.",
        "التدريب على الإدارة، وإدارة المشاريع، واستراتيجيات الشركات.",
        "المشاريع المنجزة: [خدمة قائمة المراقبة الإعلامية](/projects/watchlist-service)، [Vireli](/projects/vireli)، [مقيّم ألعاب لوحية ResNet](/projects/minimax-resnet)، [How Europe Spends Its Time](/projects/how-europe-spends-its-time)، [Quizine](/projects/quizine)، [مترجم لغة C](/projects/compilateur-c-java)، [ألعاب محاكاة الأعمال](/projects/jeux-entreprise)، [Magnus Carlos](/projects/magnus-carlos)، [Nyxen](/projects/nyxen)، [House Finder](/projects/house-finder)."
      ],
      tags: ["C++ متقدم", "الحوسبة عالية الأداء", "الخوارزميات الموزعة", "نظرية الرسوم البيانية", "تحليل القيم المفردة", "معادلات تفاضلية عادية وجزئية", "الحوسبة الكمومية", "قواعد البيانات", "معالجة اللغة الطبيعية", "الأمن السيبراني"],
    },
    {
      id: "licence",
      degree: "إجازة في علوم الحاسوب - بتقدير جيد", // 15.22/20, 7/89
      school: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      location: "أورسيه، فرنسا",
      startDate: "2021",
      endDate: "2023",
      logo: "/icons/logo-ups.svg",
      description: [
        "دراسة متعمقة في علوم الحاسوب النظرية والعملية ([تفاصيل البرنامج](https://ecole-universitaire-paris-saclay.fr/formation/licence/informatique/l2-informatique)).",
        "المهارات الأساسية: البرمجة كائنية التوجه (Java/C++)، البرمجة الوظيفية (OCaml)، هياكل البيانات وقواعد البيانات، تحليل البيانات (pandas، scikit-learn)، لينكس، وقابلية الحساب والتعقيد.",
        "المشاريع المنجزة: [Escape the Mummy](/projects/escape-the-mummy)، [CLI Messaging](/projects/cli-messaging)."
      ],
      tags: ["التعلم الخاضع للإشراف", "البرمجة كائنية التوجه", "البرمجة الوظيفية", "المنطق", "قابلية الحساب", "لينكس", "قواعد البيانات"],
    },
    {
      id: "prepa",
      degree: "الأقسام التحضيرية PSI",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "لي ألز، فرنسا",
      startDate: "2019",
      endDate: "2021",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "الأقسام التحضيرية للمدارس الكبرى (CPGE) في تخصص الفيزياء وعلوم الهندسة (PSI) بالشراكة مع جامعة باريس-ساكلي ([تفاصيل الأقسام التحضيرية](https://lyceedelessouriau.fr/index.php/enseignement-superieur/la-cpge-pcsi-psi/)).",
        "برنامج مكثف لمدة سنتين في الرياضيات، الفيزياء، الكيمياء، وعلوم الهندسة، مع التركيز على النمذجة وحل المشكلات المعقدة."
      ],
      tags: ["الرياضيات", "الفيزياء", "النمذجة", "حل المشكلات"],
    },
    {
      id: "baccalaureat",
      degree: "البكالوريا العلمية",
      school: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      location: "لي ألز، فرنسا",
      startDate: "2016",
      endDate: "2019",
      logo: "/icons/logo_essouriau.jpg",
      description: [
        "أول موقع إلكتروني تم إنشاؤه في المدرسة الثانوية: [LogiHub](/projects/logihub)، وهو مكتبة ألعاب على الإنترنت تستضيف ألعاب p5.js مخصصة (زمن رد الفعل، بونغ، غزاة الفضاء)."
      ],
      tags: ["Java", "HTML", "Cascading Style Sheets (CSS)", "حل المشكلات"],
    },
    {
      id: "college",
      degree: "شهادة التعليم الإعدادي",
      school: "[Collège de La Guyonnerie](https://clg-laguyonnerie-bures.ac-versailles.fr/)",
      location: "لي ألز، فرنسا",
      startDate: "2012",
      endDate: "2016",
      logo: "/icons/logo-guyonnerie.png",
    },
  ],
}

export function getEducations(locale: Locale): EducationEntry[] {
  return educationsByLocale[locale];
};
