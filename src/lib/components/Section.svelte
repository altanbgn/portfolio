<script lang="ts">
  export let classCustom = ""
</script>

<div
	class="container flex flex-col justify-center items-center h-auto mx-auto px-8 lg:px-32 py-16 lg:py-32 {classCustom}"
>
	<slot />
</div>
