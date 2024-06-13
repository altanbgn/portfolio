import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { marked } from "marked";
import dayjs from "dayjs";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/supabaseClient.js";
import { L as Layout } from "../../../../chunks/Layout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $loading, $$unsubscribe_loading;
  let $blog, $$unsubscribe_blog;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const blog = writable();
  $$unsubscribe_blog = subscribe(blog, (value) => $blog = value);
  const loading = writable(true);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_page();
  $$unsubscribe_loading();
  $$unsubscribe_blog();
  return `${validate_component(Layout, "Layout").$$render($$result, { class: "lg:px-96" }, {}, {
    default: () => {
      return `${!$loading ? `<img${add_attribute("src", !$loading ? $blog.featured_image : "", 0)} alt="featured" class="mb-16"> <p class="text-2xl lg:text-6xl text-center font-bold mb-16">${escape(!$loading ? $blog?.title : "")}</p> <p class="text-neutral-400 mb-16">${escape($blog?.created_at ? dayjs($blog?.created_at).format("DD MMMM YYYY") : "")}</p> <div class="prose lg:prose-xl prose-invert prose-pre:bg-neutral-800 max-w-none text-white"> <!-- HTML_TAG_START -->${!$loading ? marked($blog?.body) : ""}<!-- HTML_TAG_END --></div>` : ``}`;
    }
  })}`;
});
export {
  Page as default
};
