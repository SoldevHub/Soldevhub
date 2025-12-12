import type { Metadata } from 'next'; // Import Metadata type
import Services from '@/components/sevices/Services'
import React from 'react'

// --- START PERFECTED SERVICES PAGE METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags (Inherited template gives "Our Services | SoldevHub")
  title: "Our Professional Solana Development Services", 
  
  description: "Explore the range of professional services offered by SoldevHub, including Solana smart contract development, Web3 consulting, app auditing, and custom blockchain solutions for businesses and projects.",
  
  keywords: [
    "Solana services",
    "Solana consulting",
    "Web3 app auditing",
    "smart contract development",
    "blockchain solutions",
    "SoldevHub services",
    "alpha strategies consulting",
  ],
  
  // 2. Open Graph (OG) Tags - For Facebook, LinkedIn, etc.
  openGraph: {
    title: "Professional Solana Services: Development, Auditing & Consulting | SoldevHub",
    description: "Expert services offered by SoldevHub: Solana smart contract development, Web3 consulting, app auditing, and custom blockchain solutions for ambitious projects.",
    url: "https://www.soldevhub.site/services", 
    type: 'website', 
    locale: 'en_US', 
    images: [ // Explicitly define the image for social sharing
      {
        url: '/appLogo.png', 
        width: 1200, 
        height: 630, 
        alt: 'Solana Development Services and Consulting',
      },
    ],
  },

  // 3. Twitter Card Tags - For X (Twitter)
  twitter: {
    card: 'summary_large_image', // Ensures a large, prominent preview image
    title: "Solana Services: Development, Auditing & Consulting",
    description: "Need help building on Solana? Explore SoldevHub's expert services for smart contracts, Web3 apps, and blockchain solutions.",
    creator: '@SoldevHub', // REMINDER: Customize this Twitter handle!
    images: ['/appLogo.png'], // Explicitly define the image
  },
};
// --- END PERFECTED SERVICES PAGE METADATA ---

export default function page() {
  return (
    <div>
      <Services />
    </div>
  )
}