
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20">
        <p className="text-sm text-[color:theme('colors.brand.gray')]">AI-Driven Cyber Intelligence</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          Secure Your Microsoft 365 Tenant with <span className="text-[color:theme('colors.brand.blue')]"><strong>Measurable</strong></span> Outcomes
        </h1>
        <p className="mt-5 max-w-2xl text-neutral-300">
          We help teams raise Secure Score, automate defenses, and monitor threats 24/7 —
          backed by AI-assisted posture analytics and incident response playbooks.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/contact" className="rounded-lg bg-[color:theme('colors.brand.blue')] px-5 py-3 font-medium text-black hover:opacity-90">Request Assessment</a>
          <a href="/services" className="rounded-lg border border-neutral-700 px-5 py-3 font-medium text-white hover:border-neutral-500">Explore Services</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(77,163,255,0.08)] via-transparent to-transparent" />
    </section>
  )
}
