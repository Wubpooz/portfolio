import TagPills from './TagPills'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ExpandableItemProps {
  value: string
  title: string
  subtitle: string
  dateRange: string
  description?: string[]
  tags?: string[]
}

export default function ExpandableItem({
  value,
  title,
  subtitle,
  dateRange,
  description,
  tags,
}: ExpandableItemProps) {
  return (
    <AccordionItem
      value={value}
      className="w-full border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="w-full px-0">
        <AccordionTrigger className="w-full py-4 hover:no-underline [&>svg]:shrink-0">
          <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] gap-x-4 text-left">
            <div className="min-w-0">
              <h3
                className="text-base font-bold wrap-break-word"
                style={{ color: 'var(--text)' }}
              >
                {title}
              </h3>
              <p
                className="text-sm wrap-break-words"
                style={{ color: 'var(--muted)' }}
              >
                {subtitle}
              </p>
            </div>

            <span
              className="whitespace-nowrap text-xs font-mono self-start"
              style={{ color: 'var(--faint)' }}
            >
              {dateRange}
            </span>
          </div>
        </AccordionTrigger>

        {tags?.length ? (
          <div className="pb-3">
            <TagPills tags={tags} />
          </div>
        ) : null}

        {description?.length ? (
          <AccordionContent className="pb-4">
            <ul className="space-y-2">
              {description.map((line, i) => (
                <li
                  key={i}
                  className="relative pl-4 text-sm leading-relaxed wrap-break-words"
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className="absolute left-0 top-2 h-1 w-1 rounded-full"
                    style={{ background: 'var(--primary)' }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </AccordionContent>
        ) : null}
      </div>
    </AccordionItem>
  )
}