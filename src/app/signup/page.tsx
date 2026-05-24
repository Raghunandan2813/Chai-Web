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
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,rgba(166,93,31,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(45,79,30,0.16),transparent_30%),#F9F7F2] flex items-center justify-center overflow-hidden px-4 py-10">
      <div className="grid max-w-6xl w-full gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
        <div className="hidden lg:flex relative overflow-hidden rounded-4xl bg-primary-dark/95 p-14 shadow-2xl shadow-primary-dark/20">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/signature-spices.png"
              alt="Artisanal Spices"
              fill
              className="object-cover scale-105 blur-[1.5px]"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-primary-dark/85 via-primary-dark/55 to-transparent" />

          <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <div className="mt-12 inline-flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3 shadow-xl shadow-black/10">
                <div className="grid place-items-center h-12 w-12 rounded-3xl bg-primary-rust">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Chai Society</p>
                  <p className="font-semibold text-lg">Exclusive community</p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-xl">
              <h1 className="text-5xl font-serif leading-tight tracking-tight mb-6">Create your account and savor the ritual.</h1>
              <p className="text-lg text-white/75 leading-relaxed">
                Join the hearth for curated blends, early access, and thoughtful stories designed for slow moments.
              </p>
            </div>

            <div className="mt-10 space-y-4 text-sm text-white/70">
              <p className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-rust" />
                Receive new recipes before anyone else.
              </p>
              <p className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-rust" />
                Save your favorites and tasting notes.
              </p>
              <p className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-rust" />
                Enjoy members-only slow-brew events.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-primary-rust/10 blur-3xl" />
          <div className="absolute right-0 bottom-12 h-40 w-40 rounded-full bg-accent-green/10 blur-3xl" />

          <div className="relative rounded-4xl bg-white/95 p-8 shadow-[0_40px_120px_rgba(17,24,39,0.12)] ring-1 ring-black/5 backdrop-blur-sm">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-primary-rust/80">Sign Up</p>
              <h2 className="mt-4 text-4xl font-serif text-primary-dark">Start your chai story</h2>
              <p className="mt-2 text-sm text-gray-500">A warm membership for your tastings, blends, and journals.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-primary-dark/80">
                  Full name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Elara Vance"
                    className="w-full rounded-3xl border border-gray-200 bg-white px-14 py-4 text-sm text-gray-900 shadow-sm outline-none transition-all focus:border-primary-rust focus:ring-2 focus:ring-primary-rust/15"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-primary-dark/80">
                  Email address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="elara@slowbrew.com"
                    className="w-full rounded-3xl border border-gray-200 bg-white px-14 py-4 text-sm text-gray-900 shadow-sm outline-none transition-all focus:border-primary-rust focus:ring-2 focus:ring-primary-rust/15"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-primary-dark/80">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-3xl border border-gray-200 bg-white px-14 py-4 text-sm text-gray-900 shadow-sm outline-none transition-all focus:border-primary-rust focus:ring-2 focus:ring-primary-rust/15"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-rust focus:ring-primary-rust cursor-pointer"
                  required
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm leading-6 text-gray-600">
                  I agree to the <Link href="/terms" className="text-primary-rust font-medium hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary-rust font-medium hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-primary-dark px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-xl shadow-primary-dark/15 transition-all hover:bg-primary-rust disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create my account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary-dark hover:text-primary-rust">
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
