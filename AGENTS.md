# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 portfolio app using the App Router.

- `app/layout.tsx`: Root layout, global UI shell, and shared background layers.
- `app/(home)/page.tsx`: Home route composition.
- `app/(home)/_components/`: Home-page section components (non-routable helper folder).
- `app/_components/`: Reusable app-level components (for example `AppHeader`, `AppFooter`).
- `app/globals.css`: Global styles.
- `public/`: Static assets (icons, images).
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

Use the `@/*` TypeScript path alias for root-based imports.

## Build, Test, and Development Commands
- `npm run dev`: Start local development server (default `http://localhost:3000`).
- `npm run build`: Create a production build.
- `npm run start`: Serve the production build.
- `npm run lint`: Run ESLint (Next.js core-web-vitals + TypeScript rules).
- `npm run lint:fix`: Apply automatic lint fixes.

Run `npm run lint` before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with `strict` mode enabled.
- Indentation: 2 spaces; keep formatting consistent with existing files.
- Components: PascalCase filenames and exports (for example `TechStackSection.tsx`).
- Hooks/utilities: camelCase names.
- Route-specific UI belongs in the route group’s `_components` folder; shared UI belongs in `app/_components`.
- Prefer small, data-driven section components over duplicated markup.

## Testing Guidelines
No automated test framework is currently configured. For now:
- Treat `npm run lint` and `npm run build` as required quality gates.
- Manually verify key sections (`#home`, `#about`, `#projects`, `#stack`, `#experience`) in desktop and mobile layouts.

If tests are introduced, colocate them with source files using `*.test.ts(x)` naming.

## Commit & Pull Request Guidelines
Git history favors short, imperative commit messages (for example: `Refined portfolio sections and components`, `Add dark mode with toggle button`).

For pull requests:
- Use a clear summary and concise change list.
- Link related issues/tasks when applicable.
- Include before/after screenshots for UI changes.
- Confirm lint/build pass and note any follow-up work.
