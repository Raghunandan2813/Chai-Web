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
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,rgba(166,93,31,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(45,79,30,0.16),transparent_30%),#F9F7F2] flex items-center justify-center overflow-hidden px-4 py-10">
      <div className="grid max-w-6xl w-full gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
        <div className="hidden lg:flex relative overflow-hidden rounded-4xl bg-primary-dark/95 p-14 shadow-2xl shadow-primary-dark/20">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/hero-chai.png"
              alt="Warm Hearth"
              fill
              className="object-cover scale-105 blur-[1.5px]"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-tr from-primary-dark/85 via-primary-dark/55 to-transparent" />

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
                  <p className="font-semibold text-lg">Artisanal experiences</p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-xl">
              <h1 className="text-5xl font-serif leading-tight tracking-tight mb-6">Welcome back to your cozy corner.</h1>
              <p className="text-lg text-white/75 leading-relaxed">
                Sign in and continue where you left off. Smooth, warm, and beautifully brewed for every moment.
              </p>
            </div>

            <div className="mt-10 space-y-4 text-sm text-white/70">
              <p className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-rust" />
                Fast access to curated blends and notes.
              </p>
              <p className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-rust" />
                Keep your preferences warm and ready.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-primary-rust/10 blur-3xl" />
          <div className="absolute right-0 bottom-12 h-40 w-40 rounded-full bg-accent-green/10 blur-3xl" />

          <div className="relative rounded-4xl bg-white/95 p-8 shadow-[0_40px_120px_rgba(17,24,39,0.12)] ring-1 ring-black/5 backdrop-blur-sm">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-primary-rust/80">Login</p>
              <h2 className="mt-4 text-4xl font-serif text-primary-dark">Sign in to continue</h2>
              <p className="mt-2 text-sm text-gray-500">Secure access to your chai journal, recipes, and favorites.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-primary-dark/80">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-primary-rust hover:underline">
                    Forgot password?
                  </Link>
                </div>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-primary-dark px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-xl shadow-primary-dark/15 transition-all hover:bg-primary-rust disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Enter the Hearth
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.28em] text-gray-400">
              <span className="h-px flex-1 bg-gray-200" />
              Or continue with
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 shadow-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-gray-500">
              Don’t have an account?{' '}
              <Link href="/signup" className="font-semibold text-primary-dark hover:text-primary-rust">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
