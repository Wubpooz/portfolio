import { useMemo } from "react";
import { getExperiences } from "../../data/experiences";
import ExpandableItem from "../shared/ExpandableItem";
import { Accordion } from "@/components/ui/accordion";
import { getUiContent, useLocale } from "@/i18n";

export default function ExperienceSection() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const experiences = useMemo(() => getExperiences(locale), [locale]);

  return (
    <section id="experience" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-4 md:px-6">
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.experience}
            <span className="text-lg font-normal text-muted-foreground">
              ({experiences.length})
            </span>
          </h2>
        </div>

        <Accordion type="multiple" className="w-full min-w-0 max-w-full">
          {experiences.map((exp) => (
            <ExpandableItem
              key={exp.id}
              value={exp.id}
              title={exp.role}
              subtitle={`${exp.company} · ${exp.location}`}
              dateRange={
                exp.startDate != exp.endDate
                  ? `${exp.startDate} - ${exp.endDate}`
                  : exp.startDate
              }
              description={exp.description}
              tags={exp.tags}
              logo={exp.logo}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
