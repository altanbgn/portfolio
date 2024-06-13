import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
let originalClass = "container mx-auto px-8 lg:px-32 my-32 lg:my-48";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", twMerge(originalClass, className), 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as L
};
