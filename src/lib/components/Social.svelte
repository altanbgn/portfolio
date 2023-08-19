<script lang="ts">
  import { twMerge } from "tailwind-merge"

  export let className = ""
  export let href = ""

  const originalClass = "bg-neutral-700 w-16 h-16 fill-white stroke-none hover:scale-90 p-4 rounded-full transition duration-300 {className}"
</script>

<a href={href} class={twMerge(originalClass, className)} target="_blank" rel="noopener noreferrer">
  <slot/>
</a>
