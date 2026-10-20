import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

const trustedHostnames = new Set([
  'overtimesportspt.com',
  'www.overtimesportspt.com',
  'overtimesportspt.vercel.app',
  'overtimesportspt-v2.vercel.app',
  'overtimesportspt-v2-git-siterefresh-olivia-thoneys-projects.vercel.app',
  process.env.VERCEL_URL,
  process.env.VERCEL_BRANCH_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
].filter(Boolean));

export default defineConfig({
  site: 'https://overtimesportspt.com',
  security: {
    allowedDomains: [
      ...Array.from(trustedHostnames, (hostname) => ({
        hostname,
        protocol: 'https',
      })),
      { hostname: 'localhost', protocol: 'http' },
      { hostname: '127.0.0.1', protocol: 'http' },
    ],
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => new URL(page).pathname.replace(/\/$/, '') !== '/thank-you',
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),],
  output: "server",
  adapter: vercel(),
});