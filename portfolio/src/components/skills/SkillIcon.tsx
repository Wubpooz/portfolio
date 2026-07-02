import {
  Binary,
  Brain,
  Braces,
  Cpu,
  Database,
  FileStack,
  GitBranch,
  Network,
  SearchCode,
  SlidersHorizontal,
  TestTube2,
  Workflow,
} from "lucide-react"

interface SkillIconProps {
  name: string
  icon?: string
  iconUrl?: string
}

const fallbackIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  llm: Brain,
  rag: SearchCode,
  lora: SlidersHorizontal,
  rest: Braces,
  "page-objects": FileStack,
  tdd: TestTube2,
  cicd: Workflow,
  math: Binary,
  mpi: Network,
  openmp: Cpu,
  sql: Database,
  rdf: Database,
  sparql: SearchCode,
  pact: GitBranch,
}

export default function SkillIcon({ name, icon, iconUrl }: SkillIconProps) {
  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
        className="h-9 w-9 object-contain"
        aria-hidden="true"
      />
    )
  }

  if (icon && fallbackIcons[icon]) {
    const Icon = fallbackIcons[icon]
    return <Icon size={28} className="opacity-80" aria-hidden="true" />
  }

  if (icon) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${icon}`}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
        className="h-9 w-9 object-contain"
        aria-hidden="true"
      />
    )
    // use opacity-95 grayscale transition duration-200 hover:grayscale-0 for muted icons
  }

  return <Database size={28} className="opacity-70" aria-hidden="true" />
}
