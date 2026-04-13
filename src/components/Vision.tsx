"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Vision() {
  return (
    <section id="vision" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-8">
          05 // Statement of Purpose
        </span>

        {/* Academic editorial heading using Serif font */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] text-zinc-900 dark:text-zinc-100 mb-12 max-w-3xl mx-auto">
          Bridging dynamical systems with <span className="italic text-zinc-600 dark:text-zinc-400">neural architecture</span>.
        </h2>

        <div className="max-w-2xl mx-auto space-y-8 text-zinc-600 dark:text-zinc-400">
          <p className="text-base md:text-lg font-light leading-relaxed">
            My research in Collatz dynamics revealed something fascinating: deterministic chaos contains hidden stochastic structure. The same spectral analysis techniques used to prove mixing in number theory can inform how we design neural network architectures.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            At the <strong className="text-zinc-900 dark:text-zinc-200 font-medium">MIT CSAIL</strong>, I plan
            to explore how transfer operators and ergodic theory can create new
            paradigms for AI systems — architectures that are not just empirically accurate,
            but mathematically provable in their convergence.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            The future of AI isn&apos;t just larger contexts. It is <span className="text-zinc-900 dark:text-zinc-200 font-medium">smarter mathematics</span>.
          </p>
        </div>

        {/* Minimal Bento mini */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/10 dark:bg-white/10 mt-20 p-px rounded-xl overflow-hidden">
          {[
            {
              title: "Research-First AI",
              desc: "Spectral theory for provably convergent systems.",
            },
            {
              title: "Edge Optimization",
              desc: "Intelligence that does not require a datacenter.",
            },
            {
              title: "Real-World Impact",
              desc: "Technology serving Latin American communities.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-[#fcfcfc] dark:bg-zinc-900 p-8 text-left h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-3">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
