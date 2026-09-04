# EverInvite Studio — business website

The main website for a digital web invitation service. Visitors learn what the
service is, browse the invitation portfolio, preview a design, pick a package
and send an enquiry straight to WhatsApp.

This is **not** an invitation itself. The invitations live in their own
projects; this site is the shopfront for them.

---

## Technology

- **Next.js 16** with the App Router
- **TypeScript**
- **Tailwind CSS v4** (design tokens live in `src/app/globals.css`)
- **Framer Motion** for restrained entrance animation
- **Lucide React** for icons
- `next/image` for every screenshot
- No database, no API keys, no environment variables

Enquiries are turned into a pre-written WhatsApp (or email) message in the
visitor's own browser. Nothing is posted to a third-party service.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other commands:

```bash
npm run build        # production build (also type-checks)
npm start            # serve the production build
npx eslint .         # lint
npx tsc --noEmit     # type-check on its own
```

---

## Where the six invitation samples came from

The portfolio was built from six invitation projects found in the parent
folder of this repository:

| Design | Couple | Source project |
| --- | --- | --- |
| Royal Blue & Gold | Minelli & Sachintha | `minelli-sachintha-weddinginvitation` |
| Emerald Garden | Amaya & Dilshan | `samples/01-emerald-gsap` |
| Written in the Stars | Sanduni & Kavindu | `samples/02-midnight-threejs` |
| Blush Orchard | Ishara & Tharindu | `samples/03-blush-framer` |
| Vintage Burgundy | Hansika & Chamod | `samples/04-burgundy-lottie` |
| Coral Bay | Dinithi & Lahiru | `samples/05-ocean-glsl` |

Each project was run locally and photographed at two sizes. The names,
palettes and feature lists in `src/data/invitations.ts` were read from each
project's own data file and Tailwind theme. None of the invitation projects
were modified.

---

## Editing the site

Everything you are likely to change lives in two folders: `src/config` and
`src/data`. You should not need to touch a component.

### Business details, WhatsApp, socials

`src/config/siteConfig.ts` — business name, tagline, WhatsApp number, phone,
email, Instagram / Facebook / TikTok, location, working hours, currency,
production URL and SEO text. Values that still need your input are marked
`TODO`.

The WhatsApp number must be in full international form, for example
`+94771234567`. Until a real number is in place the enquiry form quietly falls
back to email, so visitors never hit a dead WhatsApp link.

To hide a social link, set its value to an empty string.

### Adding another invitation

1. Take screenshots (see below) and save them to
   `public/images/invitations/` as `<slug>-mobile.jpg` and
   `<slug>-desktop.jpg`.
2. Copy an entry in `src/data/invitations.ts`, give it a unique `id` and
   `slug`, and fill in the title, couple or event name, category, styles,
   descriptions, features and colour palette.
3. Set `published: true` when it is ready to appear, and `featured: true` if
   you want it on the home page.
4. Add `liveUrl` once the invitation is deployed. See the next section for
   what that button does.

Category and style filters are generated from the data, so a new category
appears in the gallery filters automatically.

### The Preview button, and adding a live URL

- A design **with** `liveUrl` shows a **Preview** button that opens the real
  invitation website in a new tab.
- A design **without** `liveUrl` shows a **Preview** button that opens an
  on-site preview of its screenshots instead, and the detail page explains
  that the design is not published publicly.

To wire a design to its live site, deploy that invitation and paste its URL:

```ts
// src/data/invitations.ts
liveUrl: "https://your-invitation.vercel.app/",
```

Five of the six designs currently have no `liveUrl`; each has a `TODO` comment
sitting exactly where the URL goes.

### Packages and prices

`src/data/packages.ts`. Prices are deliberately empty strings, which makes the
site show "Priced on request" and the CTA label instead of a number. Add a
price as a plain string, for example `price: "35,000"`; the currency prefix
comes from `siteConfig.currency`.

### Questions, services and process steps

- `src/data/faqs.ts` — the FAQ list
- `src/data/services.ts` — feature menu, the six process steps, and the
  "why work with us" points

### Testimonials

`src/data/testimonials.ts` is empty on purpose, and the testimonials section
is hidden completely while it stays empty. Add entries only for real clients
who have agreed to be quoted.

---

## Updating the screenshots

Screenshots live in `public/images/invitations/` and are committed to the
repository. Two per design:

- `<slug>-mobile.jpg` — the invitation at roughly 390px wide
- `<slug>-desktop.jpg` — the invitation at roughly 1440px wide

To retake them, run the invitation project locally, open it at the target
width, open the envelope, scroll back to the top and capture. Save as JPEG at
around 80% quality. On macOS you can crop and compress with `sips`:

```bash
sips -c 807 373 shot.jpg --out public/images/invitations/my-design-mobile.jpg
sips -s format jpeg -s formatOptions 82 public/images/invitations/my-design-mobile.jpg \
  --out public/images/invitations/my-design-mobile.jpg
```

Keep private details out of the frame. Capture the top of the invitation
rather than the RSVP section, which usually carries real phone numbers.

---

## Deploying to Vercel

The project needs no environment variables for the first release.

1. Push this folder to its own GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Add EverInvite Studio business website"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. Go to <https://vercel.com/new>, import the repository and accept the
   detected settings. Vercel recognises Next.js on its own: build command
   `next build`, no root directory change, no environment variables.

3. After the first deploy, copy the production URL into
   `src/config/siteConfig.ts` as `siteUrl`, then push again. That value is
   used for canonical links, the sitemap and social preview images, so the
   site is not fully correct until it points at the real domain.

Or deploy from your machine:

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

### Custom domain

1. In Vercel, open the project, then **Settings → Domains**, and add your
   domain.
2. At your registrar, add the DNS records Vercel shows you: usually an `A`
   record for the apex domain and a `CNAME` for `www`.
3. Wait for the certificate to be issued, then set `siteUrl` in
   `src/config/siteConfig.ts` to the new domain and redeploy.

---

## Project structure

```
src/
  app/
    invitations/[slug]/   invitation detail pages
    services/  packages/  contact/  privacy/  terms/
    opengraph-image.tsx   generated social preview card
    sitemap.ts  robots.ts
  components/
    layout/               header, footer, floating enquiry button
    home/                 home page sections, reused on inner pages
    invitations/          gallery, cards, preview dialog
    forms/                enquiry form
    ui/                   buttons, section shells, device frames
  config/siteConfig.ts    ← business details
  data/                   ← invitations, packages, faqs, services, testimonials
  lib/                    WhatsApp message builder, small helpers
  types/                  shared types
public/images/invitations/ invitation screenshots
```
