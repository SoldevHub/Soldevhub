"use client";

import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Chrome, Facebook, Send } from 'lucide-react';
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering with:', { name, email, password });
    // In a real application, you would send this data to an API endpoint
  };

  return (
    <section id="signup" className="py-20 bg-slate-950 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">SoldevHub</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Create your account to start building on Solana.
          </p>
        </div>

        {/* Sign Up Form Container */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
          
          {/* Email and Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white placeholder-slate-500 rounded-xl border border-slate-700 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., dev@soldevhub.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white placeholder-slate-500 rounded-xl border border-slate-700 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field with Show/Hide */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3 bg-slate-800 text-white placeholder-slate-500 rounded-xl border border-slate-700 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-purple-400 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg shadow-pink-900/50"
            >
              <Send className="w-5 h-5"/>
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-slate-900 text-sm font-medium text-slate-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            
            {/* Google Login */}
            <button
              onClick={() => console.log('Register with Google')}
              className="w-full flex items-center justify-center py-3 px-4 border border-slate-700 rounded-xl shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-2 text-red-500" />
              Google
            </button>

            {/* Facebook Login */}
            <button
              onClick={() => console.log('Register with Facebook')}
              className="w-full flex items-center justify-center py-3 px-4 border border-slate-700 rounded-xl shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Facebook className="w-5 h-5 mr-2 text-blue-500" />
              Facebook
            </button>
          </div>

          {/* Footer Text - Login */}
          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link href="/auth/sign-in" className="font-medium text-purple-500 hover:text-purple-400">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}