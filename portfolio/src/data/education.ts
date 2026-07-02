import type { EducationEntry } from './types'

export const educations: EducationEntry[] = [
  {
    id: 'polytech',
    degree: 'Ingénieur Informatique & Ingénierie Mathématique',
    school: 'Polytech Paris-Saclay',
    location: 'Orsay, France',
    startDate: '2023',
    endDate: 'Présent',
    tags: ['HPC', 'NLP', 'Cybersécurité', 'CUDA', 'ODE/PDE'],
  },
  {
    id: 'licence',
    degree: "Licence d'informatique — mention bien",
    school: 'Université Paris-Saclay',
    location: 'Orsay, France',
    startDate: '2021',
    endDate: '2023',
    tags: ['Apprentissage Supervisé', 'POO', 'Logique'],
  },
  {
    id: 'prepa',
    degree: 'Classes Préparatoires PSI',
    school: "Lycée de l'Essouriau",
    location: 'Les Ulis, France',
    startDate: '2019',
    endDate: '2021',
    tags: ['Mathématiques', 'Physique', 'Modélisation'],
  },
]