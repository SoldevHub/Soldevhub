"use client";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, ArrowRight, TrendingUp, Shield, Zap, Globe,DollarSign, Gauge, UserCheck, Star, Clock } from "lucide-react";

export default function Home() {
  // Framer Motion Variants for scroll animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const Card = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div variants={itemVariants} className="bg-slate-900 border border-slate-800 p-6 rounded-xl transition-all hover:border-purple-600/50 hover:shadow-purple-900/40 shadow-xl">
      <Icon className="w-10 h-10 text-purple-400 mb-4 bg-purple-500/10 p-2 rounded-lg" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </motion.div>
  );
  
  const FeatureItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <motion.li variants={itemVariants} className="flex items-center gap-3 text-slate-300 text-lg">
      <Icon className="w-5 h-5 text-purple-500" />
      {text}
    </motion.li>
  );


  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30">
      <Navbar />

      {/* HOME / HERO SECTION */}
      <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Build Your Crypto Project on <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  The Solana Ecosystem
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
                Unlock the power of fast, secure, and scalable blockchain development. We help creators, traders, and businesses turn ideas into real crypto products — from tokens to full dApps.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                  Start Building Now <ArrowRight size={20} />
                </Link>
                <Link href="#services" className="px-8 py-4 border border-slate-700 hover:border-purple-500 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm">
                  View Our Services
                </Link>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false }} 
            variants={containerVariants} 
            className="text-center mb-16"
          >
            <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              🔥 What We Offer
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mt-3">
              Comprehensive Solana Development
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false, amount: 0.2 }} 
            variants={containerVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card 
              icon={Code} 
              title="SPL Token Creation" 
              description="Launch your utility token or memecoin securely with custom supply, metadata, and token features." 
            />
            <Card 
              icon={Shield} 
              title="Smart Contract Development" 
              description="Custom Rust programs (smart contracts) for staking, vesting, token lockers, and complex utility logic." 
            />
            <Card 
              icon={Zap} 
              title="Solana dApps & Tools" 
              description="Full-stack dApp development, including web interface, wallet integration, and backend infrastructure." 
            />
            <Card 
              icon={Globe} 
              title="Crypto Website Development" 
              description="High-performance, secure, and responsive Next.js websites tailored for crypto and Web3 projects." 
            />
            <Card 
              icon={TrendingUp} 
              title="Airdrop & Staking Systems" 
              description="Build rewarding ecosystems with automated airdrop distribution and staking pools to drive retention." 
            />
            <Card 
              icon={Gauge} 
              title="Migration & Guidance" 
              description="Expert support for Pump.fun to Raydium migrations and overall growth + marketing strategy guidance." 
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US / ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false }} 
                variants={containerVariants} 
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                        🎯 Why Work With SoldevHub
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-8 mt-3">
                        Professional, Fast, and Focused on Solana
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-slate-400 text-lg mb-8 leading-relaxed">
                        The crypto world moves fast — and many creators struggle with technical work. Our mission is to make blockchain simple, accessible, and profitable for everyone.
                    </motion.p>
                    
                    <motion.div variants={containerVariants} className="space-y-4">
                        <FeatureItem icon={UserCheck} text="Professional blockchain development and transparent communication" />
                        <FeatureItem icon={Clock} text="Fast delivery times to meet tight launch schedules" />
                        <FeatureItem icon={DollarSign} text="Affordable, project-based pricing" />
                        <FeatureItem icon={Star} text="Complete support from concept through post-launch" />
                    </motion.div>
                </div>
                
                {/* Right side - Solana focus */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={containerVariants}
                    className="bg-slate-900 border border-slate-800 p-8 rounded-2xl"
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Zap className="text-yellow-400" />
                        Why Solana?
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-slate-400 mb-6">
                        Solana is the fastest and lowest-cost blockchain, making it the best place to launch modern crypto projects. We build where performance matters.
                    </motion.p>
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4 mt-8">
                        Technical Expertise
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-sm text-slate-400">
                        Knowledge of key tooling and concepts: **GMGN, TTF, SoulScan, Phanes Bot, Noesis**, clean audit-ready code, and efficient RPC usage.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* PORTFOLIO / PRICING / CONTACT sections would go here as separate sections */}
      {/* Example structure for a placeholder section */}
      <section id="portfolio" className="py-20 bg-slate-900/30 min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={{duration: 0.6}} className="text-4xl font-bold text-white mb-4">Portfolio (Coming Soon)</motion.h2>
              <motion.p initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={{duration: 0.6, delay: 0.2}} className="text-slate-400">Showcasing successful SPL tokens and dApps built on Solana.</motion.p>
          </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="contact-cta" className="py-20 text-center">
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false }} 
            variants={containerVariants} 
            className="max-w-xl mx-auto"
        >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
                🚀 Start Building Now
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-400 text-xl mb-8">
                Your project deserves to stand out. Let’s create a powerful and profitable Solana project together.
            </motion.p>
            <motion.div variants={itemVariants}>
                <Link href="#contact" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/50">
                    👉 Contact Me to Start
                </Link>
            </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}