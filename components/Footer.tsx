import { Twitter, Github, Send, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Solora
            </h3>
            <p className="text-slate-400 max-w-sm">
              The next generation of decentralized finance. Built by Alpha for
              the community. Join us on our journey to the moon.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Buy Token</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Chart</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contract</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Community</h4>
            <div className="flex space-x-4">
              {[Twitter, Github, Send, Globe].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Solora Coin. Created by Alpha.</p>
        </div>
      </div>
    </footer>
  );
}