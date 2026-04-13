"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const findings = [
  {
    title: "Spectral Gap",
    value: "λ ≈ 0.3817",
    description: "Measured second eigenvalue of the transfer operator on mod 2⁸.",
    formula: "ρ(k) ~ λ₁ᵏ → 0",
  },
  {
    title: "Residue Sweep",
    value: "100%",
    description: "Exhaustive testing of 2,048 residue classes mod 2¹².",
    formula: "D(n,m) ≤ C·log(N)/√N",
  },
  {
    title: "Stochastic Mixing",
    value: "MAE < 0.0002",
    description: "2-adic valuation convergence to Negative Binomial.",
    formula: "Sₙ ~ NB(N, 1/2) + N",
  },
  {
    title: "Independence",
    value: "ρ₁ < 0.01",
    description: "Lag-1 autocorrelation below 0.01 for M ≥ 128.",
    formula: "Corr(Kⱼ, Kⱼ₊₁) → 0",
  },
];

const theorems = [
  {
    id: "Prop 2",
    statement: "Family Degeneracy",
    content: "For n = (4ᵏ − 1)/3, we have 3n + 1 = 4ᵏ = 2²ᵏ, yielding N_odd = 1.",
  },
  {
    id: "Thm 5",
    statement: "Stochastic Prefix Model",
    content: "For N < 0.25M, the prefix valuations satisfy Kⱼ ~ Geom(1/2) + 1.",
  },
  {
    id: "Thm 10",
    statement: "Breakdown Threshold",
    content: "At M=64, N≈40, carry propagation erases entropy, causing KS-stat spike.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-20"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          02 // Syracuse Dynamics
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 max-w-3xl">
          Theoretical frameworks and 2-adic mixing properties.
        </h2>
      </motion.div>

      {/* Grid of findings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {findings.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex flex-col relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
          >
            <div className="h-px w-6 bg-zinc-300 mb-6" />
            <span className="font-mono text-sm text-zinc-700 mb-1">{f.value}</span>
            <h4 className="text-sm font-medium text-zinc-900 mb-3">{f.title}</h4>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">{f.description}</p>
            <div className="mt-auto">
              <span className="font-mono text-[10px] text-zinc-600 bg-black/5 px-2 py-1 rounded">
                {f.formula}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="divider mb-16" />

      {/* Theorems */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <h3 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-4">
            Formal Results
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Analytical proofs bounding the stochastic components of Collatz orbits.
          </p>
        </motion.div>

        <div className="space-y-6">
          {theorems.map((t, i) => (
            <motion.div
              key={t.id}
              className="group flex flex-col md:flex-row gap-4 p-4 -ml-4 rounded-lg transition-colors hover:bg-black/5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
            >
              <div className="font-mono text-xs text-zinc-500 w-20 shrink-0 mt-0.5">
                {t.id}
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-800 mb-2">{t.statement}</h4>
                <p className="font-mono text-xs text-zinc-600 opacity-80 leading-relaxed">
                  {t.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
