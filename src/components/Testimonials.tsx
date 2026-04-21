"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "The Midnight Masala is unlike anything I've had. It's not just a drink; it's a sensory experience that grounds me every morning.",
    name: "Marcus Chen",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    id: 2,
    rating: 5,
    quote: "I love that they prioritize sustainability without compromising on the depth of flavor. The Artisanal Hearth is my sanctuary.",
    name: "Sarah Jenkins",
    role: "Environmental Scientist",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    rating: 5,
    quote: "The atmosphere of their physical shop is captured perfectly in their delivery service. Packaging is a work of art.",
    name: "David Miller",
    role: "Author",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-serif text-primary-dark">Voices from the Hearth</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#f3f0e8]/50 p-10 rounded-3xl flex flex-col space-y-6 hover:translate-y-[-4px] transition-transform shadow-sm">
            <div className="flex space-x-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary-rust text-primary-rust" />
              ))}
            </div>
            
            <blockquote className="text-gray-text text-sm leading-relaxed italic">
              &quot;{t.quote}&quot;
            </blockquote>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary-dark">{t.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-text">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
