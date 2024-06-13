

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dc69bfee.js","_app/immutable/chunks/vendor.f17ea74c.js"];
export const stylesheets = [];
export const fonts = [];
