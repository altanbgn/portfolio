import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/supabaseClient.js";
import { L as Layout } from "../../../../chunks/Layout.js";
import { S as Social, G as Github } from "../../../../chunks/Github.js";
const Web = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="w-full h-full"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $loading, $$unsubscribe_loading;
  let $project, $$unsubscribe_project;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const project = writable();
  $$unsubscribe_project = subscribe(project, (value) => $project = value);
  const loading = writable(true);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_page();
  $$unsubscribe_loading();
  $$unsubscribe_project();
  return `${validate_component(Layout, "Layout").$$render(
    $$result,
    {
      class: "grid grid-cols-1 lg:grid-cols-2 gap-20"
    },
    {},
    {
      default: () => {
        return `${!$loading ? `<img${add_attribute("src", $project.featured_image || "", 0)} alt="featured" class="rounded-3xl"> <div class="flex flex-col gap-8"><p class="text-2xl lg:text-3xl font-bold">${escape($project?.title || "")}</p> <p>${escape($project?.body || "")}</p> <p><span class="font-bold uppercase tracking-widest" data-svelte-h="svelte-tghwou">Technologies :</span> ${escape($project?.technologies?.join(", ") || "")}</p> <div class="flex flex-wrap items-center gap-4"><p class="font-bold uppercase tracking-widest" data-svelte-h="svelte-1qpfagz">Links :</p> ${$project?.links?.github ? `${validate_component(Social, "Social").$$render(
          $$result,
          {
            href: $project.links.github,
            class: "hover:bg-neutral-800"
          },
          {},
          {
            default: () => {
              return `${validate_component(Github, "Github").$$render($$result, {}, {}, {})}`;
            }
          }
        )}` : ``} ${$project?.links?.website ? `${validate_component(Social, "Social").$$render(
          $$result,
          {
            href: $project.links.website,
            class: "hover:bg-neutral-800"
          },
          {},
          {
            default: () => {
              return `${validate_component(Web, "Web").$$render($$result, {}, {}, {})}`;
            }
          }
        )}` : ``}</div></div>` : ``}`;
      }
    }
  )}`;
});
export {
  Page as default
};
