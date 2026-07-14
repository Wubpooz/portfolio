import type { Locale } from "@/i18n";

export type ProjectLinkKey = "live" | "source" | "details" | "demo" | "dataset" | "search" | "paper";

export type ProjectStatus = "completed" | "in-progress" | "won";

export interface ProjectLink {
  labelKey: ProjectLinkKey;
  href: string;
  label?: Record<Locale, string>;
};

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  organization: string;
  period: string;
  status: ProjectStatus;
  image: string;
  imageAlt: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  relevance: number;
  logos?: string[];
};

const cover = (seed: string) => `/assets/projects/${seed}.webp`;

// Watchlist Service
const watchlistUrl = "https://watchlist-service.vercel.app/landing?redirect=/";
const watchlistRepo = "https://github.com/Wubpooz/Watchlist-Service";

// Vireli
const vireliUrl = "https://vireli.kerboul.me/";

// Minimax ResNet
const escampeUrl = "https://escampe.vercel.app/";
const escampePaper = "https://github.com/Wubpooz/app5-ai-game-project/blob/main/BandDPER.pdf";
const escampeRepo = "https://github.com/Wubpooz/app5-ai-game-project";

// How Europe Spends Its Time
const visualisationApp5Url = "https://wubpooz.github.io/visualisation-app5/";
const datasetUrl = "https://huggingface.co/datasets/Bluefir/hetus-time-use";
const visualisationApp5Repo = "https://github.com/Wubpooz/visualisation-app5";

// VibeHealth
const vibehealthRepo = "https://github.com/Wubpooz/VibeHealth/";

// XTTS Finetuning
const streamlitSearch = "https://malta-tts-sdgohifzyhuguzwrwfaj2e.streamlit.app/";
const streamlitDemo = "https://malta-tts-deegsodm2ehla4cupq6bxb.streamlit.app/";
const maltaRepo = "https://github.com/Wubpooz/Malta-TTS";

// Quizine
const quizineUrl = "https://quizine-front.vercel.app/landing";
const quizineRepo = "https://github.com/Wubpooz/quizine_front";

// C Compiler
const compilerRepo = "https://github.com/Wubpooz/app4-compilation";

// Magnus Carlos
const magnusCarlosRepo = "https://github.com/Wubpooz/MagnusCarlos";

// Nyxen
const nyxenRepo = "https://github.com/Wubpooz/APP3_Projet_Web";

// Escape the Mummy
const escapeTheMummyRepo = "https://github.com/Wubpooz/IGSD-projet";

// CLI Messaging
const cliMessagingRepo = "https://github.com/Wubpooz/Rezo";

// Logihub
const logihubUrl = "http://mwaharte.free.fr/test/feuille_html_principale.html";
const logihubRepo = "https://github.com/Wubpooz/Site-ISN-2019";

// Ubik Pizza Challenge
const ubikPaper = "/assets/projects/WAHARTE_Ubik_Pizza_Challenge.pdf";

// Shaders
const shadersLive = "https://www.shadertoy.com/view/tfcBRH";

// Desert Interdit (POGL)
const poglRepo = "https://gitlab.dsi.universite-paris-saclay.fr/mathieu.waharte/projet-pogl/";


const addDetails = (slug: string) => `/projects/${slug}`;


