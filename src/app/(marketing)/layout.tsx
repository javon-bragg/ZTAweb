
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Threat Zero Analytics LLC — AI-Driven Cyber Intelligence',
  description:
    'MSSP specializing in AI-assisted security posture, Microsoft 365 Secure Score optimization, and 24/7 threat monitoring.',
  openGraph: {
    title: 'Threat Zero Analytics LLC',
    description: 'AI-Driven Cyber Intelligence for Microsoft 365 tenants.',
    url: 'https://threatzeroanalytics.io',
    siteName: 'Threat Zero Analytics',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  metadataBase: new URL('https://threatzeroanalytics.io'),
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
