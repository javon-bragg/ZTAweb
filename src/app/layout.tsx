
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Threat Zero Analytics LLC — AI‑Driven Cyber Intelligence',
  description:
    'MSSP specializing in AI‑assisted security posture, Microsoft 365 Secure Score optimization, and 24/7 threat monitoring.',
  metadataBase: new URL('https://threatzeroanalytics.io'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[color:theme('colors.brand.bg')] text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
