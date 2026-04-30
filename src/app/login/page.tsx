"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Coffee, ArrowRight, Lock, Mail, Loader2, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex bg-bg-cream font-sans overflow-hidden">
      {/* Left Side: Illustration & Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-dark items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/hero-chai.png"
            alt="Warm Hearth"
            fill
            className="object-cover scale-110 blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/80 to-transparent" />
        
        <div className="relative z-10 max-w-lg text-white">
          <Link href="/" className="mb-12 inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary-rust rounded-2xl shadow-xl">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-serif tracking-tight">The Artisanal Hearth</span>
          </div>
          
          <h1 className="text-6xl font-serif leading-tight mb-6">
            Welcome <br />
            <span className="italic font-normal text-primary-rust">back home.</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            The kettle is on, and your favorite spot is waiting. Sign in to continue your artisanal journey.
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-rust/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-green/5 rounded-full blur-3xl" />

        <div className="w-full max-w-md animate-in">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-serif text-primary-dark mb-3">Sign In</h2>
            <p className="text-gray-text">Enter your details to return to the hearth.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-primary-dark/60 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-primary-rust transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="elara@slowbrew.com"
                  className="w-full pl-14 pr-6 py-4 rounded-xl bg-white border border-gray-100 shadow-sm focus:border-primary-rust focus:ring-1 focus:ring-primary-rust outline-none transition-all placeholder:text-gray-300"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold uppercase tracking-widest text-primary-dark/60">
                  Password
                </label>
                <Link href="/forgot-password" size="sm" className="text-xs text-primary-rust hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-primary-rust transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-4 rounded-xl bg-white border border-gray-100 shadow-sm focus:border-primary-rust focus:ring-1 focus:ring-primary-rust outline-none transition-all placeholder:text-gray-300"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-dark text-white py-5 rounded-xl font-bold tracking-widest flex items-center justify-center space-x-3 hover:bg-primary-rust transition-all shadow-xl hover:shadow-primary-rust/20 group disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>AUTHENTICATING...</span>
                </>
              ) : (
                <>
                  <span>ENTER THE HEARTH</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
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

          <div className="mt-12 text-center text-gray-text">
            First time at the hearth?{" "}
            <Link href="/signup" className="text-primary-dark font-bold hover:text-primary-rust transition-colors">
              Join the Society
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
