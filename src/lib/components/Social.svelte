<script lang="ts">
  import { twMerge } from "tailwind-merge"

  export let className = ""

  const originalClass = "bg-neutral-700 w-16 h-16 fill-white stroke-none hover:scale-90 p-4 rounded-full transition duration-300 {className}"
</script>

<button class={twMerge(originalClass, className)}>
  <slot/>
</button>
