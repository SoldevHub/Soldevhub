"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, Code, DollarSign, Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Tailwind-Merge is used for safely combining Tailwind classes (optional but good practice)
const cn = twMerge;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky nav bar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Portfolio", href: "#portfolio", icon: Code },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const linkClass = "text-slate-300 hover:text-purple-400 transition-colors px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - SoldevHub */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="#home" className="flex items-center gap-3">
              <Code className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Soldev<span className="text-purple-500">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              ))}
              <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                Start Project
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer (Slide from Right) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Aside Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-slate-950 border-l border-slate-800 z-50 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-lg text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    <link.icon size={20} className="text-purple-500" />
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link href="#contact" className="w-full block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                  Start Your Project
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}