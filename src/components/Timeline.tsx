"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/projects";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mb-20 text-center"
      >
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          04 // Evolution
        </span>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Academic Track
        </h2>
      </motion.div>

      <div className="relative border-l border-black/5 dark:border-white/5 ml-1 md:ml-0 md:border-l-0">
        {/* Desktop central line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-black/5 dark:bg-white/5" />

        <div className="space-y-16">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[4.5px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full border border-white dark:border-zinc-900 z-10 ${
                    i === timeline.length - 1 ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-300 dark:bg-zinc-700"
                  }`}
                />

                {/* Content */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <span className="font-mono text-xs text-zinc-500 mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
