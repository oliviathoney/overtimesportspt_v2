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

##  How to run

Use Node.js 24 (see `.nvmrc` and `package.json` engines). Vercel's Node.js Version
setting should also be 24.x. Astro 5 and `@astrojs/vercel` 9 support this runtime;
the older `@astrojs/vercel/serverless` adapter falls back to the discontinued
Node.js 18 runtime when built with Node.js 24.

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
