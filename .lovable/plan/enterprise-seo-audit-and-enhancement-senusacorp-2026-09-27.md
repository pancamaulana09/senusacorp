# Enterprise SEO Audit and Enhancement — SenusaCorp

Goal: follow the uploaded brief — audit first, then fix only what genuinely improves search visibility, without changing the design, inventing facts, or stuffing keywords.

## Phase 1 — Audit (delivered as a report in chat + saved file)
A written audit covering technical SEO, metadata, headings, content, images, structured data, internal links, social previews, local SEO, and performance. Each item marked OK / Fix / Needs your input. Includes a topical map and a per-page keyword table (primary + secondary keyword, search intent, recommended title, description, H1).

## Phase 2 — Fixes

1. **Technical**
   - Pick one main address (senusacorp.my.id without www) and point www and the old lovable.app address to it via canonical tags; confirm trailing slash consistency.
   - "Not found" pages (unknown project, article, service, general 404) get noindex and proper 404 status.
   - Verify sitemap only lists real public pages; add project screenshots to the image sitemap.
2. **Metadata**
   - Check every title (50–60 chars) and description (140–160 chars) for length and duplicates; fix outliers (e.g. project descriptions cut mid-sentence).
   - Portfolio count kept in sync with the real catalogue instead of a hardcoded "17".
3. **Headings and structure**
   - Homepage heading stays visually "IDE JADI NYATA", but gains a search-readable descriptive phrase ("Jasa Pembuatan Website...") inside the H1 without changing the look.
   - One H1 per page, logical H2/H3 order, correct header/nav/main/footer/article tags.
4. **Content and internal linking**
   - Topic clusters: Services → matching blog articles → matching portfolio examples → contact/pricing.
   - Each blog article links to its related service; each service links to 2–3 articles; project pages link to their service and similar projects. Descriptive link text, no generic "lihat".
5. **Structured data**
   - Review all JSON-LD for consistency (same name, phone, city, URLs everywhere).
   - Add WebPage/CollectionPage where useful; Service already exists; keep Article/CreativeWork/Breadcrumb. No fake ratings, no FAQ schema added for SEO.
6. **Images**
   - Confirm natural alt text, width/height, lazy loading below the fold, high priority for the first visible image; flag large files.
7. **Local SEO** — Surabaya signals consistent across footer, contact, schema, llms.txt. Google Business Profile stays your task.
8. **Performance** — check font loading, render-blocking, and oversized images; fix safe wins only.
9. **Verification** — typecheck, rendered HTML check for every page, sitemap/robots check, Playwright desktop + mobile, and a final checklist.

## Needs your input (won't be invented)
- Business email, opening hours confirmation, and service prices I set earlier (toko online Rp4,5 juta, CRM/HRM from Rp9 juta, branding Rp4,5 juta).
- Google Business Profile link once registered.

## Technical details
- Changes centred on `src/lib/seo.ts` (add `noindex` option, WebPage schema helper), route `head()` functions, `sitemap[.]xml.ts` (project images), cross-link helpers in services/blog data.
- Audit report saved to `/mnt/documents/senusacorp-seo-audit.md`.
- Changes reach senusacorp.my.id after the next publish.
