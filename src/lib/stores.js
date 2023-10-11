import { writable } from 'svelte/store';

import ColorPalette from '$lib/classes/ColorPalette.js';

export const colorPalette = writable(new ColorPalette());

export const hue = writable()
export const hueComplimentary1 = writable()
export const hueComplimentary2 = writable()