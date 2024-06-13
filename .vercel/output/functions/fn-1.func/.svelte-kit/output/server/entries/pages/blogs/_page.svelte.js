import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, v as validate_component, h as each } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import "../../../chunks/supabaseClient.js";
import dayjs from "dayjs";
import { H as Heading } from "../../../chunks/Heading.js";
import { L as Layout } from "../../../chunks/Layout.js";
const BlogItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<div class="relative flex flex-col cursor-pointer w-full overflow-hidden gap-4" role="none"><img class="mb-6"${add_attribute("src", item.featured_image, 0)}${add_attribute("alt", item.title, 0)} width="720" height="480"> <p class="text-2xl font-bold">${escape(item.title)}</p> <p class="line-clamp-3">${escape(item.excerpt)}</p> <p class="text-neutral-400">${escape(dayjs(item.created_at).format("DD MMMM YYYY"))}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $blogs, $$unsubscribe_blogs;
  const blogs = writable([]);
  $$unsubscribe_blogs = subscribe(blogs, (value) => $blogs = value);
  $$unsubscribe_blogs();
  return `${$$result.head += `<!-- HEAD_svelte-1tz9q2u_START -->${$$result.title = `<title>Blogs - Altanbagana</title>`, ""}<!-- HEAD_svelte-1tz9q2u_END -->`, ""} ${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
        default: () => {
          return `Blogs`;
        }
      })} <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">${each($blogs, (item) => {
        return `${validate_component(BlogItem, "BlogItem").$$render($$result, { item }, {}, {})}`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
