import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  FolderGit2,
  Heart,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getSkillCategories, type SkillContext } from "@/data/skills";
import SkillIcon from "./SkillIcon";
import { getUiContent, useLocale } from "@/i18n";
import { sanitizeInput } from "@/lib/security";

const contextFilters: ("all" | SkillContext)[] = [
  "all",
  "production",
  "research",
  "project",
];

const proficiencyLabels = {
  fr: {
    1: "Découverte",
    2: "Bases",
    3: "Opérationnel",
    4: "Confirmé",
    5: "Autonome pour livrer",
  },
  en: {
    1: "Exploring",
    2: "Foundations",
    3: "Operational",
    4: "Proficient",
    5: "Autonomous delivery",
  },
  ar: {
    1: "استكشاف",
    2: "أساسيات",
    3: "تشغيلي",
    4: "متمكن",
    5: "تسليم مستقل",
  },
} as const;

const contextMeta = {
  production: {
    Icon: BriefcaseBusiness,
    fr: "Production",
    en: "Production",
    ar: "إنتاج",
  },
  research: {
    Icon: FlaskConical,
    fr: "Recherche",
    en: "Research",
    ar: "بحث",
  },
  project: {
    Icon: FolderGit2,
    fr: "Projet",
    en: "Project",
    ar: "مشروع",
  },
} as const;

const localizedTexts = {
  fr: {
    autonomyLevelTitle: "Niveau d’autonomie :",
    autonomyLevelDesc:
      "1 découverte · 3 opérationnel · 5 autonome pour concevoir, déboguer et livrer.",
    dotsMeaning: "points = autonomie",
    outlineMeaning: "contour = spécialité",
    heartMeaning: "domaine que je souhaite privilégier",
    searchPlaceholder: "Rechercher une technologie…",
    clearSearch: "Effacer la recherche",
    filterLabel: "Filtrer les compétences par contexte",
    allContext: "Toutes",
    viewProjects: "Voir les projets",
    noResults: "Aucune compétence ne correspond à cette recherche.",
    focusAria: "Spécialité à privilégier",
    contextPrefix: "Contextes : ",
  },
  en: {
    autonomyLevelTitle: "Autonomy level:",
    autonomyLevelDesc:
      "1 exploring · 3 operational · 5 autonomous design, debugging, and delivery.",
    dotsMeaning: "dots = autonomy",
    outlineMeaning: "outline = focus area",
    heartMeaning: "area I want to prioritize",
    searchPlaceholder: "Search a technology…",
    clearSearch: "Clear search",
    filterLabel: "Filter skills by context",
    allContext: "All",
    viewProjects: "View projects",
    noResults: "No skill matches this search.",
    focusAria: "Focus area",
    contextPrefix: "Contexts: ",
  },
  ar: {
    autonomyLevelTitle: "مستوى الاستقلالية:",
    autonomyLevelDesc:
      "1 استكشاف · 3 تشغيلي · 5 مستقل تماماً في التصميم والتصحيح والتسليم.",
    dotsMeaning: "النقاط = الاستقلالية",
    outlineMeaning: "الإطار = التخصص",
    heartMeaning: "مجال أرغب في إعطائه الأولوية",
    searchPlaceholder: "ابحث عن تقنية…",
    clearSearch: "مسح البحث",
    filterLabel: "تصفية المهارات حسب السياق",
    allContext: "الكل",
    viewProjects: "عرض المشاريع",
    noResults: "لا توجد مهارة تطابق هذا البحث.",
    focusAria: "تخصص مفضل",
    contextPrefix: "السياقات: ",
  },
} as const;

