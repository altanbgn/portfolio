import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { a as avatar } from "../../chunks/avatar.js";
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg>`;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href = "/" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)}${add_attribute(
    "class",
    `font-bold capitalize rounded-full hover:tracking-widest transition-all duration-300 px-6 py-2
    ${$page.url.pathname.includes(href.length !== 1 ? href.slice(1, href.length) : $page.url.pathname === href ? "" : "!") ? "bg-cyan-500" : ""}
  `,
    0
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <nav id="desktopNav"${add_attribute(
    "class",
    `fixed hidden lg:flex justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10 rounded-full gap-2 my-10 px-8 py-2
    ${"bg-none"}
  backdrop-blur-xl transition duration-300`,
    0
  )}>${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
    default: () => {
      return `home`;
    }
  })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { href: "/blogs" }, {}, {
    default: () => {
      return `blogs`;
    }
  })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { href: "/projects" }, {}, {
    default: () => {
      return `projects`;
    }
  })}</nav>  <nav class="flex lg:hidden absolute top-0 z-10 w-screen items-center justify-between my-4"><a href="/" class="font-bold rounded-full px-8 py-4" data-svelte-h="svelte-xc80aq"><img${add_attribute("src", avatar, 0)}${add_attribute("width", 64, 0)}${add_attribute("height", 64, 0)} alt="logo"></a> <button aria-label="menu" class="px-8 py-4">${validate_component(Bars, "Bars").$$render($$result, {}, {}, {})}</button></nav> ${``}`;
});
const linkClasses = "text-blue-400 hover:text-blue-300 hover:underline";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-neutral-800 p-4"><div class="container flex justify-center items-center mx-auto px-8 lg:px-32"><p class="text-sm tracking-wider text-neutral-400">Build with
			<a${add_attribute("class", linkClasses, 0)} target="_blank" rel="noopener noreferrer" href="https://svelte.dev">Svelte
			</a>,
			<a${add_attribute("class", linkClasses, 0)} target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com">Tailwind CSS</a>
			and
			<a${add_attribute("class", linkClasses, 0)} target="_blank" rel="noopener noreferrer" href="https://supabase.com">Supabase
			</a>. Deployed on
			<a${add_attribute("class", linkClasses, 0)} target="_blank" rel="noopener noreferrer" href="https://railway.app">Railway
			</a>.</p></div></div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(`
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣦⣤⣤⣴⣄⣀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⣿⣿⡟⠻⣿⣿⣿⣷⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⠻⢶⣤⣤⣤⣠⡾⠃⢀⣶⡆⠀⢻⣿⣷⣶⣿⡿⠿⠛⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⡈⠉⢭⡿⠁⠀⣿⣿⣿⡇⠀⠹⢯⣭⡁⠀⠀⢨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢠⣸⡿⣶⣀⡀⠀⢀⢙⢛⠛⠁⠀⠀⠀⣄⣸⣷⣆⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡤⠀⠈⠻⣼⣇⠛⢻⡟⠛⣿⠛⠛⣿⠛⢿⣨⡿⠃⠀⠠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡉⠉⠿⣿⣦⡀⠀⠈⠉⠷⢾⣧⣤⣿⣤⣤⣿⡴⠿⠉⠀⠀⣴⣶⠿⠉⢹⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⡇⠀⠀⠘⠻⣿⣿⣿⡟⠻⣿⣿⣻⣿⣄⠀⠘⠛⢿⣿⣦⣤⣄⣀⣀⣠⣀⣄⣤⣀⡀⣦⣤⣼⣿⣿⡊⢀⣦⣿⣿⡜⣿⣧⡀⠻⣿⠛⠃⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣷⣦⣤⠀⠀⠀⠈⠁⣤⣶⠿⣡⣿⣿⣿⣿⣿⣦⣀⠹⠿⢿⣿⣏⠻⠿⠿⠿⠉⣿⣿⣿⣿⢿⠉⠰⣤⣾⣿⣿⣿⣷⣄⠹⢷⣦⣤⣤⣤⣤⢰⣶⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡹⣿⣿⣿⣿⣿⣤⢸⣿⣿⣷⡤⣿⣿⣿⣿⡏⢶⣤⣼⣻⣧⣤⣀⣀⣿⣟⢃⣈⣤⣼⣿⣿⣿⣿⡇⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⠻⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣧⡾⣿⣿⣿⣿⣿⣾⣿⣿⣿⡯⣿⣿⣿⣿⣿⢙⣛⠻⣿⡏⠉⠉⠹⣿⠟⠘⠋⣿⣿⣿⣿⣿⢋⢁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡛⢿⣿⣿⣿⣿⣿⣿⣿⡇⣀⣻⣤⣤⣥⡟⢻⡿⣿⡇⠀⠀⠀⣿⠠⠾⠇⣿⣿⣛⣇⣧⣼⠋⢿⣿⣿⣿⣿⣿⣿⢟⣳⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⡝⢻⣿⣿⣿⠟⡟⣿⣿⣿⣿⣿⣿⡇⢨⣷⣾⡇⠀⠀⠀⣿⢠⣶⣶⣿⣸⣿⣿⣿⣿⣷⢮⣍⠹⠟⠛⢫⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣾⡏⢹⣿⣿⣿⣿⣿⣷⡞⣷⢸⡇⠀⠀⠀⣿⢰⡆⠸⣀⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠘⠛⢿⣿⣿⣿⣿⡇⠛⠘⠛⣻⣻⣿⣿⣤⠃⢸⠿⠿⠿⠿⣿⠟⠋⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣀⣈⣻⣝⣿⣟⣷⣶⣶⣶⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣷⣶⣦⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠙⣿⣿⣿⣟⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⠛⢶⣾⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣸⣿⡀⢸⣿⣿⣿⣿⣿⣿⡇⢸⡀⣿⣿⣿⣿⡇⠀⠙⣿⣿⣿⣿⡼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⡇⠘⣿⣿⣿⣿⣿⣿⣿⣃⣼⣿⢸⣿⣿⣿⣇⡀⠀⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⢸⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣶⣾⣋⣉⣉⣉⣉⣙⣹⣾⣿⣿⣾⣋⣉⣉⣩⣥⣤⣘⣛⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠙⠛⠛⠛⠻⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠈⢻⣆⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⣀⣀⡰⠟⠋⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⣤⣤⣤⣤⣤⣽⣧⣼⣿⣿⣿⣿⣿⣿⣿⣿⣥⣤⣤⣤⣾⣧⣤⣤⣤⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

    👋 Hey there! Determined one.
    Feel free to checkout the source code of this website at https://github.com/altanbgn/portfolio

    Also, You can contact me on https://instagram.com/res0nan.ce or via altanbagana@pm.me
  `);
  return `<body>${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</body>`;
});
export {
  Layout as default
};
