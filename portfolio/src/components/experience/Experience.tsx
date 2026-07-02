import { experiences } from '../../data/experiences';
import ExpandableItem from '../shared/ExpandableItem';
import { Accordion } from '@/components/ui/accordion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 w-full min-w-0 max-w-full">
      <h2
        className="text-xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
      >
        Experience
      </h2>

      <Accordion type="multiple" className="w-full min-w-0 max-w-full">
        {experiences.map((exp) => (
          <ExpandableItem
            key={exp.id}
            value={exp.id}
            title={exp.role}
            subtitle={`${exp.company} · ${exp.location}`}
            dateRange={`${exp.startDate} — ${exp.endDate}`}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </Accordion>
    </section>
  );
}