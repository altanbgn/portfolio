import { c as create_ssr_component, a as subscribe, v as validate_component, h as each } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import "../../../chunks/supabaseClient.js";
import { L as Layout } from "../../../chunks/Layout.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { P as ProjectItem } from "../../../chunks/ProjectItem.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projects, $$unsubscribe_projects;
  const projects = writable([]);
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  $$unsubscribe_projects();
  return `${$$result.head += `<!-- HEAD_svelte-iz84ym_START -->${$$result.title = `<title>Projects - Altanbagana</title>`, ""}<!-- HEAD_svelte-iz84ym_END -->`, ""} ${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
        default: () => {
          return `Projects`;
        }
      })} <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">${each($projects, (item) => {
        return `${validate_component(ProjectItem, "ProjectItem").$$render($$result, { item }, {}, {})}`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
