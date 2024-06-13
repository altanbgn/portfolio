import { c as create_ssr_component } from "./ssr.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="w-full text-center text-4xl lg:text-8xl font-display font-black tracking-widest uppercase mb-14 lg:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  Heading as H
};
