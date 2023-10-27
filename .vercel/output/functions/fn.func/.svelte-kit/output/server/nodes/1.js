

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.99f37083.js","_app/immutable/chunks/scheduler.e336461c.js","_app/immutable/chunks/index.892ff8c5.js","_app/immutable/chunks/singletons.860725e5.js","_app/immutable/chunks/index.4552cb11.js"];
export const stylesheets = [];
export const fonts = [];
