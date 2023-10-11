import { writable } from 'svelte/store';

import ColorPalette from '$lib/classes/ColorPalette.js';

export const colorPalette = writable(new ColorPalette());
