import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src/')
		}
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: 'js/[name].js',
				assetFileNames: 'assets/[name].[ext]'
			}
		}
	}
});
