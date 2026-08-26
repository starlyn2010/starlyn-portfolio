# starlyn-portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Personal portfolio of **Starlyn** — 16, Santo Domingo, Dominican Republic. Aspiring MIT Course 6-4 (AI + Decision Making). Honest, minimal, dark/light themed showcase of research, engineering and writing.

Live: `starlyn.dev` (Vercel) — built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP and D3.

> **Honest scope:** 3 preprints (Zenodo, 2026) • 16,800 LOC ProSalud (1 real user) • NOVA AI paused at 463 commits (requires 8GB RAM). No inflated metrics.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16.2.3 (App Router, `typedRoutes: true`) |
| UI | React 19.2.4, Tailwind CSS 4, Framer Motion 12, GSAP 3 + @gsap/react |
| Viz | D3 7.9.0 (Collatz visualizer), Canvas 2D hero background |
| Fonts | `next/font` (Geist), `next-themes` |
| Tooling | TypeScript 5, ESLint 9 (`eslint-config-next`) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout + theme provider
│   ├── page.tsx            # Home composition (Navbar → Hero → About → Research → Projects → Skills → Timeline → Footer)
│   ├── globals.css
│   ├── journal/
│   │   └── [slug]/page.tsx # journal entries
│   └── providers.tsx
├── components/
│   ├── Hero.tsx / HeroBackground.tsx  # Canvas 2D animated tubes (no Three.js)
│   ├── Research.tsx        # Zenodo papers (DOI: 10.5281/zenodo.21077402)
│   ├── Projects.tsx        # ProSalud, NOVA AI, LNN fragility
│   ├── CollatzVisualizer.tsx
│   ├── BentoGrid.tsx, Timeline.tsx, Skills.tsx, Navbar.tsx, Footer.tsx
│   └── ThemeToggle.tsx
└── data/
    ├── projects.ts         # single source of truth for projects
    └── journal.ts
public/                     # static assets, paper PDFs
```

## Installation

Prerequisites: Node.js 18 or 20, npm / pnpm / yarn.

```bash
# clone
git clone https://github.com/starlyn2010/starlyn-portfolio.git
cd starlyn-portfolio

# install
npm install
# or
pnpm install

# env (none required for base portfolio; add if you integrate analytics)
cp .env.example .env.local  # if present
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at http://localhost:3000 |
| `npm run build` | Production build (`next build`) |
| `npm start` | Serve production build (`next start`) |
| `npm run lint` | Run ESLint (`eslint`) |

```bash
npm run dev     # development
npm run build   # verify production build passes
npm start       # serve built app
npm run lint    # lint
```

## Deployment

Optimized for **Vercel**:

1. Push to `main` → Vercel auto-deploys.
2. Or `vercel --prod` from repo root.
3. No env vars required for core build. Add `NEXT_PUBLIC_*` if you enable analytics.

Alternative: any Node host that runs `npm run build && npm start` (Docker, Netlify, self-hosted).

## Research & citations

- *The Fragility of Optimal-Agent Training* — Zenodo, June 2026. DOI: [10.5281/zenodo.21077402](https://doi.org/10.5281/zenodo.21077402) — CfC/GRU vs Minimax, hardware paradox (ACT 2.45×), negative transfer.
- *A Modular Residue Framework for Collatz 2-Adic Valuations* — Zenodo, May 2026.
- Collatz dynamics work uses Hoeffding/Chernoff bounds for density-one geometric valuation proof.

See `CITATION.cff` for machine-readable citation.

## License

MIT © 2026 Starlyn. See [LICENSE](LICENSE).
