"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Coffee, ArrowRight, Check, Loader2, ArrowLeft, User, Mail, Lock } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    
    login(email, name); // Mock signup
    router.push("/");
  };

  return (
    <div className="min-h-screen flex bg-bg-cream font-sans overflow-hidden">
      {/* Left Side: Illustration & Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-dark items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/signature-spices.png"
            alt="Artisanal Spices"
            fill
            className="object-cover scale-110 blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-transparent" />
        
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
            Join our <br />
            <span className="italic font-normal text-primary-rust">inner circle.</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Every sip is a journey. Sign up to receive exclusive recipes, early access to new blends, and stories from the hearth.
          </p>
          
          <div className="space-y-6">
            {[
              "First access to limited signature blends",
              "Invitations to digital slow-bar sessions",
              "Exclusive heritage-inspired recipes"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4 group">
                <div className="w-6 h-6 rounded-full bg-accent-green/20 border border-accent-green flex items-center justify-center transition-all group-hover:bg-accent-green">
                  <Check className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-rust/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-green/5 rounded-full blur-3xl" />

        <div className="w-full max-w-md animate-in">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-serif text-primary-dark mb-3">Create an Account</h2>
            <p className="text-gray-text">Step into a world of slow brewing and rich heritage.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-primary-dark/60 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-primary-rust transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Elara Vance"
                  className="w-full pl-14 pr-6 py-4 rounded-xl bg-white border border-gray-100 shadow-sm focus:border-primary-rust focus:ring-1 focus:ring-primary-rust outline-none transition-all placeholder:text-gray-300"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

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
              <label className="text-sm font-bold uppercase tracking-widest text-primary-dark/60 ml-1">
                Password
              </label>
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

            <div className="flex items-center space-x-3 ml-1 py-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 rounded border-gray-300 text-primary-rust focus:ring-primary-rust cursor-pointer"
                required
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-text cursor-pointer select-none">
                I agree to the <Link href="/terms" className="text-primary-rust font-medium hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary-rust font-medium hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-dark text-white py-5 rounded-xl font-bold tracking-widest flex items-center justify-center space-x-3 hover:bg-primary-rust transition-all shadow-xl hover:shadow-primary-rust/20 group disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>PREPARING YOUR SPOT...</span>
                </>
              ) : (
                <>
                  <span>BEGIN YOUR JOURNEY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center text-gray-text">
            Already a member?{" "}
            <Link href="/login" className="text-primary-dark font-bold hover:text-primary-rust transition-colors">
              Sign In to your Hearth
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
