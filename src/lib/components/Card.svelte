<script lang="ts">
  import { twMerge } from "tailwind-merge"

  let className = ""
  export let bgColor = "#262626"
  export { className as class }

  const originalClass = "h-fit flex flex-col gap-10 p-10 lg:p-16 rounded-[2rem] lg:rounded-[4rem]"
</script>

<div
  class={twMerge(originalClass, className)}
  style="background-color: {bgColor};"
>
	<slot />
</div>
