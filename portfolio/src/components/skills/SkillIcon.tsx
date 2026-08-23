import { Database } from "lucide-react";
import { shouldInvertIcon, getIconUrl } from "@/lib/utils";
import { fallbackIcons } from "./fallbackIcons";

interface SkillIconProps {
  name: string;
  icon?: string;
}

export default function SkillIcon({
  name,
  icon,
}: Readonly<SkillIconProps>) {
  const invertClass = shouldInvertIcon(icon ?? name) ? "dark:invert" : "";

  if (icon && fallbackIcons[icon]) {
    const Icon = fallbackIcons[icon];
    return <Icon size={28} className="opacity-80" aria-hidden="true" />;
  }

  if (icon) {
    return (
      <img
        src={getIconUrl(icon)}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
        className={`h-9 w-9 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    );
  }

  return <Database size={28} className="opacity-70" aria-hidden="true" />;
}
