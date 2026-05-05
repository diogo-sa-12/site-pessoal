# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website for Diogo Sá with three sections: **About**, **Projects**, **Contact**.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Icons | Lucide React |
| Contact backend | Next.js Route Handler (`POST /api/contact`) — email stubbed to console, ready for Resend |

## Commands

```bash
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
```

## Architecture

```
src/
  app/
    layout.tsx              # root layout — Navbar + Footer + Geist font
    globals.css             # Tailwind v4 entry: @import "tailwindcss"
    page.tsx                # home / landing — includes Projects section via ProjectCard
    about/page.tsx
    contact/page.tsx
    api/contact/route.ts    # POST handler
  components/
    Navbar.tsx              # "use client" — uses usePathname for active link
    Footer.tsx              # server component
    AnimatedSection.tsx     # "use client" — Framer Motion fade-in-up wrapper
    ProjectCard.tsx         # server component
    ContactForm.tsx         # "use client" — fetch POST to /api/contact
  content/
    projects.ts             # Project[] array — edit here to add/remove projects
  types/
    index.ts                # Project · ContactFormData
```

## Key decisions

- **Tailwind v4** — PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss`). Global CSS uses `@import "tailwindcss"` (single line, not the old three-line directives).
- **Client vs server boundary** — only `Navbar`, `AnimatedSection`, and `ContactForm` are client components. Everything else (pages, layout, Footer, ProjectCard) is a server component.
- **Projects data** lives in `src/content/projects.ts` as a plain TypeScript array. No database needed.
- **Contact email** is currently stubbed (`console.log`). To wire up real sending, add Resend to `src/app/api/contact/route.ts`.
