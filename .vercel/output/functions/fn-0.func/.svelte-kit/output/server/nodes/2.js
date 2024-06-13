

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.187218b1.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/chunks/avatar.7fa7efe4.js","_app/immutable/chunks/Heading.29e228ed.js","_app/immutable/chunks/ProjectItem.cd5ad51d.js","_app/immutable/chunks/supabaseClient.aed29dc7.js","_app/immutable/chunks/Github.04efbd6e.js"];
export const stylesheets = ["_app/immutable/assets/2.bfba8fe0.css"];
export const fonts = [];
