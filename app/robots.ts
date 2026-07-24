import type { MetadataRoute } from 'next';

const siteUrl = 'https://rumman52.github.io/hero-dev-code/';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('sitemap.xml', siteUrl).toString(),
  };
}
