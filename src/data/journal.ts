export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: "mit-path-research",
    title: "My Path to MIT: More than just math",
    date: "2026-04-11",
    category: "Academic",
    excerpt: "Personal thoughts on why I spend my nights chasing patterns in the Collatz Conjecture and building Nova AI.",
    content: `
I used to think that getting into MIT was just about having the right numbers on a transcript. But as I spent my nights staring at Collatz sequences and debugging Nova AI, I realized it was something deeper. It's about a conversation between my own curiosity and the deterministic chaos of the world.

Operating on just 4GB of RAM wasn't a technical limitation for me; it felt like a puzzle. It forced me to be more human in my approach to code—to think twice, to simplify, to be elegant. I'm not just looking to go to MIT to study; I'm looking to bring this "lean" mindset to a place where everything is possible. 

But I often wonder: is a powerful architecture built on constraints actually superior to one with infinite resources? Or am I just romanticizing the struggle?
    `
  },
  {
    id: "collatz-mixing-spectral",
    title: "Chasing Chaos: The Collatz Ghost",
    date: "2026-04-05",
    category: "Math",
    excerpt: "A deep dive into why 2-adic dynamics feel like magic to me, and the spectral gaps I've been finding.",
    content: `
There’s something haunting about the way Collatz maps behave. One moment you think you’ve caught the pattern in a spectral gap, and the next, it slips away into 2-adic mixing. I’ve spent weeks tracing these orbits, feeling more like an explorer in a digital jungle than a mathematician.

The deeper I go into the C(n) metric, the more I realize that math isn't just a tool—it's a mirror. It shows us how much we still don't understand about the simplest systems. I feel like I'm close to a breakthrough in the mixing threshold, but there's always that doubt in the back of my mind.

If the world is truly deterministic, are we finding patterns or are the patterns finding us? Does complexity have a limit, or are we just scratching the surface of a much larger logic?
    `
  },
  {
    id: "ai-work-psychology",
    title: "Wait, does 'work' actually define who I am?",
    date: "2026-04-13",
    category: "Philosophy",
    excerpt: "Thinking about that classic saying 'El trabajo dignifica' and what happens to my head if AI does everything for me.",
    content: `
I've grown up hearing "El trabajo dignifica" (Work dignifies). It’s a huge part of being Dominican—the pride of labor. But now that I’m building agentic systems that can think, code, and organize faster than I can, I'm starting to feel a bit... displaced. 

If I can automate my own research, where do I end and where does the AI begin? I’m worried that we’re moving into a time where my "value" isn't about what I produce, but about something else I haven't figured out yet. It’s scary to think that our identity is so tied to the things we do for survival.

If tomorrow we didn't have to work to survive, what would you do with your time? Would you still feel 'dignified'? And what happens to our minds when we no longer have a 'struggle' to overcome?
    `
  }
];
