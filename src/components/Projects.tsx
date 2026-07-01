"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          Projects
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Things I&apos;ve Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col"
          >
            <div className="flex justify-between items-start w-full mb-2">
              <h3 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
            </div>
            <p className="font-mono text-xs text-zinc-500 mb-4 tracking-tight">{project.subtitle}</p>

            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-4" />

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div className="w-full flex justify-between gap-2 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="font-mono text-xs font-medium text-zinc-900 dark:text-zinc-100">{m.value}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-medium text-amber-600 dark:text-amber-400 underline underline-offset-4 decoration-amber-600/30 dark:decoration-amber-400/30 hover:decoration-amber-600 dark:hover:decoration-amber-400 transition-all w-full"
              >
                View Source
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
