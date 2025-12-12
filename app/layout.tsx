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

// --- START FULL SEO METADATA ---
export const metadata: Metadata = {
  // 1. Basic SEO Tags
  title: {
    default: "SoldevHub | Solana Developer & Web3 Resource Center",
    template: "%s | SoldevHub", // Use for page-specific titles
  },
  description: "The premier hub for Solana developers. Find tutorials, starter kits, documentation, and the latest tools for building high-performance decentralized applications (apps) on the Solana blockchain. Learn about alpha strategies and connect with local crypto communities.",
  keywords: [
    "Solana",
    "Solana development",
    "Web3",
    "Solana ecosystem",
    "blockchain development",
    "Rust",
    "Anchor framework",
    "Solana tutorials",
    "SoldevHub",
    "alpha",
    "sufiyanu",
    "kargi cryptors",
    "achuau cryptor",
    "zaria cryptor",
    "ikara cryptos",
    "Solana apps",
  ],
  authors: [{ name: "SoldevHub Team" }],
  metadataBase: new URL('https://www.soldevhub.site'), 
  alternates: {
    canonical: '/',
  },

  // 2. Open Graph (OG) Tags - For Social Media Sharing
  openGraph: {
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    description: 'The premier hub for Solana developers. Find tutorials, starter kits, documentation, and the latest tools for building high-performance decentralized applications (apps) on the Solana blockchain.',
    url: 'https://www.soldevhub.site', // Updated to your site
    siteName: 'SoldevHub',
    images: [
      {
        url: '/appLogo.png', // Updated to use local public folder asset
        width: 1200, 
        height: 630, 
        alt: 'Solana Developer Hub Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 3. Twitter Card Tags - For Twitter Sharing
  twitter: {
    card: 'summary_large_image', // Best practice for rich media previews
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    description: 'The premier hub for Solana developers. Tutorials, starter kits, and tools for building high-performance apps on the Solana blockchain.',
    creator: '@SoldevHub', // REMINDER: Customize this handle!
    images: ['/appLogo.png'], // Updated to use local public folder asset
  },

  // 4. Other Standard Tags
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  
  // --- GOOGLE SITE VERIFICATION ADDED HERE ---
  verification: {
    google: 'xm-iveHR0zwNHfvIA3ivXNzE8hl7kcvnoeblRld4Io',
  },
  // --- END GOOGLE SITE VERIFICATION ---
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