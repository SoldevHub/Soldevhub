import Link from "next/link";
import { Send, Twitter, Mail, MessageCircle, Network } from "lucide-react";

export default function Footer() {
    // Navigation links updated to match the active Navbar structure
    const activeNavLinks = ["Home", "About", "Services", "Contact"];

    // "Our Chains" links pulled from the navigation requirements
    const chainLinks = [
        { name: "Solora", href: "#solora" },
        { name: "KB Coin", href: "#kbcoin" },
        { name: "YTB", href: "#ytb" },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Structure: Brand | Explore | Our Chains | Connect */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Description (Takes more space on smaller screens) */}
                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <Link href="#home" className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-2xl font-bold text-white">SoldevHub</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Professional Solana development services. From smart contracts to full dApps, we build the future of finance.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            {activeNavLinks.map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Our Chains Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Chains</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            {chainLinks.map((chain) => (
                                <li key={chain.name}>
                                    <Link href={chain.href} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                                        <Network size={16} className="text-purple-500"/> 
                                        {chain.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Socials / Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-[#25D366] transition-all" title="WhatsApp">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-[#0088cc] transition-all" title="Telegram">
                                <Send size={20} />
                            </a>
                            <a href="#" className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all" title="Email">
                                <Mail size={20} />
                            </a>
                            <a href="#" className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-blue-400 transition-all" title="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-xs">
                    <p>© {new Date().getFullYear()} SoldevHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}