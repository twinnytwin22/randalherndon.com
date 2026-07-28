# randalherndon.com

Personal site for Randal Herndon, built with Next.js (App Router) and Tailwind CSS 4.

## What's here

- **`/`** — RH·OS, a desktop-style interactive homepage (`ui/os/RHOS.tsx`). Draggable windows for About, Work, GitHub (live activity via the public GitHub API), Music, Contact, Terminal, and CV, plus a dock and boot animation. Styled with a self-contained design-token stylesheet (`ui/os/rhos.css`) — it does not use Tailwind.
- **`/portfolio`** — Sanity-backed portfolio listing and project detail pages, wrapped in the shared sidebar chrome defined in `app/(site)/layout.tsx` (nav, dark-mode toggle, social links).
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
  (site)/       Route group for pages that use the sidebar chrome (Navbar, dark mode, socials)
ui/
  os/           RH·OS homepage
  navigation/   Sidebar nav used by (site) routes
  buttons/      Shared buttons (dark mode toggle)
  misc/         Small shared components (logo)
lib/
  providers/    App-wide providers (theme, motion) and the Sanity client
```

Sanity Studio for content management lives outside this repo (see `.gitignore`'s `/studio` entry) and is deployed separately.
