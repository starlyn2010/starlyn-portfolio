"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16"
      >
        <div>
          <h2 className="text-3xl tracking-tight text-zinc-900 dark:text-zinc-100 font-serif mb-2">About</h2>
          <div className="h-px w-12 bg-black/20 dark:bg-white/20 mb-6" />
        </div>

        <div className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-[15px] sm:text-base space-y-6">
          <p>
            I'm Starlyn, 16, from Santo Domingo, Dominican Republic.
          </p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium font-mono text-xs uppercase tracking-widest">My approach:</strong> Look for structure. What algebraic pattern explains seemingly chaotic behavior? How can I design systems that do more with less?
          </p>

          <p>This mindset shows everywhere:</p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Mathematics:</strong> Reduced Collatz conjecture (a 90-year-old open problem) to equidistribution on Z/2^m Z. Proved that for any η {'<'} 1/2, a density-one set of integers satisfies the geometric valuation bound on the first ⌊η log₂ n⌋ steps using Hoeffding and Chernoff concentration inequalities.
          </p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Engineering:</strong> NOVA runs complex autonomous AI without GPUs. Designed streaming algorithms (Welford online statistics) to fit 4.9M orbit analysis into 380MB RAM.
          </p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Products:</strong> ProSalud simplifies medical workflows. Built modular architecture so a nutritionist (real user: my uncle) can manage patient data, calculations, and AI consultations without infrastructure overhead.
          </p>

          <div className="pt-6">
            <strong className="text-zinc-900 dark:text-zinc-200 font-medium block mb-2">Currently:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pursuing MIT Course 6-4 (AI + Decision Making)</li>
              <li>Collaborating with researchers at PUCMM on Collatz extensions</li>
              <li>Building web projects for Dominican startups</li>
              <li>Learning formal proof systems (Lean 4), spectral analysis, p-adic geometry</li>
            </ul>
          </div>

          <div className="pt-2 text-sm">
            <div><strong className="text-zinc-900 dark:text-zinc-200 font-medium">Stack:</strong> Python, FastAPI, React, Groq API, Ollama, NumPy, LaTeX</div>
            <div><strong className="text-zinc-900 dark:text-zinc-200 font-medium">Languages:</strong> Spanish (native), English (fluent, SAT 1570+ target)</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
