import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      configFile: './custom-config.mjs',
    }),
  ]

// https://astro.build/config
export default defineConfig({});
