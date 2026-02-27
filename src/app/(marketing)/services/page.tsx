
export default function ServicesPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-6 space-y-6 text-neutral-300">
        <div>
          <h2 className="text-xl font-semibold">Managed Security Services</h2>
          <p className="mt-2">Proactive monitoring, detection, and response across your cloud and identity surface.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Microsoft 365 Secure Score Optimization</h2>
          <p className="mt-2">Audit, remediation plans, and measurable improvements to your Secure Score.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">24/7 Threat Monitoring</h2>
          <p className="mt-2">High-signal detections and alert triage with automation-first workflows.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Incident Detection & Response</h2>
          <p className="mt-2">Rapid containment, forensic triage, and lessons-learned hardening.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Cyber Intelligence Reporting</h2>
          <p className="mt-2">Executive-ready reporting on threats, trends, and remediation progress.</p>
        </div>
      </div>
    </section>
  )
}
