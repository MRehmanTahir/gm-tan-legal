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

- **Production URL**: copy `.env.example` to `.env.production` and replace
  `https://gm-tan-legal.com` with the final HTTPS domain if it changes. The build uses this value
  for canonical/social URLs and generates `robots.txt` and `sitemap.xml`.

- **Lead form**: submissions POST to [FormSubmit](https://formsubmit.co) —
  change `LEAD_ENDPOINT` in `src/components/Contact.tsx` to the firm's inbox
  (`gmtangeneral@gmail.com`). The first submission triggers a one-time
  activation email to that address.
- **Photography**: partner portraits are Unsplash placeholders — replace with
  the firm's own photos.
- **Social/OG artwork**: `public/og.png` uses a system serif; regenerate with
  the final brand fonts if desired. Absolute social and canonical URLs are
  populated automatically from `VITE_SITE_URL`.
