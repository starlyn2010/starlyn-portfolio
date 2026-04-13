"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { journalEntries } from "@/data/journal";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function JournalEntryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const entry = journalEntries.find((e) => e.id === slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <Navbar />
      
      <article className="pt-40 pb-32 px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <Link 
            href="/journal" 
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            BACK TO ARCHIVES
          </Link>
          
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            {entry.date} // {entry.category}
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-12 leading-tight">
            {entry.title}
          </h1>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {entry.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 whitespace-pre-line"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/5">
             <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">
               Shared from the Research Lab of Starlyn Rosario
             </p>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
