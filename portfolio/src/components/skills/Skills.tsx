import { useMemo } from "react"
import { getSkillCategories } from "@/data/skills"
import SkillIcon from "./SkillIcon"
import { getUiContent, useLocale } from "@/i18n"

export default function SkillsSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const skillCategories = useMemo(() => getSkillCategories(locale), [locale])

  return (
    <section id="skills" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-5 md:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
            {content.sections.skillsEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.skillsTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {content.sections.skillsDescription}
          </p>
        </div>

        <div className="divide-y divide-border">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-0">
              <div className="bg-muted/10 px-4 py-3 border-b border-border md:px-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {category.label}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-[120px] flex-col items-center justify-center gap-3 border-b border-r border-border last:border-r-0 px-4 py-6 text-center transition-colors hover:bg-muted/20"
                  >
                    <SkillIcon
                      name={skill.name}
                      icon={skill.icon}
                      iconUrl={skill.iconUrl}
                    />

                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {skill.name}
                      </p>

                      {skill.note ? (
                        <p className="text-xs text-muted-foreground">
                          {skill.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}