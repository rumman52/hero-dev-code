import type { MetadataRoute } from 'next';

const siteUrl = 'https://hero-dev-code.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-07-24'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
