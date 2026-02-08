# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mogau Mokgabudi built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start dev server (port 3000, Turbopack filesystem cache enabled)
- `npm run build` — Production build
- `npm run start` — Run production build
- `npm run lint` — ESLint check
- `npm run lint:fix` — ESLint auto-fix

No test framework is configured.

## Architecture

**Next.js App Router** with route groups and colocated components:

- `app/(home)/page.tsx` — Home page composing section components (Hero, AboutMe, Projects, TechStack)
- `app/(home)/_components/` — Section-specific components (prefixed with `_` to exclude from routing)
- `app/_components/` — Shared layout components (AppHeader, AppFooter)
- `app/layout.tsx` — Root layout with Google Fonts (Inter, Poppins), global background layers (CircuitBackground + FloatingBoxesBackground), header, and footer

**Key configuration:**
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Turbopack dev cache enabled (`experimental.turbopackFileSystemCacheForDev`)
- ESLint v9 flat config extending Next.js core web vitals + TypeScript rules
- TypeScript strict mode with `@/*` path alias mapping to project root
- Tailwind CSS v4 via `@tailwindcss/postcss`

## Conventions

- Data-driven sections: TechStackSection and ProjectsSection define data as arrays of typed objects, then map to presentational components (TechStackGroup, ProjectCard)
- Section components use anchor IDs for nav linking (`#home`, `#about`, `#projects`, `#stack`, `#experience`)
- Consistent container pattern: `max-w-7xl mx-auto px-6`
- Icons use `@iconify/react` for tech stack icons and `lucide-react` for UI icons
- Two font families: `font-poppins` for headings, `font-inter` for body text
- Color accent: yellow-300 for CTAs
