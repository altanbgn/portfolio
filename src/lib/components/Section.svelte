<script lang="ts">
  export let className = ""
</script>

<div class="container flex flex-col justify-center items-center h-auto mx-auto px-8 lg:px-32 py-16 lg:py-32 {className}">
	<slot />
</div>
