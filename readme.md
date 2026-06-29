# Easy Dance — Multi-Page Build Prompt

> Paste this entire prompt into Claude Code in VS Code, with the project folder open.

---

I have an existing `index.html` in this folder — it's the homepage for **Easy Dance**, a Latin dance studio in Frankfurt (Bachata, Salsa, Zouk, Kizomba). I need you to build out the rest of the multi-page website while staying **100% faithful** to the existing design system.

## Phase 1 — Study before you build

Before writing a single line of code, **read `index.html` end-to-end** and internalize:

- The `:root` CSS custom properties (colors, fonts, spacing, easing curves)
- Typography pairing: **Fraunces** (display, with optical sizing + italics for accent) + **Manrope** (body)
- Component patterns: `.btn`, `.eyebrow`, `.section-head`, `.value`, `.price-card`, `.style-card`, `.test-card`, `.event-row`, `.faq-item`
- The top announcement bar, sticky header with backdrop blur, mobile menu, and full footer (these go on **every** page)
- Animation conventions: `.reveal` class + IntersectionObserver script
- Voice and tone of the copy: editorial, warm, confident, occasionally poetic — never corporate

**Do not invent new components or color tokens. Reuse what exists.**

## Phase 2 — Refactor for multi-page

Extract shared assets so we're not duplicating 2000+ lines of CSS across every page:

```
project/
├── index.html
├── (other pages...)
└── assets/
    ├── css/style.css     ← all shared CSS from index.html's <style> block
    ├── js/main.js        ← shared JS (mobile menu, reveal, tabs)
    └── img/              ← if you save any local images
```

Update `index.html` to link the external CSS/JS instead of inlining them. Confirm nothing visually changed before moving on.

## Phase 3 — Build these pages

For **every** page below, include:

- Same top announcement bar
- Same sticky header (with the nav link for the current page styled with `color: var(--ember)` — add a `.nav-menu a.current` rule)
- Same full footer
- Reveal-on-scroll animations
- Mobile responsive down to 375px
- Unique `<title>` and `<meta name="description">`
- Open Graph tags

### Page list and required sections

**`styles.html`** — Overview of all four styles

- Compact hero (60vh) — "Four rhythms. One language."
- Four full-width alternating sections (image left / image right), one per style, each with: origin eyebrow, h2, 2–3 paragraphs, 3 key facts (tempo / character / starting level), link to the dedicated page
- CTA: "Not sure where to start? Book a free trial."

**`bachata.html` · `salsa.html` · `zouk.html` · `kizomba.html`** — One per style
Each must contain:

- Hero with style name, origin eyebrow, large themed image
- "What is [Style]?" — history + character (2–3 paragraphs)
- Sub-styles section (Bachata: Dominicana / Sensual / Moderna; Salsa: Cubana / L.A. / N.Y.; Zouk: Lambazouk / Modern / Neo; Kizomba: Traditional / Urban Kiz)
- "Levels we teach" — Beginner / Intermediate / Advanced cards with what you'll learn at each
- Schedule excerpt — only this style's classes
- Featured instructor block
- 2–3 testimonials specific to this dance
- A pull-quote about this dance
- CTA — "Start with a free trial"

**`pricing.html`** — Detailed pricing

- Hero
- The 3 plans from homepage (Drop-in / Studio Member / Private)
- Full feature-comparison table (every feature × every plan)
- Add-ons: workshops, intensives, gift cards
- Student / under-26 discount card
- Corporate & team rates section
- Pricing-specific FAQ (How do I cancel? Pause? Trial? Refunds?)
- CTA

**`schedule.html`** — Full weekly schedule

- Hero
- Full Mon–Sun grid, color-coded by style
- Filter bar: by style, by level, by instructor (visual filters fine — no backend needed)
- Each entry: time, name, level dot, instructor, "Book →"
- Level legend
- `.ics` calendar download CTA

**`instructors.html`** — Team page

- Hero
- Each instructor: large image, name, role, 4–5 paragraph bio, credentials (festivals taught, certifications), styles taught, "Book a private lesson" CTA
- Guest instructors section
- "Want to teach with us?" — application section at the bottom

**`events.html`** — Events & workshops

- Hero
- Featured upcoming event (large card)
- Upcoming events list (extend the homepage pattern)
- Past events archive with photo highlights
- Filter by category: Intensives / Festivals / Socials / Guest Workshops
- Events-specific newsletter signup

