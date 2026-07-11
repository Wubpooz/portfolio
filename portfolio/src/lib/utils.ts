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

export function parseCertDate(dateStr: string): number {
  const match = /^(\d{2})\.(\d{4})$/.exec(dateStr)
  if (match) {
    const month = Number(match[1])
    const year = Number(match[2])
    return year * 12 + month
  }
  if (/^\d{4}$/.test(dateStr)) {
    const year = Number(dateStr)
    return year * 12 + 6
  }
  return 0
}

const monthsEn = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const monthsFr = ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"]

export function parseProjectPeriod(period: string): number {
  const p = period.toLowerCase()
  const years = p.match(/\b(20\d{2})\b/g)
  if (!years) return 0
  const maxYear = Math.max(...years.map(Number))

  let monthIdx = 0
  monthsEn.forEach((m, idx) => {
    if (p.includes(m)) monthIdx = idx + 1
  })
  monthsFr.forEach((m, idx) => {
    if (p.includes(m)) monthIdx = idx + 1
  })

  return maxYear * 12 + monthIdx
}