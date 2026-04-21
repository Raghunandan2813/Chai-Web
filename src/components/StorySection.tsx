"use client";

import Image from "next/image";

export function StorySection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec41b439?q=80&w=1000"
              alt="Cozy Cafe"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-bg-cream hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1594910413527-3782414168c4?q=80&w=1000"
              alt="Artisan Craft"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="italic text-primary-rust text-xl mb-2 font-serif">A sip of sanity...</h3>
            <h2 className="text-5xl font-serif text-primary-dark">Rooted in Soul.</h2>
          </div>
          
          <div className="space-y-6 text-gray-text leading-relaxed">
            <p>
              The Artisanal Hearth wasn&apos;t born in a boardroom. It began in a small kitchen 
              with a dented brass pot and a handful of peppercorns. Our founder, Elara, 
              spent years traveling from the Nilgiri hills to the coffee estates of Ethiopia, 
              learning that the secret wasn&apos;t just the ingredients—it was the time.
            </p>
            <p>
              Today, we maintain that same slow-pour philosophy in every cup we serve. 
              No rush. No shortcuts. Just the honest warmth of a hearth.
            </p>
          </div>

          <div className="flex space-x-12 pt-4">
            <div>
              <div className="text-3xl font-serif text-primary-dark mb-1">20+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-text">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-primary-dark mb-1">100k+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-text">Cups Poured</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm mt-8 relative">
            <p className="text-gray-text italic text-sm text-center">
              &quot;We believe the best conversations happen over the rim of a steaming cup.&quot;
            </p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
