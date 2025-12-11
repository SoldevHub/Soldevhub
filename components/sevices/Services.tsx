"use client";

import { Send, Globe, Code, Zap, HardHat, Shield, Layers, DollarSign, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const coreServices = [
  {
    icon: Code,
    title: "Smart Contract Development (Rust/Anchor)",
    description: "Building secure, high-performance on-chain programs using Rust and the industry-standard Anchor framework. Our programs are optimized for Solana's low-latency execution model.",
    features: ["Custom program logic", "Solana Program Library (SPL) integration", "Program upgrades and maintenance", "Unit and integration testing"],
    cta: "Start Your Program"
  },
  {
    icon: Layers,
    title: "Full-Stack dApp Engineering",
    description: "Creating seamless and intuitive decentralized applications (dApps). We handle the entire stack, from frontend design (React/Next.js) to wallet interaction and data fetching.",
    features: ["Responsive user interfaces", "Wallet connection and authentication", "Real-time on-chain data display", "Transaction processing optimization"],
    cta: "Build Your Interface"
  },
  {
    icon: DollarSign,
    title: "DeFi & Tokenomics Protocols",
    description: "Developing complex financial primitives including AMMs, lending protocols, staking mechanisms, and custom SPL tokens. We ensure robust tokenomics and secure fund management.",
    features: ["Custom SPL token deployment", "Staking and reward programs", "Liquidity pool management", "Financial logic auditing"],
    cta: "Launch Your DeFi"
  },
  {
    icon: Globe,
    title: "NFT and Digital Asset Infrastructure",
    description: "End-to-end development for NFT collections, marketplaces, and gaming assets using the Metaplex standard. Focused on royalties, metadata, and high-volume minting strategies.",
    features: ["Metaplex Certified Collections (MCC)", "Custom royalty enforcement", "Marketplace integration", "Bulk asset deployment"],
    cta: "Mint Your Assets"
  },
];

const processSteps = [
  { step: "1. Consult & Plan", description: "Define scope, technical requirements, and architecture, focusing on Solana best practices." },
  { step: "2. Develop & Audit", description: "Write secure Rust programs, conduct internal audits, and build the full-stack interface." },
  { step: "3. Deploy & Optimize", description: "Deployment to mainnet, performance monitoring, and final transaction optimization." },
  { step: "4. Support & Scale", description: "Post-launch support, ongoing program upgrades, and infrastructure scaling services." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-pink-400">
            Our Expertise
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Solana Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Services</span>
          </p>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
            From secure on-chain programs to complete decentralized user experiences, we deliver high-throughput solutions exclusively on Solana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl transition-all duration-300 hover:shadow-purple-900/30 hover:border-purple-600/50"
            >
              <service.icon className="h-10 w-10 text-purple-500 mb-4 bg-purple-900/20 p-2 rounded-lg" />
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8 text-slate-300">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Zap className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center text-sm font-semibold text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                {service.cta}
                <Send className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Our Development Process</h3>
          <div className="relative flex justify-center">
            {/* Horizontal Line for Process Flow */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center border-4 border-slate-900 shadow-lg mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.step}</h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-purple-900/50 to-slate-900 border border-purple-900 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h4 className="text-3xl font-bold text-white">Have a Unique Solana Idea?</h4>
                <p className="text-purple-300 mt-1 text-lg">Let&apos;s discuss how to bring your decentralized vision to life.</p>
            </div>
            <Link
                href="#contact"
                className="inline-flex items-center text-lg font-semibold text-white bg-pink-600 px-8 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg shadow-pink-900/50"
            >
                Get a Free Consultation
                <MessageCircle className="w-5 h-5 ml-3" />
            </Link>
        </div>
      </div>
    </section>
  );
}