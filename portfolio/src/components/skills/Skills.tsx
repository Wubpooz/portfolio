import { skillCategories } from "@/data/skills"
import SkillIcon from "./SkillIcon"

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full min-w-0 max-w-full py-8">
      <div className="mb-10 space-y-3">
        <p
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--faint)" }}
        >
          Skill arsenal
        </p>

        <h2
          className="text-3xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          Tools of modern engineering
        </h2>

        <p
          className="max-w-2xl text-sm leading-7"
          style={{ color: "var(--muted)" }}
        >
          A curated set of languages, frameworks, protocols, and scientific methods
          I use across full-stack, AI, and computational projects.
        </p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3
              className="text-xs uppercase tracking-[0.24em]"
              style={{ color: "var(--faint)" }}
            >
              {category.label}
            </h3>

            <div
              className="grid grid-cols-2 border border-b-0 sm:grid-cols-3 lg:grid-cols-4"
              style={{ borderColor: "var(--border)" }}
            >
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-h-[120px] flex-col items-center justify-center gap-3 border-b border-r px-4 py-6 text-center"
                  style={{ borderColor: "var(--border)" }}
                >
                  <SkillIcon
                    name={skill.name}
                    icon={skill.icon}
                    iconUrl={skill.iconUrl}
                  />

                  <div className="space-y-1">
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      {skill.name}
                    </p>

                    {skill.note ? (
                      <p
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
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
    </section>
  )
}