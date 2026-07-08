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
  const hasContent = description && description.length > 0

  const headerContent = (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] gap-x-4 text-left">
      <div className="min-w-0">
        <h3 className="text-base font-semibold wrap-break-word text-foreground md:text-[1.05rem]">
          {title}
        </h3>
        <p className="text-sm wrap-break-words text-muted-foreground mt-1">
          {subtitle}
        </p>
      </div>

      <span className="whitespace-nowrap text-xs font-mono self-start text-muted-foreground pt-1">
        {dateRange}
      </span>
    </div>
  )

  return (
    <AccordionItem
      value={value}
      className="w-full border-b border-border last:border-b-0 transition-colors hover:bg-muted/20"
    >
      <div className="w-full px-4 md:px-6">
        {hasContent ? (
          <AccordionTrigger className="w-full py-5 hover:no-underline [&>svg]:shrink-0 gap-4">
            {headerContent}
          </AccordionTrigger>
        ) : (
          <div className="w-full py-5 flex items-start justify-between">
            {headerContent}
          </div>
        )}

        {tags?.length ? (
          <div className="pb-3">
            <TagPills tags={tags} />
          </div>
        ) : null}

        {description?.length ? (
          <AccordionContent className="pb-5">
            <ul className="space-y-2">
              {description.map((line, i) => (
                <li
                  key={i}
                  className="relative pl-4 text-sm leading-relaxed wrap-break-words text-muted-foreground"
                >
                  <span
                    className="absolute left-0 top-2 h-1 w-1 rounded-full bg-primary"
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