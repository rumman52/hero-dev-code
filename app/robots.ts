import type { MetadataRoute } from 'next';

const siteUrl = 'https://hero-dev-code.vercel.app/';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('sitemap.xml', siteUrl).toString(),
  };
}
