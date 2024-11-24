import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';




export default defineConfig({
  site: 'https://overtimesportspt.com',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),],
  output: "server",
  adapter: vercel(),
});