# Sembada Landing Page

A production-ready marketing landing page for **Sembada**, an Indonesia-based structural steel detailing firm serving the US market.

Built with:
- **Next.js 14+ (App Router + TypeScript)**
- **Tailwind CSS** (mobile-first)
- **lucide-react** icons

The design language is **Industrial Tech**:
- `slate-900` for structure/background
- `blue-600` for primary action
- `amber-500` for highlights and construction cues

---

## Why this project exists

This page is designed to help Sembada communicate technical credibility to US contractors/fabricators while keeping load time and Core Web Vitals strong.

### Business goals
- Position Sembada as a reliable partner for US structural steel workflows.
- Clearly present services:
  - Structural steel detailing
  - Tekla 3D modeling
  - AISC-compliant shop drawings
- Capture inbound leads through a clean, conversion-ready contact form.

### Technical goals
- Keep UI modular and maintainable.
- Follow accessibility and semantic HTML best practices.
- Stay Vercel-friendly with minimal runtime complexity.

---

## Project structure

```bash
.
├── app/
│   └── page.tsx              # Home route + metadata + section composition
├── components/
│   ├── Hero.tsx              # Above-the-fold messaging + CTA
│   ├── Services.tsx          # Service cards
│   ├── Portfolio.tsx         # Representative outcomes
│   ├── ContactForm.tsx       # Inquiry form (integration-ready)
│   └── Footer.tsx            # Bottom brand strip
└── tailwind.config.ts        # Theme + custom brand tokens
```

---

## UX and content strategy

### 1) Hero (trust + intent)
- Immediate statement of value for the US market.
- Primary CTA (`#contact`) for conversion.
- Secondary CTA (`#portfolio`) for confidence-building exploration.
- Trust chips reinforce standards/process alignment.

### 2) Services (clarity)
- Each card maps to an actual steel detailing deliverable.
- Copy emphasizes production readiness and constructability.

### 3) Portfolio (proof)
- Sample project framing focuses on outcomes (speed, RFI reduction, phased execution).

### 4) Contact (conversion)
- Simple semantic form to lower friction.
- Ready to connect with Formspree, Vercel Actions, or custom API endpoints.

---

## SEO approach

The homepage exports route metadata with target keyword coverage:
- **Title**: `US Structural Steel Detailing Services | Sembada`
- **Description**: US-focused detailing + Tekla + AISC positioning

This gives a clean baseline for indexable, intent-aligned search snippets.

---

## Accessibility decisions

- Semantic sections and headings.
- Explicit labels for all form controls.
- Focus-visible rings for keyboard users.
- ARIA labels where helpful for landmarks/actions.
- Sufficient color contrast on dark backgrounds with high-legibility text classes.

---

## Performance and Core Web Vitals notes

This implementation favors strong CWV by default:
- No client-heavy animation libraries.
- Lightweight icon usage via `lucide-react`.
- Mostly static content.
- Mobile-first Tailwind classes for predictable rendering.

For production hardening:
- Add analytics and monitor real-user CWV in Vercel.
- Prefer optimized media formats (AVIF/WebP) when images are introduced.

---

## Tailwind theme customization

`tailwind.config.ts` extends theme colors with:

- `brand.bg` → `#0f172a`
- `brand.primary` → `#2563eb`
- `brand.highlight` → `#f59e0b`

These map directly to the Industrial Tech visual system.

---

## Local development

> If you’re integrating this into a full Next.js app, ensure project scaffolding exists (`package.json`, `next.config.*`, `postcss.config.*`, etc.).

Typical workflow:

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## Vercel deployment checklist

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project in Vercel.
3. Confirm framework preset is **Next.js**.
4. Configure any form backend endpoint:
   - Formspree action URL, or
   - Next.js/Vercel server action route.
5. Deploy and verify:
   - metadata output
   - form submission path
   - Lighthouse/CWV metrics

---

## Suggested next enhancements

- Add social proof/testimonials from US fabrication clients.
- Add case-study detail pages (`/portfolio/[slug]`).
- Add schema markup (Organization, Service).
- Add conversion tracking events for CTA and form submissions.
- Add anti-spam controls (honeypot + rate limiting) for form endpoint.

---

## License

Internal project for Sembada marketing use. Update license terms as needed before public distribution.