**`workshops.html`** — Weekend workshops

- Hero
- "What is a weekend workshop?" — explainer
- Upcoming workshops grid: date, name, instructor, level, duration, price, "Book"
- Past workshops gallery
- Workshop FAQ

**`about.html`** — Studio story

- Hero — "Our story"
- Timeline: founding → today (5–7 milestones)
- Founders section — expanded from homepage
- Mission & values
- The Bornheim studio space — photos + description
- Press mentions section
- CTA

**`location.html`** — Visit page

- Hero
- Full-width map embed
- Address card
- "How to get here" — by U-Bahn / bike / car (parking) / walking
- Studio interior gallery
- "Nearby" — coffee shops & restaurants on Berger Straße for before/after class
- Studio hours card

**`faq.html`** — Full FAQ
Categorized accordions:

- Getting Started (5–6 Qs)
- Classes & Schedule (5–6 Qs)
- Pricing & Payments (5–6 Qs)
- Private Lessons (4–5 Qs)
- Events & Workshops (4–5 Qs)
- Studio Policies (4–5 Qs)

End with "Still have questions?" → Contact CTA

**`booking.html`** — Trial class booking

- Hero — "Your first class is on us"
- 3–4 step process with icons
- Available trial slots (visual calendar fine)
- Form: name, email, phone, preferred style, preferred date, message
- "What to expect" checklist
- Address reminder + map

**`contact.html`** — Contact page

- Hero
- Contact form with subject categories: General / Booking / Private Lessons / Wedding Dance / Press / Corporate
- Direct contact tiles (email, phone, WhatsApp — all clickable)
- Studio hours card
- Address + map link
- Response time expectation

**`wedding-dance.html`** — Wedding specialty
Lean into the wine + gold palette here for elegance.

- Hero
- "Your first dance, designed" — intro
- The process: consultation → song selection → choreography → polish
- 3 package tiers (Mini / Classic / Premium) with session counts and prices
- Couple testimonials
- Video placeholder area
- Wedding-specific FAQ
- Inquiry form

**`privacy.html` and `imprint.html`** — Legal

- Same header/footer
- Single-column readable text
- Mark actual legal content with `[TBD — replace with real legal text]`

## Phase 4 — Cross-cutting requirements

- **Reuse, don't reinvent**: Every component must come from `index.html`'s vocabulary. New patterns only when truly necessary, and they must match the existing aesthetic.
- **Mobile-first responsive**: Every page tested at 375px, 768px, 1024px, 1440px.
- **Semantic HTML**: Proper `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>` tags. `<h1>` once per page.
- **Accessibility**: Alt text on every image, `aria-label` on icon-only buttons, focus-visible states, keyboard navigable.
- **SEO**: Unique title + meta description per page. Schema.org `LocalBusiness` markup on `index.html`, `contact.html`, `location.html`.
- **Images**: Continue with Unsplash URLs for placeholders. Use **varied** photos — never reuse the same image twice across the site. Match the dance/mood being shown. Add `loading="lazy"` to all images below the fold.
- **Copy**: Write all placeholder content in the same editorial voice. Confident, warm, occasionally poetic. No filler lorem ipsum. Where you genuinely don't know (e.g., specific dates, exact prices), use plausible values.
- **Page heft**: Every page should feel substantial — none more than ~30% shorter than the others.

## Phase 5 — Final verification

After all pages exist:

1. Click every nav link on every page — none should 404
2. Test every page at 375px width
3. Validate every HTML file
4. Confirm `.nav-menu a.current` highlights correctly on each page
5. Read three random pages aloud — does the voice match `index.html`?

## How to work

Proceed in this order:

1. **Phase 1** — read `index.html`, then tell me you're ready
2. **Phase 2** — refactor shared CSS/JS, show me the new structure before continuing
3. **Phase 3** — build pages in this priority order:
   `styles.html` → `pricing.html` → `schedule.html` → `bachata.html` → `salsa.html` → `zouk.html` → `kizomba.html` → `instructors.html` → `events.html` → `about.html` → `location.html` → `contact.html` → `booking.html` → `wedding-dance.html` → `workshops.html` → `faq.html` → `privacy.html` → `imprint.html`

Check in with me after Phase 2 and after the first style page so I can confirm the pattern before you scale it. After that, go end-to-end.

Begin.
#   d a n c i n g  
 #   d a n c i n g  
 #   d a n c i n g - s c h o o l  
 