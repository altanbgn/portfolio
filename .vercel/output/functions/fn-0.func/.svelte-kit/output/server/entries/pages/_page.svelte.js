import { n as noop, c as create_ssr_component, d as assign, i as identity, b as add_attribute, e as escape, f as null_to_empty, a as subscribe, g as set_store_value, v as validate_component, h as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { a as avatar } from "../../chunks/avatar.js";
import { twMerge } from "tailwind-merge";
import "typewriter-effect/dist/core.js";
import { H as Heading } from "../../chunks/Heading.js";
import { P as ProjectItem } from "../../chunks/ProjectItem.js";
import "../../chunks/supabaseClient.js";
import { S as Social, G as Github } from "../../chunks/Github.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const ScrollIndicator_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".scroll-indicator.svelte-pjmf3c{animation:svelte-pjmf3c-float 2s ease infinite}@keyframes svelte-pjmf3c-float{0%{transform:translateY(0px) translateX(-50%)}50%{transform:translateY(20px) translateX(-50%)}100%{transform:translateY(0px) translateX(-50%)}}",
  map: null
};
const originalClass$4 = "feather feather-chevrons-down scroll-indicator absolute left-1/2";
const ScrollIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"${add_attribute("style", style, 0)} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${escape(null_to_empty(twMerge(originalClass$4, className)), true) + " svelte-pjmf3c"}"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>`;
});
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scrollIndicatorTween, $$unsubscribe_scrollIndicatorTween;
  let $subTitleTween, $$unsubscribe_subTitleTween;
  let $titleTween, $$unsubscribe_titleTween;
  let $avatarSpring, $$unsubscribe_avatarSpring;
  const titleTween = tweened(0, { duration: 600, easing: backIn });
  $$unsubscribe_titleTween = subscribe(titleTween, (value) => $titleTween = value);
  const subTitleTween = tweened(0, { duration: 600, easing: backIn });
  $$unsubscribe_subTitleTween = subscribe(subTitleTween, (value) => $subTitleTween = value);
  const scrollIndicatorTween = tweened(0, { duration: 600, easing: backIn });
  $$unsubscribe_scrollIndicatorTween = subscribe(scrollIndicatorTween, (value) => $scrollIndicatorTween = value);
  const avatarSpring = spring({ x: 0, y: 0 }, {
    stiffness: 0.15,
    damping: 0.2,
    precision: 0.01
  });
  $$unsubscribe_avatarSpring = subscribe(avatarSpring, (value) => $avatarSpring = value);
  setTimeout(() => set_store_value(titleTween, $titleTween = 1, $titleTween), 400);
  setTimeout(() => set_store_value(subTitleTween, $subTitleTween = 1, $subTitleTween), 1200);
  setTimeout(() => avatarSpring.set({ x: 1, y: 1 }), 2400);
  setTimeout(() => set_store_value(scrollIndicatorTween, $scrollIndicatorTween = 1, $scrollIndicatorTween), 3e3);
  $$unsubscribe_scrollIndicatorTween();
  $$unsubscribe_subTitleTween();
  $$unsubscribe_titleTween();
  $$unsubscribe_avatarSpring();
  return `<div class="container flex flex-col lg:flex-row justify-center items-center h-screen mx-auto px-8 lg:px-32 gap-10 lg:gap-0"><div class="absolute -z-20 w-full h-screen top-0 left-0" style="background-image: radial-gradient(#525252 2px, transparent 0px); background-size: 48px 48px; background-position: 0 0; background-repeat: repeat; position: absolute; " data-svelte-h="svelte-1sr9kj1"><div class="absolute -z-10 w-full h-96 top-0 left-0 bg-gradient-to-b from-black to-transparent"></div> <div class="absolute -z-10 w-full h-96 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div></div> <div class="flex lg:basis-4/6 flex-col items-start"><p style="${"opacity: " + escape($titleTween, true) + ";"}" class="w-full text-2xl lg:text-4xl text-center lg:text-left text-neutral-200 font-display font-extrabold tracking-widest uppercase">Hi, My name is
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500" data-svelte-h="svelte-1850oz6">Altanbagana</span></p> <p style="${"opacity: " + escape($subTitleTween, true) + ";"}" class="text-sm lg:text-2xl text-center lg:text-left text-neutral-400 my-4">I&#39;m a <span class="text-cyan-500" id="typewriter"></span></p></div> <div class="flex order-first lg:order-none lg:basis-2/6 items-center justify-center"><img style="${"transform: scale(" + escape($avatarSpring.x, true) + ", " + escape($avatarSpring.y, true) + ");"}" class="h-auto bg-white rounded-full p-2 w-[180px] lg:w-[300px]" width="180px" height="300px"${add_attribute("src", avatar, 0)} alt="Avatar"></div></div> ${validate_component(ScrollIndicator, "ScrollIndicator").$$render(
    $$result,
    {
      class: "top-[calc(100vh-100px)] lg:top-[calc(100vh-200px)]",
      style: "transform: translateX(50%);"
    },
    {},
    {}
  )}`;
});
const originalClass$3 = "container flex flex-col justify-center items-center h-auto mx-auto px-8 lg:px-32 py-16 lg:py-32";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", twMerge(originalClass$3, className), 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const originalClass$2 = "h-fit flex flex-col gap-10 p-10 lg:p-16 rounded-[2rem] lg:rounded-[4rem]";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { bgColor = "#262626" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  return `<div${add_attribute("class", twMerge(originalClass$2, className), 0)} style="${"background-color: " + escape(bgColor, true) + ";"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const originalClass$1 = "tracking-widest uppercase {className}";
const SubHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${add_attribute("class", twMerge(originalClass$1, className), 0)}>${slots.default ? slots.default({}) : ``}</p>`;
});
const WaveTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg id="visual" viewBox="0 0 900 100"${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 34L8.3 31.8C16.7 29.7 33.3 25.3 50 25.2C66.7 25 83.3 29 100 29C116.7 29 133.3 25 150 24.3C166.7 23.7 183.3 26.3 200 23.3C216.7 20.3 233.3 11.7 250 9C266.7 6.3 283.3 9.7 300 9.7C316.7 9.7 333.3 6.3 350 7.2C366.7 8 383.3 13 400 13C416.7 13 433.3 8 450 7.8C466.7 7.7 483.3 12.3 500 14.3C516.7 16.3 533.3 15.7 550 13.3C566.7 11 583.3 7 600 6.7C616.7 6.3 633.3 9.7 650 10.2C666.7 10.7 683.3 8.3 700 10.7C716.7 13 733.3 20 750 21C766.7 22 783.3 17 800 17.8C816.7 18.7 833.3 25.3 850 27C866.7 28.7 883.3 25.3 891.7 23.7L900 22L900 101L891.7 101C883.3 101 866.7 101 850 101C833.3 101 816.7 101 800 101C783.3 101 766.7 101 750 101C733.3 101 716.7 101 700 101C683.3 101 666.7 101 650 101C633.3 101 616.7 101 600 101C583.3 101 566.7 101 550 101C533.3 101 516.7 101 500 101C483.3 101 466.7 101 450 101C433.3 101 416.7 101 400 101C383.3 101 366.7 101 350 101C333.3 101 316.7 101 300 101C283.3 101 266.7 101 250 101C233.3 101 216.7 101 200 101C183.3 101 166.7 101 150 101C133.3 101 116.7 101 100 101C83.3 101 66.7 101 50 101C33.3 101 16.7 101 8.3 101L0 101Z" fill="#323232"></path><path d="M0 46L8.3 46.3C16.7 46.7 33.3 47.3 50 44C66.7 40.7 83.3 33.3 100 30.8C116.7 28.3 133.3 30.7 150 33.2C166.7 35.7 183.3 38.3 200 41.3C216.7 44.3 233.3 47.7 250 49.5C266.7 51.3 283.3 51.7 300 49.5C316.7 47.3 333.3 42.7 350 37.8C366.7 33 383.3 28 400 30.3C416.7 32.7 433.3 42.3 450 44.5C466.7 46.7 483.3 41.3 500 41.5C516.7 41.7 533.3 47.3 550 48.2C566.7 49 583.3 45 600 42.2C616.7 39.3 633.3 37.7 650 35.8C666.7 34 683.3 32 700 34.8C716.7 37.7 733.3 45.3 750 44.7C766.7 44 783.3 35 800 31.5C816.7 28 833.3 30 850 30.7C866.7 31.3 883.3 30.7 891.7 30.3L900 30L900 101L891.7 101C883.3 101 866.7 101 850 101C833.3 101 816.7 101 800 101C783.3 101 766.7 101 750 101C733.3 101 716.7 101 700 101C683.3 101 666.7 101 650 101C633.3 101 616.7 101 600 101C583.3 101 566.7 101 550 101C533.3 101 516.7 101 500 101C483.3 101 466.7 101 450 101C433.3 101 416.7 101 400 101C383.3 101 366.7 101 350 101C333.3 101 316.7 101 300 101C283.3 101 266.7 101 250 101C233.3 101 216.7 101 200 101C183.3 101 166.7 101 150 101C133.3 101 116.7 101 100 101C83.3 101 66.7 101 50 101C33.3 101 16.7 101 8.3 101L0 101Z" fill="#292929"></path><path d="M0 66L8.3 64.5C16.7 63 33.3 60 50 56.7C66.7 53.3 83.3 49.7 100 51.7C116.7 53.7 133.3 61.3 150 64.2C166.7 67 183.3 65 200 62.2C216.7 59.3 233.3 55.7 250 57.2C266.7 58.7 283.3 65.3 300 66.5C316.7 67.7 333.3 63.3 350 58.5C366.7 53.7 383.3 48.3 400 47.2C416.7 46 433.3 49 450 50.3C466.7 51.7 483.3 51.3 500 54.5C516.7 57.7 533.3 64.3 550 63.8C566.7 63.3 583.3 55.7 600 54.2C616.7 52.7 633.3 57.3 650 56.7C666.7 56 683.3 50 700 50.2C716.7 50.3 733.3 56.7 750 58.3C766.7 60 783.3 57 800 55.3C816.7 53.7 833.3 53.3 850 52.2C866.7 51 883.3 49 891.7 48L900 47L900 101L891.7 101C883.3 101 866.7 101 850 101C833.3 101 816.7 101 800 101C783.3 101 766.7 101 750 101C733.3 101 716.7 101 700 101C683.3 101 666.7 101 650 101C633.3 101 616.7 101 600 101C583.3 101 566.7 101 550 101C533.3 101 516.7 101 500 101C483.3 101 466.7 101 450 101C433.3 101 416.7 101 400 101C383.3 101 366.7 101 350 101C333.3 101 316.7 101 300 101C283.3 101 266.7 101 250 101C233.3 101 216.7 101 200 101C183.3 101 166.7 101 150 101C133.3 101 116.7 101 100 101C83.3 101 66.7 101 50 101C33.3 101 16.7 101 8.3 101L0 101Z" fill="#202020"></path><path d="M0 67L8.3 68.8C16.7 70.7 33.3 74.3 50 76.7C66.7 79 83.3 80 100 80C116.7 80 133.3 79 150 81.3C166.7 83.7 183.3 89.3 200 90.8C216.7 92.3 233.3 89.7 250 89.5C266.7 89.3 283.3 91.7 300 91C316.7 90.3 333.3 86.7 350 84.3C366.7 82 383.3 81 400 78.5C416.7 76 433.3 72 450 74.3C466.7 76.7 483.3 85.3 500 87.3C516.7 89.3 533.3 84.7 550 79.8C566.7 75 583.3 70 600 68.5C616.7 67 633.3 69 650 72.8C666.7 76.7 683.3 82.3 700 84.3C716.7 86.3 733.3 84.7 750 81.8C766.7 79 783.3 75 800 73C816.7 71 833.3 71 850 71.3C866.7 71.7 883.3 72.3 891.7 72.7L900 73L900 101L891.7 101C883.3 101 866.7 101 850 101C833.3 101 816.7 101 800 101C783.3 101 766.7 101 750 101C733.3 101 716.7 101 700 101C683.3 101 666.7 101 650 101C633.3 101 616.7 101 600 101C583.3 101 566.7 101 550 101C533.3 101 516.7 101 500 101C483.3 101 466.7 101 450 101C433.3 101 416.7 101 400 101C383.3 101 366.7 101 350 101C333.3 101 316.7 101 300 101C283.3 101 266.7 101 250 101C233.3 101 216.7 101 200 101C183.3 101 166.7 101 150 101C133.3 101 116.7 101 100 101C83.3 101 66.7 101 50 101C33.3 101 16.7 101 8.3 101L0 101Z" fill="#171717"></path></svg>`;
});
const WaveBottom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg id="visual" viewBox="0 0 900 100"${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 94L8.3 93.2C16.7 92.3 33.3 90.7 50 89.8C66.7 89 83.3 89 100 85C116.7 81 133.3 73 150 69C166.7 65 183.3 65 200 64.7C216.7 64.3 233.3 63.7 250 65.3C266.7 67 283.3 71 300 71C316.7 71 333.3 67 350 66.7C366.7 66.3 383.3 69.7 400 74.3C416.7 79 433.3 85 450 87.3C466.7 89.7 483.3 88.3 500 85C516.7 81.7 533.3 76.3 550 72.8C566.7 69.3 583.3 67.7 600 70.2C616.7 72.7 633.3 79.3 650 79.2C666.7 79 683.3 72 700 72.8C716.7 73.7 733.3 82.3 750 85.3C766.7 88.3 783.3 85.7 800 85.2C816.7 84.7 833.3 86.3 850 84.5C866.7 82.7 883.3 77.3 891.7 74.7L900 72L900 0L891.7 0C883.3 0 866.7 0 850 0C833.3 0 816.7 0 800 0C783.3 0 766.7 0 750 0C733.3 0 716.7 0 700 0C683.3 0 666.7 0 650 0C633.3 0 616.7 0 600 0C583.3 0 566.7 0 550 0C533.3 0 516.7 0 500 0C483.3 0 466.7 0 450 0C433.3 0 416.7 0 400 0C383.3 0 366.7 0 350 0C333.3 0 316.7 0 300 0C283.3 0 266.7 0 250 0C233.3 0 216.7 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3 0 66.7 0 50 0C33.3 0 16.7 0 8.3 0L0 0Z" fill="#323232"></path><path d="M0 53L8.3 52.3C16.7 51.7 33.3 50.3 50 50C66.7 49.7 83.3 50.3 100 54.3C116.7 58.3 133.3 65.7 150 66.2C166.7 66.7 183.3 60.3 200 59.7C216.7 59 233.3 64 250 65C266.7 66 283.3 63 300 62.7C316.7 62.3 333.3 64.7 350 67C366.7 69.3 383.3 71.7 400 69.2C416.7 66.7 433.3 59.3 450 57.2C466.7 55 483.3 58 500 60.2C516.7 62.3 533.3 63.7 550 61C566.7 58.3 583.3 51.7 600 52C616.7 52.3 633.3 59.7 650 63.8C666.7 68 683.3 69 700 69.7C716.7 70.3 733.3 70.7 750 70C766.7 69.3 783.3 67.7 800 66.7C816.7 65.7 833.3 65.3 850 63.5C866.7 61.7 883.3 58.3 891.7 56.7L900 55L900 0L891.7 0C883.3 0 866.7 0 850 0C833.3 0 816.7 0 800 0C783.3 0 766.7 0 750 0C733.3 0 716.7 0 700 0C683.3 0 666.7 0 650 0C633.3 0 616.7 0 600 0C583.3 0 566.7 0 550 0C533.3 0 516.7 0 500 0C483.3 0 466.7 0 450 0C433.3 0 416.7 0 400 0C383.3 0 366.7 0 350 0C333.3 0 316.7 0 300 0C283.3 0 266.7 0 250 0C233.3 0 216.7 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3 0 66.7 0 50 0C33.3 0 16.7 0 8.3 0L0 0Z" fill="#292929"></path><path d="M0 45L8.3 42C16.7 39 33.3 33 50 29.8C66.7 26.7 83.3 26.3 100 27C116.7 27.7 133.3 29.3 150 29.3C166.7 29.3 183.3 27.7 200 29.2C216.7 30.7 233.3 35.3 250 38.5C266.7 41.7 283.3 43.3 300 44.5C316.7 45.7 333.3 46.3 350 43.8C366.7 41.3 383.3 35.7 400 36.8C416.7 38 433.3 46 450 45.7C466.7 45.3 483.3 36.7 500 31.7C516.7 26.7 533.3 25.3 550 27.2C566.7 29 583.3 34 600 35.3C616.7 36.7 633.3 34.3 650 32.7C666.7 31 683.3 30 700 31C716.7 32 733.3 35 750 39.2C766.7 43.3 783.3 48.7 800 49.8C816.7 51 833.3 48 850 43.8C866.7 39.7 883.3 34.3 891.7 31.7L900 29L900 0L891.7 0C883.3 0 866.7 0 850 0C833.3 0 816.7 0 800 0C783.3 0 766.7 0 750 0C733.3 0 716.7 0 700 0C683.3 0 666.7 0 650 0C633.3 0 616.7 0 600 0C583.3 0 566.7 0 550 0C533.3 0 516.7 0 500 0C483.3 0 466.7 0 450 0C433.3 0 416.7 0 400 0C383.3 0 366.7 0 350 0C333.3 0 316.7 0 300 0C283.3 0 266.7 0 250 0C233.3 0 216.7 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3 0 66.7 0 50 0C33.3 0 16.7 0 8.3 0L0 0Z" fill="#202020"></path><path d="M0 28L8.3 24.8C16.7 21.7 33.3 15.3 50 12.2C66.7 9 83.3 9 100 9.8C116.7 10.7 133.3 12.3 150 12.3C166.7 12.3 183.3 10.7 200 12.8C216.7 15 233.3 21 250 23.2C266.7 25.3 283.3 23.7 300 21.5C316.7 19.3 333.3 16.7 350 17.5C366.7 18.3 383.3 22.7 400 25.5C416.7 28.3 433.3 29.7 450 28C466.7 26.3 483.3 21.7 500 21.2C516.7 20.7 533.3 24.3 550 22.8C566.7 21.3 583.3 14.7 600 13.8C616.7 13 633.3 18 650 20.5C666.7 23 683.3 23 700 23.5C716.7 24 733.3 25 750 25.3C766.7 25.7 783.3 25.3 800 26.3C816.7 27.3 833.3 29.7 850 27.2C866.7 24.7 883.3 17.3 891.7 13.7L900 10L900 0L891.7 0C883.3 0 866.7 0 850 0C833.3 0 816.7 0 800 0C783.3 0 766.7 0 750 0C733.3 0 716.7 0 700 0C683.3 0 666.7 0 650 0C633.3 0 616.7 0 600 0C583.3 0 566.7 0 550 0C533.3 0 516.7 0 500 0C483.3 0 466.7 0 450 0C433.3 0 416.7 0 400 0C383.3 0 366.7 0 350 0C333.3 0 316.7 0 300 0C283.3 0 266.7 0 250 0C233.3 0 216.7 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3 0 66.7 0 50 0C33.3 0 16.7 0 8.3 0L0 0Z" fill="#171717"></path></svg>`;
});
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 768px){.skills.svelte-1o045i2 img.svelte-1o045i2{width:auto;height:34px !important}}.skills.svelte-1o045i2 img.svelte-1o045i2{width:auto;height:24px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(WaveTop, "WaveTop").$$render($$result, {}, {}, {})} <div class="bg-neutral-900">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
        default: () => {
          return `About`;
        }
      })} <div class="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-4">${validate_component(Card, "Card").$$render($$result, { class: "lg:w-1/2 flex-col" }, {}, {
        default: () => {
          return `${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
            default: () => {
              return `More about myself`;
            }
          })} <p class="text-base text-neutral-400 tracking-wider leading-relaxed" data-svelte-h="svelte-15juxqe">Back in 2013, I decided to create my own video game server for a game called Minecraft.
					(Legendary game btw) That&#39;s when I tumbled into the world of programming and the power of
					linux.
					<br><br>
					Fast-forward to today, I am self-taught software developer and started working professionally
					for 5 years now. Worked on many projects for a start-up, a big company and most importantly
					for myself. 😊
					<br><br>
					My main focus these days is about system design and architecture. Thinking about how to build
					a system that is scalable, maintainable and reliable.
					<br><br>
					In my free-time I&#39;ve been experimenting with various design patterns, cloud technologies and
					programming languages. I recently became a big fan of the Rust programming language and I am
					trying to use it as much as possible.
					<br><br></p>`;
        }
      })} ${validate_component(Card, "Card").$$render($$result, { class: "lg:w-1/2 flex-col gap-6" }, {}, {
        default: () => {
          return `${validate_component(SubHeading, "SubHeading").$$render($$result, {}, {}, {
            default: () => {
              return `Languages`;
            }
          })} <div class="skills flex flex-wrap gap-2 svelte-1o045i2" data-svelte-h="svelte-ajz0rj"><img src="https://img.shields.io/badge/-HTML-333333?style=for-the-badge&logo=HTML5&logoColor=E34F26" alt="HTML" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-CSS-333333?style=for-the-badge&logo=CSS3&logoColor=1572B6" alt="CSS" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Javascript-333333?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E" alt="JS" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Typescript-333333?style=for-the-badge&logo=TypeScript&logoColor=3178C6)" alt="TS" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Rust-333333?style=for-the-badge&logo=rust&logoColor=FFFFFF" alt="Rust" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Go-333333?style=for-the-badge&logo=Go&logoColor=00ADD8" alt="Go" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Swift-333333?style=for-the-badge&logo=Swift&logoColor=F05138" alt="Swift" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-C++-333333?style=for-the-badge&logo=Cplusplus&logoColor=00599C" alt="C++" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-C%23-333333?style=for-the-badge&logo=Csharp&logoColor=239120" alt="Csharp" class="rounded-3xl svelte-1o045i2" width="97" height="34"></div> ${validate_component(SubHeading, "SubHeading").$$render($$result, { class: "mt-4" }, {}, {
            default: () => {
              return `Technologies`;
            }
          })} <div class="skills flex flex-wrap gap-2 svelte-1o045i2" data-svelte-h="svelte-2j20wq"><img src="https://img.shields.io/badge/-React-333333?style=for-the-badge&logo=React&logoColor=61DAFB" alt="React" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Svelte-333333?style=for-the-badge&logo=Svelte&logoColor=FF3E00" alt="Svelte" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-NextJS-333333?style=for-the-badge&logo=Next.js&logoColor=FFFFFF" alt="Next" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Remix-333333?style=for-the-badge&logo=Remix&logoColor=FFFFFF" alt="Remix" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Express-333333?style=for-the-badge&logo=Express&logoColor=FFFFFF" alt="Express" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Unity-333333?style=for-the-badge&logo=Unity&logoColor=FFFFFF" alt="Unity" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Shopify-333333?style=for-the-badge&logo=Shopify&logoColor=7AB55C" alt="Shopify" class="rounded-3xl svelte-1o045i2" width="97" height="34"></div> ${validate_component(SubHeading, "SubHeading").$$render($$result, { class: "mt-4" }, {}, {
            default: () => {
              return `Database`;
            }
          })} <div class="skills flex flex-wrap gap-2 svelte-1o045i2" data-svelte-h="svelte-2z35m2"><img src="https://img.shields.io/badge/-MongoDB-333333?style=for-the-badge&logo=MongoDB&logoColor=47A248" alt="MongoDB" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-MySQL-333333?style=for-the-badge&logo=MySQL&logoColor=4479A1" alt="MySQL" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-PostgreSQL-333333?style=for-the-badge&logo=PostgreSQL&logoColor=4169E1" alt="PostgreSQL" class="rounded-3xl svelte-1o045i2" width="97" height="34"></div> ${validate_component(SubHeading, "SubHeading").$$render($$result, { class: "mt-4" }, {}, {
            default: () => {
              return `Environment`;
            }
          })} <div class="skills flex flex-wrap gap-2 svelte-1o045i2" data-svelte-h="svelte-917u8x"><img src="https://img.shields.io/badge/-Linux-333333?style=for-the-badge&logo=Linux&logoColor=FCC624" alt="Linux" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Pop! OS-333333?style=for-the-badge&logo=Pop!_OS&logoColor=4169E1" alt="PopOS" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Ubuntu-333333?style=for-the-badge&logo=Ubuntu&logoColor=E95420" alt="Ubuntu" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Neovim-333333?style=for-the-badge&logo=Neovim&logoColor=57A143" alt="Neovim" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Nginx-333333?style=for-the-badge&logo=Nginx&logoColor=57A143" alt="Nginx" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-GNUBash\\Zsh-333333?style=for-the-badge&logo=GNUBash&logoColor=4EAA25" alt="GNU Bash/Zsh" class="rounded-3xl svelte-1o045i2" width="97" height="34"> <img src="https://img.shields.io/badge/-Git-333333?style=for-the-badge&logo=Git&logoColor=F1502F" alt="Git" class="rounded-3xl svelte-1o045i2" width="97" height="34"></div>`;
        }
      })}</div>`;
    }
  })}</div> ${validate_component(WaveBottom, "WaveBottom").$$render($$result, {}, {}, {})}`;
});
const originalClass = "bg-gradient-to-r from-cyan-400 to-pink-500 hover:scale-95 font-bold rounded-full transition-all duration-300 px-8 py-4 {className}";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<button${add_attribute("class", twMerge(originalClass, className), 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  let $projects, $$unsubscribe_projects;
  const projects = writable([]);
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  const loading = writable(true);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_loading();
  $$unsubscribe_projects();
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
        default: () => {
          return `Personal Projects`;
        }
      })} <div class="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-4">${!$loading ? `${each($projects, (item) => {
        return `${validate_component(ProjectItem, "ProjectItem").$$render($$result, { item }, {}, {
          default: () => {
            return `${escape(item.excerpt)}`;
          }
        })}`;
      })}` : ``}</div> <a href="/projects">${validate_component(Button, "Button").$$render($$result, { class: "mt-10" }, {}, {
        default: () => {
          return `+ More`;
        }
      })}</a>`;
    }
  })}`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>`;
});
const Send = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path></svg>`;
});
const LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
});
const YouTube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>`;
});
const Twitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path></svg>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $message, $$unsubscribe_message;
  let $color, $$unsubscribe_color;
  let color = writable("");
  $$unsubscribe_color = subscribe(color, (value) => $color = value);
  let message = writable("");
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  $$unsubscribe_message();
  $$unsubscribe_color();
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
        default: () => {
          return `Contact`;
        }
      })} <div class="w-full flex justify-center items-center gap-4 mb-16">${validate_component(Card, "Card").$$render($$result, { class: "w-full" }, {}, {
        default: () => {
          return `${validate_component(SubHeading, "SubHeading").$$render($$result, { class: "text-cyan-200" }, {}, {
            default: () => {
              return `GET IN TOUCH!`;
            }
          })} <p class="text-2xl lg:text-6xl text-cyan-200 lg:leading-tight" data-svelte-h="svelte-1rjhruu">Do you have a question, an idea, or a project you need help with?
				<br>
				Contact me!</p> <div class="flex flex-wrap gap-4">${validate_component(Button, "Button").$$render($$result, { class: "w-fit text-sm" }, {}, {
            default: () => {
              return `${validate_component(Mail, "Mail").$$render($$result, {}, {}, {})} altanbagana@pm.me`;
            }
          })} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.github.com/altanbgn/",
              class: "hover:bg-neutral-800"
            },
            {},
            {
              default: () => {
                return `${validate_component(Github, "Github").$$render($$result, {}, {}, {})}`;
              }
            }
          )} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.linkedin.com/in/altanbgn/",
              class: "hover:bg-blue-800"
            },
            {},
            {
              default: () => {
                return `${validate_component(LinkedIn, "LinkedIn").$$render($$result, {}, {}, {})}`;
              }
            }
          )} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.youtube.com/altanbgn/",
              class: "hover:bg-red-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(YouTube, "YouTube").$$render($$result, {}, {}, {})}`;
              }
            }
          )} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.twitch.tv/altanbgn/",
              class: "hover:bg-purple-800"
            },
            {},
            {
              default: () => {
                return `${validate_component(Twitch, "Twitch").$$render($$result, {}, {}, {})}`;
              }
            }
          )} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.instagram.com/altanbgn.me/",
              class: "hover:bg-pink-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}`;
              }
            }
          )} ${validate_component(Social, "Social").$$render(
            $$result,
            {
              href: "https://www.twitter.com/altanbgn/",
              class: "hover:bg-cyan-500"
            },
            {},
            {
              default: () => {
                return `${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}`;
              }
            }
          )}</div>`;
        }
      })}</div> ${$message ? `<div class="w-full flex justify-between items-center rounded-[2rem] bg-neutral-600 py-6 px-8 mb-4"><p class="font-bold tracking-wide" style="${"color: " + escape($color, true) + ";"}">${escape($message)}</p> <button>${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</button></div>` : ``} <form class="w-full"><div class="w-full flex flex-col lg:flex-row justify-between items-center gap-4 mb-4" data-svelte-h="svelte-1y9pavj"><input type="text" name="name" placeholder="Name" autocomplete="off" class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"> <input type="email" name="email" placeholder="Email" autocomplete="off" class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"> <input type="text" name="subject" placeholder="Subject" autocomplete="off" class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"></div> <textarea name="message" placeholder="Message" rows="10" class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none resize-none mb-4 py-6 px-8"></textarea> ${validate_component(Button, "Button").$$render($$result, { class: "float-right" }, {}, {
        default: () => {
          return `${validate_component(Send, "Send").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-14i38x8">Send</span>`;
        }
      })}</form>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rfhivd_START -->${$$result.title = `<title>Home - Altanbagana</title>`, ""}<!-- HEAD_svelte-rfhivd_END -->`, ""} ${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
