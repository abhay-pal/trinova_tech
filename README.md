# TriNova Tech — Website

**Build. Automate. Scale.**

A complete, single-file premium website for TriNova Tech — software development, POS, ERP, business automation, analytics and IT support.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | The complete website (all CSS, JS, fonts, logo and illustrations embedded — one file, zero external requests) |
| `sitemap.xml` | Sitemap for search engines (update the domain) |
| `robots.txt` | Crawler rules (update the domain) |
| `assets/logo-mark.png` | Transparent logo mark extracted from your original logo |
| `assets/logo-full.png` | Full logo lockup (mark + wordmark), transparent background |
| `assets/favicon.png` | Favicon source |
| `assets/og-image.jpg` | 1200×630 social share image (used by Open Graph / Twitter cards) |

## Quick start

- **Preview locally:** just open `index.html` in any browser. Everything is embedded — it works fully offline.
- **Deploy:** upload the whole folder to any static host — Netlify, Vercel, GitHub Pages, Cloudflare Pages, or cPanel/Shared hosting. No build step, no dependencies.

## What's inside

Sticky navigation with active-section highlighting · hero with an animated, subtly parallaxed illustration stage (dashboard, automation flow, POS receipt, code and analytics cards with floating tech tags) · industries strip · 6 service cards · 4 product blocks with **realistic working mockups**:

- **TriNova POS** — an *interactive* demo: tap items to build an order, adjust quantities, and the subtotal / CGST / SGST / total update live
- **TriNova ERP** — dark showcase panel with a full dashboard mockup (KPIs, sales trend, top products, branch performance, transactions)
- **BI Platform** — CEO dashboard mockup
- **CRM** — sales pipeline mockup

…plus solutions by industry, benefits + animated stat counters, 6-step process timeline, tech stack, portfolio with case-study modals, about/mission/vision, pricing (starting-price packages + custom quotes), placeholder testimonial slider, CTA band, contact form, footer, floating WhatsApp button, and toast notifications.

Animations are smooth and subtle (fade/slide reveals, counters, hover lifts, glows) and automatically disabled for users who prefer reduced motion.

## ⚠️ Replace these placeholders before launch

1. **Phone / WhatsApp number** — search for `+91 XXXXX XXXXX` and `wa.me/91XXXXXXXXXX` (appears in the contact cards and the floating WhatsApp button). Replace with your real number.
2. **Email** — search for `contact@trinovatech.com` in `index.html` and set your real address.
3. **Prices** — the `₹ XX,XXX` values on the two website packages are intentional placeholders. Add your real starting prices.
4. **Domain** — replace `https://www.trinovatech.com/` everywhere it appears: the `<link rel="canonical">`, all Open Graph / Twitter meta tags, the JSON-LD schema block (in `<head>`), `sitemap.xml` and `robots.txt`.
5. **Testimonials** — the three testimonials are clearly marked as sample placeholders. Replace with real client feedback (and remove the "Sample — Placeholder" badges).
6. **Social links** — footer social icons currently show a "coming soon" toast. Point them at your real profiles.
7. **Legal pages** — Privacy Policy and Terms & Conditions links show a "coming soon" toast. Add those pages when ready.
8. **Portfolio** — the six case studies are illustrative examples (noted on the page). Swap in your real projects by editing the cards in the `#portfolio` section and the `PROJECTS` object in the `<script>` block at the bottom.

## Connecting the contact form

The form currently validates input and shows a success message locally (demo mode). To actually receive submissions, pick one:

**Option A — Formspree (no code):** create a form at [formspree.io](https://formspree.io), then change the `<form id="contactForm" novalidate>` tag to:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

and remove the `e.preventDefault()` submit handler in the script (or replace it with your own logic).

**Option B — Your own backend:** point `action` at your API endpoint and POST the fields: `name`, `company`, `email`, `phone`, `service`, `budget`, `message`.

## Customizing

- **Brand colors** — edit the CSS variables at the top of `index.html` in `:root` (`--navy`, `--blue`, `--blue-2`, `--grad`, …). They are currently matched to your logo (`#153865` deep navy + `#2373C0` blue).
- **Logo** — your logo is embedded as a data URI inside the SVG sprite (`<symbol id="logo-mark">`), so the file stays fully self-contained. To swap it, replace the base64 string inside that symbol with a PNG of your new mark, or change the `<use href="#logo-mark"/>` references to an `<img>` tag.
- **Font** — Inter (variable, weights 100–900, including the ₹ glyph) is embedded as a data URI in `@font-face`. No Google Fonts request is made at runtime.
- **Content** — all sections are clearly commented (`<!-- ====== SERVICES ====== -->` etc.) so you can edit text directly.

## Performance & SEO notes

- Single file, zero external requests → very fast first paint; safe to gzip/Brotli on your host.
- Semantic HTML5 with one `<h1>`, proper H2/H3 hierarchy, meta description, canonical, Open Graph + Twitter cards.
- JSON-LD structured data included (Organization, WebSite, SoftwareApplication for TriNova POS and TriNova ERP).
- `sitemap.xml` + `robots.txt` included; lazy layout, `prefers-reduced-motion` support, keyboard-accessible modal/menu, focus-visible styles.


## React Experience Upgrade

The website now uses React + Vite with Framer Motion, Lucide React and Recharts. It is a multi-page product-led site with interactive POS, ERP, analytics, automation, web and mobile demos.
