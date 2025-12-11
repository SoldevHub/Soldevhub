import Link from "next/link";
import { Twitter, Github, Linkedin, Code, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];
  
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Mission */}
          <div className="col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Soldev<span className="text-purple-500">Hub</span>
                </span>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm mt-3">
              Your dedicated partner for professional, secure, and profitable Solana blockchain development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Key Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link href="#services" className="hover:text-purple-400 transition-colors">SPL Token Creation</Link></li>
                <li><Link href="#services" className="hover:text-purple-400 transition-colors">Smart Contracts</Link></li>
                <li><Link href="#services" className="hover:text-purple-400 transition-colors">dApp Development</Link></li>
                <li><Link href="#services" className="hover:text-purple-400 transition-colors">Growth Guidance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
                © {new Date().getFullYear()} SoldevHub. All rights reserved. Built by Alpha.
            </p>
            <div className="flex space-x-4 order-1 md:order-2">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} aria-label={item.label} className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all">
                  <item.icon size={20} />
                </a>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
}