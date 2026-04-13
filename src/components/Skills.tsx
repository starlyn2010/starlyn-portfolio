"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            03 // Capabilities
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            The Arsenal
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
            Technologies and frameworks utilized to bridge theoretical research
            and production-ready software systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, catIdx) => (
            <div key={cat}>
              <motion.h3
                className="font-mono text-xs text-zinc-500 mb-6 pb-2 border-b border-black/5 dark:border-white/5 uppercase"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1, ease: EASE_OUT }}
              >
                {cat}
              </motion.h3>
              
              <ul className="space-y-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, si) => (
                    <motion.li
                      key={skill.name}
                      autoFocus
                      className="group flex flex-col gap-1"
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + si * 0.05, ease: EASE_OUT }}
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[2px] w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-zinc-800 dark:bg-zinc-200 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, delay: catIdx * 0.1 + si * 0.05 + 0.2, ease: [0.32, 0.72, 0, 1] }}
                        />
                      </div>
                    </motion.li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
