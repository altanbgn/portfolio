

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.abbeae0a.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/chunks/avatar.7fa7efe4.js"];
export const stylesheets = ["_app/immutable/assets/0.36ea7d0e.css"];
export const fonts = [];
