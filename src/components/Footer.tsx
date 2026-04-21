"use client";

const footerLinks = [
  {
    title: "DISCOVER",
    links: ["Menu", "Gift Cards", "Brew Guides"]
  },
  {
    title: "COMPANY",
    links: ["Wholesale", "Careers", "Our Story"]
  },
  {
    title: "SUPPORT",
    links: ["Privacy Policy", "Shipping Info", "Contact Us"]
  }
];

export function Footer() {
  return (
    <footer className="bg-bg-cream pt-24 pb-12 px-8 md:px-16 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-xl font-serif text-primary-dark mb-6">The Artisanal Hearth</h4>
            <p className="text-xs text-gray-text leading-relaxed max-w-xs">
              Crafting slow moments in a fast world. 
              Our beans and spices are sourced ethically and brewed with soul.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h5 className="text-[10px] font-bold tracking-widest text-primary-dark mb-8 uppercase">
                {column.title}
              </h5>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-text hover:text-primary-rust transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center">
          <p className="text-[10px] text-gray-400 font-medium">
            © 2024 The Artisanal Hearth. Steeped in Tradition.
          </p>
        </div>
      </div>
    </footer>
  );
}
