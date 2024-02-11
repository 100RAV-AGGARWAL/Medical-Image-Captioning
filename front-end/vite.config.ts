import { defineConfig } from 'vite';
// import { resolve } from 'path';
import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';
// import checker from 'vite-plugin-checker';
// import handlebars from 'vite-plugin-handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		nodePolyfills({
			// Whether to polyfill specific globals.
			globals: {
				Buffer: true, // can also be 'build', 'dev', or false
				global: true,
				process: true,
			},
			// Whether to polyfill `node:` protocol imports.
			protocolImports: true,
		}),
		// checker({
		// 	overlay: { initialIsOpen: false },
		// 	typescript: true,
		// 	eslint: {
		// 		lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
		// 	},
		// }),
		// viteTsconfigPaths(),
		// svgrPlugin(),
		// handlebars({
		// 	partialDirectory: resolve(__dirname, 'src/partials'),
		// }) as Plugin,
	],
	server: {
		port: 4200,
		// proxy: {
		// 	'/api-server/': '...',
		// 	'/authorization/': '...',
		// },
	},
	preview: {
		port: 4200,
	},
	build: {
		outDir: 'build',
		sourcemap: false,
	},
});
