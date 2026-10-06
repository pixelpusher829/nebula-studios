# Nebula Studios

Demo marketing website for Nebula Studios, a fictional independent game developer. Built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Features

- **Games:** portfolio plus a detail page per game (`/games/:slug`) with gallery, trailer, accolades and store links
- **News:** filterable listing and shareable article pages (`/news/:slug`) written in Markdown
- **Careers:** department filter, perks, hiring process, and a page per role (`/careers/:slug`) with an application form and CV upload
- **Press kit:** downloadable logos and key art, fact sheet, and copyable boilerplate
- **Contact:** working contact form, newsletter signup, and routing to the right team inbox
- **Optional AI assistant:** Gemini-powered chat widget backed by a server-side function, so the API key never reaches the browser
- **SEO:** per-page titles, descriptions, canonical URLs and Open Graph/Twitter cards, plus `sitemap.xml` and `robots.txt` generated at build time
- **Accessibility:** semantic landmarks, skip link, labelled forms, keyboard-friendly dialogs, visible focus, `prefers-reduced-motion` support
- **Performance:** route-level code splitting, lazy images; the hero video is skipped on mobile, data-saver and reduced-motion

## Getting Started

Requires [Bun](https://bun.sh/) (or Node 20+).

```bash
bun install
cp .env.example .env.local   # then fill in values
bun run dev                  # http://localhost:3000
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `bun run dev`       | Start the dev server                          |
| `bun run build`     | Type-check and build to `dist/`               |
| `bun run preview`   | Serve the production build locally            |
| `bun run typecheck` | Run TypeScript only                           |
| `bun run lint`      | Lint and format-check with Biome              |
| `bun run format`    | Apply Biome fixes and formatting              |

## Configuration

### Environment variables

| Variable              | Where   | Purpose                                                                                       |
| --------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`       | Build   | Public URL, used for canonical links, social cards and the sitemap                            |
| `VITE_FORMS_ENDPOINT` | Build   | Optional URL that receives form posts (e.g. a [Formspree](https://formspree.io) form) |
| `VITE_CHAT_ENABLED`   | Build   | `true` to show the AI assistant                                                               |
| `GEMINI_API_KEY`      | Server  | Used only by `api/chat.ts`. **Never** prefix with `VITE_`                                     |

Without `VITE_FORMS_ENDPOINT` the site runs in demo mode: form submissions are logged to the browser console and shown as successful.

### Content

Everything a client edits lives in plain data files:

| What                                         | File                                     |
| -------------------------------------------- | ---------------------------------------- |
| Company name, emails, address, offices, socials, showreel | `src/config/site.ts`        |
| Games                                        | `src/pages/portfolio/portfolio-data.ts`  |
| News articles (Markdown)                     | `src/pages/news/news-data.ts`            |
| Job openings, perks, hiring steps            | `src/pages/careers/careers-data.ts`      |
| Team, values, timeline                       | `src/pages/studio/studio-data.tsx`       |
| Press assets, fact sheet, boilerplate        | `src/pages/press/press-data.ts`          |
| Privacy policy and terms                     | `src/pages/legal/legal-content.ts`       |

New games, articles and jobs automatically get their own URL and sitemap entry.

## Deployment

The site is a static single-page app, plus one optional serverless function.

- **Vercel (recommended):** import the repo and set the environment variables. `vercel.json` handles SPA rewrites, caching and security headers, and `api/chat.ts` deploys as a function automatically.
- **Netlify / Cloudflare Pages:** build command `bun run build`, output `dist`. `public/_redirects` handles SPA routing. To use the assistant, port `api/chat.ts` to that platform's function format.

## Notes

All content, links and contact details are placeholders for a fictional studio. To turn this into a real site, update the data files above, set `VITE_FORMS_ENDPOINT`, and have counsel review the legal pages.

The hero video (`src/assets/videos/hero-video.mp4`) is HEVC-encoded (~6.8 MB). Browsers that can't decode HEVC show the poster image instead.
