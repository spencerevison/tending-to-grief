import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { imagetools } from '@zerodevx/svelte-img/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools(),
		Icons({
			compiler: 'svelte'
		}),
		svg({
			includePaths: ['./src/lib/assets/icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		}),
		svg({
			includePaths: ['./src/lib/assets/graphics/'],
			svgoOptions: {
				multipass: true,
				plugins: ['preset-default']
			}
		})
	]
});
