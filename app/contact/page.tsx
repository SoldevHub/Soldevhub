import type { Metadata } from 'next'; // Import Metadata type
import Contact from '@/components/contact/Contact'
import React from 'react'

// --- START PERFECTED CONTACT PAGE METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags (Inherited template gives "Contact SoldevHub | SoldevHub")
  title: "Contact SoldevHub", 
  
  description: "Get in touch with the SoldevHub team for support, partnerships, media inquiries, or technical questions related to Solana development. We're here to help you build on Web3 and connect with our community.",
  
  keywords: [
    "contact soldevhub",
    "solana developer support",
    "solana partnership",
    "web3 technical inquiry",
    "get in touch",
    "solana team contact",
  ],
  
  // 2. Open Graph (OG) Tags - For Facebook, LinkedIn, etc.
  openGraph: {
    title: "Contact SoldevHub | Get Solana Development Support",
    description: "Reach out to the SoldevHub team for support, partnerships, media inquiries, or technical questions related to Solana development.",
    url: "https://www.soldevhub.site/contact", 
    type: 'website', 
    locale: 'en_US', 
    images: [ // Explicitly define the image for social sharing
      {
        url: '/appLogo.png', 
        width: 1200, 
        height: 630, 
        alt: 'SoldevHub Contact and Support',
      },
    ],
  },

  // 3. Twitter Card Tags - For X (Twitter)
  twitter: {
    card: 'summary_large_image', // Ensures a large, prominent preview image
    title: "Contact SoldevHub | Get Solana Development Support",
    description: "Get in touch with the SoldevHub team for technical support, partnerships, and Web3 inquiries.",
    creator: '@SoldevHub', // REMINDER: Customize this Twitter handle!
    images: ['/appLogo.png'], // Explicitly define the image
  },
};
// --- END PERFECTED CONTACT PAGE METADATA ---

export default function page() {
  return (
    <div>
      <Contact />
    </div>
  )
}