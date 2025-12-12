import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Updated to only disallow dashboard/private content, allowing /auth/ paths
        disallow: ['/dashboard', '/private', '/admin'], 
      },
    ],
    sitemap: 'https://www.soldevhub.site/sitemap.xml',
  }
}