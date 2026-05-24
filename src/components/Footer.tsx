"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Discover",
    links: ["Menu", "Gift Cards", "Brew Guides"]
  },
  {
    title: "Company",
    links: ["Wholesale", "Careers", "Our Story"]
  },
  {
    title: "Support",
    links: ["Privacy Policy", "Shipping Info", "Contact Us"]
  }
];

export function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_top_left,rgba(166,93,31,0.14),transparent_25%),#F9F7F2] pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.2fr] lg:items-start">
          <div className="rounded-4xl bg-white/95 p-8 shadow-[0_30px_70px_rgba(17,24,39,0.08)] ring-1 ring-black/5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-rust mb-4">The Artisanal Hearth</p>
            <h3 className="text-3xl font-serif text-primary-dark mb-4">Sip, savor, and belong.</h3>
            <p className="text-sm leading-7 text-gray-600 max-w-md">
              We craft every blend thoughtfully, bringing warmth and ritual to your everyday. Join our community for curated recipes, slow-brew stories, and exclusive discoveries.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h5 className="text-xs font-bold tracking-[0.35em] text-primary-dark uppercase mb-6">
                {column.title}
              </h5>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-primary-rust transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-4xl bg-white/95 p-8 shadow-[0_30px_70px_rgba(17,24,39,0.08)] ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-rust mb-4">Stay connected</p>
            <p className="text-sm text-gray-600 leading-7 mb-6">
              Sign up for seasonal brewing notes, new blend drops, and thoughtful rituals delivered to your inbox.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-3xl border border-gray-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-primary-rust focus:ring-2 focus:ring-primary-rust/15"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-primary-dark px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-primary-dark/10 transition hover:bg-primary-rust"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-500">
              <span className="font-semibold text-primary-dark">Follow us:</span>
              <a href="#" className="underline transition hover:text-primary-rust">Instagram</a>
              <a href="#" className="underline transition hover:text-primary-rust">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200/70 pt-8 flex flex-col gap-4 text-center text-sm text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 The Artisanal Hearth. Crafted with care for every cup.</p>
          <p>Designed for slow rituals, thoughtful moments, and good company.</p>
        </div>
      </div>
    </footer>
  );
}
