
# Threat Zero Analytics — Next.js Starter

A production-ready starter for **Threat Zero Analytics LLC** built with **Next.js 14**, **TypeScript**, and **Tailwind**.

## Features
- App Router (Next.js 14)
- Tailwind (dark theme, soft grey & blue palette)
- Basic components (header, footer, hero, cards)
- Pages: Home, Services, Solutions, About, Blog, Contact
- Contact API with **Resend** integration
- SEO: metadata, sitemap, robots
- Security headers (CSP, HSTS, etc.)

## Getting Started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Set your env vars in `.env.local`:

```
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=javon.bragg@threatzeroanalytics.io
CONTACT_FROM_EMAIL=no-reply@threatzeroanalytics.io
```

### Develop
```bash
pnpm dev
```

### Build
```bash
pnpm build && pnpm start
```

### Deploy (Vercel)
- Push this repo to GitHub
- Import into Vercel
- Add env vars in Vercel Project Settings
- Set custom domain: **threatzeroanalytics.io**

## Notes
- Update CSP in `next.config.js` if you add analytics (Clarity/GA4)
- Add content and blog when ready (MDX or headless CMS)
- Consider putting Cloudflare in front for WAF + caching
