import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  compressHTML: false,

  // Honor the PORT env var (e.g. the preview harness's assigned port); fall back to 4340.
  server: {
      port: Number(process.env.PORT) || 4340,
	},

  build: {
      assets: 'assets',
      format: 'file',
	},

  // Self-hosted Google Fonts via the Astro Fonts API (replaces the runtime
  // <link> tags). Families/weights/styles match the old Google Fonts request.
  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Oswald',
          cssVariable: '--font-oswald',
          weights: [400, 500, 600, 700],
          styles: ['normal'],
      },
      {
          provider: fontProviders.google(),
          name: 'Open Sans',
          cssVariable: '--font-open-sans',
          weights: [400, 600, 700],
          styles: ['normal', 'italic'],
      },
      {
          provider: fontProviders.google(),
          name: 'Space Mono',
          cssVariable: '--font-space-mono',
          weights: [400, 700],
          styles: ['normal'],
      },
	],

  vite: {
      build: {
          assetsInlineLimit: 0,
          rollupOptions: {
              output: {
                  entryFileNames: 'assets/main.js',
                  assetFileNames: 'assets/main[extname]',
              },
          },
      },
	},

  output: 'static',
  adapter: cloudflare(),
});
