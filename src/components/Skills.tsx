"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const skillGroups = [
  {
    category: "Mathematics",
    skills: ["Number Theory", "2-Adic Analysis", "Spectral Theory", "Ergodic Dynamics", "Concentration Inequalities"],
  },
  {
    category: "AI & Engineering",
    skills: ["FastAPI", "Python", "Local LLMs (Ollama)", "RAG Systems", "Intent Routing", "NumPy / SciPy"],
  },
  {
    category: "Design & UX",
    skills: ["React / Next.js", "Tailwind CSS", "Framer Motion", "Typography", "Constraint-Driven Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            Arsenal
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 font-serif">
            Capabilities
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm font-light">
            My skill set bridges theoretical mathematical rigor with production-grade systems engineering. 
            I focus on high-performance solutions under hardware scaling constraints.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
            >
              <h3 className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-[15px] font-light text-zinc-800 dark:text-zinc-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

