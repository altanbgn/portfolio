

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.e0f0b404.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/chunks/supabaseClient.aed29dc7.js","_app/immutable/chunks/Layout.d87851e8.js","_app/immutable/chunks/Github.04efbd6e.js"];
export const stylesheets = [];
export const fonts = [];
