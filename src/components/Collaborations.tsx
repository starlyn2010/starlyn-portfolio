"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const collaborations = [
  {
    name: "PUCMM Research Partnership",
    collaborator: "Dr. Víctor Manuel González Holguín",
    focus: "Responsible AI in the Caribbean",
    status: "Active",
  },
  {
    name: "INTEC Computer Science",
    collaborator: "Dr. Kalil Erazo, Dr. Norberto Rojas",
    focus: "AI research partnerships",
    status: "Pending",
  },
  {
    name: "CEIA (Centro de Excelencia en Inteligencia Artificial)",
    collaborator: "MINPRE + ITLA + OGTIC + NVIDIA",
    focus: "Internship + research opportunities",
    status: "Ongoing",
  },
  {
    name: "Upcoming Competitions & Hackathons",
    collaborator: "LabLab.ai / Startup World Cup",
    focus: "ProSalud web conversion (Silicon Valley finale)",
    status: "Upcoming",
  },
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-32 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          Partnerships
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          🤝 Academic Collaborations & Outreach
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collaborations.map((collab, i) => (
          <motion.div
            key={collab.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
            className="p-6 rounded-lg border border-black/5 dark:border-white/5 bg-zinc-50/30 dark:bg-zinc-900/30 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{collab.name}</h3>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-widest ${
                collab.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                collab.status === "Pending" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}>
                {collab.status}
              </span>
            </div>
            <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <p><span className="font-medium text-zinc-900 dark:text-zinc-200">Collaborator:</span> {collab.collaborator}</p>
              <p><span className="font-medium text-zinc-900 dark:text-zinc-200">Focus:</span> {collab.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
