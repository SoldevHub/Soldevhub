import type { Metadata } from 'next'; // Import Metadata type
import Services from '@/components/sevices/Services'
import React from 'react'

// --- START SERVICES PAGE METADATA ---
export const metadata: Metadata = {
  // Title will be "Our Services | SoldevHub" due to the template in layout.tsx
  title: "Our Services", 
  
  description: "Explore the range of professional services offered by SoldevHub, including Solana smart contract development, Web3 consulting, app auditing, and custom blockchain solutions for businesses and projects.",
  
  // Specific keywords for services/offerings
  keywords: [
    "Solana services",
    "Solana consulting",
    "Web3 app auditing",
    "smart contract development",
    "blockchain solutions",
    "SoldevHub services",
    "alpha strategies consulting",
  ],
  
  // Open Graph for sharing the services link
  openGraph: {
    title: "Our Professional Solana Services",
    description: "Expert Solana smart contract development, auditing, and Web3 consulting services by the SoldevHub team.",
    url: "https://www.soldevhub.site/services", // Specific page URL
  },
};
// --- END SERVICES PAGE METADATA ---

export default function page() {
  return (
    <div>
      <Services />
    </div>
  )
}