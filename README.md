# Nodes landing page

Marketing/portfolio page for **Nodes — Controlled Reconciliation Workspace**
(public brand of the Reconciliation Copilot project).

- Stack: Vite, React 19, TypeScript, Tailwind CSS v4, Lucide icons, Inter + IBM Plex Mono (self-hosted).
- Copy and claims: `nodes-landing-copy.md` handoff kit is the source of truth. Figures in the proof strip
  and the review case are from the frozen August 2026 reference run and must not be edited without sign-off.
- Brand tokens live in `src/styles.css` (`@theme`), taken from Brand & UI Guidelines v1 §30.
- Hero animation: React port of `animation/nodes-hero-animation.html` in `src/sections/HeroAnimation.tsx`.

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build -> dist/
npm run lint
```

Runtime config: see `.env.example`.
