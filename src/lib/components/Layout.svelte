<script lang="ts">
  import { twMerge } from "tailwind-merge"

  let className = ""
  export { className as class }

  let originalClass = "container mx-auto px-8 lg:px-32 my-32 lg:my-48"
</script>

<div class={twMerge(originalClass, className)}>
  <slot />
</div>
