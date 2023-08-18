<script lang="ts">
  export let classCustom = ""
</script>

<button class="bg-gradient-to-r from-cyan-400 to-pink-500 hover:scale-95 font-bold rounded-full transition-all duration-300 px-8 py-4 {classCustom}">
	<slot />
</button>
