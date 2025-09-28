// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://urumlug.ir',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'fa',
		locales: ['fa'],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
