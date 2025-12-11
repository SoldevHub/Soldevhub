"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Zap, Globe, Rocket, Code, 
  Coins, FileCode, Laptop, Users, CheckCircle, Clock 
} from "lucide-react";

export default function Home() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30">

      {/* --- HOME SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={container}>
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              🚀 Build Your Solana Token or dApp With Confidence
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where Powerful Crypto Ideas Become <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Real Blockchain Projects
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              I specialize in creating fast, secure, and scalable solutions on the Solana network — from SPL tokens to fully functional dApps.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                Start Building <ArrowRight size={20} />
              </a>
              <a href="#portfolio" className="px-8 py-4 border border-slate-700 hover:border-purple-500 text-white rounded-full font-bold transition-all">
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false }} 
            variants={container}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">Who I Am</motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 mb-6 leading-relaxed">
                I am a blockchain developer focused on building modern, efficient, and transparent projects on the Solana ecosystem. 
                With a passion for crypto innovation, I help new and experienced creators launch powerful blockchain products with confidence.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
                <h3 className="text-xl font-bold text-white mb-2">My Mission</h3>
                <p className="text-slate-400 text-sm">
                  I believe in making blockchain accessible. Many creators have amazing ideas but struggle with technical development — that’s where I step in. 
                  My mission is to help you build something real, secure, and successful.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {["Transparency", "Professionalism", "Secure Coding", "Fast Delivery", "Long-term Support"].map((val, i) => (
                 <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <CheckCircle className="text-purple-500" size={20} />
                    <span className="text-white font-medium">{val}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Solana Development Services</h2>
            <p className="text-slate-400">Complete blockchain and web development services.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Coins, 
                title: "Token Creation", 
                items: ["Memecoins", "Utility Tokens", "Anti-rug Features", "Supply Setup"] 
              },
              { 
                icon: FileCode, 
                title: "Smart Contracts", 
                items: ["Staking Contracts", "Airdrop Distribution", "Reward Systems", "Vesting Locks"] 
              },
              { 
                icon: Laptop, 
                title: "Web Development", 
                items: ["Landing Pages", "Investor Dashboards", "Roadmaps", "Clean UI/UX"] 
              },
              { 
                icon: Users, 
                title: "Consulting", 
                items: ["Launch Strategy", "Pump.fun -> Raydium", "Market Research", "Marketing Guide"] 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-lg transition-all"
              >
                <service.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">My Portfolio</h2>
            <p className="text-slate-400">A showcase of projects I have created, designed, or supported.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp} className="group cursor-pointer">
              <div className="bg-slate-800 h-48 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 group-hover:opacity-100 transition-opacity" />
                <Coins size={48} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <div className="bg-slate-900 p-6 rounded-b-xl border border-t-0 border-slate-800">
                <h4 className="text-white font-bold text-lg">Token Projects</h4>
                <p className="text-slate-400 text-sm mt-2">Example Token 1 (Memecoin), Utility Token with Staking, Community Reward Token.</p>
              </div>
            </motion.div>

            {/* Project Card 2 */}
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp} className="group cursor-pointer">
              <div className="bg-slate-800 h-48 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 group-hover:opacity-100 transition-opacity" />
                <Laptop size={48} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <div className="bg-slate-900 p-6 rounded-b-xl border border-t-0 border-slate-800">
                <h4 className="text-white font-bold text-lg">Websites</h4>
                <p className="text-slate-400 text-sm mt-2">Token Landing Page, Investor Dashboard, Clean Crypto Brand Mockups.</p>
              </div>
            </motion.div>

            {/* Project Card 3 */}
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp} className="group cursor-pointer">
              <div className="bg-slate-800 h-48 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20 group-hover:opacity-100 transition-opacity" />
                <Code size={48} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <div className="bg-slate-900 p-6 rounded-b-xl border border-t-0 border-slate-800">
                <h4 className="text-white font-bold text-lg">Smart Contracts</h4>
                <p className="text-slate-400 text-sm mt-2">Staking Demos, Airdrop Distributors, Reward & Vesting Logic.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Choose the package that fits your project.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-200">Basic Token</h3>
              <div className="text-3xl font-bold text-white mt-4 mb-2">$20 - $50</div>
              <p className="text-slate-500 text-sm mb-6">Perfect for simple memecoins.</p>
              <ul className="space-y-3 mb-8">
                {["SPL Token Creation", "Metadata Setup", "Simple Landing Page", "Fast Delivery"].map(item => (
                  <li key={item} className="flex gap-2 text-slate-400 text-sm"><CheckCircle size={16} className="text-slate-600" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block text-center py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800">Select Basic</a>
            </motion.div>

            {/* Standard (Popular) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
              className="bg-slate-900 p-8 rounded-2xl border border-purple-500 relative transform md:-translate-y-4 shadow-xl shadow-purple-900/20"
            >
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold">POPULAR</div>
              <h3 className="text-xl font-bold text-purple-300">Standard Launch</h3>
              <div className="text-3xl font-bold text-white mt-4 mb-2">$70 - $150</div>
              <p className="text-slate-400 text-sm mb-6">For professional launches.</p>
              <ul className="space-y-3 mb-8">
                {["Token Creation + Tokenomics", "Custom Website", "Logo Design", "Marketing Guidance", "Priority Support"].map(item => (
                  <li key={item} className="flex gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-purple-500" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block text-center py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 font-bold">Select Standard</a>
            </motion.div>

            {/* Full */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-200">Full Ecosystem</h3>
              <div className="text-3xl font-bold text-white mt-4 mb-2">$200 - $500</div>
              <p className="text-slate-500 text-sm mb-6">Complete utility packages.</p>
              <ul className="space-y-3 mb-8">
                {["Token + Website + Contracts", "Staking System", "Airdrop Utilities", "Whitepaper & Roadmap", "Full Launch Support"].map(item => (
                  <li key={item} className="flex gap-2 text-slate-400 text-sm"><CheckCircle size={16} className="text-slate-600" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="block text-center py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800">Select Full</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: false }} variants={container}
             className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Me</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 mb-8 max-w-xl mx-auto">
              Ready to launch your Solana project? Send a message — I reply fast (usually within 10-30 mins).
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-8">
               <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg"><Rocket className="text-green-500" size={24} /></div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">WhatsApp</p>
                    <p className="text-white font-medium">+123 456 7890</p>
                  </div>
               </div>
               <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg"><Zap className="text-blue-500" size={24} /></div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Telegram</p>
                    <p className="text-white font-medium">@SolDevAlpha</p>
                  </div>
               </div>
            </motion.div>

            <motion.form variants={fadeInUp} className="max-w-lg mx-auto space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500" />
                <input type="email" placeholder="Email" className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500" />
              </div>
              <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"></textarea>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </motion.form>

          </motion.div>
        </div>
      </section>

    </main>
  );
}