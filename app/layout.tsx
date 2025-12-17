import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const DOMAIN = "https://www.soldevhub.site";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN), 
  title: {
    default: "SoldevHub | Solana Developer & Web3 Resource Center",
    template: "%s | SoldevHub",
  },
  description: "The premier hub for Solana developers. Find tutorials, starter kits, documentation, and the latest tools for building high-performance decentralized applications (apps).",
  keywords: [
    "Solana", "Solana development", "Web3", "Solana ecosystem", "blockchain development",
    "Rust", "Anchor framework", "SoldevHub", "alpha", "sufiyanu", 
    "kargi cryptors", "achuau cryptor", "zaria cryptor", "ikara cryptos", "Solana apps",
  ],
  authors: [{ name: "SoldevHub Team" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    description: 'The premier hub for Solana developers. Tutorials, starter kits, and tools for building high-performance apps.',
    url: DOMAIN, 
    siteName: 'SoldevHub',
    images: [{ url: `${DOMAIN}/appLogo.png`, width: 1200, height: 630, alt: 'Solana Developer Hub Logo' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoldevHub | Solana Developer & Web3 Resource Center',
    creator: '@SoldevHub',
    images: [`${DOMAIN}/appLogo.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }, 
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  verification: {
    google: 'xm-iveHR0zwNHfvIA3ivXNzE8hl7kcvnoeblRld4Io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Using Next.js Script component inside <head>. 
          strategy="afterInteractive" is standard for Adsense, 
          but it will still be injected into the head.
        */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9241182560906060"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></script>
      </head>
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