<script lang="ts">
  export let className = ""
</script>

<button class="bg-neutral-700 w-16 h-16 fill-white stroke-none hover:scale-90 p-4 rounded-full transition duration-300 {className}">
  <slot/>
</button>
