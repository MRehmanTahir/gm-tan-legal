# GM Tan & Company — Firm Website

Marketing website for **Messrs. GM Tan & Company**, Advocates & Solicitors,
Petaling Jaya ("HeartBased Lawyers").

Built with **Vite + React + TypeScript**, **Framer Motion** for animation and
**Lenis** for inertia smooth-scrolling.

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

Floating pill nav · Hero (masked line reveal, services ticker) · Philosophy
(counters) · Practice Areas (accordion, 6 domains) · Divisions (A–D) ·
Our People (3 partners) · Approach (I–IV) · Testimonial · Engage Us
(confidential enquiry form + contact details) · Footer.

## Content to finalise before launch

- **Lead form**: submissions POST to [FormSubmit](https://formsubmit.co) —
  change `LEAD_ENDPOINT` in `src/components/Contact.tsx` to the firm's inbox
  (e.g. `azlenamaria@gmtan.biz`). The first submission triggers a one-time
  activation email to that address.
- **Photography**: partner portraits are Unsplash placeholders — replace with
  the firm's own photos.
- **Social/OG**: `public/og.png` uses a system serif; regenerate with brand
  fonts if desired, and set absolute `og:image`/canonical URLs in
  `index.html` once the production domain is confirmed.
