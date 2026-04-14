"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto pt-20 overflow-hidden">
      
      {/* Background glow (extremely subtle) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square rounded-full blur-[120px] opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
        style={{ background: "currentColor" }}
      />

      <div className="z-10 mt-12 md:mt-24">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-black/20 dark:bg-white/20" />
          <p className="font-mono text-xs font-medium tracking-widest uppercase text-zinc-500">
            Mathematical Engineer | Santo Domingo, Dominican Republic
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8 text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          Starlyn Rosario
        </motion.h1>

        {/* Subtitle / Body */}
        <motion.div
          className="max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
            I reduce unsolved mathematical problems to computable structures, 
            then engineer solutions from first principles.
          </p>

          <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">At 16:</span>
            <ul className="list-disc pl-5 space-y-2">
              <li>Published research in 2-adic dynamics (arXiv preprint, April 2026)</li>
              <li>Proved theorems on Collatz orbital equidistribution using concentration bounds</li>
              <li>Built medical SaaS with active user base (ProSalud)</li>
              <li>Created autonomous AI agent running on 4GB hardware (NOVA)</li>
            </ul>
          </div>

          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            Target: MIT Course 6-4 (AI & Decision Making) | Stanford CS+AI | Harvard CS
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#research"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-black dark:bg-zinc-100 text-white dark:text-black font-medium text-sm transition-opacity hover:opacity-90"
          >
            View Research on arXiv
          </a>
          <a
            href="https://github.com/starlyn2010"
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/starlyn-eliezer-rosario-2457033ab"
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-black/20 to-transparent" />
        <span className="font-mono text-[10px] text-zinc-500 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
