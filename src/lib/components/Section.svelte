<script lang="ts">
  import { twMerge } from "tailwind-merge"

  let className = ""
  export { className as class }

  const originalClass = "container flex flex-col justify-center items-center h-auto mx-auto px-8 lg:px-32 py-16 lg:py-32"
</script>

<div class={twMerge(originalClass, className)}>
	<slot />
</div>
