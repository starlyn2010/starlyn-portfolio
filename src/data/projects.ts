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
    subtitle: "Medical Practice Software",
    description:
      "Patient management system for nutritionists. Features AI-powered nutrition consultations using Groq API + RAG, appointment scheduling, and privacy-first local data processing via Ollama.",
    category: "SOFTWARE",
    metrics: [
      { label: "Role", value: "Designer & Engineer" },
      { label: "Status", value: "Active Users" },
      { label: "Next", value: "LabLab.ai Expo" },
    ],
    tags: ["FastAPI", "React", "Groq API", "Ollama"],
    size: "large",
  },
  {
    id: "nova-ai",
    title: "NOVA AI",
    subtitle: "Autonomous Agent on Constrained Hardware",
    description:
      "Runs fully autonomous AI agent on 4GB RAM without GPUs. Features L5 intent routing, TF-IDF RAG without external databases, and a streaming architecture for memory efficiency.",
    category: "AI",
    metrics: [
      { label: "Hardware", value: "4GB RAM Edge" },
      { label: "Engine", value: "Ollama + GGUF" },
      { label: "Community", value: "50K+ Impressions" },
    ],
    tags: ["Python", "Edge AI", "NLP", "Open Source"],
    link: "https://github.com/starlyn2010/NOVA-AI",
    size: "medium",
  },
  {
    id: "web-agency",
    title: "Web Design Agency",
    subtitle: "Dominican Market Solutions",
    description:
      "Active freelance agency providing full-stack design and development for small Dominican businesses. Specialized in SEO optimization, payment integration, and mobile-first responsive design.",
    category: "DESIGN",
    metrics: [
      { label: "Status", value: "Active Freelance" },
      { label: "Focus", value: "SEO & Sales" },
    ],
    tags: ["React", "FastAPI", "UI/UX", "Payments"],
    size: "medium",
  }
];

export const skills = []; // Will be handled by the new Skills component

export const timeline = []; // Will be handled by the Education component

