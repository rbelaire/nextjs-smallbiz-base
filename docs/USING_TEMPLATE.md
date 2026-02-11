# Using This Template

This guide explains the fastest way to turn this repo into a client-ready site.

## 1. Start a New Project

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## 2. Understand the Core Files

- `app/page.tsx`: homepage route entry
- `templates/LocalServiceTemplate.tsx`: homepage composition
- `content/local-service.ts`: homepage content (headlines, sections, testimonials, CTAs)
- `content/site.ts`: site-level branding + SEO defaults
- `app/layout.tsx`: global layout, fonts, metadata usage
- `app/globals.css`: global styles + theme tokens
- `app/api/contact/route.ts`: contact form API validation and response

## 3. Customize Branding and Content

Update these first:

1. `content/site.ts`
2. `content/local-service.ts`
3. `public/` assets (logos, icons, social preview images)

Then verify:

```bash
npm run lint
npm test
```

## 4. Add or Remove Homepage Sections

Sections are assembled in `templates/LocalServiceTemplate.tsx`.

To add a section:

1. Create a component in `components/sections/`.
2. Add content shape updates in `types/templates.d.ts`.
3. Add matching content in `content/local-service.ts`.
4. Render the new component in `templates/LocalServiceTemplate.tsx`.

Keep content and types aligned so props stay type-safe.

## 5. Contact Form Behavior

Frontend `Contact` section posts to:

- `POST /api/contact`

Accepted body:

- `application/json`
- `multipart/form-data`

Validation rules are in `app/api/contact/route.ts`.
If you integrate email/CRM delivery, add it in this route after validation succeeds.

## 6. Quality Checks Before Shipping

Run:

```bash
npm run lint
npm test
```

`npm test` includes:

1. `npm run build`
2. smoke checks for `/` and `/api/contact`

## 7. CI and Deploy

- CI: `.github/workflows/ci.yml`
  - Runs on push + PR
  - Executes `npm ci`, `npm run lint`, `npm test`
- Deploy: `.github/workflows/deploy.yml`
  - Runs on push to `main`
  - Deploys to Vercel

Required GitHub secrets for deploy:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 8. Recommended First Tasks for a New Client

1. Replace all brand copy and company references in `content/site.ts` and `content/local-service.ts`.
2. Replace logos/icons in `public/`.
3. Confirm nav/footer links in `components/layout/Navbar.tsx` and `components/layout/Footer.tsx`.
4. Hook `app/api/contact/route.ts` to your real delivery target (email provider, CRM, webhook, etc.).
5. Run `npm test` and open a PR to trigger CI.
