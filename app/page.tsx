"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              🚀 SoldevHub is now live on Mainnet
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            The Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Decentralized Freedom
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Meet <strong>SoldevHub</strong>. The crypto asset designed for speed, security, and community. 
            Architected by <strong>Alpha</strong> to revolutionize the blockchain landscape.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-slate-700 hover:border-purple-500 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              View Whitepaper
            </button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT THE CREATOR */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
             viewport={{ once: false }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                   {/* Placeholder for Alpha's Image */}
                   <span className="text-9xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full blur-xl opacity-50" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet the Creator: Alpha</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                "I created SoldevHub with a single vision: to strip away the complexity of modern finance. 
                SoldevHub isn't just a coin; it's a testament to what one developer and a strong community can achieve."
              </p>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Audited & Secure Smart Contracts" },
                  { icon: Zap, text: "Lightning Fast Transactions" },
                  { icon: Globe, text: "Global Community Driven" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <item.icon size={24} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Solora Tokenomics</h2>
            <p className="text-slate-400">Transparent distribution for a sustainable future.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Total Supply", value: "1,000,000,000", desc: "Fixed supply, never inflated." },
              { title: "Liquidity Pool", value: "45%", desc: "Locked for 5 years." },
              { title: "Community", value: "30%", desc: "Airdrops and rewards." },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                viewport={{ once: false }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-slate-400 text-sm font-uppercase tracking-wider mb-2">{stat.title}</h3>
                <p className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                  {stat.value}
                </p>
                <p className="text-purple-400 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-20 bg-slate-900/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Roadmap</h2>
          
          <div className="space-y-12">
            {[
              { phase: "Phase 1", title: "Inception", items: ["Concept Development", "Smart Contract Audit", "Website Launch"] },
              { phase: "Phase 2", title: "Growth", items: ["CEX Listings", "Community Marketing", "Staking DApp"] },
              { phase: "Phase 3", title: "Expansion", items: ["Solora NFT Collection", "Cross-chain Bridge", "DAO Governance"] },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-slate-950 p-6 rounded-2xl border border-slate-800"
              >
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                  {item.phase}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((sub, j) => (
                      <span key={j} className="text-sm text-slate-400 flex items-center gap-1">
                        <TrendingUp size={14} className="text-green-400" /> {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}