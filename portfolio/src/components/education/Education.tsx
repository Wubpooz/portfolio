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
    <section id="education" className="py-8 w-full min-w-0 max-w-full">
      <h2
        className="text-xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
      >
        {content.sections.education}
      </h2>

      <Accordion type="multiple" className="w-full min-w-0 max-w-full">
        {educations.map((edu) => (
          <ExpandableItem
            key={edu.id}
            value={edu.id}
            title={edu.degree}
            subtitle={`${edu.school} · ${edu.location}`}
            dateRange={`${edu.startDate} — ${edu.endDate}`}
            description={edu.description}
            tags={edu.tags}
          />
        ))}
      </Accordion>
    </section>
  );
}