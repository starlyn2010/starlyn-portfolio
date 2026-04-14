"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const educationPoints = [
  {
    institution: "Dominican Christian School",
    degree: "High School Diploma (Projected 2026)",
    score: "4.0 GPA / Top of Class",
    highlight: "Pursuing rigorous course load in Discrete Math & Systems Engineering",
  },
  {
    institution: "Harvard University",
    degree: "CS50 Computer Science",
    score: "Completed Honors Grade",
    highlight: "Foundation in computational thinking, memory management, and algorithms",
  },
  {
    institution: "Independent Research",
    degree: "Number Theory & Dynamics",
    score: "Published / arXiv",
    highlight: "Self-taught p-adic geometry, spectral analysis, and information theory",
  },
];

const standardizedTests = [
  { test: "SAT (Target)", score: "1570+" },
  { test: "IELTS/TOEFL", score: "C2 Proficient" },
  { test: "AP Computer Science A", score: "Score: 5" },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          Academic Track
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          🎓 Education & Certification
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-10">
          {educationPoints.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
              className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800"
            >
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <h3 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100">{item.institution}</h3>
              <p className="text-sm font-mono text-zinc-500 mt-1">{item.degree} • {item.score}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}

            transition={{ duration: 0.8 }}
            className="p-6 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
          >
            <h4 className="text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6">Standardized Profile</h4>
            <div className="space-y-4">
              {standardizedTests.map((t) => (
                <div key={t.test} className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">{t.test}</span>
                  <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">{t.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
