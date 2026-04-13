"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/starlyn2010" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/starlyn-eliezer-rosario-2457033ab" },
  { label: "Email", href: "mailto:starlyneliezerrosario@gmail.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 max-w-4xl mx-auto border-t border-black/5 mt-20">
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div>
          <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-2">
            Starlyn Rosario
          </h3>
          <p className="text-sm text-zinc-600 max-w-sm font-light">
            Building the next generation of provably stable neural architectures. 
            Open to research collaborations in the AI field.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} — MIT EECS Portfolio</span>
        <span>Ad astra per aspera</span>
      </div>
    </footer>
  );
}
