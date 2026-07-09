export interface CertificationItem {
  title: string
  issuer: string
  date: string
  href: string
  credentialId?: string
  expiresAt?: string
  icon?: string
  iconUrl?: string
}

export const certifications: CertificationItem[] = [
  {
    title: "MOOC SecNumAc in cybersecurity",
    issuer: "ANSSI",
    date: "2024",
    href: "https://secnumacademie.gouv.fr/",
  },
  {
    title: "Certificate of completion: Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "06.2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fverify%2Eskilljar%2Ecom%2Fc%2Fgde9e7ewhv9y&urlhash=SRsl&mt=lfJ8bOygYBkDQkC13hJxUicLVgSJThkbIqATkorWJatw4jLds43hPc8NhVdc8zKFDTdaBKq6_PaMgUN3zC2ZOT7HDHA&isSdui=true",
    credentialId: "gde9e7ewhv9y",
    icon: "anthropic",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "06.2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fverify%2Eskilljar%2Ecom%2Fc%2Fiv7bzfowztcd&urlhash=5in5&mt=MfU_BD6W32EQpwFcW3cQFY6eHj7BHVMCt34GcpB1cnxpwZy_zLeXKdiILUxlOFtmHAOIGC0yE5gD4aHNAJJUkTK9XT4&isSdui=true",
    credentialId: "iv7bzfowztcd",
    icon: "anthropic",
  },
  {
    title: "English CEFR C1 (Oral Expression/Comprehension, Written Expression/Comprehension)",
    issuer: "ICIMS",
    date: "04.2026",
    expiresAt: "04.2028",
    href: "https://www.linkedin.com/in/mathieu-w-a9ba36211/overlay/Certifications/1592903899/treasury/?profileId=ACoAADW5aZcBL3ssfT-EVzpXmBA1-KNVxZQKOqk",
  },
  {
    title: "Label Handimanagement",
    issuer: "Companieros",
    date: "04.2026",
    href: "https://www.linkedin.com/in/mathieu-w-a9ba36211/overlay/Certifications/1592660574/treasury/?profileId=ACoAADW5aZcBL3ssfT-EVzpXmBA1-KNVxZQKOqk",
  },
  {
    title: "CodinGame Certification - C++",
    issuer: "CodinGame",
    date: "2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecodingame%2Ecom%2Fcertification%2F4isuVQxdBt0f6EeZSGGX7g&urlhash=PQz5&mt=3o6JZCV57TxqDsAZ1EbHoZwF7lYMRcj4FU8ekuv1EvC7ZicqlGXzEQmN3B427zbDO5EfrOO9zy36GIA5jDjMKxVdoQw&isSdui=true",
    credentialId: "4isuVQxdBt0f6EeZSGGX7g",
    icon: "codingame",
  },
  {
    title: "CodinGame Certification - C",
    issuer: "CodinGame",
    date: "2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecodingame%2Ecom%2Fcertification%2FFnAMCXuWq6tzj9GdI8ZCXg&urlhash=eHAJ&mt=VKcmAlDypG553WPbEABJ9w4Wfxvz5c0G1HSw27z50kgaf8aHzAds2SIxQz_9zG3cxxAofdFoJIf9VojBhTnr4Y703gk&isSdui=true",
    credentialId: "FnAMCXuWq6tzj9GdI8ZCXg",
    icon: "codingame",
  },
  {
    title: "CodinGame Certification - Java",
    issuer: "CodinGame",
    date: "2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecodingame%2Ecom%2Fcertification%2FJ8fLMAvLu6vkfCC1mnq8ig&urlhash=cbz5&mt=xsf3kl97r7XsUgUT-FOUD_w6MfGNV9dq5Rq0Bbdgbz6yYfQhhpc0F0GEW1DMl56o-1_g83IVPy9j5L0CkFYWKaXedJw&isSdui=true",
    credentialId: "J8fLMAvLu6vkfCC1mnq8ig",
    icon: "codingame",
  },
  {
    title: "CodinGame Certification - Python 3",
    issuer: "CodinGame",
    date: "2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecodingame%2Ecom%2Fcertification%2FEYJHy-VFr9Gp7pLGDgOFzA&urlhash=B2-F&mt=VyjU95-S9uxNHe08__6CioIso0VReCb9Q_kdoesOEVIs8DoG3EfN5DJpcu7FpKfdcy7A7tpYISlBrJR4jeohRrpKkfA&isSdui=true",
    credentialId: "EYJHy-VFr9Gp7pLGDgOFzA",
    icon: "codingame",
  },
  {
    title: "CodinGame Certification - TypeScript",
    issuer: "CodinGame",
    date: "2026",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecodingame%2Ecom%2Fcertification%2FWzftG4Du4dwFm5bQvLTpcw&urlhash=0O5o&mt=1ipijeODL1A2EDa4sM_h2lANRu9N6dKHhm9YLhEm8oCRJcr4fGdgicsssKW18ROrgxPSqscCKMJy1IsRGVNhQQYrABs&isSdui=true",
    credentialId: "WzftG4Du4dwFm5bQvLTpcw",
    icon: "codingame",
  },
  {
    title: "Microsoft Security Essentials Professional Certificate by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "12.2025",
    href: "https://www.linkedin.com/learning/certificates/3dbde0d64466e8577cc9ed11faa69619f071d273d49b5d66b96f81b03bcca26a/",
    icon: "microsoft",
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker, Inc",
    date: "11.2025",
    href: "https://www.linkedin.com/learning/certificates/8ac043dd8c98e7f4285192c1ca6b9c962178efbc499568ed953b452fbf814947/",
    icon: "docker",
  },
  {
    title: "OWASP API Security Top 10",
    issuer: "APIsec University",
    date: "10.2025",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ecredly%2Ecom%2Fbadges%2Fd6e20a74-9895-417e-b476-e3edf206e7fc%2Fpublic_url&urlhash=d0ew&mt=DDLLanv-Wf5MFs3M71SZpryciSLqXKJ7OL7IGi9yewAeJ7K7kEqFRv386I5eMvKpInfY38XMghI_YCVwjqc9o6MiukE&isSdui=true",
    credentialId: "d6e20a74-9895-417e-b476-e3edf206e7fc",
  },
  {
    title: "Test of English for International Communication (TOEIC) - 990, C1",
    issuer: "ETS",
    date: "10.2025",
    href: "https://www.linkedin.com/in/mathieu-w-a9ba36211/overlay/Certifications/1554172007/treasury/?profileId=ACoAADW5aZcBL3ssfT-EVzpXmBA1-KNVxZQKOqk",
    credentialId: "5940728016",
  },
  {
    title: "L'essentiel de Node.js",
    issuer: "LinkedIn",
    date: "09.2024",
    href: "https://www.linkedin.com/learning/certificates/de2c4937b3b5bdf8180ae0b0a178abe01f038819f456901bc5826024b8651b8c/",
    icon: "linkedin",
  },
  {
    title: "MOOC SecNumAcademie",
    issuer: "ANSSI - Agence nationale de la sécurité des systèmes d'information",
    date: "04.2024",
    href: "#",
    icon: "anssi",
  },
  {
    title: "Gérer des talents très performants ou à haut potentiel",
    issuer: "LinkedIn",
    date: "03.2024",
    href: "https://www.linkedin.com/learning/certificates/39c09e99d3a8ccee1fee4bd151098660ff9735584f33767a39bcfbeac949cd72/",
    icon: "linkedin",
  },
  {
    title: "Découvrir les design patterns",
    issuer: "LinkedIn",
    date: "02.2024",
    href: "https://www.linkedin.com/learning/certificates/e6e70caed9d0088ce09baece364d8756b11656aa37ac0eb8a0ad2d7208c80019/",
    icon: "linkedin",
  },
  {
    title: "Software Design: Modeling with UML",
    issuer: "LinkedIn",
    date: "01.2024",
    href: "https://www.linkedin.com/learning/certificates/9311c8fe207cba1f623286a30aa8cb190dbfa92a4801375bea6e46bee440797d/",
    icon: "linkedin",
  },
  {
    title: "Devenir développeur / développeuse web full-stack",
    issuer: "LinkedIn",
    date: "01.2024",
    href: "https://www.linkedin.com/learning/certificates/60c395010105e508b85c3829ff68df180fa4e418fafa323624e0134aa73b5b4e/",
    icon: "linkedin",
  },
  {
    title: "L'essentiel d'Angular",
    issuer: "LinkedIn",
    date: "01.2024",
    href: "https://www.linkedin.com/learning/certificates/5c0f7f1d23f35a03d11ee3ba815104414a6cf039be998918422e1549bf30043c/",
    icon: "linkedin",
  },
  {
    title: "Practical Test-Driven Development for Java Programmers",
    issuer: "LinkedIn",
    date: "01.2024",
    href: "https://www.linkedin.com/learning/certificates/ff351d99cd475b053cde33ad5dda180507ce01e3a93f6411ab6af5c603ca56f4/",
    icon: "linkedin",
  },
  {
    title: "Cascading Style Sheets (CSS)",
    issuer: "LinkedIn",
    date: "11.2022",
    href: "https://www.linkedin.com/skill-assessments/Cascading%20Style%20Sheets%20(CSS)/report/",
    icon: "css3",
  },
  {
    title: "OOP paradigm",
    issuer: "LinkedIn",
    date: "11.2022",
    href: "https://www.linkedin.com/skill-assessments/Object-Oriented%20Programming%20(OOP)/report/",
    icon: "linkedin",
  },
  {
    title: "C langage",
    issuer: "LinkedIn",
    date: "06.2022",
    href: "https://www.linkedin.com/skill-assessments/C%20(langage%20de%20programmation)/report/#",
    icon: "linkedin",
  },
  {
    title: "MOOC RIGHTS, SEX & EDUCATION",
    issuer: "Com'Santé sexuelle",
    date: "05.2021",
    href: "#",
  },
]