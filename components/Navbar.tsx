"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Added for URL detection
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Home, User, Briefcase, Mail, 
  ChevronDown, LogIn, Coins, Network 
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [scrolled, setScrolled] = useState(false); // Scroll Background State
  const [isChainsOpen, setIsChainsOpen] = useState(false); // Dropdown State
  const pathname = usePathname(); // Get current URL path

  // 1. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Fix: Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // 3. Fix: Close menu automatically if the URL path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Navigation Data
  const navLinks = [
    { name: "Home", href: "/home", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const chains = [
    { name: "Solora", href: "#solora" },
    { name: "KB Coin", href: "#kbcoin" },
    { name: "YTB", href: "#ytb" },
  ];

  return (
    <nav
      className={twMerge(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO & APP NAME (Main Navbar) */}
          <div className="flex-shrink-0 cursor-pointer z-50">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                <span className="text-white font-bold text-2xl font-mono">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight block">
                Soldev<span className="text-purple-500">Hub</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Standard Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                {link.name}
              </Link>
            ))}

            {/* "Our Chains" Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsChainsOpen(!isChainsOpen)}
                className="flex items-center gap-1 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Our Chains
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isChainsOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {isChainsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-2"
                  >
                    {chains.map((chain) => (
                      <Link
                        key={chain.name}
                        href={chain.href}
                        onClick={() => setIsChainsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors"
                      >
                        <Coins size={16} className="text-purple-500" />
                        {chain.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sign In Button */}
            <Link
              href="#signin"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-full font-medium transition-all border border-slate-700"
            >
              <LogIn size={18} />
              Sign In
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-slate-300 hover:text-white p-2"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER (ASIDE) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 h-[100dvh] w-screen bg-black/80 backdrop-blur-sm z-[60]"
            />
            
            {/* Aside Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-[100dvh] w-[85%] max-w-sm bg-slate-950 border-l border-slate-800 z-[70] p-6 flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                {/* Changed App Name to just "Menu" as requested */}
                <span className="text-xl font-bold text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Menu size={20} className="text-white" />
                  </div>
                  Menu
                </span>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white bg-slate-900 p-2 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {/* Regular Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-lg text-slate-300 hover:text-purple-400 hover:bg-slate-900 transition-all p-3 rounded-xl"
                  >
                    <link.icon size={20} className="text-purple-500" />
                    {link.name}
                  </Link>
                ))}

                {/* Our Chains Mobile Dropdown */}
                <div className="pt-2 pb-2">
                  <button 
                    onClick={() => setIsChainsOpen(!isChainsOpen)}
                    className="flex w-full items-center justify-between text-lg text-slate-300 hover:text-purple-400 hover:bg-slate-900 transition-all p-3 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <Network size={20} className="text-purple-500" />
                      Our Chains
                    </div>
                    <ChevronDown size={20} className={`transition-transform ${isChainsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isChainsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 pl-4 border-l border-slate-800"
                      >
                        {chains.map((chain) => (
                          <Link
                            key={chain.name}
                            href={chain.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-slate-400 hover:text-white text-base"
                          >
                            {chain.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Sign In Button Mobile */}
              <div className="mt-auto pt-6 border-t border-slate-900">
                <Link 
                  href="#signin" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  <LogIn size={20} />
                  Sign In
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}