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
    title: "The Path to MIT: Independent Research and AI Orchestration",
    date: "2026-04-11",
    category: "Academic",
    excerpt: "Reflecting on the synergy between dynamical systems and agentic AI architectures in my journey towards MIT.",
    content: `
My research journey began with a simple question: Can we find order within the deterministic chaos of the Collatz Conjecture? What I found was a profound connection between number theory and the way we design intelligence.

Integrating spectral analysis with the architecture of Nova AI forced me to rethink efficiency. Operating on just 4GB of RAM wasn't a limitation; it was a catalyst for more precise logical routing. This is the core of what I hope to bring to MIT CSAIL: architectures that are not just empirically powerful, but mathematically elegant.
    `
  },
  {
    id: "collatz-mixing-spectral",
    title: "Spectral Gaps in 2-adic Dynamics",
    date: "2026-04-05",
    category: "Math",
    excerpt: "Technological deep-dive into the spectral properties of Collatz maps and their implications for mixing.",
    content: `
The convergence of the Collatz map is deeply tied to its spectral properties. By analyzing the 2-adic valuation patterns, we can observe mixing behaviors that mimic stochastic processes. This post explores the formalization of the C(n) metric...
    `
  },
  {
    id: "ai-work-psychology",
    title: "The Dignity of Work in the Post-Human Labor Era",
    date: "2026-04-13",
    category: "Philosophy",
    excerpt: "As AI begins to automate not just labor, but complex decision-making, we must confront the existential question: Does work truly dignify?",
    content: `
For centuries, the human psyche has been anchored in the concept of productivity as a marker of worth. "El trabajo dignifica" (Work dignifies) has been a cornerstone of societal organization. But as AI architectures begin to orchestrate the global economy, we are entering a "Post-Human Labor" era that challenges this foundation.

Psychologically, the decoupling of survival from labor could be the most significant shift in human history. Without the "struggle" of work, what happens to the human ego? We risk a collective crisis of identity if we cannot pivot from labor-as-identity to purpose-as-existence.

However, this transition also represents an unprecedented opportunity. The dignity of the future won't be found in the effort of the brow, but in the elegance of the orchestration—the ability of the human mind to curate, philosophize, and direct the immense intelligence we have created. We are moving from being the "builders" to being the "architects of purpose."
    `
  }
];