export default function SkillsSection() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const skillCategories = useMemo(() => getSkillCategories(locale), [locale]);
  const texts = localizedTexts[locale];

  const [query, setQuery] = useState("");
  const [contextFilter, setContextFilter] =
    useState<(typeof contextFilters)[number]>("all");

  const [collapsedCategories, setCollapsedCategories] = useState<
    Record<string, boolean>
  >(() => {
    try {
      const stored = localStorage.getItem("collapsed-skills-categories");
      if (!stored) return {};

      const parsed: unknown = JSON.parse(stored);
      return typeof parsed === "object" && parsed !== null
        ? (parsed as Record<string, boolean>)
        : {};
    } catch {
      return {};
    }
  });

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((previous) => {
      const updated = {
        ...previous,
        [categoryId]: !previous[categoryId],
      };

      try {
        localStorage.setItem(
          "collapsed-skills-categories",
          JSON.stringify(updated),
        );
      } catch (error) {
        console.error("Failed to save collapsed skills categories state", error);
      }

      return updated;
    });
  };

  const normalizedQuery = sanitizeInput(query).trim().toLocaleLowerCase(locale);

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((skill) => {
          const matchesQuery =
            !normalizedQuery ||
            [
              skill.name,
              skill.note,
              skill.contexts?.join(" "),
            ]
              .filter(Boolean)
              .join(" ")
              .toLocaleLowerCase(locale)
              .includes(normalizedQuery);

          const matchesContext =
            contextFilter === "all" ||
            skill.contexts?.includes(contextFilter) === true;

          return matchesQuery && matchesContext;
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [contextFilter, locale, normalizedQuery, skillCategories]);

  const contextLabel = (context: SkillContext) => {
    const meta = contextMeta[context];
    return meta[locale];
  };

  const proficiencyLabel = (value: 1 | 2 | 3 | 4 | 5) => {
    const labels = proficiencyLabels[locale];
    return labels[value];
  };

  return (
    <section id="skills" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        {/* Header & Legend */}
        <div className="border-b border-border px-4 py-5 md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.skillsTitle}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {content.sections.skillsDescription}
          </p>

          {/* Visible Legend */}
          <div className="mt-4 flex flex-col gap-2 border-l-2 border-primary/50 pl-3 text-xs text-muted-foreground rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3">
            <p>
              <span className="font-medium text-foreground">
                {texts.autonomyLevelTitle}
              </span>{" "}
              {texts.autonomyLevelDesc}
            </p>

            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1">
                <span
                  className="size-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {texts.dotsMeaning}
              </span>

              <span className="inline-flex items-center gap-1">
                <span
                  className="size-3 rounded-sm border-2 border-primary"
                  aria-hidden="true"
                />
                {texts.outlineMeaning}
              </span>

              <span className="inline-flex items-center gap-1">
                <Heart
                  className="size-3 fill-current text-foreground"
                  aria-hidden="true"
                />
                {texts.heartMeaning}
              </span>
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="border-b border-border bg-muted/5 px-4 py-4 md:px-6">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2">
              <Search className="size-4 shrink-0 text-muted-foreground" />

              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                maxLength={80}
                placeholder={texts.searchPlaceholder}
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />

              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                  }}
                  className="rounded-sm p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label={texts.clearSearch}
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </label>

            <div
              className="flex flex-wrap gap-2"
              aria-label={texts.filterLabel}
            >
              {contextFilters.map((filter) => {
                const active = filter === contextFilter;
                const label =
                  filter === "all"
                    ? texts.allContext
                    : contextLabel(filter);

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setContextFilter(filter);
                    }}
                    aria-pressed={active}
                    className={`rounded-md border px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "border-foreground bg-muted text-foreground"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category & Skills Grid */}
        <div className="divide-y divide-border">
          {filteredCategories.map((category) => {
            const isCategoryCollapsed =
              collapsedCategories[category.id] ?? false;

            return (
              <div key={category.id}>
                <button
                  type="button"
                  onClick={() => {
                    toggleCategory(category.id);
                  }}
                  className="flex w-full select-none items-center justify-between border-b border-border bg-muted/10 px-4 py-3 text-left transition-colors hover:bg-muted/20 md:px-6 rtl:text-right"
                  aria-expanded={!isCategoryCollapsed}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {category.label}
                  </h3>

                  {isCategoryCollapsed ? (
                    <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronUp className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </button>

                {!isCategoryCollapsed ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {category.items.map((skill) => {
                      const level = skill.proficiency;
                      const levelText = level ? proficiencyLabel(level) : null;
                      const hasEvidence = Boolean(skill.evidence?.length);

                      return (
                        <div
                          key={`${category.id}-${skill.id}`}
                          className={`group relative flex min-h-36 flex-col items-center justify-center gap-3 border-b border-r border-border px-4 py-5 text-center transition-colors hover:bg-muted/20 ${
                            skill.focus
                              ? "z-10 -m-px border-2 border-primary/70 bg-primary/[0.025]"
                              : ""
                          }`}
                        >
                          <SkillIcon name={skill.name} icon={skill.icon} />

                          <div className="space-y-1">
                            <p className="inline-flex items-center justify-center gap-1 text-sm font-medium leading-snug text-foreground">
                              {skill.name}

                              {skill.focus ? (
                                <Heart
                                  className="size-3 shrink-0 fill-current text-foreground"
                                  aria-label={texts.focusAria}
                                />
                              ) : null}
                            </p>

                            {skill.note ? (
                              <p className="text-xs text-muted-foreground">
                                {skill.note}
                              </p>
                            ) : null}

                            {level ? (
                              <div
                                className="flex items-center justify-center gap-1 pt-1.5"
                                aria-label={`${skill.name}: ${levelText ?? ""}, ${String(level)}/5`}
                                title={`${levelText ?? ""} (${String(level)}/5)`}
                              >
                                {Array.from({ length: 5 }).map((_, index) => {
                                  const dotKey = `dot-${String(index + 1)}`;
                                  return (
                                    <span
                                      key={`${skill.id}-proficiency-${dotKey}`}
                                      className={`size-1.5 rounded-full ${
                                        index < level
                                          ? "bg-primary"
                                          : "bg-muted-foreground/20"
                                      }`}
                                      aria-hidden="true"
                                    />
                                  );
                                })}
                                <span className="sr-only">{levelText}</span>
                              </div>
                            ) : null}

                            {skill.contexts?.length ? (
                              <div
                                className="flex justify-center gap-1.5 pt-2"
                                aria-label={`${texts.contextPrefix}${skill.contexts.map(contextLabel).join(", ")}`}
                              >
                                {skill.contexts.map((context) => {
                                  const meta = contextMeta[context];
                                  const Icon = meta.Icon;

                                  return (
                                    <span
                                      key={context}
                                      className="inline-flex size-5 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground"
                                      title={contextLabel(context)}
                                    >
                                      <Icon className="size-3" aria-hidden="true" />
                                      <span className="sr-only">
                                        {contextLabel(context)}
                                      </span>
                                    </span>
                                  );
                                })}
                              </div>
                            ) : null}

                            {hasEvidence ? (
                              <Link
                                to={`/projects?tech=${encodeURIComponent(skill.id)}`}
                                className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                              >
                                {texts.viewProjects}
                                <ArrowUpRight className="size-3 rtl:-scale-x-100" aria-hidden="true" />
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}

          {!filteredCategories.length ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              {texts.noResults}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}


