<script lang="ts">
  export let classCustom = ""
</script>

<button class="bg-neutral-700 w-16 h-16 fill-white stroke-none hover:scale-90 p-4 rounded-full transition duration-300 {classCustom}">
  <slot/>
</button>
