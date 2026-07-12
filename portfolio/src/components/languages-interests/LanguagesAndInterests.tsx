import { useMemo } from "react";
import type { ComponentType } from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { getLanguages, getInterests } from "@/data/about";
import { getUiContent, useLocale } from "@/i18n";

const SEGMENTS = [0, 1, 2, 3, 4];

function getProficiencyLevel(level: string): number {
  const l = level.toLowerCase();
  if (
    l.includes("native") ||
    l.includes("bilingue") ||
    l.includes("bilingual") ||
    l.includes("الأم")
  )
    return 5;
  if (
    l.includes("professional") ||
    l.includes("professionnelle") ||
    l.includes("عملية")
  )
    return 4;
  if (l.includes("limited") || l.includes("limitée") || l.includes("محدودة"))
    return 3;
  if (l.includes("elementary") || l.includes("base") || l.includes("أساسية"))
    return 1;
  return 3;
}

function InterestIcon({ name }: Readonly<{ name: string }>) {
  const IconComponent = (LucideIcons as Record<string, unknown>)[name] as
    | ComponentType<{ className?: string }>
    | undefined;
  if (!IconComponent) {
    return (
      <LucideIcons.Sparkles className="size-5 shrink-0" aria-hidden="true" />
    );
  }
  return <IconComponent className="size-5 shrink-0" aria-hidden="true" />;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function LanguagesAndInterestsSection() {
  const { locale } = useLocale();
  const content = getUiContent(locale);

  const languages = useMemo(() => getLanguages(locale), [locale]);
  const interests = useMemo(() => getInterests(locale), [locale]);

  const borderClass =
    locale === "ar" ? "md:border-r md:pr-8" : "md:border-l md:pl-8";

  return (
    <section id="languages-interests" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-4 md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.languagesAndInterests}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Languages Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
              <LucideIcons.Languages
                className="size-5 text-primary"
                aria-hidden="true"
              />
              {locale === "fr"
                ? "Langues"
                : locale === "ar"
                  ? "اللغات"
                  : "Languages"}
            </h3>

            <div className="space-y-5">
              {languages.map((lang) => {
                const val = getProficiencyLevel(lang.level);
                return (
                  <div
                    key={lang.name}
                    className="border-b border-border/50 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-semibold text-foreground block">
                          {lang.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {lang.level}
                        </span>
                      </div>

                      {/* Segmented level indicator */}
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${lang.name} level: ${val.toString()} out of 5`}
                      >
                        {SEGMENTS.map((sVal) => {
                          const isActive = sVal < val;
                          return (
                            <div
                              key={sVal}
                              className={`h-1.5 w-4 rounded-full transition-all duration-500 ${
                                isActive
                                  ? "bg-primary"
                                  : "bg-muted-foreground/20"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {lang.details?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {lang.details.map((detail) => (
                          <div
                            key={detail}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/15 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-muted/30"
                          >
                            <LucideIcons.Award className="size-3.5 text-primary shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interests Column */}
          <div
            className={`space-y-6 pt-6 border-t border-border md:pt-0 md:border-t-0 ${borderClass}`}
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
              <LucideIcons.Heart
                className="size-5 fill-primary text-primary"
                aria-hidden="true"
              />
              {locale === "fr"
                ? "Intérêts"
                : locale === "ar"
                  ? "الاهتمامات"
                  : "Interests"}
            </h3>

            <motion.div
              key={locale}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-3"
            >
              {interests.map((interest) => (
                <motion.div
                  key={interest.name}
                  variants={itemVariants}
                  className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-muted/5 p-3 cursor-default min-w-0"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <InterestIcon name={interest.icon} />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-snug min-w-0 wrap-break-word hyphens-auto">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
