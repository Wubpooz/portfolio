export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
        Mathieu Waharte
      </h1>

      {/* Role */}
      <p className="text-lg" style={{ color: 'var(--muted)' }}>
        Fullstack Engineer & AI — Apprenti @ Dassault Systèmes
        <br />
        <span className="text-sm font-mono">Polytech Paris-Saclay - Paris, France</span>
      </p>

      {/* Description */}
      <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
        Je construis des applications fullstack, des agents IA et des simulations scientifiques.
        Passionné par les shaders, le ML et l'architecture logicielle.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 mt-2">
        <button onClick={() => console.log('clicked')}
           className="px-4 py-2 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-80"
           style={{ background: 'var(--primary)' }}>
          Contact Me
        </button>
        <a href="/resume.pdf"
           className="px-4 py-2 rounded-md text-sm font-medium border transition-colors hover:bg-(--surface)"
           style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
          Download CV
        </a>
      </div>
    </section>
  );
}