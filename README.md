# OVERTIME Sports PT and Performance

Sports physical therapy website built with Astro, with dark and light themes.

## Tech stack:

Astro, React, Tailwind, Framer Motion

## Visual styles

Inter is the shared typeface for headings, body text, and controls. Brand colors
are defined in `tailwind.config.cjs`: `primaryColor` (`#4D734F`) for buttons and
icons, and `secondaryColor` (`#75AE78`) for accents on dark backgrounds.
Pages use `bgNight` (`#0d1312`) as the deep background, alternating with
`bgDark2` charcoal sections and card surfaces. Navigation, footers, articles,
forms, and the privacy policy share this palette, with light text and green
accents for readability.

The navbar stays pinned for the first 200px of scrolling, then hides while
scrolling down and returns while scrolling up. It stays visible near the top,
while its mobile menu or consultation dialog is open, and during keyboard focus
within the navigation. Small scroll movements are filtered to avoid flicker, and
the slide animation respects reduced-motion preferences.
All navbar "Get Started" buttons open the shared consultation dialog directly
with the `navigation` analytics source. Mobile menu actions close the menu before
opening the dialog rather than navigating to the FAQ appointment anchor.
The homepage hero button uses "Book Free Consultation"; the mobile bottom bar
keeps "Start Your Comeback". Both open the same dialog with their existing
`hero` and `mobile_bar` analytics sources.
Homepage difference photo captions are hidden below 1024px; the supporting
assessment text stays visible at every screen size.

Theme switching is temporarily disabled: all pages stay dark, including the
standalone privacy policy, and the sun/moon buttons are not displayed. Saved preferences
are ignored without being erased. The light palette and switching implementation
are preserved for later; `ThemeHead.astro` currently sets
`themeSwitchingEnabled = false`. The unused `ThemeToggle.jsx` component is retained
for future theme-switching work.

Theme palettes live in `src/styles/Palette.css`. Tailwind's semantic color tokens
reference these CSS variables, preserving opacity modifiers and alternating
surfaces in both modes. Light mode uses off-white backgrounds, pale contrasting
sections, dark text, and deeper green accents. Button labels and photo captions
stay white for contrast. `ThemeHead.astro` initializes the theme on every page,
and Tailwind's `dark:` variants follow the selected theme rather than the OS.

