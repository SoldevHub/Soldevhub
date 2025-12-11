// components/About.tsx (Example usage: import About from '@/components/About')

import { Briefcase, Zap, Shield, Globe, HardHat, Code } from 'lucide-react';
import Image from 'next/image';

const features = [
  { 
    title: "Solana Native Expertise", 
    icon: HardHat, 
    description: "Our core team lives and breathes Solana. We work directly with Rust and the Anchor framework, the preferred tools for fast and secure Solana program development." 
  },
  { 
    title: "Performance First", 
    icon: Zap, 
    description: "Solana is built for speed. Our optimization processes focus on taking full advantage of the network's high throughput capabilities (up to 65,000 TPS)." 
  },
  { 
    title: "Security Focused", 
    icon: Shield, 
    description: "Smart contract security is non-negotiable. Every line of code is rigorously tested, peer-reviewed, and audited to protect against common vulnerabilities." 
  },
  { 
    title: "Transparent Process", 
    icon: Code, 
    description: "We maintain open communication and use agile methodologies to ensure you are involved and informed at every stage of development." 
  },
];

const serviceAreas = [
  { title: "Smart Contracts (Programs)", details: "Custom Rust Programs, SPL Token Minting, Program Upgrades. We use Rust and Anchor." },
  { title: "Decentralized Applications (dApps)", details: "Full-stack dApp interfaces, Wallet Integration (Phantom, Solflare), Data Indexing." },
  { title: "Token & NFT Standards", details: "Custom Tokenomics, NFT Collections (Metaplex), Royalty Programs and Custom Asset Standards." },
  { title: "Infrastructure & DevOps", details: "RPC Node setup, Wallet Adapter configuration, High-availability CI/CD pipelines." },
];

const ourChains = [
  { name: "Solora", description: "Our advanced Solana development tools and proprietary frameworks that boost efficiency and security for our clients." },
  { name: "KB Coin", description: "Representing knowledge base and intellectual property tokenization—our dedication to continuous learning and open-source contributions." },
  { name: "YTB", description: "Highlighting our commitment to community engagement and educational outreach through platforms like YouTube, helping others master Solana development." },
];


export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header and Mission */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
            About SoldevHub
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Building the Future on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Solana</span>
          </p>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
            We are a collective of specialized blockchain developers leveraging the speed, low cost, and scalability of the Solana ecosystem to create high-performance decentralized applications (dApps).
          </p>
        </div>

        {/* Mission/Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <div>
            <h3 className="text-3xl font-bold mb-3 text-white">🎯 Our Mission</h3>
            <p className="text-slate-400">
              Our mission is to accelerate the adoption of Web3 technology by providing **best-in-class Solana development solutions**. We focus on building secure, efficient, and innovative products, ranging from complex financial tools to high-throughput gaming and NFT platforms.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-3 text-white">✨ Our Vision</h3>
            <p className="text-slate-400">
              To be the **leading decentralized development studio** recognized globally for its expertise and commitment to quality within the Solana and Rust programming ecosystems.
            </p>
          </div>
        </div>

        {/* What We Do - Services Table */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">👨‍💻 What We Do</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Service Focus
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider hidden sm:table-cell">
                    Key Deliverables
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Expertise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-900 divide-y divide-slate-800">
                {serviceAreas.map((area) => (
                  <tr key={area.title} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-white">
                      {area.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 hidden sm:table-cell">
                      {area.details}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300">
                        Rust / Anchor
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us - Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">💡 Why Choose SoldevHub?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-purple-900/20"
              >
                <feature.icon className="h-8 w-8 text-purple-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Chains Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-pink-500" />
            Our Chains
          </h3>
          <p className="text-slate-400 mb-6 max-w-4xl">
            While our primary focus is Solana, we actively support and integrate with related ecosystems and assets that define our knowledge base and community outreach.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {ourChains.map((chain, index) => (
              <div 
                key={index} 
                className="bg-slate-950 p-5 rounded-lg border-l-4 border-purple-600 space-y-2"
              >
                <h4 className="text-xl font-bold text-purple-400">{chain.name}</h4>
                <p className="text-slate-400 text-sm">{chain.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Build on Solana?</h3>
          <p className="text-slate-400 mb-8">
            Turn your complex DeFi protocol or high-speed dApp vision into a reality on the Solana blockchain.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}