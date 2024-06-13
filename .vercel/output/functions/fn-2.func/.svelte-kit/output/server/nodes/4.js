

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.76c4ddb3.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/chunks/supabaseClient.aed29dc7.js","_app/immutable/chunks/Layout.d87851e8.js"];
export const stylesheets = [];
export const fonts = [];
