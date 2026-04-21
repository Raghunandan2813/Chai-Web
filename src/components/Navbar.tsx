"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Shop", href: "/shop" },
  { name: "Locations", href: "/locations" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <Link href="/" className="text-xl font-serif font-bold text-primary-dark">
          The Artisanal Hearth
        </Link>
      </div>

      <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium text-gray-text">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="hover:text-primary-rust transition-colors relative group"
            >
              {link.name}
              {link.name === "Home" && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-rust" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex justify-end items-center space-x-4 text-primary-dark">
        <button className="hover:text-primary-rust transition-colors">
          <ShoppingCart size={20} />
        </button>
        <button className="p-1 bg-primary-dark text-white rounded-full hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </div>
    </nav>
  );
}
