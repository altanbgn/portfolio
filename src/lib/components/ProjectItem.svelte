<script lang="ts">
	import { fade } from "svelte/transition"
	import { goto } from "$app/navigation"

	export let title = ""
	export let imgSrc = ""
	export let imgAlt = ""
	export let className = ""
	export let path = ""

	let hovered = false
</script>

<div
	class="relative cursor-pointer min-h-[320px] md:min-h-[600px] rounded-[96px] overflow-hidden transition duration-300 hover:scale-95 {className}"
	role="none"
	on:click={() => goto("/products/" + path)}
	on:mouseenter={() => window.innerWidth >= 768 && (hovered = true)}
	on:mouseleave={() => window.innerWidth >= 768 && (hovered = false)}
>
	{#if hovered}
		<div class="absolute bottom-0 left-0 flex items-end w-full h-full z-10 pointer-events-none">
			<div
				transition:fade={{ duration: 300 }}
				class="absolute -z-10 w-full h-full bottom-0 left-0 opacity-40 bg-black"
			/>
			<div
        transition:fade={{ duration: 300 }}
        class="p-16"
      >
				<p class="text-3xl text-neutral-200 uppercase font-black mb-4 relative z-10">
					{title}
				</p>
				<p
					class="text-xl text-neutral-200 whitespace-normal overflow-hidden text-ellipsis relative z-10 mb-4"
				>
					<slot />
				</p>
			</div>
		</div>
	{/if}
	<div class="w-full h-[320px] md:h-[600px] flex justify-center items-center overflow-hidden bg-zinc-900" >
		<img
			class="w-full h-full object-cover transition duration-300"
			src={imgSrc}
			alt={imgAlt}
		/>
	</div>
</div>
