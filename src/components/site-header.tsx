
'use client'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#8fb3ff"/>
                <stop offset="100%" stopColor="#4da3ff"/>
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill="#0f141a" stroke="url(#g)" strokeWidth="2"/>
            <path d="M18 40 L32 18 L46 40" fill="none" stroke="#65c3ff" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="32" cy="40" r="3" fill="#8fb3ff"/>
          </svg>
          <span>Threat <span className="text-[color:theme('colors.brand.blue')]"><strong>Zero</strong></span> Analytics</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/solutions" className="hover:text-white">Solutions</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="rounded-lg bg-[color:theme('colors.brand.blue')] px-4 py-2 text-black font-medium hover:opacity-90">Get Assessment</Link>
        </nav>
      </div>
    </header>
  )
}
