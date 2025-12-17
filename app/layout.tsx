import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define your base domain explicitly
const DOMAIN = "https://www.soldevhub.site";

// --- START FULL SEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN), 
  
  // 1. Basic SEO Tags
  title: {
    default: "SoldevHub | Solana Developer & Web3 Resource Center",
    template: "%s | SoldevHub",
  },
  description: "The premier hub for Solana developers. Find tutorials, starter kits, documentation, and the latest tools for building high-performance decentralized applications (apps) on the Solana blockchain.",
  keywords: [
    "Solana", "Solana development", "Web3", "Solana ecosystem", "blockchain development",
    "Rust", "Anchor framework", "SoldevHub", "alpha", "sufiyanu", 
    "kargi cryptors", "achuau cryptor", "zaria cryptor", "ikara cryptos", "Solana apps",
  ],
  authors: [{ name: "SoldevHub Team" }],
  
  alternates: {
    canonical: '/',
  },

  // 2. Open Graph (OG) Tags - Fixed for Mobile
  openGraph: {
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    description: 'The premier hub for Solana developers. Tutorials, starter kits, and tools for building high-performance apps.',
    url: DOMAIN, 
    siteName: 'SoldevHub',
    images: [
      {
        url: `${DOMAIN}/appLogo.png`, // EXPLICIT FULL URL for mobile reliability
        width: 1200, 
        height: 630, 
        alt: 'Solana Developer Hub Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 3. Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    description: 'The premier hub for Solana developers. Tutorials, starter kits, and tools for building high-performance apps.',
    creator: '@SoldevHub',
    images: [`${DOMAIN}/appLogo.png`], // EXPLICIT FULL URL
  },

  // 4. Icons - Fixed for Google Search & Mobile Home Screen
  icons: {
    // Google prefers a high-quality PNG. Ensure you have 'icon.png' (square, e.g., 192x192) in public folder
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Fallback for old browsers
      { url: '/icon.png', type: 'image/png' }, // Google Search Result Icon (Recommended)
    ],
    // iOS Home Screen Icon
    apple: [
      { url: '/apple-icon.png' }, 
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'xm-iveHR0zwNHfvIA3ivXNzE8hl7kcvnoeblRld4Io',
  },
};
// --- END FULL SEO METADATA ---


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}