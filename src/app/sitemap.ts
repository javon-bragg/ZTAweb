
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://threatzeroanalytics.io'
  const lastModified = new Date()
  return [
    { url: base, lastModified },
    { url: `${base}/services`, lastModified },
    { url: `${base}/solutions`, lastModified },
    { url: `${base}/about`, lastModified },
    { url: `${base}/blog`, lastModified },
    { url: `${base}/contact`, lastModified },
  ]
}