## Live link
[https://overtimesportspt.vercel.app/](https://overtimesportspt.vercel.app/)

##  Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── logos
│   ├── components
│   ├── layouts
│   ├── pages
│   └── styles
└── package.json
```

## Updating the team

Add, remove, or reorder entries in the `profiles` array in
`src/components/MeetTheTeam.jsx`. Each entry has a unique, stable `id`, an imported
image processed with `getImage`, a `name`, a `position`, and a `bio`. Separate bio
paragraphs with blank lines. The responsive card grid and biography controls are
generated from that array; no separate desktop/mobile markup needs updating.
Use the optional `imagePosition` field (for example, `"center top"`) to adjust
an individual portrait's crop without changing the other photos.

## Updating services

`src/components/ServiceList.jsx` defines three core service cards and three
groups of supporting treatments. Keep the short benefit visible in each
native `<details>` summary and put the fuller explanation in its expandable
body. These details are server-rendered and work without JavaScript. Education
is included in the physical therapy card rather than listed as a separate
treatment. The closing banner uses the shared `AboutConsultation` component
with the `services_cta` analytics source.

Each treatment group has a photo with a short caption. The updated AlterG image
is in `src/assets/images/services/alterG.png`; the BFR photo is in `BFR.jpg` and
appears inside the Blood Flow Restriction Training disclosure. Dynamo Strength
Testing and Cupping also show their existing service photos when expanded; other
treatment disclosures stay text-only. The AlterG and BFR source crops remove
unused ceiling/floor space while retaining the athletes and treatment equipment.
The AlterG display image uses a top-aligned square crop to match the force plate
photo, keeping the athlete and body-weight support enclosure in view. Other group
and treatment-detail photos keep their natural proportions rather than being
clipped into short banners. At tablet widths, group photos sit beside the
treatment text. Core service cards use taller 4:3 images.
Service photos use responsive WebP sources and reserved dimensions. The Services page
has local search copy, a production canonical URL, and page-specific search
and social metadata in `src/constants/siteData.json` and `src/pages/services.astro`.
Keep the visible service descriptions and metadata aligned with actual offerings.

## FAQ page

The navigation's FAQ tab keeps the existing `/resources` URL. This page contains
the eight FAQs and the shared consultation CTA; the old inline appointment form
is no longer rendered there. `/resources/#request` still links to the CTA for
existing appointment links. FAQ answers use server-rendered native details,
which work without hydration and do not truncate long answers on small screens.
Questions are grouped by the `category` field in `FAQData`: getting started,
visits, and insurance/payments. Topic links and the desktop introduction share
the same category definitions.
The insurance and payment answers both list HSA and FSA payments. Keep these
payment options distinct from insurance acceptance and reimbursement.

## Blog

`src/data/blogPosts.js` is the shared source for the listing and all five
prerendered article pages. Preserve existing slugs when editing posts so inbound
links continue working. Each entry keeps its article title, subtitle, HTML body,
original image, publication label, ISO `publishDate`, and listing `excerpt`.
The optional `listTitle` preserves an existing listing-specific headline.
Set `thumbnailFit: "contain"` when the listing thumbnail should use the photo's
natural proportions rather than a cropped frame. These image areas fit the photo
without side padding; the featured card uses a compact square column on desktop.
This does not affect the article's image.
Use semantic paragraphs, headings, and lists in the HTML body, not line breaks
or styled spans in place of document structure.

The listing and article templates share `src/styles/Blog.css`. The listing uses
two CSS masonry-style columns below the full-width featured post, stacking cards
without fixed-height rows or JavaScript. Reading order runs down the first column,
then down the second; mobile uses a single column. Cards stay intact across columns.
Articles use a
readable text column, related-post links, and responsive WebP images without
requiring client hydration. Search/social metadata, production canonicals, and
`BlogPosting` structured data are generated from each post's existing content
and publication date; do not change dates just to imply a fresh publication.
The shared closing consultation banner tracks `blog_cta` or `blog_article_cta`.

## Footer

`src/components/Footer.jsx` renders the shared, server-rendered footer on the
main site pages and blog articles. Its `links` and `locations` arrays define the
navigation and both existing Google Maps destinations. Keep addresses and map
links aligned with the About page when locations change. Phone/email links are
actionable, navigation and privacy links remain visible on mobile, and the
copyright year comes from the render date (build date for prerendered articles).
The footer uses `src/styles/Footer.css` and needs no client hydration.
Its "Schedule Appointment" link goes directly to the practice's Jane booking site
at `https://overtimesportspt.janeapp.com/`, with green accent text and an external-link
arrow to distinguish it from internal navigation.

## Consultation requests

The shared `ConsultationModal.jsx` requests a free 15-minute phone consultation,
not a reserved appointment. First name, last name, email, and a US/Canada
10-digit phone number (optionally prefixed with +1) are required. The optional
goals/injury/pain message is limited to 2,000 characters and included only in the
practice's notification email. The API validates these fields and escapes email
HTML; the legacy promotional form retains its existing optional-phone behavior.
Only confirmed successful delivery redirects to `/thank-you/`. Failures leave
the entered details in place and display an error.
The thank-you page confirms "Request Received", explains the usual two-hour
response window, and links to `/about#team-heading` through "Meet Your Sports PTs".
The team heading has scroll clearance for the fixed navbar. "Back to Home" stays
a secondary text link.
The dialog uses a compact two-column layout from 768px, with paired contact fields
from 600px. All three next steps remain visible on mobile; short screens can scroll
within the dialog without losing the close control.

Set the server-only `RESEND_API_KEY` in each Vercel project's Preview and Production
environments and redeploy after changing it. The endpoint reads the Node runtime
environment first, falling back to Astro's environment for local `.env` support.
Missing configuration returns a JSON 503 response rather than failing during
module initialization. Email-provider error
names are logged on the server without form values or API keys; HTTP failures are
handled before the browser tries to parse a success response.

GA4 events `consultation_opened`, `consultation_started`, and
`consultation_submitted` measure the funnel, with `cta_source` and `page_path`
parameters. Register `cta_source` as an event-scoped custom dimension in GA4 and
use these events in a Funnel Exploration to compare opens, starts, and successful
requests by CTA. Opens/starts fire once per dialog opening; submissions fire
only after API success. Analytics blocking can cause undercounting.

The existing Google Ads conversion also fires on submission success. The
thank-you page does not fire a conversion, so refreshing it cannot duplicate
one. Form names, email addresses, phone numbers, and free-text health details
are not included in these analytics events or URLs; this form no longer sets
Google Ads enhanced-conversion user data. Do not configure tag-manager variables
to collect form values.

The homepage review count uses the customer's supplied 200+ figure; keep it in
sync with the linked Google listing. The homepage introduction pairs the runner
photo with the supplied `src/assets/images/basketball-home.png`. The basketball
photo uses responsive WebP sources and a top-aligned crop to keep the ball in view.

##  How to run

Use Node.js 24 (see `.nvmrc` and `package.json` engines). Vercel's Node.js Version
setting should also be 24.x. Astro 5 and `@astrojs/vercel` 9 support this runtime;
the older `@astrojs/vercel/serverless` adapter falls back to the discontinued
Node.js 18 runtime when built with Node.js 24.

`security.allowedDomains` in `astro.config.mjs` trusts the site's production
domains, the current `site_refresh` preview alias, and HTTP localhost previews.
Vercel's `VERCEL_URL`, `VERCEL_BRANCH_URL`, and `VERCEL_PROJECT_PRODUCTION_URL`
system variables add the exact deployment hosts at build time. Keep Vercel's
system environment variables exposed for new deployment/branch aliases. Astro's
production image endpoint uses the validated request origin to fetch local image
assets, so new custom domains must be added here. Do not use a blanket
`*.vercel.app` allowlist.

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
