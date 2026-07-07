import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const INVERT_ICONS = [
  "github",
  "vercel",
  "three.js",
  "threedotjs",
  "angular",
  "java",
  "openjdk",
  "pact",
  "mcp",
  "model_context_protocol",
  "anthropic",
  "claude"
];

export function shouldInvertIcon(slugOrName?: string) {
  if (!slugOrName) return false;
  const lower = slugOrName.toLowerCase();
  return INVERT_ICONS.some(icon => lower.includes(icon));
}