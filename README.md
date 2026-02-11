# Next.js Small Business Template

A reusable Next.js App Router starter for local-service business websites.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Project Structure

- `app/` - App Router pages, layout, and API routes
- `components/` - UI and page sections
- `content/` - typed content objects used by templates
- `templates/` - page template composition
- `types/` - shared template/content interfaces
- `lib/` - shared utilities (including SEO metadata helper)

## Key Features

- Section-based homepage template (`Hero`, `ServiceGrid`, `ProcessSteps`, `Testimonials`, `Contact`)
- Reusable `Section` wrapper component for consistent spacing/layout
- Contact form section posting to `/api/contact`
- API route at `app/api/contact/route.ts` with input validation and JSON success/fail responses
- Reusable SEO metadata builder in `lib/seo.ts` used by `app/layout.tsx`
- Shared content interfaces in `types/templates.d.ts`
- Tailwind theme tokens for colors, typography sizes, and spacing
- GitHub Actions workflow for build + deploy via Vercel CLI

## Getting Started

Install dependencies:

```bash
npm ci
```

Run development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run test:smoke` - start the built app on a free local port and verify `/` and `/api/contact`
- `npm test` - run production build and smoke tests

## Content + Types

Content for the default local-service template lives in:

- `content/local-service.ts`

Types are defined in:

- `types/templates.d.ts`

If you add/edit template content, keep it aligned with these interfaces so component props stay type-safe.

## SEO

Global metadata is created from `content/site.ts` using:

- `lib/seo.ts` (`buildSeoMetadata`)

And consumed in:

- `app/layout.tsx`

## Contact API

Endpoint:

- `POST /api/contact`

Accepted payloads:

- `application/json`
- `multipart/form-data` / native form submit

Required fields:

- `name`
- `email`
- `message`

Response format:

- Success: `{ "success": true, "message": "..." }`
- Error: `{ "success": false, "error": "..." }`

## CI/CD (GitHub Actions + Vercel)

CI workflow file:

- `.github/workflows/ci.yml`

Runs on all pushes and pull requests:

- `npm ci`
- `npm run lint`
- `npm test`

Deploy workflow file:

- `.github/workflows/deploy.yml`

Runs on pushes to `main`, installs dependencies, builds the Next.js app, then deploys using Vercel CLI.

Required repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
