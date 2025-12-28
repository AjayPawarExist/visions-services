import type { MetadataRoute } from 'next'

const baseUrl = 'https://auxify.live'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules:
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/_next/', '/test/'],
      },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}