# Warzone Cheats — Marketing Site

Static Astro 7 site for [warzonehack.net](https://warzonehack.net). Primary SEO keyword: **warzone cheats** (secondary: warzone hacks, aimbot, ESP, BO6/BO7 cheats).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Brand tokens (name, domain, colors, SEO meta): edit `src/data/brand.ts`, then run `npm run sync:brand`. Employees can use **Brand Studio** at `http://localhost:4321/brand-studio/` during dev.

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project (e.g. **warzonehack**)
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **warzonehack.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy (update `--project-name` in `package.json` if your Pages project name differs):

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Warzone product (`brand.checkoutUrl` in `src/data/brand.ts`)

## License

Private — for warzonehack.net deployment only.
