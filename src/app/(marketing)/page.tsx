
import { Hero } from '@/components/hero'
import { ServiceCard } from '@/components/service-card'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container py-16 grid gap-6 md:grid-cols-3">
        <ServiceCard title="M365 Secure Score Optimization"
          desc="Assess, remediate, and continuously improve your Microsoft Secure Score." />
        <ServiceCard title="24/7 Threat Monitoring"
          desc="Modern detection pipelines and real-time alerting for cloud & identity." />
        <ServiceCard title="Incident Response"
          desc="Containment, triage, and post-incident hardening with AI-assisted tooling." />
      </section>
    </>
  )
}
