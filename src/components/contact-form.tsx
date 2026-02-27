
'use client'
import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const body = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) })
    setStatus(res.ok ? 'done' : 'error')
    if (res.ok) form.reset()
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" placeholder="Name" className="w-full rounded-md bg-neutral-900 p-3 border border-neutral-800" required />
      <input name="email" type="email" placeholder="Email" className="w-full rounded-md bg-neutral-900 p-3 border border-neutral-800" required />
      <textarea name="message" placeholder="How can we help?" rows={5}
        className="w-full rounded-md bg-neutral-900 p-3 border border-neutral-800" required />
      <button disabled={status==='loading'} className="rounded-lg bg-[color:theme('colors.brand.blue')] px-5 py-3 font-medium text-black hover:opacity-90">
        {status==='loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status==='done' && <p className="text-green-400">Thanks — we'll be in touch.</p>}
      {status==='error' && <p className="text-red-400">Something went wrong. Try again.</p>}
    </form>
  )
}
