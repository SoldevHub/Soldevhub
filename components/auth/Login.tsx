"use client";

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Send, MessageCircle, Twitter, Chrome, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
    // In a real application, you would send this to an API endpoint
  };

  return (
    <section id="login" className="py-20 bg-slate-950 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome Back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">SoldevHub</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Securely access your Solana development resources.
          </p>
        </div>

        {/* Login Form Container */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
          
          {/* Email and Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
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

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password" // <-- Link to your Forgot Password page
                className="text-sm font-medium text-pink-500 hover:text-pink-400 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-900/50"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-slate-900 text-sm font-medium text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            
            {/* Google Login */}
            <button
              onClick={() => console.log('Login with Google')}
              className="w-full flex items-center justify-center py-3 px-4 border border-slate-700 rounded-xl shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-2 text-red-500" />
              Google
            </button>

            {/* Facebook Login */}
            <button
              onClick={() => console.log('Login with Facebook')}
              className="w-full flex items-center justify-center py-3 px-4 border border-slate-700 rounded-xl shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Facebook className="w-5 h-5 mr-2 text-blue-500" />
              Facebook
            </button>
          </div>

          {/* Footer Text - Sign Up */}
          <p className="mt-8 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" className="font-medium text-purple-500 hover:text-purple-400">
              Create an account
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}