# Portfolio

A job-focused data science portfolio built with Next.js, optimized for the 30-second recruiter scan.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Site config**: Edit `src/lib/site-config.ts` with your name, tagline, links, skills, and proof.
2. **Avatar**: Add your photo as `public/avatar.jpg` and set `avatarUrl: "/avatar.jpg"` in site-config. Without it, initials are shown.
3. **Projects**: Add or edit files in `content/projects/*.md` (see existing files for frontmatter).
4. **About**: Edit `src/app/about/page.tsx` with your bio.

## Deploy on Vercel

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Set `NEXT_PUBLIC_BASE_URL` to your production URL (e.g. `https://yourdomain.com`).
4. Deploy.

## Project structure

- `src/app/` — Pages (App Router)
- `src/components/` — Reusable UI
- `src/lib/` — Config and project utilities
- `content/projects/` — Project markdown files
