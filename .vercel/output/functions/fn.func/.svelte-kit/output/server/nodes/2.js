import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.5311a833.js","_app/immutable/chunks/scheduler.e336461c.js","_app/immutable/chunks/index.892ff8c5.js","_app/immutable/chunks/index.4552cb11.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.f8311edf.js"];
export const stylesheets = ["_app/immutable/assets/2.c8479425.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
