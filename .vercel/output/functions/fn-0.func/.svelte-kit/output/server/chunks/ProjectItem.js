import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item = {
    title: "",
    excerpt: "",
    body: "",
    slug: "",
    technologies: [],
    links: { website: "", github: "" },
    background_color: "",
    featured_image: ""
  } } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<div class="relative cursor-pointer w-full rounded-[4rem] overflow-hidden transition duration-300 hover:scale-95" role="none">${``} <div class="w-full h-full flex justify-center items-center overflow-hidden" style="${"background-color: " + escape(item.background_color, true) + ";"}"><img class="h-96 object-contain object-center transition duration-300"${add_attribute("src", item.featured_image, 0)}${add_attribute("alt", item.title, 0)} width="632" height="384"></div></div>`;
});
export {
  ProjectItem as P
};
