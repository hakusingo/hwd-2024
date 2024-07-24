import { defineConfig } from 'astro/config';
import { siteMeta } from './src/lib/constants';
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const {
  siteUrl
} = siteMeta;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
  ],
});