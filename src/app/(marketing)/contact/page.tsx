
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <section className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-neutral-300">Tell us about your environment and goals.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  )
}
