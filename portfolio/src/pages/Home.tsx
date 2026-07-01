export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
      <HeroSection />
      {/* You'll add more sections here as you build them */}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="flex flex-col gap-4">
      {/* Availability badge */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-xs font-mono" style={{ color: 'var(--primary)' }}>
          Available for opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
        Mathieu Waharte
      </h1>

      {/* Role */}
      <p className="text-lg" style={{ color: 'var(--muted)' }}>
        Fullstack Engineer & AI — Apprenti @ Dassault Systèmes
        <br />
        <span className="text-sm font-mono">Polytech Paris-Saclay · Paris, France</span>
      </p>

      {/* Description */}
      <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
        Je construis des applications fullstack, des agents IA et des simulations scientifiques.
        Passionné par les shaders, le ML et l'architecture logicielle.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 mt-2">
        <a href="#projects"
           className="px-4 py-2 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-80"
           style={{ background: 'var(--primary)' }}>
          View Projects
        </a>
        <a href="/resume.pdf"
           className="px-4 py-2 rounded-md text-sm font-medium border transition-colors hover:bg-(--surface)"
           style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
          Download CV
        </a>
      </div>
    </section>
  )
}