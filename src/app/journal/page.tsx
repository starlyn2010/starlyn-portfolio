"use client";

import { motion } from "framer-motion";
import { journalEntries } from "@/data/journal";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            BACK TO PORTFOLIO
          </Link>
          
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            Research Log & Journal
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
            The <span className="italic text-zinc-500">Archives</span>.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-20">
            A collection of technical notes, mathematical proofs, and reflections on the 
            development of agentic systems and dynamical theory.
          </p>
        </motion.div>

        <div className="space-y-24">
          {journalEntries.map((entry, i) => (
            <motion.article 
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_OUT }}
              className="group border-b border-black/5 dark:border-white/5 pb-16 last:border-0"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-tighter">
                  {entry.date} // {entry.category}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-6 group-hover:text-zinc-500 transition-colors">
                {entry.title}
              </h2>
              
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                {entry.excerpt}
              </p>
              
              <Link 
                href={`/journal/${entry.id}`}
                className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:decoration-zinc-700 dark:hover:decoration-white transition-all"
              >
                READ FULL LOG
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
