"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Capabilities", href: "#skills" },
  { label: "Evolution", href: "#timeline" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(253,253,253, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="text-sm font-medium text-zinc-900 transition-colors" translate="no">
              Starlyn Rosario
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="mailto:starlyneliezerrosario@gmail.com"
              className="ml-4 px-4 py-2 text-xs font-medium text-white bg-black dark:bg-white dark:text-black rounded-md transition-transform hover:scale-[0.98] active:scale-[0.95]"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="w-4 h-px bg-zinc-400 transition-all duration-300"
                style={{ transform: mobileOpen ? "rotate(45deg) translateY(3px)" : "none" }}
              />
              <span
                className="w-4 h-px bg-zinc-400 transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="w-4 h-px bg-zinc-400 transition-all duration-300"
                style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-3px)" : "none" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#fdfdfd]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-zinc-700 hover:text-black"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:starlyneliezerrosario@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-6 py-3 text-sm font-medium text-white bg-black rounded-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
