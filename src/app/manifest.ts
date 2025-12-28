import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Auxify - AI + Assistance + Automation',
    short_name: 'Auxify',
    description: 'An intelligent communication, support, and team-management platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/auxify.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/auxify.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/auxify.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}