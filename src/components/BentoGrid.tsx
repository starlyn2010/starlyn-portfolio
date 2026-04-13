"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// Animation settings
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BentoGrid() {
  const research = projects.filter((p) => p.category === "RESEARCH");
  const software = projects.filter((p) => p.category === "SOFTWARE" || p.category === "AI");
  const credentials = projects.filter((p) => p.category === "CREDENTIAL");

  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          01 // Selected Work
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Projects & Architecture
        </h2>
      </motion.div>

      {/* Research Grid */}
      <div className="mb-20">
        <h3 className="font-mono text-xs font-medium text-zinc-500 mb-6 pb-4 border-b border-black/5 dark:border-white/5">
          RESEARCH INITIATIVES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {research.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Software Grid */}
      <div>
        <h3 className="font-mono text-xs font-medium text-zinc-500 mb-6 pb-4 border-b border-black/5 dark:border-white/5">
          PRODUCTION SOFTWARE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {software.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Credentials Grid */}
      <div className="mt-20">
        <h3 className="font-mono text-xs font-medium text-zinc-500 mb-6 pb-4 border-b border-black/5 dark:border-white/5">
          ACADEMIC CREDENTIALS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {credentials.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="minimal-card flex flex-col items-start pressable group dark:bg-white/5 dark:border-white/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE_OUT }}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h4>
        <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
          {project.year}
        </span>
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {project.id === "nova-ai" && <NovaIntelligenceFeed />}

      {project.metrics && project.metrics.length > 0 && (
        <div className="w-full flex gap-3 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
          {project.metrics.map((m: any, idx: number) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">{m.value}</span>
              <span className="text-[10px] text-zinc-500 uppercase">{m.label}</span>
            </div>
          ))}
        </div>
      )}
    </motion.a>
  );
}

function NovaIntelligenceFeed() {
  const [logIndex, setLogIndex] = React.useState(0);
  const logs = [
    "Nova Engine: Optimizing routes for 4GB constraints...",
    "Routing: Analyzing query complexity with GPT-4o-mini.",
    "Synthesis: Merging agent outputs into final response.",
    "Hardware: Local memory buffer cleared successfully.",
    "Security: Verification of agent sandbox complete."
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-6 p-3 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg border border-black/5 dark:border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-tighter">Live Intelligence Log</span>
      </div>
      <motion.p
        key={logIndex}
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight italic"
      >
        {logs[logIndex]}
      </motion.p>
    </div>
  );
}
