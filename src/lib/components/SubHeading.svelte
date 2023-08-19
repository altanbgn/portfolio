<script lang="ts">
  import { twMerge } from "tailwind-merge"

  export let className = ""

  const originalClass = "tracking-widest uppercase {className}"
</script>

<p class={twMerge(originalClass, className)}><slot /></p>
