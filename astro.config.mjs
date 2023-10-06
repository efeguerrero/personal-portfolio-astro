import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [react(), tailwind()],
  vite: {
    plugins: [svgr()],
  },
});
