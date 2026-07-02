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
          Research & Publications
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-light text-sm">
          Three preprints published at age 16. Two in number theory (Collatz), one in AI/Edge computing.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
        className="space-y-16"
      >
        {/* ========== PAPER 1: LNN ========== */}
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-start gap-3 mb-4">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded mt-1 shrink-0">NEW</span>
            <div>
              <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100 mb-1">
                The Fragility of Optimal-Agent Training
              </h3>
              <p className="text-sm text-zinc-500 italic">
                Continuous-Time Dynamics and Adaptive Computation as Heuristic Regularizers in Edge AI
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono px-3 py-1 rounded-full">
              Zenodo, June 2026
            </span>
            <span className="text-zinc-500 text-sm font-medium">Edge AI / RL / CfC Networks</span>
          </div>
          <div className="space-y-3 text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed mb-4">
            <p>Training lightweight recurrent agents (CfC, GRU) against a near-perfect Minimax opponent in Tic-Tac-Toe produces policies that achieve 100% draw rate vs optimal play, yet <strong className="text-zinc-900 dark:text-zinc-200">collapse catastrophically against stochastic opponents</strong>.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Hardware Paradox:</strong> ACT increases wall-clock training 2.45× despite reducing theoretical ODE steps</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Non-transitive dynamics:</strong> GRU (11% vs Random) defeats CfC+ACT (96% vs Random) 100–0</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Negative transfer:</strong> Pre-trained backbone degrades Connect Four from 80% to 23% vs from scratch</span></li>
            </ul>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="/paper_LNN.pdf" download className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">PDF</a>
            <a href="https://doi.org/10.5281/zenodo.21077402" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">DOI</a>
            <a href="https://github.com/starlyn2010/fragility-paper" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">GitHub (code + data)</a>
          </div>
        </div>

        {/* ========== PAPER 2: Collatz v8 ========== */}
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100 mb-1">
            A Modular Residue Framework for Orbitwise 2-Adic Valuations in Collatz Sequences
          </h3>
          <p className="text-sm text-zinc-500 italic mb-3">
            Exact Prefix Laws, a Density-One Bound, and Large-Scale Validation
          </p>
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono px-3 py-1 rounded-full">
              Zenodo, May 2026
            </span>
            <span className="text-zinc-500 text-sm font-medium">Original mathematical research</span>
          </div>

          {/* What it proves */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">Key results:</h4>
            <div className="space-y-2">
              <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 text-sm">
                <strong className="text-zinc-900 dark:text-zinc-100">Theorem 5 (Prefix Cylinder Law):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">Any finite valuation sequence corresponds to a unique residue class modulo <code className="font-mono text-xs">2^(sum of valuations)</code>.</span>
              </div>
              <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 text-sm">
                <strong className="text-zinc-900 dark:text-zinc-100">Corollary 7 (Exact Negative-Binomial):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">First N valuations from uniform starting class follow EXACTLY the negative-binomial distribution (not asymptotically).</span>
              </div>
              <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 text-sm">
                <strong className="text-zinc-900 dark:text-zinc-100">Theorem 8-9 (Density-One Bound):</strong> <span className="text-zinc-600 dark:text-zinc-400 font-light">For any η {'<'} 1/2, a density-one fraction of odd integers satisfies geometric valuation bound on prefix of length ⌊η log₂ n⌋ steps.</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-zinc-600 dark:text-zinc-400 font-light mb-4">
            <strong className="text-zinc-900 dark:text-zinc-200">Computational verification:</strong> 4,999,944 orbits (n ≤ 10⁷), zero violations, P95 constant = 0.300. Extended to 256-bit integers.
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="/Collatz_v8_FINAL.pdf" download className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">PDF</a>
            <a href="https://doi.org/10.5281/zenodo.20032032" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">DOI</a>
            <a href="https://github.com/starlyn2010/Collatz-Valuations" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">GitHub</a>
          </div>
        </div>

        {/* ========== PAPER 3: Collatz 3n+c ========== */}
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-start gap-3 mb-4">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded mt-1 shrink-0">COMPANION</span>
            <div>
              <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100 mb-1">
                Prefix Cylinder Laws for the Generalized Collatz Family 3n + c
              </h3>
              <p className="text-sm text-zinc-500 italic">
                Algebraic Structure Preservation and Computational Verification
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono px-3 py-1 rounded-full">
              Preprint, April 2026
            </span>
            <span className="text-zinc-500 text-sm font-medium">Generalized Collatz maps</span>
          </div>

          <div className="space-y-3 text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed mb-4">
            <p>Generalizes the Prefix Cylinder Law from the classical Collatz map (c=1) to the family 3n + c for c &isin; &#123;1, 5, 7, 11&#125;.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Theorem 6:</strong> Generalized prefix cylinder law — any finite valuation sequence corresponds to a unique residue class modulo 2<sup>S<sub>r</sub>+1</sup>, with explicit formula a<sub>k</sub>(c) ≡ 3<sup>-1</sup>(2<sup>k</sup> − c) (mod 2<sup>k+1</sup>)</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Corollary 9:</strong> Exact negative-binomial prefix law is preserved identically for all admissible c</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1.5 shrink-0">&#x2022;</span><span><strong className="text-zinc-900 dark:text-zinc-200">Key insight:</strong> The algebraic prefix structure is not special to c=1 — it is generic to the entire 3n+c family</span></li>
            </ul>
          </div>

          <div className="text-sm text-zinc-600 dark:text-zinc-400 font-light mb-4">
            <strong className="text-zinc-900 dark:text-zinc-200">Validation:</strong> 2,000,000+ orbits, 48 experiments (M &isin; &#123;64,128,256&#125;, N &isin; &#123;20,40,60,80&#125;), 100% congruence accuracy, frequency errors &lt; 0.04.
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="/Collatz_Paper2_3nc.pdf" download className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">PDF</a>
            <a href="https://doi.org/10.5281/zenodo.21133798" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all">DOI</a>
          </div>
        </div>

        {/* Closing Note */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5">
          <p className="text-zinc-700 dark:text-zinc-300 italic font-medium text-sm">
            Three preprints bridging <strong>mathematical rigor</strong> and <strong>computational verification</strong> — all published at age 16.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
