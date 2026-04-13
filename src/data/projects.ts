export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "RESEARCH" | "SOFTWARE" | "AI" | "CREDENTIAL";
  metrics?: { label: string; value: string }[];
  tags: string[];
  link?: string;
  size: "large" | "medium" | "small";
}

export const projects: Project[] = [
  {
    id: "collatz",
    title: "Syracuse Dynamics",
    subtitle: "Collatz Conjecture Research",
    description:
      "Original research into the 2-adic valuation dynamics of Collatz orbits. Demonstrated stochastic mixing, measured the spectral gap of the transfer operator, and validated equidistribution across 2,048 residue classes.",
    category: "RESEARCH",
    metrics: [
      { label: "Spectral Gap", value: "λ ≈ 0.3817" },
      { label: "m=12 Sweep", value: "100% Pass" },
      { label: "Bit Scales", value: "64–256 bit" },
      { label: "MAE", value: "< 0.0002" },
    ],
    tags: ["Number Theory", "Dynamical Systems", "Python", "SciPy", "LaTeX"],
    link: "/Collatz_v7_THEOREMS.pdf",
    size: "large",
  },
  {
    id: "prosalud",
    title: "ProSalud",
    subtitle: "Medical Records Platform",
    description:
      "Advanced desktop system built in Python serving real medical professionals in the Dominican Republic. Manages patient records, appointments, and clinical history with a robust local-first architecture.",
    category: "SOFTWARE",
    metrics: [
      { label: "Status", value: "In Development" },
      { label: "Users", value: "Active" },
      { label: "Stack", value: "Python / SQL" },
    ],
    tags: ["Python", "SQL", "Desktop", "Healthcare"],
    size: "medium",
  },
  {
    id: "nova-ai",
    title: "Nova AI",
    subtitle: "Local Intelligence Engine",
    description:
      "Agentic AI orchestrator featuring L5 intent routing and multi-engine integration. Primarily an architectural stress-test for local inference on 4GB RAM; proved that high-level system logic can survive extreme hardware bottlenecks.",
    category: "AI",
    metrics: [
      { label: "Brains", value: "7 Specialized" },
      { label: "Hardware", value: "4GB RAM" },
      { label: "Model", value: "SmolLM-135M" },
    ],
    tags: ["Python", "SLM", "Agentic AI", "CPU Optimization"],
    size: "medium",
  },
  {
    id: "ai-api-tracker",
    title: "AI-API Price Tracker",
    subtitle: "Bloomberg Terminal for AI",
    description:
      "High-density engineering dashboard comparing real-time pricing across OpenAI, Anthropic, Google, and more. Features automated daily scraping with AI-generated market analysis.",
    category: "SOFTWARE",
    metrics: [
      { label: "Design", value: "Bloomberg Style" },
      { label: "Data", value: "Real-time" },
    ],
    tags: ["Next.js", "FastAPI", "Supabase", "Recharts"],
    size: "small",
  },
  {
    id: "canva-mcp",
    title: "Canva MCP Server",
    subtitle: "AI Design Automation",
    description:
      "Model Context Protocol server enabling AI agents to programmatically control Canva for automated video and design generation. Deployed on Vercel.",
    category: "AI",
    metrics: [
      { label: "Protocol", value: "MCP" },
      { label: "Deploy", value: "Vercel" },
    ],
    tags: ["Python", "FastAPI", "MCP", "Canva API"],
    size: "small",
  },
  {
    id: "cert-ai-dev",
    title: "AI Developer Certification",
    subtitle: "Advanced AI Implementation",
    description: "Formal certification in developing and deploying AI-driven systems, focus on model integration and agentic workflows.",
    category: "CREDENTIAL",
    link: "/AI_Developer_Certificate.pdf",
    tags: ["AI", "Certification"],
    size: "small"
  },
  {
    id: "cert-google-cloud",
    title: "Google Cloud GenAI",
    subtitle: "Cloud Intelligence Badge",
    description: "Official Google Cloud credential for Generative AI and Large Language Model fundamentals.",
    category: "CREDENTIAL",
    link: "https://www.skills.google/course_templates/1341/badge?locale=es",
    tags: ["Google Cloud", "GenAI"],
    size: "small"
  },
  {
    id: "cert-cybersecurity",
    title: "Cybersecurity Certification",
    subtitle: "System Hacking & Defense",
    description: "Formal credential in offensive and defensive security practices, including network scanning and vulnerability remediation.",
    category: "CREDENTIAL",
    link: "/Cybersecurity_Certificate.pdf",
    tags: ["Security", "Hardening"],
    size: "small"
  }
];

export const skills = [
  { name: "Python", level: 95, category: "Research & Backend" },
  { name: "NumPy / SciPy", level: 90, category: "Research & Backend" },
  { name: "Next.js / React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 82, category: "Frontend" },
  { name: "FastAPI", level: 88, category: "Research & Backend" },
  { name: "PostgreSQL", level: 80, category: "Research & Backend" },
  { name: "GSAP / Framer Motion", level: 78, category: "Frontend" },
  { name: "LaTeX", level: 85, category: "Research & Backend" },
  { name: "Git / GitHub", level: 82, category: "DevOps" },
  { name: "Vercel / Deploy", level: 80, category: "DevOps" },
];

export const timeline = [
  {
    year: "2026",
    title: "CS50 & First Steps",
    description: "Completed Harvard's CS50. Built first Python programs and discovered the power of computational thinking.",
  },
  {
    year: "2026",
    title: "Nova AI & Local Intelligence",
    description: "Engineered a multi-brain AI assistant running on ultra-low-end hardware as a proof-of-concept. Mastered prompt engineering, SLM optimization, and desktop UI design.",
  },
  {
    year: "2026",
    title: "Full-Stack Engineering",
    description: "Built ProSalud (healthcare platform in production) and the AI-API Price Tracker. Developed expertise in Next.js, FastAPI, and database design.",
  },
  {
    year: "2026",
    title: "Original Mathematical Research",
    description: "Published research on Collatz dynamics: spectral gap measurement, exhaustive residue sweeps, and stochastic mixing proofs. Paper-level rigor at 16 years old.",
  },
  {
    year: "2026+",
    title: "MIT EECS (Goal)",
    description: "Applying to Course 6-4 (AI and Decision Making) or Course 6-3 (Computer Science and Engineering). Vision: bridge dynamical systems theory with next-generation AI architectures at MIT CSAIL.",
  },
];
