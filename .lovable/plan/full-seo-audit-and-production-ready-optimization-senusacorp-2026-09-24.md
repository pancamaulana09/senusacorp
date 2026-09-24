# Full SEO Audit and Production-Ready Optimization — SenusaCorp

Goal: make every public page crawlable, indexable, and properly shared on social media, without changing the look of the site or stuffing keywords.

## Current state (audited)

- Public pages: `/`, `/services`, `/work`, `/work/<17 projects>`, `/pricing`, `/process`, `/about`, `/contact`, `/privacy`. No admin, login, or dashboard pages exist.
- Already done: unique titles per page, canonical on most pages, sitemap (25 URLs), robots.txt with sitemap line, Organization JSON-LD, CreativeWork JSON-LD on project pages, favicon PNG.
- Gaps: no share image (og:image / twitter:image) on any page, no twitter:title/description, no apple-touch-icon or web manifest, some descriptions too short (under 140 chars), some image alt texts are in English only or generic, no BreadcrumbList, robots.txt does not block `/api`, no Search Console / Bing verification hook, domain hardcoded in several files.

## What will be done

1. **Keyword map (no cannibalization)** — one primary keyword per page:
   - Home: jasa pembuatan website
   - Services: jasa web desain & aplikasi bisnis (CRM/HRM)
   - Pricing: harga / biaya pembuatan website murah
   - Work: portofolio website / contoh website
   - Project pages: the project name + sector (e.g. "website hotel")
   - Process: cara membuat website bisnis
   - About: studio kreatif digital Indonesia
   - Contact: konsultasi pembuatan website
2. **Titles and descriptions** — rewrite every description to 140–160 natural characters; format titles "[Keyword] — SenusaCorp".
3. **Shared SEO helper** — one small helper that builds title, description, canonical, og:*, twitter:* for each page from a single site-URL setting, so no page repeats boilerplate.
4. **Share images** — generate one branded 1200×630 image (black, lime logo, tagline, no faces) for the site pages; project pages use their own website preview screenshot. Both served from an absolute URL so WhatsApp, Facebook, LinkedIn, Telegram, and X show a preview.
5. **Structured data** — WebSite + ProfessionalService on home (price range, area served Indonesia, languages id/en), BreadcrumbList on all inner pages and project pages, keep CreativeWork on projects. No LocalBusiness (no address supplied), no FAQPage.
6. **Robots and sitemap** — add `Disallow: /api/`, keep existing crawler blocks; confirm sitemap has only public pages.
7. **Headings and images** — confirm one H1 per page and correct H2/H3 order; bilingual meaningful alt texts; decorative images `alt=""`; width/height and lazy loading on below-the-fold images; hero image loaded with high priority.
8. **Internal linking** — project pages link to related projects (same sector) and to Services/Pricing; replace generic "lihat" anchors with descriptive text.
9. **Favicon and branding** — add apple-touch-icon (180px), 192/512 icons, and `manifest.webmanifest` from the existing logo.
10. **Search engine verification** — ready-made slots for Google Search Console and Bing, filled only when real codes are provided (no fake codes).
11. **Accessibility / performance pass** — skip-to-content link, visible focus states, form labels check, font `display=swap` already used, preconnects kept.
12. **Final check** — typecheck, fetch rendered HTML for each page to verify tags, validate sitemap/robots, Playwright check at desktop and mobile for overflow and console errors, then a checklist report.

## Needs your input (won't be invented)

- Business address, city, phone/WhatsApp, email — needed for local SEO (e.g. Surabaya). Without them, local business data is skipped.
- Google Search Console / Bing verification codes (or connect Search Console later).

## Technical details

- New `src/lib/seo.ts`: `SITE_URL` constant (https://senusacorp.lovable.app), `pageHead({ path, title, description, image?, type?, breadcrumbs? })` returning `{ meta, links, scripts }` for TanStack `head()`.
- All route files switch to `pageHead`; canonical stays on leaf routes only; `sitemap[.]xml.ts` imports `SITE_URL`.
- Share image saved to `public/og/senusacorp-og.jpg`; project images referenced via their existing hosted asset URLs (absolute).
- `public/manifest.webmanifest`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`; links added in `__root.tsx`.
- Verification meta rendered in `__root.tsx` only when `VITE_GOOGLE_SITE_VERIFICATION` / `VITE_BING_SITE_VERIFICATION` are set.
- Changes reach the live site after the next publish.
