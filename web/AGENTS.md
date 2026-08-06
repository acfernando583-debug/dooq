# DOOQ — Catálogo Comercial

## Project Overview

DOOQ is a commercial catalog web application for the Colombian market (2026), offering technology services to PYMES, mid-size companies, and large enterprises. The application is built as a React + TypeScript + Tailwind CSS + Framer Motion SPA.

## Tech Stack

- **React 18** with TypeScript
- **Vite** as build tool
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Project Structure

```
src/
├── App.tsx              # Main application with all sections
├── main.tsx             # Entry point
├── index.css            # Global styles, Tailwind layers, and CSS animations
├── data/
│   └── catalog.ts       # All catalog data (services, SLAs, payments, etc.)
├── components/
│   ├── Navigation.tsx   # Sticky navigation bar
│   ├── Hero.tsx         # Hero section with parallax background
│   ├── PhilosophySection.tsx  # Philosophy & concept
│   ├── HoldingArchitecture.tsx  # 3 pillars of the holding
│   ├── ServiceExplorer.tsx  # Interactive catalog explorer
│   ├── ZennOnSection.tsx  # ZennOn productividad section
│   ├── BFriendsSection.tsx  # BFriends bienestar section
│   ├── Combo360Section.tsx  # DOOQ 360 combos
│   ├── PlanikaLanding.tsx  # Planika landing page with pricing
│   ├── SLATable.tsx     # SLA table component
│   ├── ContactForm.tsx  # Contact form with brand/service selection
│   ├── PricingCard.tsx  # Individual pricing card
│   ├── DooqLogo.tsx     # DOOQ logo component
│   └── Footer.tsx       # Site footer
└── assets/              # Static assets (images, etc.)
```

## Skills

Skills are located in `.agents/skills/`:
- `frontend-design` — Visual design methodology
- `motion-design` — Animation principles and patterns
- `impeccable` — UI/UX design intelligence and refinement
- `design-taste-frontend` — Anti-slop frontend design system
- `improve-animations` — Animation audit and improvement planning
- `review-animations` — Animation quality review
- `industrial-brutalist-ui` — Industrial brutalist UI patterns
- `stitch-design-taste` — Semantic design system for Google Stitch
- `brandkit` — Brand kit image generation
- `pick-ui-library` — UI library selection
- `animation-vocabulary` — Animation effect naming glossary
- `gpt-taste` — UX/UI & GSAP motion engineering

Also available in `.kilo/skills/`:
- `ui-ux-pro-max` — UI/UX design intelligence (50 styles, 21 palettes, 50 font pairings)
- `motion-design` — Motion design skill

## Design System

Based on the **ui-ux-pro-max** skill and **kilo-config** guidelines:

- **Pattern**: Enterprise Gateway with pricing-focused landing
- **Style**: Vibrant & Block-based with Glassmorphism cards
- **Colors**: Blue (#1D63ED) primary, Blue (#2563EB) accent, Dark (#0B132B) background
- **Typography**: Cabinet Grotesk (UI) + JetBrains Mono (code/labels)
- **Animations**: Framer Motion with scroll-triggered reveals and CSS keyframe animations
- **Background Patterns**: CSS-based tech patterns (grid, dots, lines, circuit, hex, radar) with parallax

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Catalog Sections

1. Software (code.dooq.app)
2. IA
3. Cloud
4. Bases de Datos
5. Hardware (gear.dooq.app)
6. Redes (link.dooq.app)
7. Helpdesk (flow.dooq.app)
8. Diseño (look.dooq.app)
9. Marketing Digital
10. Ciberseguridad
11. Consultoría
12. Marketplace (hub.dooq.app)
13. Transporte (go.dooq.app)
14. Q-Packs
15. Planika (planika.dooq.dev)

Plus: SLA, Payment Methods, Guarantees, Discounts, and Contact sections.