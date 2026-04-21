"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function SignatureBlends() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-primary-dark mb-4">Signature Blends</h2>
            <p className="text-gray-text max-w-sm">
              Our master roasters and chaiwallas curate a selection that 
              balances tradition with modern curiosity.
            </p>
          </div>
          <button className="flex items-center text-sm font-bold text-primary-rust items-center space-x-2 hover:opacity-80 transition-all">
            <span>Explore Full Menu</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Feature Image */}
          <div className="md:col-span-7 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/signature-spices.png"
              alt="Signature Spices"
              fill
              className="object-cover"
            />
          </div>

          {/* Cards Column */}
          <div className="md:col-span-5 flex flex-col space-y-8">
            {/* Espresso Card */}
            <div className="bg-card-beige rounded-3xl p-8 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Hearth Espresso</h3>
                <p className="text-xs text-gray-text mb-4 leading-relaxed">
                  Ethiopian beans roasted to highlight notes of stone fruit and molasses.
                </p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-primary-rust">
                  Rich & Fruity
                </div>
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg mx-auto">
                <Image
                  src="/espresso.png"
                  alt="Hearth Espresso"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Matcha Card */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl font-serif text-white mb-2">Matcha Silk</h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Ceremonial grade from Uji, Kyoto.
                </p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">
                  Umami & Smooth
                </div>
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#333] shadow-lg mx-auto">
                <Image
                  src="/matcha.png"
                  alt="Matcha Silk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
