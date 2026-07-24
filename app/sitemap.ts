import type { MetadataRoute } from 'next';

const siteUrl = 'https://rumman52.github.io/hero-dev-code/';

export const dynamic = 'force-static';

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
