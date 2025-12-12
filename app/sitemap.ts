import { MetadataRoute } from 'next';

// Define your base URL
const BASE_URL = 'https://www.soldevhub.site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Pages - All set to 'weekly' frequency
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Highest priority for the homepage
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    // INCLUDED AUTH PAGES as requested
    {
      url: `${BASE_URL}/auth/sign-in`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/auth/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
    // ... Future dynamic content will also need to be included here
  ];
  
  return staticRoutes;
}