"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center max-w-5xl mx-auto pt-20 overflow-hidden">
      
      <HeroBackground />
      <div className="px-6 md:px-12 w-full">

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
            Independent Researcher | Santo Domingo, Dominican Republic
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
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span>Published 3 preprints (Collatz dynamics + Edge AI fragility) on Zenodo, 2026</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span>Proved theorems on Collatz orbital equidistribution using concentration bounds</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span>Built ProSalud medical SaaS (1 user: my uncle). 16,800 lines, PySide6+FastAPI+Groq</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span>Created NOVA autonomous AI agent — paused since March 2026. 463 commits, 8GB RAM, local-first</span></li>
            </ul>
          </div>

          <div className="font-mono text-xs tracking-widest">
            <span className="text-zinc-500 uppercase">Aspiring: </span>
            <span className="text-amber-600 dark:text-amber-400 uppercase font-medium">MIT Course 6-4</span>
            <span className="text-zinc-400"> | Stanford CS+AI | Harvard CS</span>
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
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-600 text-white font-medium text-sm hover:bg-amber-700 transition-all"
          >
            View Research
          </a>
          <a
            href="https://github.com/starlyn2010"
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/starlyn-eliezer-rosario-2457033ab"
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400"
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
      </div>
    </section>
  );
}
