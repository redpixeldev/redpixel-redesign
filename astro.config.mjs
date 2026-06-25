import { defineConfig } from 'astro/config';

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
