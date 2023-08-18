<script lang="ts">
  export let bgColor = "#262626"
  export let className = ""
</script>

<div
  class="h-fit flex flex-col gap-10 p-10 lg:p-16 rounded-[2rem] lg:rounded-[4rem] {className}"
  style="background-color: {bgColor};"
>
	<slot />
</div>
