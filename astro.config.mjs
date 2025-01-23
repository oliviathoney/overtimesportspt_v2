import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://overtimesportspt.com',
  integrations: [react(), tailwind(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sanity({
    projectId: 'ym96kkpj',
    dataset: 'dev',
    apiVersion: '2025-01-22',
    useCdn: false,
    studioBasePath: '/studio'
  })],
  output: "server",
  adapter: vercel(),
});