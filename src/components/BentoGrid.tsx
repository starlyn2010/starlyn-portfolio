"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// Animation settings
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BentoGrid() {
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
          Software & Systems
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          🚀 Projects & Products
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      className="minimal-card flex flex-col items-start dark:bg-white/5 dark:border-white/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE_OUT }}
    >
      <div className="flex justify-between items-start w-full mb-2">
        <h3 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
      </div>
      <p className="font-mono text-xs text-zinc-500 mb-4 tracking-tight">{project.subtitle}</p>
      
      <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-4" />

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {project.id === "nova-ai" && <NovaIntelligenceFeed />}

      {project.metrics && project.metrics.length > 0 && (
        <div className="w-full flex justify-between gap-2 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
          {project.metrics.map((m: any, idx: number) => (
            <div key={idx} className="flex flex-col">
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
          className="mt-6 text-sm font-medium text-black dark:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black dark:hover:decoration-white transition-all w-full"
        >
          View Source
        </a>
      )}
    </motion.div>
  );
}

function NovaIntelligenceFeed() {
  const [logIndex, setLogIndex] = React.useState(0);
  const logs = [
    "Nova Engine: Optimizing routes for 4GB constraints...",
    "Routing: Analyzing query complexity with local intent parser.",
    "Synthesis: Processing RAG context from active memory.",
    "Hardware: Peak memory at 380MB. Threshold secure.",
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.02] rounded border border-black/5 dark:border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-tighter">Live Terminal Stream</span>
      </div>
      <motion.p
        key={logIndex}
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 leading-tight"
      >
        {logs[logIndex]}
      </motion.p>
    </div>
  );
}
