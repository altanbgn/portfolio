<script lang="ts">
  import { twMerge } from "tailwind-merge"

  export let className = ""

  const originalClass = "bg-gradient-to-r from-cyan-400 to-pink-500 hover:scale-95 font-bold rounded-full transition-all duration-300 px-8 py-4 {className}"
</script>

<button class={twMerge(originalClass, className)}>
	<slot />
</button>
