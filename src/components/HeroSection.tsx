"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 px-8 md:px-16 flex items-center bg-bg-cream overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="z-10 max-w-xl">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-green text-white text-[10px] font-bold tracking-widest mb-6">
            EST. 1994
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-primary-dark leading-tight mb-8">
            The art of <br />
            <span className="italic font-normal">slow brewing.</span>
          </h1>
          <p className="text-lg text-gray-text leading-relaxed mb-10 max-w-md">
            Every cup tells a story of patience, heritage, and the perfect blend of 
            hand-picked spices. Welcome to your digital slow-bar.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-4 bg-primary-rust text-white font-medium rounded-md hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
              View Our Menu
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-primary-dark font-medium rounded-md hover:bg-gray-50 transition-all">
              Find a Hearth
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-chai.png"
              alt="Art of slow brewing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background element if needed */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f3f0e8] -z-0 hidden md:block" />
    </section>
  );
}
