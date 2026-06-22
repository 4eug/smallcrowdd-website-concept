# Smallcrowdd Concept

Portfolio concept build for the original Smallcrowdd studio direction.

This project is intentionally separate from the deployed client-facing website. It can reuse the asset library, Sanity content model, and project context from `smallcrowdd-website`, but the visual system and interaction model should follow the earlier concept direction.

## Stack

- Next.js App Router
- React 19
- Tailwind CSS v4
- GSAP and Framer Motion
- Sanity CMS schemas copied from the production project

## Local Setup

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill the Sanity values when the concept is ready to use live CMS content.

## Notes

- Keep this repo focused on the portfolio concept, not the final client-approved direction.
- Assets are copied into `public/assets` and `public/videos` so the concept can be designed without mutating the production repo.
- See `docs/project-context.md` for the current site structure and content model.
# smallcrowdd-website-concept
