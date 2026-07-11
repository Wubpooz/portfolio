import { useMemo, useState } from "react"
import { Heart, ChevronDown, ChevronUp } from "lucide-react"
import { getSkillCategories } from "@/data/skills"
import SkillIcon from "./SkillIcon"
import { getUiContent, useLocale } from "@/i18n"

export default function SkillsSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const skillCategories = useMemo(() => getSkillCategories(locale), [locale])

  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem("collapsed-skills-categories")
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((prev) => {
      const updated = {
        ...prev,
        [categoryId]: !prev[categoryId],
      }
      try {
        localStorage.setItem("collapsed-skills-categories", JSON.stringify(updated))
      } catch (e) {
        console.error("Failed to save collapsed skills categories state", e)
      }
      return updated
    })
  }

  return (
    <section id="skills" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        {/* Section Header */}
        <div className="border-b border-border px-4 py-5 md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.skillsTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {content.sections.skillsDescription}
          </p>
        </div>

        {/* Section Content */}
        <div className="divide-y divide-border">
          {skillCategories.map((category) => {
            const isCategoryCollapsed = collapsedCategories[category.id] ?? false
            return (
              <div key={category.id} className="space-y-0">
                {/* Category Header (Clickable to collapse/expand category) */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full bg-muted/10 px-4 py-3 border-b border-border md:px-6 flex items-center justify-between text-left transition-colors hover:bg-muted/20 select-none"
                  aria-expanded={!isCategoryCollapsed}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {category.label}
                  </h3>
                  {isCategoryCollapsed ? (
                    <ChevronDown className="size-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronUp className="size-4 text-muted-foreground shrink-0" />
                  )}
                </button>

                {/* Category Grid */}
                {!isCategoryCollapsed && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex min-h-[120px] flex-col items-center justify-center gap-3 border-b border-r border-border px-4 py-6 text-center transition-colors hover:bg-muted/20"
                      >
                        <SkillIcon
                          name={skill.name}
                          icon={skill.icon}
                          iconUrl={skill.iconUrl}
                        />

                        <div className="space-y-1">
                          <p className="inline-flex items-center justify-center gap-1 text-sm font-medium leading-snug text-foreground">
                            {skill.name}
                            {skill.favorite ? (
                              <Heart className="size-3 fill-current text-foreground shrink-0" aria-hidden="true" />
                            ) : null}
                          </p>

                          {skill.note ? (
                            <p className="text-xs text-muted-foreground">
                              {skill.note}
                            </p>
                          ) : null}

                          {skill.proficiency ? (
                            <div className="flex items-center justify-center gap-1 pt-1.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                  key={i}
                                  className={`size-1.5 rounded-full ${
                                    i < skill.proficiency!
                                      ? "bg-primary"
                                      : "bg-muted-foreground/20"
                                  }`}
                                />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}