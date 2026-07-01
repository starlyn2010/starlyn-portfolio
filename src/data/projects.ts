export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "SOFTWARE" | "AI" | "DESIGN" | "RESEARCH";
  metrics?: { label: string; value: string }[];
  tags: string[];
  link?: string;
  size: "large" | "medium" | "small";
}

export const projects: Project[] = [
  {
    id: "prosalud",
    title: "ProSalud",
    subtitle: "Medical Practice Software for Nutritionists",
    description:
      "Desktop medical management system built with PySide6 + FastAPI + Groq API. Features AI-assisted consultations, patient records, and appointment scheduling. 16,800 lines of code. One real user: my uncle.",
    category: "SOFTWARE",
    metrics: [
      { label: "Users", value: "1 (my uncle)" },
      { label: "Lines", value: "16,800" },
      { label: "Stack", value: "PySide6+FastAPI+Groq" },
    ],
    tags: ["PySide6", "FastAPI", "Groq API", "Python"],
    size: "large",
  },
  {
    id: "nova-ai",
    title: "NOVA AI",
    subtitle: "Autonomous Agent — Paused",
    description:
      "Local-first autonomous AI agent. Features intent routing, TF-IDF RAG without external databases, streaming architecture for memory efficiency. 463 commits. Paused since March 2026. Requires 8GB RAM.",
    category: "AI",
    metrics: [
      { label: "Commits", value: "463" },
      { label: "Status", value: "Paused (Mar 2026)" },
      { label: "RAM", value: "8GB" },
    ],
    tags: ["Python", "Ollama", "Local-First", "RAG"],
    link: "https://github.com/starlyn2010/NOVA-AI",
    size: "medium",
  },
  {
    id: "lnn-fragility",
    title: "Fragility of Optimal-Agent Training",
    subtitle: "Edge AI / RL / CfC Networks",
    description:
      "Training lightweight recurrent agents (CfC, GRU) against optimal Minimax produces policies that draw optimally yet collapse catastrophically against stochastic opponents. Reveals non-transitive dynamics (GRU 100-0 vs CfC+ACT), Hardware Paradox (ACT 2.45x cost), and negative transfer (80% -> 23%). Published on Zenodo (June 2026).",
    category: "RESEARCH",
    metrics: [
      { label: "Venue", value: "Zenodo" },
      { label: "DOI", value: "10.5281/zenodo.21077402" },
    ],
    tags: ["CfC", "GRU", "RL", "Edge AI", "Non-Transitivity"],
    link: "https://doi.org/10.5281/zenodo.21077402",
    size: "medium",
  }
];

export const skills = []; // Will be handled by the new Skills component

export const timeline = []; // Will be handled by the Education component

