import { MetadataRoute } from 'next';
import { getInsights } from '@/lib/substack';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URLs
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yapchankor.com';
  
  // The statically typed static routes we want to ensure Google indexes
  // For standard Next.js, we can map over Locales.
  const locales = ['en', 'ms', 'zh'];
  
  const staticRoutes = [
    '',
    '/insights',
    // We could add more like /locations, /about etc if they exist
  ].flatMap((route) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }))
  );

  // Fetch dynamic insights
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const insights = await getInsights();
    
    dynamicRoutes = insights.flatMap((insight) => 
      locales.map((locale) => ({
        url: `${baseUrl}/${locale}/insights/${insight.slug}`,
        lastModified: new Date(insight.pubDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    );
  } catch (error) {
    console.error("Failed to generate insights sitemap entries.", error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
