# GM Tan & Company — Firm Website

Marketing website for **GM Tan & Company**, an established Malaysian law firm
("Heart Based Lawyers" — Peguambela & Peguamcara).

Built with **Vite + React + TypeScript** and **Framer Motion** for animation.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Design system

| Token | Value | Use |
|---|---|---|
| `--maroon` | `#6B1220` | Hero, nav, footer, primary surfaces |
| `--mahogany` | `#3D0A12` | Deep sections, overlays |
| `--gold` | `#C4A052` | Accents, dividers, CTAs (gradient `#A87C2E → #E9CE8A`) |
| `--cream` | `#F6F1E8` | Light section backgrounds |
| `--ink` | `#26201C` | Body text |
| `--taupe` | `#8A7B6B` | Secondary text, hairlines |

Typography: **Playfair Display** (headings, gold-gradient display treatment)
and **Lato** (body, nav, forms) via Google Fonts.

## Sections

Sticky topbar + nav · Hero (animated stats) · Practice Areas (6 icon cards) ·
The Advocate (Ms. GM Tan) · Why GM Tan & Co · Testimonials + trust marquee ·
Contact (enquiry form, address, map, hours) · Footer.

## Content to finalise before launch

- **Lead form**: submissions POST to [FormSubmit](https://formsubmit.co) —
  change `LEAD_ENDPOINT` in `src/components/Contact.tsx` to the firm's inbox.
  The first submission triggers a one-time activation email to that address.
- **Photography**: current images are Unsplash placeholders (including the
  portrait standing in for Ms. Tan) — replace with the firm's own photos.
- **Firm details**: address, phone, email, established year, and testimonial
  attributions are placeholders pending the firm's real details.
