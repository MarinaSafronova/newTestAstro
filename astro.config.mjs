// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.simbased.com',
  experimental: {
    responsiveImages: true,
  },
  integrations: [tailwind({}), sitemap(), partytown({ config: { forward: ["dataLayer.push"] } }), robotsTxt({
    sitemap: true,
  })],
  adapter: vercel()
});