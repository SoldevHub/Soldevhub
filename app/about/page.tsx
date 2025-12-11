import type { Metadata } from 'next'; // Import Metadata type
import About from '@/components/about/About'
import React from 'react'

// --- START ABOUT PAGE METADATA ---
export const metadata: Metadata = {
  // Title will be "About SoldevHub | SoldevHub" due to the template in layout.tsx
  title: "About SoldevHub", 
  
  description: "Learn more about SoldevHub: our mission to empower Solana developers, our team of experts, and our commitment to building the best resources for the Web3 ecosystem. Discover our crypto community engagement.",
  
  // You can optionally add specific keywords here
  keywords: [
    "about soldevhub",
    "solana mission",
    "web3 team",
    "solana developer community",
    "alpha",
    "sufiyanu",
  ],
  
  // Open Graph and Twitter can be simplified here, as they often inherit from the root layout
  // However, to be explicit for the page:
  openGraph: {
    title: "About SoldevHub",
    description: "Learn about our mission to empower Solana developers and build the best Web3 resources.",
    url: "https://www.soldevhub.site/about", // Specific page URL
  },
};
// --- END ABOUT PAGE METADATA ---

export default function page() {
  return (
    <div>
      <About />
    </div>
  )
}