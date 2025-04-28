import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: vercel(),
  integrations: [sitemap(), react(), vue(), svelte(), db()],

  vite: {
    plugins: [tailwindcss()]
  }
});