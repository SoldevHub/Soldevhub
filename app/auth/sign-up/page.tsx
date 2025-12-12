import type { Metadata } from 'next'; // Import Metadata type
import SignUp from '@/components/auth/SignUp'
import React from 'react'

// --- START PERFECTED SIGN UP PAGE METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags (Inherited template gives "Sign Up for SoldevHub | SoldevHub")
  title: "Sign Up for SoldevHub", 
  
  description: "Create your free SoldevHub account to start accessing exclusive Solana developer tutorials, manage your Web3 projects, and join our active crypto developer community.",
  
  // Specific keywords for authentication
  keywords: [
    "soldevhub sign up",
    "create solana developer account",
    "web3 registration",
    "join soldevhub community",
    "free solana tools",
  ],
  
  // 2. Open Graph (OG) Tags - For Facebook, LinkedIn, etc.
  openGraph: {
    title: "Create Your Free SoldevHub Account",
    description: "Sign up today to access personalized Solana developer tools and resources.",
    url: "https://www.soldevhub.site/signup", 
    type: 'website', 
    locale: 'en_US', 
    images: [ // Explicitly define the image for social sharing
      {
        url: '/appLogo.png', 
        width: 1200, 
        height: 630, 
        alt: 'SoldevHub Sign Up and Community',
      },
    ],
  },

  // 3. Twitter Card Tags - For X (Twitter)
  twitter: {
    card: 'summary', // Recommended for Auth pages
    title: "Join SoldevHub Today",
    description: "Create your free account to start building on the Solana blockchain.",
    creator: '@SoldevHub', // REMINDER: Customize this Twitter handle!
    images: ['/appLogo.png'], // Explicitly define the image
  },
  
  // 4. Critical: Prevent search engines from indexing registration pages

};
// --- END PERFECTED SIGN UP PAGE METADATA ---

export default function page() {
  return (
    <div>
      <SignUp />
    </div>
  )
}