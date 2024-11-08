// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: 'modern'
              }
          }
      }
  },

  integrations: [icon()]
});