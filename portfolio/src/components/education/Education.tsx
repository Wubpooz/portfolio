import { useMemo } from "react"
import { getEducations } from '../../data/education';
import ExpandableItem from '../shared/ExpandableItem';
import { Accordion } from '@/components/ui/accordion';
import { getUiContent, useLocale } from '@/i18n'

export default function EducationSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const educations = useMemo(() => getEducations(locale), [locale])

  return (
    <section id="education" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-4 md:px-6">
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.education}
            <span className="text-lg font-normal text-muted-foreground">
              ({educations.length})
            </span>
          </h2>
        </div>

        <Accordion type="multiple" className="w-full min-w-0 max-w-full">
          {educations.map((edu) => (
            <ExpandableItem
              key={edu.id}
              value={edu.id}
              title={edu.degree}
              subtitle={`${edu.school} · ${edu.location}`}
              dateRange={`${edu.startDate} - ${edu.endDate}`}
              description={edu.description}
              tags={edu.tags}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
}