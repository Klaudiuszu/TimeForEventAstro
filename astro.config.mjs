import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://timeforevent.pl',
	vite: {
		server: {
			watch: {
				usePolling: true,
			}
		}
	},
	integrations: [mdx(), sitemap()],
});
