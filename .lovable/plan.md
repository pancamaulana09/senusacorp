# SenusaCorp Creative & Digital Agency Website

## Goal
Build a complete, bilingual agency website for **SenusaCorp** that feels editorial, bold, and highly crafted like the supplied Matters references—without copying its branding or content. The site will position SenusaCorp as an Indonesian partner for brand design, portfolio websites, company sites, e-commerce, and business applications such as CRM and HRM.

## Visual direction
- Use the reference composition: near-black opening sections, oversized typography, acid-lime accents, monochrome editorial imagery, pill-shaped media frames, floating project previews, off-white portfolio bands, and restrained grain.
- Replace the reference identity with a distinctive **SenusaCorp** logo treatment, Indonesian-first messaging, and SenusaCorp’s own project catalogue.
- Build purposeful scroll choreography: alternating headline treatments, floating project thumbnails, horizontal service ticker, portfolio reveal, and subtle image motion. Motion will respect reduced-motion settings.
- Generate an original, cohesive image set showing hands, materials, screens, printed work, and website creation in progress. People will read as Indonesian/Southeast Asian, with faces hidden, cropped, turned away, or out of frame.
- Treat uploaded screenshots as visual references only, not as website assets.

## Pages and content
1. **Home (`/`)**
   - Large SenusaCorp statement and animated “DESIGN / BUILD / GROW” treatment
   - Studio positioning, capabilities, featured projects, process preview, price preview, and final brief call-to-action
2. **Work (`/work`)**
   - Filterable portfolio across web design, branding, community, festival, furniture, fragrance, coffee, fashion, jewellery, hospitality, and business apps
   - Use the supplied live project links as the source catalogue
3. **Project details (`/work/$slug`)**
   - Reusable case-study layout with category, challenge, approach, visual gallery, delivered services, and link to the live preview
4. **Services (`/services`)**
   - Brand & visual identity, portfolio/landing pages, company/e-commerce sites, campaigns, and custom systems including CRM/HRM
   - Clear deliverables and suitable client profiles
5. **Pricing (`/pricing`)**
   - Tiered “starting from” packages, with Rp200.000 positioned as an entry package rather than promising a full enterprise site at that amount
   - Proposed initial tiers: Quick Start from Rp200k, Launch from Rp1.5m, Business from Rp4.5m, and custom application pricing by brief
   - Scope notes, comparison table, add-ons, and FAQ to avoid misleading expectations
6. **Process (`/process`)**
   - Discovery, direction, design, build, QA, launch, and ongoing support
7. **About (`/about`)**
   - SenusaCorp story, principles, multidisciplinary capability, and technology/business focus
8. **Contact (`/contact`)**
   - Multi-step project brief covering service, goals, budget, timeline, contact details, and message
   - Completion state with a WhatsApp continuation button using the submitted brief as a prefilled message
9. **Legal essentials**
   - Privacy page and concise form consent text

## Language experience
- Bahasa Indonesia is the default.
- An **ID / EN** switch changes all navigation, page copy, forms, validation, buttons, pricing notes, and metadata.
- Keep URLs shareable and search-friendly for both languages while preserving `/` as the Indonesian entry point.
- Remember the visitor’s language choice without causing a loading or layout jump.

## Portfolio implementation
- Build a central structured catalogue for all supplied projects, grouped by sector and service.
- Create polished portfolio cards with stable image proportions, category labels, project name, service summary, and live-preview action.
- Generate original presentation images inspired by each project category rather than embedding screenshots of other sites.
- Include representative CRM and HRM interface concepts so the systems capability is visible alongside brand and website work.

## Functional behavior
- Responsive desktop, tablet, and mobile navigation with a persistent “Mulai Brief” action.
- Working project filters, language switcher, accordions, form validation, loading/success/error states, and WhatsApp handoff.
- Store brief submissions securely with Lovable Cloud so leads are not lost; no login is needed for visitors.
- Keyboard accessibility, visible focus states, meaningful image descriptions, sufficient contrast, and reduced-motion support.

## Technical details
- Use the existing TanStack Start routing and semantic Tailwind design tokens.
- Build shared header, mobile menu, footer, language provider, project data model, portfolio components, and form controls.
- Keep images optimized and lazy-load below-the-fold media; reserve stable image dimensions to prevent page movement.
- Give every page unique bilingual search/social metadata, structured headings, canonical-friendly paths, and crawlable internal links.
- Validate the contact payload before storage and never expose private configuration in the browser.

## Validation
- Check every page and interaction at desktop and mobile sizes.
- Verify both languages, every navigation link, filters, form errors, successful submission, and WhatsApp message handoff.
- Inspect for text clipping, media overlap, contrast issues, animation jank, and unexpected layout shifts.
- Confirm generated imagery is cohesive, face-free, culturally appropriate, and sharp at its displayed size.
- Confirm page metadata is unique and no placeholder content remains.

## Assumptions
- Package names and prices above are initial copy based on the requested Rp200k starting point and can be revised before launch.
- Until a real WhatsApp number, business email, legal entity details, and office/location are provided, those contact details will be clearly marked as pending rather than invented.
- The supplied live projects may be shown as SenusaCorp portfolio work as requested.
