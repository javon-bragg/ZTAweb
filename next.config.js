
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://*.vercel-analytics.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob:;
      font-src 'self' data:;
      connect-src 'self' https://api.resend.com https://vitals.vercel-insights.com;
      frame-ancestors 'none';
      base-uri 'none';
      form-action 'self';
      object-src 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
