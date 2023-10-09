import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin'
import { rakeTheme } from './rake-theme'
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontSize: {
				// 'h3s': ['calc(26px + 1.5vw)', '1'],
				// 'h2-scale': ['calc(34px + (26 - 16) * ((100vw - 768px) / (1280 - 768)))', 'calc(1.4em * (1 + (1 - 2.8)/25))'],
				'h2-scale': ['calc((2.8 - 1) * 1.2vw + 1rem);', 'calc(1.4em * (1 + (1 - 2.8)/25))'],
				'h3-scale': ['calc((2 - 1) * 1.2vw + 1rem);', 'calc(1.4em * (1 + (1 - 2.8)/25))'],
			},
			gridTemplateRows: {
				// Simple 10 row grid
				'10': 'repeat(10, minmax(0, 1fr))',
			}
		},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					rakeTheme
				],
				// preset: [
				// 	{
				// 		name: 'wintry',
				// 		enhancements: true,
				// 	},
				// ],
			},
		}),
	],
};
