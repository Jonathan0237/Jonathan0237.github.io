import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// À ajuster si le site est publié sur un autre domaine.
export const SITE_URL = 'https://jonathan0237.github.io';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
});
