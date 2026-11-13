# randalherndon.com

Personal site for Randal Herndon, built with Next.js (App Router) and Tailwind CSS 4.

## What's here

- **`/`** — RH·OS, a desktop-style interactive homepage (`ui/os/RHOS.tsx`). Draggable windows for About, Work, GitHub (live activity via the public GitHub API), Music, Contact, Terminal, and CV, plus a dock and boot animation. Styled with a self-contained design-token stylesheet (`ui/os/rhos.css`) — it does not use Tailwind.
- **`/portfolio`** — Sanity-backed, server-rendered portfolio index and `/portfolio/[projectId]` detail pages, styled with the same Nocturne tokens as RH·OS.
- **`/cv`** — resume page from Sanity; **`/api/cv`** renders the same content as a downloadable PDF.
- **`app/api/contact`** — contact form submission handler, sends mail via SendGrid.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in:

- `SANITY_PROJECT_ID` / `SANITY_DATASET` — required for `/portfolio` to fetch content.
- `SENDGRID_API_KEY` / `FROM_EMAIL` — required for the contact form to send mail.

## Scripts

- `npm run dev` — start the dev server.
- `npm run build` / `npm run start` — production build and serve.
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`).

## Structure

```
app/            Routes (App Router)
  portfolio/    Portfolio index + project pages
  cv/           Resume page
ui/
  os/           RH·OS homepage
  buttons/      Shared buttons (support link)
lib/
  portfolio.ts  Server-side portfolio fetch + normalization (types in portfolio-shared.ts)
  providers/    Sanity client and queries
```

Sanity Studio for content management lives outside this repo (see `.gitignore`'s `/studio` entry) and is deployed separately.
