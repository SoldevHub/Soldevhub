"use client";

import { Mail, Phone, MapPin, Send, MessageCircle, Twitter } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    details: "Send us a detailed message about your project.",
    value: "contact@soldevhub.com",
    href: "mailto:contact@soldevhub.com",
    color: "text-purple-400"
  },
  {
    icon: MessageCircle,
    title: "Direct Chat",
    details: "Reach our support team instantly via Telegram.",
    value: "@SoldevHub_Support",
    href: "https://t.me/SoldevHub_Support",
    color: "text-blue-400"
  },
  {
    icon: Twitter,
    title: "Follow & DM",
    details: "Stay updated and send quick inquiries on Twitter/X.",
    value: "@SoldevHub",
    href: "https://twitter.com/SoldevHub",
    color: "text-sky-400"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
            Get in Touch
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s Start Building on <span className="text-pink-500">Solana</span>
          </p>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
            We are excited to hear about your decentralized project. Reach out through the form below or use our direct contact channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form (Takes 2/3 space on large screens) */}
          <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-800 text-white placeholder-slate-500 p-4 rounded-xl border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-slate-800 text-white placeholder-slate-500 p-4 rounded-xl border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="Project Title / Subject"
                required
                className="w-full bg-slate-800 text-white placeholder-slate-500 p-4 rounded-xl border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />

              <textarea
                placeholder="Tell us about your project and requirements (e.g., DeFi protocol, NFT Marketplace, Anchor program audit...)"
                rows={6}
                required
                className="w-full bg-slate-800 text-white placeholder-slate-500 p-4 rounded-xl border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-900/50"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Methods (Takes 1/3 space on large screens) */}
          <div className="lg:col-span-1 space-y-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 transition-transform duration-300 hover:scale-[1.03] hover:border-pink-500/50"
              >
                <method.icon className={`h-8 w-8 ${method.color} mb-3`} />
                <h4 className="text-xl font-bold mb-1 text-white">{method.title}</h4>
                <p className="text-slate-400 text-sm mb-3">{method.details}</p>
                <Link 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-500 font-medium text-sm hover:text-pink-400 transition-colors"
                >
                  {method.value}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}