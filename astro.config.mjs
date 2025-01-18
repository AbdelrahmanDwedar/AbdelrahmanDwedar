import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import remarkMermaid from "astro-diagram/remark-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://abdelrahmandwedar.github.io/personal-blog",
  base: "/personal-blog",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
});
