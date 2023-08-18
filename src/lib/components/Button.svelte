<script lang="ts">
	export let onClick = () => {
		return
	}
	export let inline = false
	export let className = ""
</script>

<button
	on:click={onClick}
	class={`
      rounded-full px-10 py-4 font-bold text-white transition duration-200
      ${
				inline
					? `border-2 border-cyan-500 text-cyan-500 hover:border-cyan-700 hover:text-cyan-700`
					: `bg-gradient-to-r from-cyan-400 to-pink-500`
			}
      ${className}
    `}
>
	<slot />
</button>
