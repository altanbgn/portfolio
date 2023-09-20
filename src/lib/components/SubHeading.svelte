<script lang="ts">
  import { twMerge } from "tailwind-merge"

  let className = ""

  export { className as class }

  const originalClass = "tracking-widest uppercase {className}"
</script>

<p class={twMerge(originalClass, className)}><slot /></p>
