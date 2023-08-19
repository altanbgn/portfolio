<script lang="ts">
  import { page } from "$app/stores"

  export let href = "/"
</script>

<a
  href={href}
  class={`font-bold capitalize rounded-full hover:tracking-widest transition-all duration-300 px-6 py-2
    ${$page.url.pathname.includes(
      href.length !== 1
        ? href.slice(1, href.length)
        : $page.url.pathname === href
          ? ""
          : "!"
    )
      ? "bg-cyan-500"
      : ""}
  `}
>
  <slot/>
</a>
