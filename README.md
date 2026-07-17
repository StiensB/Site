# Bray Stiens Portfolio

A production-ready Next.js portfolio for Bray Stiens, a Senior Software Engineer focused on cloud-native systems, .NET/C# backend architecture, and React/Next.js frontend delivery.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Config-driven portfolio content in `src/content/site.ts`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

## Content updates

Most portfolio copy, experience entries, project highlights, and contact links live in:

- `src/content/site.ts`

## Deployment

This repository is set up for Vercel deployment.

1. Import the repository into Vercel.
2. Set the production domain to `braystiens.tech`.
3. Vercel will automatically build the app with the standard Next.js settings in `vercel.json`.

The site also includes:

- SEO metadata in `src/app/layout.tsx`
- `robots.txt` via `src/app/robots.ts`
- `sitemap.xml` via `src/app/sitemap.ts`
