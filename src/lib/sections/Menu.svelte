<script lang="ts">
	import { fly } from "svelte/transition"
	import { quintInOut } from "svelte/easing"
	import Bars from "$lib/icons/Bars.svelte"
	import Close from "$lib/icons/Close.svelte"

	let isMenuOpen = false
</script>

<!-- DESKTOP -->
<nav class="hidden lg:flex absolute top-0 z-10 w-screen items-center justify-center gap-10 my-10">
	<a href="/" class="font-bold rounded-full">
		<img class="bg-white rounded-full p-1" src="avatar.png" width={64} height={64} alt="logo" />
	</a>
	<a href="/blogs" class="font-bold rounded-full py-4"> Blogs </a>
	<a href="/projects" class="font-bold rounded-full py-4"> Projects </a>
</nav>

<!-- MOBILE -->
<nav class="flex lg:hidden absolute top-0 z-10 w-screen items-center justify-between my-4">
	<a href="/" class="font-bold rounded-full px-8 py-4">
		<img src="avatar.png" width={64} height={64} alt="logo" />
	</a>
	<button class="px-8 py-4" on:click={() => (isMenuOpen = true)}>
		<Bars />
	</button>
</nav>

{#if isMenuOpen === true}
	<div
		class="lg:hidden absolute w-screen min-h-screen bg-black top-0 left-0 z-50 px-8"
		transition:fly={{ duration: 1200, x: window.innerWidth, opacity: 1, easing: quintInOut }}
	>
		<div class="flex justify-between items-center w-full my-4 mb-10">
			<a href="/" class="font-bold rounded-full py-4">
				<img src="avatar.png" width={64} height={64} alt="logo" />
			</a>
			<button class="px-8 py-4" on:click={() => (isMenuOpen = false)}>
				<Close />
			</button>
		</div>
		<div class="flex flex-col gap-10">
			<a href="/blogs" class="text-4xl uppercase font-secondary font-extrabold"> Blogs </a>
			<a href="/blogs" class="text-4xl uppercase font-secondary font-extrabold"> Blogs </a>
		</div>
	</div>
{/if}
