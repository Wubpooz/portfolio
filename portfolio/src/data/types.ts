export interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  startDate: string      // "2023" ou "Juin 2025"
  endDate: string         // "Présent" ou "Août 2025"
  description?: string[]   // liste de bullet points
  tags?: string[]           // technologies
  logo?: string
}

export interface EducationEntry {
  id: string
  degree: string
  school: string
  location: string
  startDate: string
  endDate: string
  description?: string[]
  tags?: string[]
  logo?: string
}