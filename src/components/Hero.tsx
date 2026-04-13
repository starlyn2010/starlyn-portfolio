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
            MIT EECS Candidate
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          Exploring the <br className="hidden md:block"/>
          <span className="text-zinc-500 italic">neural limits of</span> <br />
          deterministic chaos.
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium" translate="no">Starlyn Rosario</strong> — <span translate="no">16 y/o Researcher & Software Engineer</span>. 
            Bridging Dynamical Systems with Artificial Intelligence to build 
            provably convergent architectures.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#projects"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-black dark:bg-zinc-100 text-white dark:text-black font-medium text-sm transition-opacity hover:opacity-90"
          >
            Explore My Work
          </a>
          <a
            href="#vision"
            className="pressable inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium text-sm"
          >
            Read Statement
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
