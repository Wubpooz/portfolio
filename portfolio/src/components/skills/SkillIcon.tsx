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
  Shield,
  Workflow,
} from "lucide-react"
import { shouldInvertIcon } from "@/lib/utils"

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
  nlp: Brain,
  rag: SearchCode,
  lora: SlidersHorizontal,
  rest: Braces,
  "functional-programming": Braces,
  logic: Workflow,
  computability: Binary,
  "page-objects": FileStack,
  tdd: TestTube2,
  cicd: Workflow,
  math: Binary,
  hpc: Cpu,
  mpi: Network,
  openmp: Cpu,
  sql: Database,
  rdf: Database,
  sparql: SearchCode,
  pact: GitBranch,
  security: Shield,
  cybersecurity: Shield,
  "distributed-algorithms": Network,
  "graph-algorithms": GitBranch,
  "supervised-learning": Workflow,
}

export default function SkillIcon({ name, icon, iconUrl }: Readonly<SkillIconProps>) {
  const invertClass = shouldInvertIcon(icon ?? name) ? "dark:invert" : ""

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
        className={`h-9 w-9 object-contain ${invertClass}`}
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
        className={`h-9 w-9 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    )
    // use opacity-95 grayscale transition duration-200 hover:grayscale-0 for muted icons
  }

  return <Database size={28} className="opacity-70" aria-hidden="true" />
}
