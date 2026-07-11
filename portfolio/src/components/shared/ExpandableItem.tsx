import { Atom, Briefcase, GraduationCap } from 'lucide-react'
import { shouldInvertIcon, getIconUrl } from '@/lib/utils'
import TagPills from './TagPills'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Link } from 'react-router-dom'

const renderTextWithLinks = (text: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex))
    }
    const linkText = match[1]
    const linkUrl = match[2]
    const isInternal = linkUrl.startsWith("/")
    
    parts.push(
      isInternal ? (
        <Link
          key={matchIndex}
          to={linkUrl}
          onClick={(e) => { e.stopPropagation(); }}
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {linkText}
        </Link>
      ) : (
        <a
          key={matchIndex}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.stopPropagation(); }}
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {linkText}
        </a>
      )
    )
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

interface ExpandableItemProps {
  value: string
  title: string
  subtitle: string
  dateRange: string
  description?: string[]
  tags?: string[]
  logo?: string
}

export default function ExpandableItem({
  value,
  title,
  subtitle,
  dateRange,
  description,
  tags,
  logo,
}: Readonly<ExpandableItemProps>) {
  const hasContent = description && description.length > 0

  const renderLogo = () => {
    if (!logo) return null

    const containerClass = "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background md:h-11 md:w-11 overflow-hidden p-1.5"

    // If it's a URL/path
    if (logo.startsWith("http") || logo.startsWith("/")) {
      return (
        <div className={containerClass}>
          <img
            src={logo}
            alt={title}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      )
    }

    // Special Lucide icons
    if (logo === "atom" || logo === "Atom") {
      return (
        <div className={containerClass}>
          <Atom className="size-5 text-primary shrink-0" aria-hidden="true" />
        </div>
      )
    }
    if (logo === "graduation-cap" || logo === "GraduationCap" || logo === "education" || logo === "school") {
      return (
        <div className={containerClass}>
          <GraduationCap className="size-5 text-primary shrink-0" aria-hidden="true" />
        </div>
      )
    }
    if (logo === "briefcase" || logo === "Briefcase" || logo === "experience") {
      return (
        <div className={containerClass}>
          <Briefcase className="size-5 text-primary shrink-0" aria-hidden="true" />
        </div>
      )
    }

    // Default to SimpleIcons
    const invertClass = shouldInvertIcon(logo) ? "dark:invert" : ""
    return (
      <div className={containerClass}>
        <img
          src={getIconUrl(logo)}
          alt={title}
          className={`max-h-full max-w-full object-contain ${invertClass}`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    )
  }

  const headerContent = (
    <div className="flex items-start gap-3 md:gap-4 text-left w-full min-w-0">
      {renderLogo()}
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] gap-x-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold wrap-break-word text-foreground md:text-[1.05rem]">
            {title}
          </h3>
          <p className="text-sm wrap-break-words text-muted-foreground mt-1">
            {renderTextWithLinks(subtitle)}
          </p>
        </div>

        <span className="whitespace-nowrap text-xs font-mono self-start text-muted-foreground pt-1">
          {dateRange}
        </span>
      </div>
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
                  {renderTextWithLinks(line)}
                </li>
              ))}
            </ul>
          </AccordionContent>
        ) : null}
      </div>
    </AccordionItem>
  )
}