import adapter from '@sveltejs/adapter-static'; // This was changed from adapter-auto
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			api: '../websocket-api/src/client.ts' // note: for path alias to apply, you must restart the dev server (pnpm run dev, or pnpm tauri dev if using tauri)
		}
	}
};

export default config;
