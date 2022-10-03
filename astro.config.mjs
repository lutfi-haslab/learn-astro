import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap(), tailwind(), react(), vue(), svelte()]
});