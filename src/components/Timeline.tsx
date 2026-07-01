"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const milestones = [
  {
    year: "2026 — Present",
    title: "LNN Fragility Paper & ICLR Prep",
    description:
      "Published third preprint on Zenodo (LNN fragility). Preparing ICLR 2027 submission. Learning Lean 4 proof assistant, spectral analysis, p-adic geometry.",
  },
  {
    year: "2026 — Q1/Q2",
    title: "Collatz Papers Published",
    description:
      "Two preprints on Collatz 2-adic valuations and 3n+c generalization. 4.9M computational orbits verified. Both published on Zenodo.",
  },
  {
    year: "2025 — 2026",
    title: "NOVA AI Development",
    description:
      "Built local-first autonomous AI agent. 463 commits. Explored intent routing, TF-IDF RAG, streaming architectures. Paused March 2026.",
  },
  {
    year: "2024 — 2025",
    title: "ProSalud & PySide6",
    description:
      "Built medical desktop app for my uncle (nutritionist). 16,800 lines of Python/PySide6. Integrated Groq API for AI consultations. First real-world user.",
  },
  {
    year: "2023 — 2024",
    title: "Started Programming & Research",
    description:
      "Learned Python basics. Began exploring Collatz conjecture independently. Built first web projects. Discovered Liquid Neural Networks and CfC papers.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          Evolution
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          My Path So Far
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

        {milestones.map((milestone, i) => (
          <motion.div
            key={milestone.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
            className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden md:block flex-1" />
            <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-amber-500 dark:bg-amber-400 -translate-x-1/2 mt-1.5 ring-4 ring-white dark:ring-[#0a0a0a]" />
            <div className="flex-1 pl-8 md:pl-0">
              <span className="font-mono text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-2">
                {milestone.year}
              </span>
              <h3 className="text-lg font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
