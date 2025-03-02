// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import awsAmplify from 'astro-aws-amplify';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.simbased.com',
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind({}), sitemap(), partytown({ config: { forward: ["dataLayer.push"] } }), robotsTxt({
    sitemap: true,
  })],
 adapter: awsAmplify()
});