"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 max-w-4xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          Publications
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          📄 Research & Publications
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
        className="space-y-12"
      >
        {/* Paper Header */}
        <div>
          <h3 className="text-2xl font-serif text-zinc-900 dark:text-zinc-100 mb-3">
            Collatz 2-Adic Valuations: Modular Residue Framework
          </h3>
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono px-3 py-1 rounded-full">
              Preprint, arXiv April 2026
            </span>
            <span className="text-zinc-500 text-sm font-medium">Original mathematical research</span>
          </div>
          <div className="flex gap-4 mb-10">
            <a href="#" className="text-sm font-medium text-black dark:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black dark:hover:decoration-white transition-all">arXiv</a>
            <a href="https://github.com/starlyn2010/Collatz-Valuations" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-black dark:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black dark:hover:decoration-white transition-all">GitHub with reproducible code</a>
          </div>
        </div>

        {/* What it proves */}
        <div>
          <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-6">What it proves:</h4>
          <div className="space-y-4">
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
              <strong className="text-zinc-900 dark:text-zinc-100">Theorem 5 (Prefix Cylinder Law):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">Any finite valuation sequence corresponds to a unique residue class modulo <code className="font-mono text-xs">2^(sum of valuations)</code>. Proved by induction.</span>
            </div>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
              <strong className="text-zinc-900 dark:text-zinc-100">Corollary 7 (Exact Negative-Binomial):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">First N valuations from uniform starting class follow EXACTLY the negative-binomial distribution (not asymptotically).</span>
            </div>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
              <strong className="text-zinc-900 dark:text-zinc-100">Theorem 8-9 (Density-One Bound):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">For any <code className="font-mono text-xs">η {'<'} 1/2</code>, a density-one fraction of odd integers satisfies geometric valuation bound on prefix of length <code className="font-mono text-xs">⌊η log₂ n⌋</code> steps. Proved using Hoeffding + Chernoff concentration inequalities.</span>
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div>
          <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">Why it matters:</h4>
          <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            <li>First rigorous prefix result for <strong>deterministic</strong> Collatz orbits (Tao proved probabilistic models; this is deterministic with density-1 guarantee).</li>
            <li>Reduces Collatz valuation problem to a well-defined open question: spectral gap for transfer operator on <code className="font-mono text-xs">Z/2^m Z</code>.</li>
            <li>Computational verification: exhaustive on 4,999,944 orbits (<code className="font-mono text-xs">n ≤ 10^7</code>), complete audit of all 2,048 odd residue classes modulo <code className="font-mono text-xs">2^12</code>.</li>
          </ul>
        </div>

        {/* Computational Pipeline */}
        <div>
          <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">Computational Pipeline:</h4>
          <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            <li>4.9M orbits, zero violations, P95 constant = 0.300</li>
            <li>Extended to 256-bit integers (<code className="font-mono text-xs">n ≈ 2^256</code>)</li>
            <li>Full source code + reproducible results in Python</li>
          </ul>
        </div>

        {/* Closing Note */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5">
          <p className="text-zinc-700 dark:text-zinc-300 italic font-medium">
            This work bridges <strong>mathematical rigor</strong> and <strong>computational verification</strong>—exactly the skill set MIT Course 6-4 requires.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
