import type { Metadata } from 'next'; // Import Metadata type
import Contact from '@/components/contact/Contact'
import React from 'react'

// --- START CONTACT PAGE METADATA ---
export const metadata: Metadata = {
  // Title will be "Contact SoldevHub | SoldevHub" due to the template in layout.tsx
  title: "Contact SoldevHub", 
  
  description: "Get in touch with the SoldevHub team for support, partnerships, media inquiries, or technical questions related to Solana development. We're here to help you build on Web3.",
  
  // Specific keywords for contact
  keywords: [
    "contact soldevhub",
    "solana developer support",
    "solana partnership",
    "web3 technical inquiry",
    "get in touch",
  ],
  
  // Open Graph for sharing the contact link
  openGraph: {
    title: "Contact SoldevHub",
    description: "Reach out to the SoldevHub team for support, partnerships, or technical questions.",
    url: "https://www.soldevhub.site/contact", // Specific page URL
  },
};
// --- END CONTACT PAGE METADATA ---

export default function page() {
  return (
    <div>
      <Contact />
    </div>
  )
}