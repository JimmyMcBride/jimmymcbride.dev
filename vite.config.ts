import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		fs: {
			allow: [path.resolve('./convex')]
		}
	},
	plugins: [tailwindcss(), sveltekit()]
});
