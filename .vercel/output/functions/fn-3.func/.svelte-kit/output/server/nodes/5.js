

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.b5b81c6e.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/chunks/supabaseClient.aed29dc7.js","_app/immutable/chunks/Layout.d87851e8.js","_app/immutable/chunks/Heading.29e228ed.js","_app/immutable/chunks/ProjectItem.cd5ad51d.js"];
export const stylesheets = [];
export const fonts = [];
