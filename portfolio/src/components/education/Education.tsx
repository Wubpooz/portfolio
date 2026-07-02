import { educations } from '../../data/education';
import ExpandableItem from '../shared/ExpandableItem';
import { Accordion } from '@/components/ui/accordion';

export default function EducationSection() {
  return (
    <section id="education" className="py-8 w-full min-w-0 max-w-full">
      <h2
        className="text-xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
      >
        Education
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