import type { Metadata } from 'next'; // Import Metadata type
import Login from '@/components/auth/Login'
import React from 'react'

// --- START PERFECTED LOGIN PAGE METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags (Inherited template gives "Login to SoldevHub | SoldevHub")
  title: "Login to SoldevHub", 
  
  description: "Securely log in to your SoldevHub account to access personalized Solana developer tools, save tutorials, track your progress, and manage your Web3 projects.",
  
  // Specific keywords for authentication
  keywords: [
    "soldevhub login",
    "solana developer account",
    "web3 login",
    "sign in",
    "secure access soldevhub",
  ],
  
  // 2. Open Graph (OG) Tags - For Facebook, LinkedIn, etc.
  openGraph: {
    title: "Login to SoldevHub Account",
    description: "Access your personalized dashboard for Solana developer resources and Web3 project management.",
    url: "https://www.soldevhub.site/login", 
    type: 'website', 
    locale: 'en_US', 
    images: [ // Explicitly define the image for social sharing
      {
        url: '/appLogo.png', 
        width: 1200, 
        height: 630, 
        alt: 'SoldevHub Secure Login',
      },
    ],
  },

  // 3. Twitter Card Tags - For X (Twitter)
  twitter: {
    card: 'summary', // Using 'summary' is often better for Auth pages than large image
    title: "Log in to SoldevHub",
    description: "Securely sign in to your Solana developer account.",
    creator: '@SoldevHub', // REMINDER: Customize this Twitter handle!
    images: ['/appLogo.png'], // Explicitly define the image
  },
  
  // 4. Critical: Prevent search engines from indexing login pages
    
};
// --- END PERFECTED LOGIN PAGE METADATA ---

export default function page() {
  return (
    <div>
      <Login />
    </div>
  )
}