<script lang="ts">
	import { fade } from "svelte/transition"
	import { goto } from "$app/navigation"
  import type { Project } from "$lib/types/index.ts"

  export let item: Project = {
    title: "",
    excerpt: "",
    body: "",
    slug: "",
    technologies: [],
    links: {
      website: "",
      github: ""
    },
    background_color: "",
    featured_image: ""
  }

	let hovered = false
</script>

<div
	class="relative cursor-pointer w-full rounded-[4rem] overflow-hidden transition duration-300 hover:scale-95"
	role="none"
	on:click={() => goto("/projects/" + item.slug)}
	on:mouseenter={() => window.innerWidth >= 768 && (hovered = true)}
	on:mouseleave={() => window.innerWidth >= 768 && (hovered = false)}
>
	{#if hovered}
		<div class="absolute bottom-0 left-0 flex items-end w-full h-full z-10 pointer-events-none">
			<div
				transition:fade={{ duration: 300 }}
				class="absolute -z-10 w-full h-full bottom-0 left-0 opacity-75 bg-black"
			/>
			<div
        transition:fade={{ duration: 300 }}
        class="px-16 py-8"
      >
				<p class="text-3xl tracking-wider uppercase font-black mb-4 relative z-10">
					{item.title}
				</p>
				<p
					class="relative text-xl text-ellipsis line-clamp-3 whitespace-normal overflow-hidden tracking-wider z-10 mb-4"
				>
          {item.body}
				</p>
			</div>
		</div>
	{/if}
	<div
    class="w-full h-full flex justify-center items-center overflow-hidden"
    style="background-color: {item.background_color};"
  >
		<img
			class="h-96 object-contain transition duration-300"
			src={item.featured_image}
			alt={item.title}
      width="632"
      height="384"
		/>
	</div>
</div>