const projectsByLocale: Record<Locale, ProjectItem[]> = {
  en: [
    {
      slug: "watchlist-service",
      relevance: 88,
      title: "Media Watchlist Service",
      subtitle: "Media catalog and shared collections platform (Service-Oriented Architecture).",
      summary:
        "Design and implementation of a collaborative media watchlist platform featuring granular role-based access control, PostgreSQL data persistence via Prisma ORM, session-based authentication via Better Auth, and an integrated Model Context Protocol (MCP) server.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "May 2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "Media Watchlist Service preview",
      highlights: [
        "Collaborative collections with granular roles, images, ratings, invitations, and statistics. Sorting and filtering of collections and media.",
        "Integrated Model Context Protocol (MCP) server for collections and media tools.",
        "Comprehensive CI/CD pipeline with Vitest, backend mock requests, and automated deployment.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Vercel", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "source", href: watchlistRepo },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
      featured: true,
      logos: ["polytech"],
    },
    {
      slug: "vireli",
      relevance: 74,
      title: "Vireli",
      subtitle: "Progressive Web Application (PWA) for web decarbonization.",
      summary:
        "Design and implementation of a progressive eco-responsibility application featuring a periodic carbon footprint questionnaire, real-time collaborative group management, session-based authentication via Better Auth, and PostgreSQL data persistence via Prisma ORM within a Bun and Hono monorepo.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "January - May 2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "Vireli PWA preview",
      highlights: [
        "Collaborative mutual-aid groups with real-time messaging, invitations, granular role management, and collective goals. Carbon footprint tracking with temporal progress charts.",
        "Bun workspaces monorepo architecture with strict type sharing, automated audit logs via PostgreSQL triggers, and a GDPR-compliant deletion flow via anonymization.",
        "Continuous deployment (CI/CD) pipeline via Coolify orchestrator, multi-service Docker containerization (Nginx, Bun, Redis), and digital accessibility audit validated at 9.95/10.",
      ],
      stack: ["Angular", "Ionic", "PWA", "Capacitor", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Redis", "Docker", "Coolify", "Zod", "OpenAPI", "Postman", "Monorepo"],
      links: [
        { labelKey: "live", href: vireliUrl },
        // { labelKey: "source", href: "https://git.kerboul.me/genie-logiciel/vireli" }, - currently private
        { labelKey: "details", href: addDetails("vireli") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "minimax-resnet",
      relevance: 98,
      title: "AI Engine & ResNet Evaluator (Escampe Game)",
      subtitle: "Design of an optimized Negamax Alpha-Beta engine and a residual network for position evaluation.",
      summary:
        "End-to-end creation of a board game AI engine (Java) optimized with bitboards and Negamax Alpha-Beta search, coupled with a Siamese residual network (PyTorch, 730k parameters) trained via minimax bootstrapping on 3 million positions.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "March - May 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "Escampe AI and BandDPER model preview",
      highlights: [
        "Design of BandDPER, a Siamese ResNet with shared weights, relative unicorn-based spatial encoding (HalfKP-like), and direct bypass for forced passes.",
        "Development of a Negamax search engine with Alpha-Beta pruning, Killer/History Heuristics, and Iterative Deepening.",
        "Low-level optimization using hybrid Bitboards and Make-Unmake to maximize evaluation throughput (nodes/sec) without Garbage Collector overhead.",
        "Generation of a 3-million-position dataset through self-play and parallel minimax bootstrapping at depth 7, trained with PyTorch and hosted on Hugging Face.",
      ],
      stack: ["PyTorch", "Java", "Minimax", "ResNet", "Python"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "paper", href: escampePaper, label: { en: "Research Paper", fr: "Rapport de recherche", ar: "ورقة البحث العلمية" } },
        { labelKey: "source", href: escampeRepo },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
      logos: ["polytech"],
      featured: true,
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "Turning European time-use surveys into a visual narrative.",
      summary:
        "Resolved severe codification drift across 20 years of European time-use surveys with robust mapping pipelines in Python. Analyzed data with Hugging Face to extract a visual narrative, and designed an accessible web application with interactive charts to present it.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "April 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "How Europe Spends Its Time preview",
      highlights: [
        "Robust mapping pipelines in Python and pandas to correct codification drift and analyze the data.",
        "Accessible and keyboard-navigable web experience with interactive visualizations.",
        "Published as a Hugging Face dataset.",
      ],
      stack: ["Python", "pandas", "Hugging Face", "Big Data", "Data Analysis", "Data Visualization", "Accessibility", "Datasets"],
      links: [
        { labelKey: "live", href: visualisationApp5Url },
        { labelKey: "dataset", href: datasetUrl },
        { labelKey: "source", href: visualisationApp5Repo },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      logos: ["polytech"],
      featured: true,
    },
    {
      slug: "vibehealth",
      relevance: 20,
      title: "VibeHealth",
      subtitle: "Health tracking web application.",
      summary:
        "Development of a comprehensive medical application combining lifestyle tracking, vital signs monitoring, a first-aid guide, and practitioner search. The application is bilingual, strongly typed, and offline-first for critical flows.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "November-December 2025",
      status: "completed",
      image: cover("vibehealth"),
      imageAlt: "VibeHealth preview",
      highlights: [
        "Monitoring of vital signs and lifestyle (activity, nutrition, hydration, sleep) with reminders and trend analysis.",
        "Tracking of medications, vaccines, and health check-ups with reminders. Menstrual cycle and pregnancy tracking.",
        "Markdown rendering for guides and articles. Pollen tracking and practitioner search with API integration.",
        "Mood tracking and journaling (rich text + images), workouts (plans, suggestions), relaxation, and focus assistance.",
      ],
      stack: ["Angular", "Bun", "Hono", "PostgreSQL", "Prisma", "BetterAuth", "PWA", "Zod", "i18n", "Health Tech", "Antigravity", "Github Copilot", "Agentic Coding"],
      links: [
        { labelKey: "source", href: vibehealthRepo },
        { labelKey: "details", href: addDetails("vibehealth") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 89,
      title: "Deloitte x Google Cloud Hackathon, Winner",
      subtitle: "Winning multi-agent system to automate marketing campaigns.",
      summary:
        "Creation of a distributed multi-agent system with ADK and MCP to automate marketing campaign generation, with orchestration via A2A and integration of BigQuery, Gemini, Imagen, Cloud Run, and Vertex AI Agent Engine.",
      organization: "[Deloitte](https://www.deloitte.com/) & [Google Cloud](https://cloud.google.com/)",
      period: "November 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "Deloitte x Google Cloud Hackathon preview",
      highlights: [
        "Developed a distributed multi-agent system with ADK, MCP, and A2A orchestration to automate the creation of marketing campaigns.",
        "Cloud-native integration: BigQuery (demographic queries), Gemini, Imagen, Cloud Run, and Vertex AI Agent Engine.",
        "Hackathon winner.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      logos: ["deloitte", "googlecloud"],
    },
    {
      slug: "shaders",
      relevance: 66,
      title: "Shaders",
      subtitle: "Raymarched scene shader featuring glass sculptures, a carousel, and an animated floor.",
      summary:
        "Created a vibrant raymarched scene featuring realistic glass sculptures (with refraction), a decorative carousel, and an animated floor, showcasing refraction, chromatic dispersion, and procedural animation.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "November 2025",
      status: "completed",
      image: cover("shaders"),
      imageAlt: "Shader collection preview",
      highlights: [
        "Glass sculptures with realistic refraction and chromatic dispersion.",
        "Decorative carousel and animated floor with rainbow tile patterns, disco ball reflections, and confetti sparkles.",
        "Twinkling stars and shooting stars in the sky, with glowing rainbow text (reflected in the sculptures).",
      ],
      stack: ["GLSL", "Shadertoy", "Computer Graphics", "Raymarching", "Refraction", "Chromatic Dispersion", "Glass Shaders", "Procedural Animation"],
      links: [
        { labelKey: "live", href: shadersLive },
        { labelKey: "details", href: addDetails("shaders") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "Speech synthesis research.",
      summary:
        "State-of-the-art review in TTS, creation of a Streamlit application to accelerate research paper discovery, and fine-tuning of XTTS on Google Colab with PyTorch and GPT-2 to add Maltese support without regression.",
      organization: "[Department of Artificial Intelligence - L-Università ta' Malta (University of Malta)](https://www.um.edu.mt/ict/ai/)",
      period: "June - August 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "XTTS Finetuning project preview",
      highlights: [
        "State-of-the-art review in TTS with a paper retrieval tool in Streamlit. XTTS model selected for its performance, modular architecture, knowledge of Italian, Arabic, English, and French, and its handling of code-switching, which adapts very well to Maltese.",
        "Fine-tuning and inference of the GPT-2 component of the XTTS model on Google Colab using PyTorch. The model allows adding a new language by training only the GPT-2 part, which significantly reduces training costs and prevents regressions.",
        "Numerous training and optimization strategies to improve the quality of Maltese speech synthesis, but limited time to implement hybrid training (mixing Maltese and original languages).",
      ],
      stack: ["PyTorch", "GPT-2", "XTTS", "Streamlit", "Git", "Hugging Face", "Machine Learning", "Model Training"],
      links: [
        { labelKey: "live", href: streamlitSearch, label: { en: "Paper Discovery Tool", fr: "Outil de recherche d'articles", ar: "أداة البحث عن الأوراق" } },
        { labelKey: "demo", href: streamlitDemo, label: { en: "Maltese TTS Demo", fr: "Synthèse vocale maltaise", ar: "عرض توليد الكلام المالطي" } },
        { labelKey: "source", href: maltaRepo },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
      logos: ["um"],
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "Real-time multiplayer quiz platform with WebSockets.",
      summary:
        "Design of a real-time quiz architecture capable of handling 50 players per room, a modular Angular frontend, and session management with Redis, Vercel, and Supabase.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "February - May 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "Quizine preview",
      highlights: [
        "WebSockets architecture to synchronize questions, scores, and reconnections.",
        "Modular Angular frontend with routing, AuthGuard, notifications, and API contract.",
        "Complete project documentation, from Figma mockups to continuous deployment (Vercel, Supabase).",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "live", href: quizineUrl },
        { labelKey: "source", href: quizineRepo },
        { labelKey: "details", href: addDetails("quizine") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "C Compiler",
      subtitle: "C compiler written in Java.",
      summary:
        "Development of a C compiler in Java, featuring optimizations, error highlighting, and support for loops, functions, pointers, lists, scopes, variables, send/recv, and malloc.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "September - December 2024",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "C Compiler project preview",
      highlights: [
        "Development of a C compiler in Java from lexer to code generation.",
        "Support for loops, functions, pointers, lists, scopes, variables, send/recv, and malloc (with a standard library).",
        "Error highlighting, with clear errors for each compilation step (lexer, grammar, semantics, code generation).",
        "Optimization of arithmetic calculations during compilation.",
      ],
      stack: ["Java", "Compiler", "Error Handling"],
      links: [
        { labelKey: "source", href: compilerRepo },
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "ubik-pizza-challenge",
      relevance: 68,
      title: "Ubik Pizza Challenge",
      subtitle: "White-box cybersecurity analysis and penetration testing of a pizza delivery application.",
      summary:
        "Conducted a white-box cybersecurity analysis and penetration testing on the Ubik Pizza application, identifying vulnerabilities and providing actionable recommendations to enhance security.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "April 2026",
      status: "completed",
      image: cover("ubik-pizza-challenge"),
      imageAlt: "Ubik Pizza Challenge preview",
      highlights: [
        "White-box security analysis and penetration testing on the Ubik Pizza application.",
        "Identification of vulnerabilities (XSS, SQLi, CSRF, RCE) and mitigation recommendations.",
        "Authored a detailed report documenting findings and remediation steps.",
      ],
      stack: ["Cybersecurity", "Penetration Testing", "White-box Analysis", "Security Assessment"],
      links: [
        { labelKey: "paper", href: ubikPaper },
        { labelKey: "details", href: addDetails("ubik-pizza-challenge") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "jeux-entreprise",
      relevance: 10,
      title: "Business Simulation Games",
      subtitle: "Management of a fictitious company.",
      summary:
        "Management of a fictitious company as part of a competitive business simulation game.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "January 2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "Business Simulation Games project preview",
      highlights: [
        "Management of a fictitious company.",
        "Handling of strategy, finance, HR, marketing, and operations.",
        "Analysis of market trends and competition, and management of risks, pricing, and production quantities.",
      ],
      stack: ["Management", "Strategy", "Finance"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "magnus-carlos",
      relevance: 75,
      title: "Magnus Carlos",
      subtitle: "3D scientific simulation of the Magnus effect.",
      summary:
        "Management of a 3D scientific simulation project with a team of six students using Agile methodologies, and implementation of the visualization using SDL2 (textures, cameras, rotations).",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "September - December 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "Magnus Carlos preview",
      highlights: [
        "Scientific simulation of the Magnus effect, taking into account velocity, trajectory, object shape, and friction.",
        "SDL2 visualization: textures (ball, players, goals, ground), cameras, and rotations.",
        "Pre-computation of scenarios where the ball enters the goal with the Magnus effect, and misses without the effect, viewed from multiple camera angles.",
        "Leadership of a team of six students in an Agile environment.",
      ],
      stack: ["C++", "SDL2", "3D Simulation", "Agile", "Visualization", "Physics Modeling", "Project Management"],
      links: [
        { labelKey: "source", href: magnusCarlosRepo },
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "nyxen",
      relevance: 40,
      title: "Nyxen",
      subtitle: "Single-page experience with an interactive 3D model.",
      summary:
        "Design of a cosmetic e-commerce SPA. From palette and user journey design to the integration of an animated 3D model in the main section.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "November 2023 - February 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "Nyxen preview",
      highlights: [
        "Design of the palette, user journeys, and SPA routing.",
        "Integration of an interactive and animated 3D model.",
        "Strong focus on art direction and interaction polish.",
      ],
      stack: ["Angular", "Three.js", "TypeScript", "JavaScript", "HTML", "CSS", "SPA Routing", "3D", "Animation", "Git", "Agile", "Frontend"],
      links: [
        { labelKey: "live", href: nyxenRepo },
        { labelKey: "details", href: addDetails("nyxen") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "house-finder",
      relevance: 30,
      title: "House Finder",
      subtitle: "Data modeling and CLI tool.",
      summary:
        "Design of data models to structure housing attributes and connectivity, and development of a CLI tool to rank properties based on custom criteria.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "October 2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "House Finder preview",
      highlights: [
        "Development of a CLI tool to rank properties based on custom criteria.",
        "Design of data models to structure housing attributes and connectivity.",
      ],
      stack: ["Java", "Open Data", "Dataset", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "Escape the Mummy",
      subtitle: "3D maze game in Processing and GLSL.",
      summary:
        "Development of a 3D maze game where the player must escape a mummy after entering a pyramid in a procedurally generated desert.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "April - June 2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "Escape the Mummy preview",
      highlights: [
        "Development of a 3D maze game using Processing and GLSL shaders.",
        "Procedural generation of a desert and a pyramid.",
        "Gameplay mechanic where the player must escape a mummy.",
//TODO (don't delete)
//         III. Pyramide et Lumi`ere (Mathieu)
// Pyramide et D´esert
// La pyramide est un cr´ee du bas vers le haut en dessinant un chaque cˆot´e du mur avec des QUADS. A chaque
// fois que l’on monte on se d´ecale vers l’int´erieur de la pyramide ; cela donne une pyramide ”plate”, effet souhait´e car
// plus agr´eable `a l’œil. En revanche, avec cette approche, il faut ajouter les jointures entre les murs et le sommet de la
// pyramide `a part en usant de la flexibilit´e des QUADS.
// Le d´esert est une mer de QUADS dont la hauteur seule varie suivant noise(i,j) similairement `a Minecraft. Pour
// donner l’apparence que les ”blocs” sont reli´es on joint chaque QUAD avec son voisin de droite et derri`ere. Cela cr´ee
// des probl`emes de bords mais ils sont n´egligeables puisque ne devraient pas ˆetre observables.
// L’application de textures pour les deux fut tr`es naturelle.
// Lumi`ere
// Apr`es avoir pass´e des heures `a essayer de faire fonctionner les normales de Processing sans succ`es, j’ai d´ecid´e de
// m’orienter vers les shaders malgr´e mon inexp´erience. J’ai donc pass´e beaucoup de temps `a mieux comprendre le
// fonctionnement de ces derniers ainsi qu’apprendre OpenGL de mani`ere `a faire fonctionner correctement les lumi`eres.
// Mes objectifs ´etaient : avoir un soleil qui ´eclaire la sc`ene mais pas l’int´erieur du labyrinthe, utiliser les normal maps
// des textures, coloriser les murs du labyrinthe suivant leur position dans le model space (utiliser tint sur le PShape
// n’´etant pas transmis au shader) et avoir une lampe torche, .
// - Soleil : pour r´ealiser un soleil, il m’a fallu passer les coordonn´ees en model space de la source de lumi`ere au
// fragmentShader, en d´eduire la direction du soleil relative `a la position actuelle et enfin calculer la couleur du
// fragment.
// Pour cela j’ai d’abord d´etermin´e la normale de chaque fragment suivant sa texture en utilisant leur normalMap ;
// puis en ajoutant les contributions des composantes ambiantes, diffuse et sp´eculaires de cette lumi`ere, en prenant
// en compte l’att´enuation de la lumi`ere.
// - Couleur des murs : pour coloriser les murs du labyrinthe comme sur la mini-map pour aider le joueur a se rep´erer,
// il me fallait trouver la position de chaque mur dans le labyrinthe (pour refaire le tint(25*i,25*i,255-10*i+10*j)).
// Cela s’est av´er´e tr`es compliqu´e, la solution que j’ai trouv´ee a ´et´e de prendre la position en model space et la
// normaliser de sorte `a ce que celle-ci corresponde aux i et j. Ensuite il m’a suffit de normaliser la couleur d’une
// ´echelle [0-255] `a [0.0-1.0] et la passer au fragmentShader et teindre la couleur du fragment de la mˆeme mani`ere
// que celle de la pyramide.
// - Lampe torche : Celle-ci fut particuli`erement difficile et demandeuse niveau compr´ehension. En effet, il fallait :
// nullifier l’effet du soleil dans le labyrinthe, avoir une source de lumi`ere qui suit la position ET rotation du joueur
// et ait une att´enuation tr`es forte `a distance.
// J’ai d’abord tent´e de cr´eer un raycaster pour empˆecher le soleil d’´eclairer tout le labyrinthe seulement pour
// r´ealiser que je ne pouvais pas passer au shader un String[] contenant les murs (ce qui est n´ecessaire) de par
// une limitation de Processing. J’ai donc abandonn´ee cette id´ee par manque de temps et aie pr´ef´er´e la solution
// plus simple ”d’´eteindre” le soleil dans le labyrinthe uniquement.
// Pour l’att´enuation, cela n’a ´et´e qu’une question de tester ce qu’il fonctionne bien.
// Faire avancer la lumi`ere avec la position du joueur fut compliqu´e mais simple : transf´erer la position en view
// space au fragmentShader et calculer la position de la lampe relativement `a ¸ca et la position du joueur (pass´ee
// par Processing). En revanche pour la rotation, utiliser celle de Processing n’a pas fonctionn´e malgr´e de tr`es
// nombreuses tentatives. De fait, j’ai tent´e beaucoup d’autres solutions (une matrice de rotation etc) mais sans
// succ`es. Mais, par hasard, j’ai indiqu´e un vecteur particulier qui s’est av´er´e fonctionner du fait que la position de
// la lampe change avec la rotation du joueur.
      ],
      stack: ["Processing", "GLSL", "Shader", "3D Game"],
      links: [
        { labelKey: "source", href: escapeTheMummyRepo },
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
      logos: ["ups"],
    },
    {
      slug: "pogl",
      relevance: 18,
      title: "Forbidden Desert",
      subtitle: "Cooperative turn-based board game in Java.",
      summary:
        "Developed a cooperative turn-based board game in Java where players must explore a desert, collect parts, and build a flying machine to escape before the sandstorm becomes too intense.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "May 2022",
      status: "completed",
      image: cover("pogl"),
      imageAlt: "Forbidden Desert preview",
      highlights: [
        "Developed a cooperative turn-based board game in Java featuring a graphical interface built using the Model-View-Controller (MVC) pattern.",
        "Gameplay mechanics involving desert exploration, item collection, and building a flying machine.",
        "Implemented win/loss conditions based on item collection, surviving the sandstorm, and managing water levels.",
      ],
      stack: ["Java", "Board Game", "Model-View-Controller", "Graphical Interface"],
      links: [
        { labelKey: "source", href: poglRepo },
        { labelKey: "details", href: addDetails("pogl") },
      ],
      logos: ["ups"],
    },
    {
      slug: "cli-messaging",
      relevance: 23,
      title: "CLI Messaging",
      subtitle: "TCP/IP messaging applications in C.",
      summary:
        "Development of client and server messaging applications in UDP and TCP/IP with a command-line interface.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "October 2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "CLI Messaging preview",
      highlights: [
        "Development of client and server messaging applications in UDP and TCP/IP.",
        "Command-line interface (CLI) for communication.",
        "Management of connections and messages between clients and server.",
      ],
      stack: ["C", "UDP", "TCP-IP", "CLI"],
      links: [
        { labelKey: "source", href: cliMessagingRepo },
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
      logos: ["ups"],
    },
    {
      slug: "logihub",
      relevance: 10,
      title: "LogiHub",
      subtitle: "Online library hosting custom p5.js games.",
      summary:
        "First online game library hosting custom p5.js games, developed during high school. Features classics like Pong, Space Invaders, Reaction Time, and Number Test.",
      organization: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "LogiHub preview",
      highlights: [
        "Development of several custom retro games in p5.js (Pong, Space Invaders, Reaction Time).",
        "Creation of a static HTML/CSS hosting platform for web-playable games.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: logihubUrl },
        { labelKey: "source", href: logihubRepo },
        { labelKey: "details", href: addDetails("logihub") },
      ],
      logos: ["essouriau"],
    }
  ],
  fr: [
    {
      slug: "watchlist-service",
      relevance: 88,
      title: "Service de Watchlist Média",
      subtitle: "Plateforme de catalogue média et de collections partagées (Architecture Orientée Services).",
      summary:
        "Conception et implémentation d'une plateforme collaborative de watchlist média comprenant un contrôle d'accès granulaire basé sur les rôles, la persistance des données PostgreSQL via l'ORM Prisma, l'authentification de session via Better Auth, et un serveur Model Context Protocol (MCP) intégré.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Mai 2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "Aperçu du Service de Watchlist Média",
      highlights: [
        "Collections collaboratives avec des rôles granulaires, images, des notes, invitations et statistiques. Tri et filtrage des collections et des médias.",
        "Serveur Model Context Protocol (MCP) intégré pour les outils de collections et de médias.",
        "Pipeline CI/CD complet avec Vitest, requêtes mockées pour le back-end et déploiement automatisé.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Vercel", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "source", href: watchlistRepo },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
      featured: true,
      logos: ["polytech"],
    },
    {
      slug: "vireli",
      relevance: 74,
      title: "Vireli",
      subtitle: "Application de décarbonation web progressive (PWA).",
      summary:
        "Conception et implémentation d'une application progressive d'éco-responsabilité comprenant un questionnaire d'empreinte carbone périodique, la gestion de groupes collaboratifs en temps réel, l'authentification de session via Better Auth, et la persistance des données PostgreSQL via l'ORM Prisma au sein d'un monorepo Bun et Hono.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Janvier - Mai 2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "Aperçu de Vireli PWA",
      highlights: [
        "Groupes d'entraide collaboratifs avec messagerie en temps réel, invitations, gestion de rôles granulaires et objectifs collectifs. Suivi d'empreinte avec graphiques d'avancement temporels.",
        "Architecture monorepo Bun workspaces avec partage de types stricts, logs d'audit automatisés via triggers PostgreSQL, et architecture de suppression conforme RGPD par anonymisation.",
        "Pipeline de déploiement continu (CI/CD) via l'orchestrateur Coolify, conteneurisation Docker multi-services (Nginx, Bun, Redis) et audit d'accessibilité numérique validé à 9.95/10.",
      ],
      stack: ["Angular", "Ionic", "PWA", "Capacitor", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Redis", "Docker", "Coolify", "Zod", "OpenAPI", "Postman", "Monorepo"],
      links: [
        { labelKey: "live", href: vireliUrl },
        // { labelKey: "source", href: "https://git.kerboul.me/genie-logiciel/vireli" }, - currently private
        { labelKey: "details", href: addDetails("vireli") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "minimax-resnet",
      relevance: 98,
      title: "Moteur d'IA & Évaluateur ResNet (Jeu d'Escampe)",
      subtitle: "Conception d'un moteur Negamax Alpha-Bêta optimisé et d'un réseau résiduel pour l'évaluation de positions.",
      summary:
        "Création complète d'un moteur d'IA de jeu de plateau (Java) optimisé par bitboards et Negamax Alpha-Bêta, couplé à un réseau résiduel siamois (PyTorch, 730k paramètres) entraîné par bootstrapping minimax sur 3 millions de positions.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Mars - Mai 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "Aperçu de l'IA d'Escampe et du modèle BandDPER",
      highlights: [
        "Conception de BandDPER, un ResNet siamois à poids partagés avec encodage spatial relatif à la licorne (type HalfKP) et bypass direct pour les passes forcées.",
        "Développement d'un moteur de recherche Negamax avec élagage Alpha-Bêta, Killer/History Heuristics et Approfondissement Itératif (Iterative Deepening).",
        "Optimisation bas niveau avec Bitboards hybrides et Make-Unmake pour maximiser le débit d'évaluation (noeud/sec) sans overhead du Garbage Collector.",
        "Génération d'un dataset de 3 millions de positions par self-play et bootstrapping minimax parallèle à profondeur 7, entraîné sous PyTorch et hébergé sur Hugging Face.",
      ],
      stack: ["PyTorch", "Java", "Minimax", "ResNet", "Python"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "paper", href: escampePaper, label: { en: "Research Paper", fr: "Rapport de recherche", ar: "ورقة البحث العلمية" } },
        { labelKey: "source", href: escampeRepo },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
      logos: ["polytech"],
      featured: true,
    },
    {
      slug: "ubik-pizza-challenge",
      relevance: 68,
      title: "Ubik Pizza Challenge",
      subtitle: "Analyse de cybersécurité en boîte blanche et tests d'intrusion d'une application de livraison de pizzas.",
      summary:
        "Conduite d'une analyse de cybersécurité en boîte blanche et de tests d'intrusion sur l'application Ubik Pizza, identification des vulnérabilités et recommandations exploitables pour améliorer la sécurité.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Avril 2026",
      status: "completed",
      image: cover("ubik-pizza-challenge"),
      imageAlt: "Aperçu du Ubik Pizza Challenge",
      highlights: [
        "Analyse de sécurité en boîte blanche et tests d'intrusion sur l'application Ubik Pizza.",
        "Identification des vulnérabilités (XSS, SQLi, CSRF, RCE) et recommandations pour améliorer la sécurité.",
        "Rédaction d'un rapport détaillé sur les résultats et les mesures correctives.",
      ],
      stack: ["Cybersecurity", "Penetration Testing", "White-box Analysis", "Security Assessment"],
      links: [
        { labelKey: "paper", href: ubikPaper },
        { labelKey: "details", href: addDetails("ubik-pizza-challenge") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "Transformer des enquêtes européennes sur l’usage du temps en récit visuel.",
      summary:
        "A résolu une forte dérive de codification sur 20 ans d’enquêtes européennes sur l’usage du temps grâce à des pipelines de mapping robustes en Python. Analysé les données avec Hugging Face afin d'en extraire un narratif visuel, puis a conçu une application web accessible avec graphiques interactifs pour la transmettre.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Avril 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "Aperçu de How Europe Spends Its Time",
      highlights: [
        "Pipelines de mapping robustes en Python et pandas pour corriger la dérive de codification et analyser les données.",
        "Application web accessible et navigable au clavier avec visualisations interactives.",
        "Publié sous forme de dataset Hugging Face.",
      ],
      stack: ["Python", "pandas", "Hugging Face", "Big Data", "Data Analysis", "Visualisation", "Accessibilité", "Datasets"],
      links: [
        { labelKey: "live", href: visualisationApp5Url },
        { labelKey: "dataset", href: datasetUrl },
        { labelKey: "source", href: visualisationApp5Repo },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      featured: true,
      logos: ["polytech"],
    },
    {
      slug: "vibehealth",
      relevance: 20,
      title: "VibeHealth",
      subtitle: "Application web de suivi de santé.",
      summary:
        "Développement d'une application médicale complète, combinant du suivi du style de vie, des signaux vitaux, un référentiel de premier secours et la recherche de praticiens. L'application est bilingue, avec un fort typage et une approche offline-first pour les flux critiques.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Novembre - Décembre 2025",
      status: "completed",
      image: cover("vibehealth"),
      imageAlt: "Aperçu de VibeHealth",
      highlights: [
        "Suivi des signaux vitaux, du style de vie (activité, alimentation, hydration, sommeil) avec rappels et analyse des tendances.",
        "Suivi des médicaments, des vaccins et des contrôles de santé avec rappels. Suivi du cycle menstruel et de la grossesse.",
        "Rendu de guides et d'articles en markdown. Suivi du pollen et recherche de praticiens avec intégration d'API.",
        "suivi de l'humeur et journalisation (texte enrichi + images), entraînements (plans, suggestions), relaxation, aide à la concentration.",
      ],
      stack: ["Angular", "Bun", "Hono", "PostgreSQL", "Prisma", "BetterAuth", "PWA", "Zod", "i18n", "Health Tech", "Antigravity", "Github Copilot", "Agentic Coding"],
      links: [
        { labelKey: "source", href: vibehealthRepo },
        { labelKey: "details", href: addDetails("vibehealth") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 89,
      title: "Hackathon Deloitte x Google Cloud, Lauréat",
      subtitle: "Système multi-agent lauréat pour automatiser les campagnes marketing.",
      summary:
        "Création d’un système distribué multi-agent avec ADK et MCP pour automatiser la génération de campagnes marketing, orchestration via A2A et intégration de BigQuery, Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
      organization: "[Deloitte](https://www.deloitte.com/) & [Google Cloud](https://cloud.google.com/)",
      period: "Novembre 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "Aperçu du hackathon Deloitte x Google Cloud",
      highlights: [
        "Dévelopé un système multi-agent distribué avec ADK, MCP et orchestration A2A afin de automatiser la création de campagnes marketing.",
        "Intégration Cloud native : BigQuery (requêtes démographiques), Gemini, Imagen, Cloud Run et Vertex AI Agent Engine.",
        "Lauréat du hackathon.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      logos: ["deloitte", "googlecloud"],
    },
    {
      slug: "shaders",
      relevance: 66,
      title: "Shaders",
      subtitle: "Shader de scène raymarchée avec des sculptures en verre, un carrousel et un sol animé.",
      summary:
        "Création d'une scène raymarchée vibrante avec des sculptures en verre réalistes (avec refraction), un carrousel décoratif et un sol animé, mettant en avant la réfraction, la dispersion chromatique et l'animation procédurale.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Novembre 2025",
      status: "completed",
      image: cover("shaders"),
      imageAlt: "Aperçu de la collection de shaders",
      highlights: [
        "Sculptures en verre avec refraction réaliste et dispersion chromatique.",
        "Carrousel décoratif et sol animé avec des motifs de carreaux arc-en-ciel, des reflets de boule disco et des étincelles de confettis.",
        "Étoiles scintillantes et étoiles filantes dans le ciel, avec un texte arc-en-ciel scintillant (réfléchis dans les sculptures).",
      ],
      stack: ["GLSL", "Shadertoy", "Computer Graphics", "Raymarching", "Refraction", "Chromatic Dispersion", "Glass Shaders", "Procedural Animation"],
      links: [
        { labelKey: "live", href: shadersLive },
        { labelKey: "details", href: addDetails("shaders") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "Recherche en synthèse vocale.",
      summary:
        "Revue de l’état de l’art en TTS, création d’une application Streamlit pour accélérer la recherche de papiers, puis fine-tuning de XTTS sur Google Colab avec PyTorch et GPT-2 pour ajouter le maltais sans régression.",
      organization: "[Département d'Intelligence Artificielle - L-Università ta' Malta (Université de Malte)](https://www.um.edu.mt/ict/ai/)",
      period: "Juin - Août 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "Aperçu du projet XTTS Finetuning",
      highlights: [
        "Revue de l’état de l’art en TTS avec un outil de recherche de papiers sous Streamlit. Choix du modèle XTTS pour ses performances, son architecture modulaire et sa connaissance de l'italien, de l'arabe, de l'anglais et du français et sa gestion du code-switching, qui s'adaptent très bien au maltais.",
        "Fine-tuning et inférence de la partie GPT-2 du modèle XTTS sur Google Colab avec PyTorch. Le modèle permettant d'ajouter une nouvelle langue en entraînant uniquement la partie GPT-2, ce qui réduit considérablement le coût de l'entraînement et permet d'éviter les régressions.",
        "Nombreuses stratégies d'entraînement et d'optimisation pour améliorer la qualité de la synthèse vocale maltaise, mais manque de temps pour implémenter un entraînement hybride (mixe de maltais et des langues originales).",
      ],
      stack: ["PyTorch", "GPT-2", "XTTS", "Streamlit", "Git", "Hugging Face", "Apprentissage automatique", "Model Training"],
      links: [
        { labelKey: "live", href: streamlitSearch, label: { en: "Paper Discovery Tool", fr: "Outil de recherche d'articles", ar: "أداة البحث عن الأوراق" } },
        { labelKey: "demo", href: streamlitDemo, label: { en: "Maltese TTS Demo", fr: "Synthèse vocale maltaise", ar: "عرض توليد الكلام المالطي" } },
        { labelKey: "source", href: maltaRepo },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
      logos: ["um"],
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "Plateforme de quiz temps réel avec WebSockets.",
      summary:
        "Conception d’une architecture de quiz temps réel capable de gérer 50 joueurs par salle, frontend Angular modulaire et gestion des sessions avec Redis, Vercel et Supabase.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Février - Mai 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "Aperçu de Quizine",
      highlights: [
        "Architecture WebSockets pour synchroniser les questions, les scores et les reconnexions.",
        "Frontend Angular modulaire avec routing, AuthGuard, notifications et contrat API.",
        "Documentation complète du projet, des maquettes Figma au déploiement continu (Vercel, Supabase).",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "live", href: quizineUrl },
        { labelKey: "source", href: quizineRepo },
        { labelKey: "details", href: addDetails("quizine") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "Compilateur de C",
      subtitle: "Compilateur de C écrit en Java.",
      summary:
        "Développement d'un compilateur de C en Java, avec optimisationsn, soulignage des erreurs et support pour les boucles, fonctions, pointeurs, listes, scope, variables, send/recv et malloc.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Septembre - Décembre 2024",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "Aperçu du projet Compilateur de C",
      highlights: [
        "Développement d'un compilateur de C en Java du lexer à la génération de code.",
        "Support des boucles, fonctions, pointeurs, listes, scope, variables, send/recv, malloc (avec une librairie standard).",
        "Soulignage des erreurs, erreurs claires par étape de la compilation (lexer, grammaire, sémantique, génération de code).",
        "Optimisation des calculs arithmétiques à la compilation.",
      ],
      stack: ["Java", "Compilateur", "Gestion d'erreurs"],
      links: [
        { labelKey: "source", href: compilerRepo },
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "jeux-entreprise",
      relevance: 10,
      title: "Jeux d'entreprise",
      subtitle: "Pilotage d'une entreprise fictive.",
      summary:
        "Pilotage d'une entreprise fictive dans le cadre d'un jeu d'entreprise.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Janvier 2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "Aperçu du projet Jeux d'entreprise",
      highlights: [
        "Pilotage d'une entreprise fictive.",
        "Gestion de la stratégie, des finances, du personnel, du marketing et des opérations.",
        "Analyse des tendances du marché et de la concurrence et gestion de risques, des prix et des quantités.",
      ],
      stack: ["Gestion", "Stratégie", "Finance"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "magnus-carlos",
      relevance: 75,
      title: "Magnus Carlos",
      subtitle: "Simulation scientifique 3D de l’effet Magnus.",
      summary:
        "Gestion d’un projet de simulation scientifique 3D avec une équipe de six étudiants en Agile, et implémentation de la visualisation avec SDL2 (textures, caméras, rotations).",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Septembre - Décembre 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "Aperçu de Magnus Carlos",
      highlights: [
        "Simulation scientifique de l’effet Magnus en prenant en compte la vitesse, la trajectoire, la forme de l'objet, les frottements.",
        "Visualisation avec SDL2 : textures (ballon, joueurs, cages, sol), caméras et rotations.",
        "Précalculs de scénarios où le ballon vas dans les cages avec l'effet Magnus, les loupes sans l'effet, sous plusieurs angles de caméra.",
        "Pilotage d’une équipe de six étudiants dans un environnement Agile.",
      ],
      stack: ["C++", "SDL2", "Simulation 3D", "Agile", "Visualisation", "Physique Modélisation", "Gestion de projet"],
      links: [
        { labelKey: "source", href: magnusCarlosRepo },
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "nyxen",
      relevance: 40,
      title: "Nyxen",
      subtitle: "Expérience single-page avec modèle 3D interactif.",
      summary:
        "Conception d'un eshop cosmétique SPA. De la conception de la palette et des parcours utilisateurs à l'intégration d’un modèle 3D animé dans la section principale.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Novembre 2023 - Février 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "Aperçu de Nyxen",
      highlights: [
        "Conception de la palette, des parcours utilisateurs et du routing SPA.",
        "Intégration d’un modèle 3D interactif et animé.",
        "Fort accent sur la direction artistique et les interactions.",
      ],
      stack: ["Angular", "Three.js", "TypeScript", "JavaScript", "HTML", "CSS", "SPA Routing", "3D", "Animation", "Git", "Agile", "Frontend"],
      links: [
        { labelKey: "live", href: nyxenRepo },
        { labelKey: "details", href: addDetails("nyxen") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "house-finder",
      relevance: 30,
      title: "House finder",
      subtitle: "Conception de modèles de données et outil CLI.",
      summary:
        "Conception des modèles de données pour structurer la connectivité et les attributs des logements, et développement d’un outil CLI pour classer les biens selon des critères personnalisés.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "Octobre 2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "Aperçu de House finder",
      highlights: [
        "Développement d’un outil CLI pour classer les biens selon des critères personnalisés.",
        "Conception des modèles de données pour structurer la connectivité et les attributs des logements.",
      ],
      stack: ["Java", "Données OpenSource", "Dataset", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "Escape the mummy",
      subtitle: "Jeu de labyrinthe 3D en Processing et GLSL.",
      summary:
        "Développement d’un jeu de labyrinthe 3D où il faut échapper à une momie après être entré dans une pyramide sur un désert généré procéduralement.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "Avril - Juin 2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "Aperçu de Escape the mummy",
      highlights: [
        "Développement d’un jeu de labyrinthe 3D avec Processing et des shader GLSL.",
        "Génération procédurale d’un désert et d’une pyramide.",
        "Mécanique de jeu où le joueur doit échapper à une momie.",
      ],
      stack: ["Processing", "GLSL", "Shader", "Jeu 3D"],
      links: [
        { labelKey: "source", href: escapeTheMummyRepo },
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
      logos: ["ups"],
    },
    {
      slug: "pogl",
      relevance: 18,
      title: "Desert Interdit",
      subtitle: "Jeu de plateau tour par tour coopératif en Java.",
      summary:
        "Développement d’un jeu de plateau tour par tour coopératif en Java où les joueurs doivent explorer un désert, collecter des pièces et construire une machine volante pour s’échapper avant que la tempête de sable ne devienne trop intense.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "Mai 2022",
      status: "completed",
      image: cover("pogl"),
      imageAlt: "Aperçu de Desert Interdit",
      highlights: [
        "Développement d’un jeu de plateau tour par tour coopératif en Java avec une interface graphique grâce au concept Model-View-Controller (MVC).",
        "Mécanique de jeu impliquant l’exploration d’un désert, la collecte de pièces, la construction d’une machine volante.",
        "Gestion des conditions de victoire et de défaite basées sur la collecte des pièces et la survie face à la tempête de sable et au manque d’eau.",
      ],
      stack: ["Java", "Jeu de plateau", "Model-View-Controller", "Interface graphique"],
      links: [
        { labelKey: "source", href: poglRepo },
        { labelKey: "details", href: addDetails("pogl") },
      ],
      logos: ["ups"],
    },
    {
      slug: "cli-messaging",
      relevance: 23,
      title: "CLI Messaging",
      subtitle: "Applications de messagerie TCP-IP en C.",
      summary:
        "Développement d’applications de messagerie serveur et client en UDP et TCP-IP avec interface en ligne de commande.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "Octobre 2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "Aperçu de CLI Messaging",
      highlights: [
        "Développement d’applications de messagerie serveur et client en UDP et TCP-IP.",
        "Interface en ligne de commande pour la communication.",
        "Gestion des connexions et des messages entre clients et serveur.",
      ],
      stack: ["C", "UDP", "TCP-IP", "CLI"],
      links: [
        { labelKey: "source", href: cliMessagingRepo },
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
      logos: ["ups"],
    },
    {
      slug: "logihub",
      relevance: 25,
      title: "LogiHub",
      subtitle: "Bibliothèque de jeux en ligne hébergeant des jeux p5.js.",
      summary:
        "Première bibliothèque de jeux en ligne hébergeant des jeux p5.js personnalisés, développée au lycée. Comprend des classiques comme Pong, Space Invaders, Reaction Time et Number Test.",
      organization: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "Aperçu de LogiHub",
      highlights: [
        "Développement de plusieurs jeux rétro personnalisés en p5.js (Pong, Space Invaders, Reaction Time).",
        "Création d'une plateforme d'hébergement statique HTML/CSS pour les jeux jouables en ligne.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: logihubUrl },
        { labelKey: "source", href: logihubRepo },
        { labelKey: "details", href: addDetails("logihub") },
      ],
      logos: ["essouriau"],
    }
  ],
  ar: [
    {
      slug: "watchlist-service",
      relevance: 88,
      title: "خدمة قائمة المراقبة الإعلامية",
      subtitle: "منصة لإدارة كتالوج الوسائط والمجموعات المشتركة (هندسة موجهة نحو الخدمات).",
      summary:
        "تصميم وتطوير منصة تعاونية لقوائم المراقبة الإعلامية تتميز بـ تحكم دقيق في الوصول على أساس الأدوار، وحفظ البيانات في قاعدة PostgreSQL عبر Prisma ORM، وإدارة الجلسات باستخدام Better Auth، بالإضافة إلى خادم مدمج لـ بروتوكول سياق النموذج (MCP).",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "مايو 2026",
      status: "completed",
      image: cover("watchlist-service"),
      imageAlt: "معاينة خدمة قائمة المراقبة الإعلامية",
      highlights: [
        "مجموعات تعاونية مع أدوار دقيقة وصور وتقييمات ودعوات وإحصاءات. فرز وتصفية المجموعات والوسائط.",
        "خادم بروتوكول سياق النموذج (MCP) مدمج لأدوات المجموعات والوسائط.",
        "خط أنابيب CI/CD شامل مع Vitest، واختبارات تكامل للخدمات الخلفية، ونشر مؤتمت.",
      ],
      stack: ["Vue 3", "Pinia", "Tailwind CSS", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Vercel", "Supabase", "MCP", "Docker", "GitHub Actions"],
      links: [
        { labelKey: "live", href: watchlistUrl },
        { labelKey: "source", href: watchlistRepo },
        { labelKey: "details", href: addDetails("watchlist-service") },
      ],
      featured: true,
      logos: ["polytech"],
    },
    {
      slug: "vireli",
      relevance: 74,
      title: "Vireli",
      subtitle: "تطبيق ويب تقدمي (PWA) للحد من الانبعاثات الكربونية.",
      summary:
        "تصميم وتطوير تطبيق ويب تقدمي للمسؤولية البيئية يتميز باستبيان دوري للبصمة الكربونية، وإدارة المجموعات التعاونية في الوقت الحقيقي، وإدارة الجلسات باستخدام Better Auth، وحفظ البيانات في قاعدة PostgreSQL عبر Prisma ORM ضمن monorepo يعتمد على Bun وHono.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "يناير - مايو 2026",
      status: "completed",
      image: cover("vireli"),
      imageAlt: "معاينة تطبيق Vireli PWA",
      highlights: [
        "مجموعات تعاونية للدعم المتبادل مع مراسلة فورية، ودعوات، وإدارة أدوار دقيقة، وأهداف جماعية. تتبع البصمة الكربونية مع رسوم بيانية للتقدم الزمني.",
        "بنية monorepo لمساحات عمل Bun مع مشاركة صارمة للأنواع، وسجلات تدقيق مؤتمتة عبر triggers في PostgreSQL، وبنية حذف متوافقة مع GDPR عبر إخفاء الهوية.",
        "خط أنابيب نشر مستمر (CI/CD) عبر أداة Coolify، وحاويات Docker متعددة الخدمات (Nginx, Bun, Redis)، وتدقيق إمكانية الوصول الرقمي الحائز على تقييم 9.95/10.",
      ],
      stack: ["Angular", "Ionic", "PWA", "Capacitor", "Bun", "Hono", "Better Auth", "Prisma", "PostgreSQL", "Redis", "Docker", "Coolify", "Zod", "OpenAPI", "Postman", "Monorepo"],
      links: [
        { labelKey: "live", href: vireliUrl },
        // { labelKey: "source", href: "https://git.kerboul.me/genie-logiciel/vireli" }, - currently private
        { labelKey: "details", href: addDetails("vireli") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "minimax-resnet",
      relevance: 98,
      title: "محرك ذكاء اصطناعي ومقيّم ResNet (لعبة إسكامبي)",
      subtitle: "تصميم محرك Negamax Alpha-Beta محسن وشبكة متبقية لتقييم الوضعيات.",
      summary:
        "تطوير شامل لمحرك ذكاء اصطناعي للعبة لوحية (بلغة Java) محسن باستخدام لوحات البت (bitboards) وبحث Negamax Alpha-Beta، متصل بشبكة متبقية سيامية (PyTorch، بـ 730 ألف معلمة) تم تدريبها عبر تمهيد المينيمكس (minimax bootstrapping) على 3 ملايين وضعية.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "مارس - مايو 2026",
      status: "completed",
      image: cover("minimax-resnet"),
      imageAlt: "معاينة ذكاء إسكامبي الاصطناعي ونموذج BandDPER",
      highlights: [
        "تصميم BandDPER، وهو ResNet سيامي بأوزان مشتركة، مع ترميز مكاني نسبي قائم على وحيد القرن (unicorn) شبيه بـ HalfKP، ومسار التفافي مباشر للتمريرات القسرية.",
        "تطوير محرك بحث Negamax مع تقليم Alpha-Beta، وKiller/History Heuristics، والتعميق التكراري (Iterative Deepening).",
        "تحسين منخفض المستوى باستخدام Bitboards هجينة وMake-Unmake لزيادة إنتاجية التقييم (عقدة/ثانية) دون أعباء Garbage Collector.",
        "إنشاء مجموعة بيانات من 3 ملايين وضعية من خلال اللعب الذاتي وتمهيد المينيمكس المتوازي بعمق 7، وتم تدريبها باستخدام PyTorch واستضافتها على Hugging Face.",
      ],
      stack: ["PyTorch", "Java", "Minimax", "ResNet", "Python"],
      links: [
        { labelKey: "live", href: escampeUrl },
        { labelKey: "paper", href: escampePaper, label: { en: "Research Paper", fr: "Research Paper", ar: "ورقة البحث العلمية" } },
        { labelKey: "source", href: escampeRepo },
        { labelKey: "details", href: addDetails("minimax-resnet") },
      ],
      logos: ["polytech"],
      featured: true,
    },
    {
      slug: "how-europe-spends-its-time",
      relevance: 75,
      title: "How Europe Spends Its Time",
      subtitle: "تحويل استقصاءات استخدام الوقت الأوروبية إلى سرد بصري.",
      summary:
        "حُلَّت مشكلة انحراف الترميز الشديد عبر 20 عامًا من استقصاءات استخدام الوقت الأوروبية باستخدام خطوط أنابيب مطابقة متينة في Python. جرى تحليل البيانات باستخدام Hugging Face لاستخلاص سرد بصري، ثم تصميم تطبيق ويب سهل الوصول ورسوم بيانية تفاعلية لعرضها.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "أبريل 2026",
      status: "completed",
      image: cover("how-europe-spends-its-time"),
      imageAlt: "معاينة How Europe Spends Its Time",
      highlights: [
        "خطوط أنابيب مطابقة قوية في Python وpandas لتصحيح انحراف الترميز وتحليل البيانات.",
        "تطبيق ويب سهل الوصول وقابل للتنقل بلوحة المفاتيح مع تصورات تفاعلية.",
        "نُشر كمجموعة بيانات على Hugging Face.",
      ],
      stack: ["Python", "pandas", "تصور البيانات", "إتاحة الوصول", "Hugging Face", "Big Data", "Data Analysis", "Datasets"],
      links: [
        { labelKey: "live", href: visualisationApp5Url },
        { labelKey: "dataset", href: datasetUrl },
        { labelKey: "source", href: visualisationApp5Repo },
        { labelKey: "details", href: addDetails("how-europe-spends-its-time") },
      ],
      featured: true,
      logos: ["polytech"],
    },
    {
      slug: "vibehealth",
      relevance: 20,
      title: "VibeHealth",
      subtitle: "تطبيق ويب لتتبع الصحة.",
      summary:
        "تطوير تطبيق طبي متكامل يجمع بين تتبع نمط الحياة ومراقبة المؤشرات الحيوية ودليل الإسعافات الأولية والبحث عن ممارسي الرعاية الصحية. التطبيق ثنائي اللغة ومكتوب بنوعية صارمة (strongly typed) ومصمم للعمل أولاً دون اتصال بالإنترنت (offline-first) للمسارات الحرجة.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "نوفمبر - ديسمبر 2025",
      status: "completed",
      image: cover("vibehealth"),
      imageAlt: "معاينة تطبيق VibeHealth",
      highlights: [
        "مراقبة المؤشرات الحيوية ونمط الحياة (النشاط والتغذية والترطيب والنوم) مع تذكيرات وتحليل الاتجاهات.",
        "تتبع الأدوية واللقاحات والفحوصات الطبية مع تذكيرات. تتبع الدورة الشهرية والحمل.",
        "عرض الأدلة والمقالات بتنسيق markdown. تتبع مستويات اللقاح والبحث عن الأطباء مع دمج واجهات برمجة التطبيقات (API).",
        "تتبع الحالة المزاجية والتدوين (نص منسق + صور) والتمارين الرياضية (خطط ومقترحات) والاسترخاء والمساعدة على التركيز.",
      ],
      stack: ["Angular", "Bun", "Hono", "PostgreSQL", "Prisma", "BetterAuth", "PWA", "Zod", "i18n", "Health Tech", "Antigravity", "Github Copilot", "Agentic Coding"],
      links: [
        { labelKey: "source", href: vibehealthRepo },
        { labelKey: "details", href: addDetails("vibehealth") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "deloitte-google-cloud-hackathon",
      relevance: 89,
      title: "هاكاثون Deloitte x Google Cloud، الفائز",
      subtitle: "نظام متعدد الوكلاء حائز على جائزة لأتمتة الحملات التسويقية.",
      summary:
        "إنشاء نظام موزع متعدد الوكلاء باستخدام ADK وMCP لأتمتة توليد الحملات التسويقية، مع تنسيق عبر A2A ودمج BigQuery وGemini وImagen وCloud Run وVertex AI Agent Engine.",
      organization: "[Deloitte](https://www.deloitte.com/) و [Google Cloud](https://cloud.google.com/)",
      period: "نوفمبر 2025",
      status: "won",
      image: cover("deloitte-google-cloud-hackathon"),
      imageAlt: "معاينة هاكاثون Deloitte x Google Cloud",
      highlights: [
        "تطوير نظام موزع متعدد الوكلاء باستخدام ADK وMCP وتنسيق A2A لأتمتة إنشاء الحملات التسويقية.",
        "تكامل سحابي أصيل: BigQuery (استفسارات ديموغرافية)، وGemini، وImagen، وCloud Run، وVertex AI Agent Engine.",
        "الفائز بالهاكاثون.",
      ],
      stack: ["AI Agents", "Agentic AI", "MCP", "BigQuery", "Cloud Run", "Vertex AI", "Google Cloud", "Agent Development Kit (ADK)", "Cloud Computing", "A2A"],
      links: [
        { labelKey: "details", href: addDetails("deloitte-google-cloud-hackathon") },
      ],
      logos: ["deloitte", "googlecloud"],
    },
    {
      slug: "shaders",
      relevance: 66,
      title: "المظللات (Shaders)",
      subtitle: "مظلل مشهد ثلاثي الأبعاد بتقنية raymarching يتميز بمنحوتات زجاجية، كاروسيل، وأرضية متحركة.",
      summary:
        "إنشاء مشهد حيوي بتقنية raymarching يحتوي على منحوتات زجاجية واقعية (مع انكسار الضوء)، وكاروسيل مزخرف، وأرضية متحركة، مما يبرز الانكسار، التشتت اللوني، والرسوم المتحركة الإجرائية.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "نوفمبر 2025",
      status: "completed",
      image: cover("shaders"),
      imageAlt: "معاينة مجموعة المظللات",
      highlights: [
        "منحوتات زجاجية مع انكسار واقعي وتشتت لوني.",
        "كاروسيل مزخرف وأرضية متحركة بنقوش بلاط قزحية، وانعكاسات كرة ديسكو، وشرارات قصاصات ملونة (confetti).",
        "نجوم متلألئة وشهب في السماء، مع نص قزحي متوهج (ينعكس على المنحوتات).",
      ],
      stack: ["GLSL", "Shadertoy", "Computer Graphics", "Raymarching", "Refraction", "Chromatic Dispersion", "Glass Shaders", "Procedural Animation"],
      links: [
        { labelKey: "live", href: shadersLive },
        { labelKey: "details", href: addDetails("shaders") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "xtts-finetuning",
      relevance: 100,
      title: "XTTS Finetuning",
      subtitle: "بحث في توليد الكلام (Speech Synthesis).",
      summary:
        "مراجعة لأحدث التقنيات في مجال توليد الكلام (TTS)، وإنشاء تطبيق Streamlit لتسريع البحث عن الأوراق العلمية، ثم ضبط الدقة (fine-tuning) لنموذج XTTS على Google Colab باستخدام PyTorch وGPT-2 لإضافة اللغة المالطية دون تراجع.",
      organization: "[قسم الذكاء الاصطناعي - L-Università ta' Malta (University of Malta)](https://www.um.edu.mt/ict/ai/)",
      period: "يونيو - أغسطس 2025",
      status: "completed",
      image: cover("xtts-finetuning"),
      imageAlt: "معاينة مشروع XTTS Finetuning",
      highlights: [
        "مراجعة أحدث التقنيات في TTS مع أداة للبحث عن الأوراق العلمية عبر Streamlit. اختيار نموذج XTTS لأدائه وبنيته الموديلية ومعرفته بالإيطالية والعربية والإنجليزية والفرنسية وإدارته للتناوب اللغوي (code-switching)، مما يتناسب تماماً مع المالطية.",
        "ضبط الدقة (Fine-tuning) والاستدلال لقسم GPT-2 من نموذج XTTS على Google Colab باستخدام PyTorch. يسمح النموذج بإضافة لغة جديدة عبر تدريب قسم GPT-2 فقط، مما يقلل بشكل كبير من تكلفة التدريب ويمنع التراجعات.",
        "استراتيجيات تدريب وتحسين متعددة لتحسين جودة توليد الكلام باللغة المالطية، مع ضيق الوقت لتنفيذ تدريب هجين (مزج بين المالطية واللغات الأصلية)."
      ],
      stack: ["PyTorch", "GPT-2", "XTTS", "Streamlit", "Git", "Hugging Face", "Machine Learning", "Model Training"],
      links: [
        { labelKey: "live", href: streamlitSearch, label: { en: "Paper Discovery Tool", fr: "Outil de recherche d'articles", ar: "أداة البحث عن الأوراق" } },
        { labelKey: "demo", href: streamlitDemo, label: { en: "Maltese TTS Demo", fr: "Synthèse vocale مالتا", ar: "عرض توليد الكلام المالطي" } },
        { labelKey: "source", href: maltaRepo },
        { labelKey: "details", href: addDetails("xtts-finetuning") },
      ],
      featured: true,
      logos: ["um"],
    },
    {
      slug: "quizine",
      relevance: 65,
      title: "Quizine",
      subtitle: "منصة مسابقة في الوقت الحقيقي مع WebSockets.",
      summary:
        "تصميم بنية مسابقات في الوقت الحقيقي قادرة على إدارة 50 لاعباً في الغرفة الواحدة، مع واجهة Angular تفاعلية وإدارة جلسات باستخدام Redis وVercel وSupabase.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "فبراير - مايو 2025",
      status: "completed",
      image: cover("quizine"),
      imageAlt: "معاينة Quizine",
      highlights: [
        "بنية تعتمد على WebSockets لمزامنة الأسئلة والنتائج ومعالجة إعادة الاتصال.",
        "واجهة Angular برمجية مرنة مع التوجيه (routing) وحارس المصادقة (AuthGuard) والإشعارات وعقد اتفاقية الواجهة البرمجية (API contract).",
        "توثيق كامل للمشروع، بدءاً من تصاميم Figma التوضيحية وحتى النشر المستمر (Vercel, Supabase).",
      ],
      stack: ["WebSockets", "Angular", "Redis", "Vercel", "Supabase", "Figma", "TypeScript", "Tailwind CSS", "Git", "Node.js", "Express.js", "Agile", "REST"],
      links: [
        { labelKey: "live", href: quizineUrl },
        { labelKey: "source", href: quizineRepo },
        { labelKey: "details", href: addDetails("quizine") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "compilateur-c-java",
      relevance: 70,
      title: "مترجم لغة C",
      subtitle: "مترجم لغة C مكتوب بلغة Java.",
      summary:
        "تطوير مترجم للغة C بلغة Java، يتميز بالتحسينات وإبراز الأخطاء ودعم الحلقات والوظائف والمؤشرات والقوائم والمجال (scope) والمتغيرات وsend/recv وmalloc.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "سبتمبر - ديسمبر 2024",
      status: "completed",
      image: cover("compilateur-c-java"),
      imageAlt: "معاينة مشروع مترجم لغة C",
      highlights: [
        "تطوير مترجم للغة C بلغة Java من المفسر المعجمي (lexer) وحتى توليد التعليمات البرمجية.",
        "دعم الحلقات التكرارية، الوظائف، المؤشرات، القوائم، نطاق الرؤية (scope)، المتغيرات، send/recv، وmalloc (مع مكتبة قياسية).",
        "إبراز الأخطاء، مع توضيح الأخطاء في كل مرحلة من مراحل الترجمة (المعجمية، القواعدية، الدلالية، توليد الكود).",
        "تحسين العمليات الحسابية أثناء عملية الترجمة.",
      ],
      stack: ["Java", "مترجم", "إدارة الأخطاء"],
      links: [
        { labelKey: "source", href: compilerRepo },
        { labelKey: "details", href: addDetails("compilateur-c-java") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "ubik-pizza-challenge",
      relevance: 68,
      title: "Ubik Pizza Challenge",
      subtitle: "تحليل الأمن السيبراني بصيغة الصندوق الأبيض واختبار الاختراق لتطبيق توصيل البيتزا.",
      summary:
        "إجراء تحليل للأمن السيبراني بصيغة الصندوق الأبيض واختبارات اختراق على تطبيق Ubik Pizza، وتحديد الثغرات الأمنية وتقديم توصيات قابلة للتنفيذ لتعزيز الأمن.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "أبريل 2026",
      status: "completed",
      image: cover("ubik-pizza-challenge"),
      imageAlt: "معاينة Ubik Pizza Challenge",
      highlights: [
        "تحليل أمني بصيغة الصندوق الأبيض واختبارات اختراق لتطبيق Ubik Pizza.",
        "تحديد الثغرات الأمنية (XSS, SQLi, CSRF, RCE) وتوصيات للحد من مخاطرها.",
        "صياغة تقرير مفصل يوثق النتائج والخطوات التصحيحية.",
      ],
      stack: ["Cybersecurity", "Penetration Testing", "White-box Analysis", "Security Assessment"],
      links: [
        { labelKey: "paper", href: ubikPaper },
        { labelKey: "details", href: addDetails("ubik-pizza-challenge") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "jeux-entreprise",
      relevance: 10,
      title: "ألعاب محاكاة الأعمال",
      subtitle: "قيادة وإدارة شركة وهمية.",
      summary:
        "إدارة شركة وهمية في إطار لعبة محاكاة وتنافس لإدارة الأعمال.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "يناير 2025",
      status: "completed",
      image: cover("jeux-entreprise"),
      imageAlt: "معاينة مشروع ألعاب محاكاة الأعمال",
      highlights: [
        "إدارة شركة وهمية.",
        "إدارة الاستراتيجية، المالية، الموارد البشرية، التسويق، والعمليات.",
        "تحليل اتجاهات السوق والمنافسة، وإدارة المخاطر والأسعار والكميات.",
      ],
      stack: ["الإدارة", "الاستراتيجية", "التمويل"],
      links: [
        { labelKey: "details", href: addDetails("jeux-entreprise") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "magnus-carlos",
      relevance: 75,
      title: "Magnus Carlos",
      subtitle: "محاكاة علمية ثلاثية الأبعاد لتأثير Magnus.",
      summary:
        "إدارة مشروع محاكاة علمية ثلاثية الأبعاد مع فريق من ستة طلاب باستخدام منهجية Agile، وتطبيق التصور البصري باستخدام مكتبة SDL2 (الخامات، الكاميرات، الدورانات).",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "سبتمبر - ديسمبر 2024",
      status: "completed",
      image: cover("magnus-carlos"),
      imageAlt: "معاينة Magnus Carlos",
      highlights: [
        "محاكاة علمية لتأثير Magnus مع مراعاة السرعة، والمسار، وشكل الجسم، والاحتكاك.",
        "تصور مرئي باستخدام SDL2: الخامات (الكرة، اللاعبين، المرمى، الأرض)، الكاميرات، والدورانات.",
        "حساب مسبق لسيناريوهات تدخل فيها الكرة المرمى بتأثير Magnus، وسيناريوهات الفشل بدونه، من زوايا كاميرا متعددة.",
        "قيادة فريق مكون من ستة طلاب في بيئة عمل Agile.",
      ],
      stack: ["C++", "SDL2", "Simulation 3D", "Agile", "Visualization", "Physics Modeling", "Project Management"],
      links: [
        { labelKey: "source", href: magnusCarlosRepo },
        { labelKey: "details", href: addDetails("magnus-carlos") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "nyxen",
      relevance: 40,
      title: "Nyxen",
      subtitle: "تجربة صفحة واحدة مع نموذج ثلاثي الأبعاد تفاعلي.",
      summary:
        "تصميم متجر إلكتروني لمستحضرات التجميل بصيغة تطبيق الصفحة الواحدة (SPA). من تصميم الألوان والمسارات والربط إلى دمج نموذج ثلاثي الأبعاد متحرك في القسم الرئيسي.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "نوفمبر 2023 - فبراير 2024",
      status: "completed",
      image: cover("nyxen"),
      imageAlt: "معاينة Nyxen",
      highlights: [
        "تصميم لوحة الألوان ومسارات المستخدمين والتوجيه في تطبيق الصفحة الواحدة (SPA Routing).",
        "دمج نموذج ثلاثي الأبعاد interactif ومتحرك.",
        "تركيز قوي على التوجيه الفني والتفاعل الفني.",
      ],
      stack: ["Angular", "Three.js", "TypeScript", "JavaScript", "HTML", "CSS", "SPA Routing", "3D", "Animation", "Git", "Agile", "Frontend"],
      links: [
        { labelKey: "live", href: nyxenRepo },
        { labelKey: "details", href: addDetails("nyxen") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "house-finder",
      relevance: 30,
      title: "مكتشف السكن (House Finder)",
      subtitle: "نمذجة البيانات وأداة واجهة سطر الأوامر (CLI).",
      summary:
        "تصميم نماذج البيانات لهيكلة سمات السكن والاتصالية، وتطوير أداة CLI لتصنيف العقارات وفق معايير مخصصة.",
      organization: "[Polytech Paris-Saclay](https://www.polytech.universite-paris-saclay.fr)",
      period: "أكتوبر 2023",
      status: "completed",
      image: cover("house-finder"),
      imageAlt: "معاينة مكتشف السكن",
      highlights: [
        "تطوير أداة CLI لتصنيف العقارات بناءً على معايير مخصصة.",
        "تصميم نماذج البيانات لهيكلة سمات السكن والاتصالية.",
      ],
      stack: ["Java", "Open Data", "Dataset", "CLI"],
      links: [
        { labelKey: "details", href: addDetails("house-finder") },
      ],
      logos: ["polytech"],
    },
    {
      slug: "escape-the-mummy",
      relevance: 35,
      title: "الهروب من المومياء (Escape the Mummy)",
      subtitle: "لعبة متاهة ثلاثية الأبعاد باستخدام Processing و GLSL.",
      summary:
        "تطوير لعبة متاهة ثلاثية الأبعاد حيث يتعين على اللاعب الهروب من المومياء بعد دخول الهرم في صحراء تم إنشاؤها إجرائياً.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "أبريل - يونيو 2022",
      status: "completed",
      image: cover("escape-the-mummy"),
      imageAlt: "معاينة الهروب من المومياء",
      highlights: [
        "تطوير لعبة متاهة ثلاثية الأبعاد باستخدام Processing ومظللات GLSL.",
        "توليد إجرائي للصحراء والهرم.",
        "آلية لعب تتطلب من اللاعب الهروب من مومياء ملاحِقة.",
      ],
      stack: ["Processing", "GLSL", "Shader", "3D Game"],
      links: [
        { labelKey: "source", href: escapeTheMummyRepo },
        { labelKey: "details", href: addDetails("escape-the-mummy") },
      ],
      logos: ["ups"],
    },
    {
      slug: "pogl",
      relevance: 18,
      title: "الصحراء المحرمة (Forbidden Desert)",
      subtitle: "لعبة لوحية تعاونية متعاقبة الأدوار بلغة Java.",
      summary:
        "تتطلب اللعبة من اللاعبين استكشاف صحراء، وجمع الأجزاء، وبناء آلة طائرة للهروب قبل أن تشتد العاصفة الرملية.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "مايو 2022",
      status: "completed",
      image: cover("pogl"),
      imageAlt: "معاينة الصحراء المحرمة",
      highlights: [
        "تطوير لعبة لوحية تعاونية متعاقبة الأدوار بلغة Java مع واجهة رسومية تعتمد على نمط التصميم (MVC).",
        "آليات لعب تشمل استكشاف الصحراء، جمع القطع، وبناء آلة طائرة.",
        "إدارة شروط الفوز والخسارة بناءً على جمع القطع، والبقاء على قيد الحياة في مواجهة العاصفة الرملية ونقص المياه.",
      ],
      stack: ["Java", "لعبة لوحية", "Model-View-Controller", "واجهة رسومية"],
      links: [
        { labelKey: "source", href: poglRepo },
        { labelKey: "details", href: addDetails("pogl") },
      ],
      logos: ["ups"],
    },
    {
      slug: "cli-messaging",
      relevance: 23,
      title: "مراسلة واجهة سطر الأوامر (CLI Messaging)",
      subtitle: "تطبيقات مراسلة باستخدام TCP/IP بلغة C.",
      summary:
        "تطوير تطبيقات مراسلة للعميل والخادم عبر بروتوكولات UDP وTCP/IP مع واجهة برمجية تعتمد على سطر الأوامر.",
      organization: "[Université Paris-Saclay](https://www.universite-paris-saclay.fr)",
      period: "أكتوبر 2022",
      status: "completed",
      image: cover("cli-messaging"),
      imageAlt: "معاينة مراسلة واجهة سطر الأوامر",
      highlights: [
        "تطوير تطبيقات مراسلة للعميل والخادم باستخدام UDP وTCP/IP.",
        "واجهة سطر أوامر للتواصل الفوري.",
        "إدارة الاتصالات والرسائل بين العملاء والخادم.",
      ],
      stack: ["C", "UDP", "TCP-IP", "CLI"],
      links: [
        { labelKey: "source", href: cliMessagingRepo },
        { labelKey: "details", href: addDetails("cli-messaging") },
      ],
      logos: ["ups"],
    },
    {
      slug: "logihub",
      relevance: 25,
      title: "LogiHub",
      subtitle: "مكتبة ألعاب على الإنترنت تستضيف ألعاب p5.js.",
      summary:
        "أول مكتبة ألعاب على الإنترنت تستضيف ألعاب p5.js مخصصة تم تطويرها في المدرسة الثانوية. تشتمل على ألعاب كلاسيكية مثل Pong وSpace Invaders وReaction Time وNumber Test.",
      organization: "[Lycée de l'Essouriau](https://lyceedelessouriau.fr)",
      period: "2019",
      status: "completed",
      image: cover("logihub"),
      imageAlt: "معاينة LogiHub",
      highlights: [
        "تطوير العديد من الألعاب الكلاسيكية المخصصة باستخدام p5.js (Pong, Space Invaders, Reaction Time).",
        "بناء منصة استضافة ثابتة باستخدام HTML/CSS للألعاب القابلة للعب على الويب.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "p5.js", "Web Games"],
      links: [
        { labelKey: "live", href: logihubUrl },
        { labelKey: "source", href: logihubRepo },
        { labelKey: "details", href: addDetails("logihub") },
      ],
      logos: ["essouriau"],
    }
  ]
};

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale];
};

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
};
