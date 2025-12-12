import type { Metadata } from 'next'; 
import About from '@/components/about/About'
import React from 'react'

// --- START PERFECTED ABOUT PAGE METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags (Inherited template gives "About SoldevHub | SoldevHub")
  title: "About SoldevHub", 
  
  description: "Learn more about SoldevHub: our mission to empower Solana developers, our team of experts, and our commitment to building the best resources for the Web3 ecosystem. Discover our crypto community engagement.",
  
  keywords: [
    "about soldevhub",
    "solana mission",
    "web3 team",
    "solana developer community",
    "alpha",
    "sufiyanu",
    "soldevhub team", // Added for clarity
  ],
  
  // 2. Open Graph (OG) Tags - For Facebook, LinkedIn, etc.
  openGraph: {
    title: "About SoldevHub: Our Mission to Empower Solana Developers",
    description: "Learn more about SoldevHub: our mission to empower Solana developers, our team of experts, and our commitment to building the best resources for the Web3 ecosystem.", // Using the full description
    url: "https://www.soldevhub.site/about", 
    type: 'website', // Explicit type is good practice
    locale: 'en_US', // Explicit locale is good practice
    images: [ // Explicitly define the image for social sharing
      {
        url: '/appLogo.png', 
        width: 1200, 
        height: 630, 
        alt: 'SoldevHub Team and Mission Banner',
      },
    ],
  },

  // 3. Twitter Card Tags - For X (Twitter)
  twitter: {
    card: 'summary_large_image', // Ensures a large, prominent preview image
    title: "About SoldevHub: Our Mission to Empower Solana Developers",
    description: "Learn about the SoldevHub mission, team, and commitment to Solana and Web3 development resources.",
    creator: '@SoldevHub', // REMINDER: Customize this Twitter handle!
    images: ['/appLogo.png'], // Explicitly define the image
  },
};
// --- END PERFECTED ABOUT PAGE METADATA ---

export default function page() {
  return (
    <div>
      <About />
    </div>
  )
}