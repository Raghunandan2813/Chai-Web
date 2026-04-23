"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft, Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    login(email, email.split("@")[0]); // Mock login
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col md:flex-row font-sans">
      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544787210-282aa0639d6b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-20 text-white">
          <Link href="/" className="mb-12 inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Welcome back to the <span className="text-primary-rust">Hearth.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-md leading-relaxed">
            The aroma of fresh brew awaits. Sign in to access your curated blends and heritage favorites.
          </p>
        </div>
        <div className="absolute bottom-12 left-12 lg:left-20 text-white/30 text-xs tracking-widest uppercase">
          Est. 2026 • Artisanal Brewing
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12">
        <div className="max-w-md w-full mx-auto">
          <div className="md:hidden mb-8">
             <Link href="/" className="text-2xl font-serif font-bold text-primary-dark">
                The Artisanal Hearth
             </Link>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary-dark mb-3">Sign In</h2>
            <p className="text-gray-text">Enter your credentials to continue your journey.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-xs font-bold text-primary-dark/60 uppercase tracking-widest ml-1"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-text group-focus-within:text-primary-rust transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@heritage.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-primary-dark/10 rounded-xl pl-12 pr-4 py-3.5 text-primary-dark placeholder:text-gray-text/40 focus:outline-none focus:ring-2 focus:ring-primary-rust/20 focus:border-primary-rust transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label 
                  htmlFor="password" 
                  className="text-xs font-bold text-primary-dark/60 uppercase tracking-widest"
                >
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-primary-rust hover:text-primary-rust/80 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-text group-focus-within:text-primary-rust transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-primary-dark/10 rounded-xl pl-12 pr-4 py-3.5 text-primary-dark placeholder:text-gray-text/40 focus:outline-none focus:ring-2 focus:ring-primary-rust/20 focus:border-primary-rust transition-all shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-dark hover:bg-primary-rust text-white font-bold py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-primary-dark/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px bg-primary-dark/10 flex-1" />
            <span className="text-xs text-gray-text font-medium uppercase tracking-widest">Social Entry</span>
            <div className="h-px bg-primary-dark/10 flex-1" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white hover:bg-bg-cream border border-primary-dark/10 rounded-xl py-3 text-sm font-semibold text-primary-dark transition-all shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <p className="mt-10 text-center text-gray-text text-sm italic">
            First time at the Hearth?{" "}
            <Link href="/signup" className="font-bold text-primary-rust hover:underline transition-all not-italic">
              Join the Society
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
