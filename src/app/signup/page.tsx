"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft, Mail, Lock, User, Loader2, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    
    login(email, name); // Mock signup
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col md:flex-row font-sans">
      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 bg-primary-rust relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549845013-31f0a850efdc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply" />
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-20 text-white">
          <Link href="/" className="mb-12 inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Join our <br/><span className="text-primary-dark">Heritage Society.</span>
          </h1>
          <p className="text-lg text-white/90 max-w-md leading-relaxed">
            Unlock exclusive access to heritage spice blends, early releases, and artisanal brewing workshops.
          </p>
          <ul className="mt-8 space-y-4">
            {["Seasonal heritage releases", "Brewing workshop invites", "Priority artisanal delivery"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                <CheckCircle2 size={18} className="text-primary-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-12 left-12 lg:left-20 text-white/30 text-xs tracking-widest uppercase">
          Crafted for Connoisseurs • Heritage Society
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
            <h2 className="text-3xl font-serif font-bold text-primary-dark mb-3">Create Membership</h2>
            <p className="text-gray-text">Begin your artisanal journey with us today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="text-xs font-bold text-primary-dark/60 uppercase tracking-widest ml-1"
              >
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-text group-focus-within:text-primary-rust transition-colors">
                  <User size={18} />
                </div>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Arjun Dev"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-primary-dark/10 rounded-xl pl-12 pr-4 py-3 text-primary-dark placeholder:text-gray-text/40 focus:outline-none focus:ring-2 focus:ring-primary-rust/20 focus:border-primary-rust transition-all shadow-sm"
                />
              </div>
            </div>

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
                  className="w-full bg-white border border-primary-dark/10 rounded-xl pl-12 pr-4 py-3 text-primary-dark placeholder:text-gray-text/40 focus:outline-none focus:ring-2 focus:ring-primary-rust/20 focus:border-primary-rust transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="text-xs font-bold text-primary-dark/60 uppercase tracking-widest ml-1"
              >
                Create Password
              </label>
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
                  className="w-full bg-white border border-primary-dark/10 rounded-xl pl-12 pr-4 py-3 text-primary-dark placeholder:text-gray-text/40 focus:outline-none focus:ring-2 focus:ring-primary-rust/20 focus:border-primary-rust transition-all shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-dark hover:bg-primary-rust text-white font-bold py-4 rounded-xl mt-4 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-primary-dark/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Processing...
                </>
              ) : (
                "Join the Society"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-text text-sm italic">
            Already a member?{" "}
            <Link href="/login" className="font-bold text-primary-dark hover:text-primary-rust transition-all not-italic">
              Welcome back
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-primary-dark/5 text-center">
            <p className="text-[10px] text-gray-text uppercase tracking-widest leading-relaxed">
              By joining, you agree to our <br/> 
              <a href="#" className="underline">Terms of Heritage</a> & <a href="#" className="underline">Privacy Tradition</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
