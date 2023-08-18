<script lang="ts">
	import { fly } from "svelte/transition"
	import { quintInOut } from "svelte/easing"
	import Bars from "$lib/icons/Bars.svelte"
	import Close from "$lib/icons/Close.svelte"

	let isMenuOpen = false
</script>

<!-- DESKTOP -->
<nav class="hidden md:flex top-0 z-10 w-screen items-center justify-center gap-10 my-4">
	<a href="/" class="font-bold rounded-full px-8 py-4">
		<img src="images/avatar.png" width={64} height={64} alt="logo" />
	</a>
	<a href="/blogs" class="font-bold rounded-full px-8 py-4"> Blogs </a>
	<a href="/buy-me-a-coffee" class="font-bold rounded-full px-8 py-4"> Buy me a coffee </a>
	<a
		href="/resume.pdf"
		class="bg-gradient-to-r from-cyan-400 to-pink-500 font-bold rounded-full px-8 py-4"
		target="_blank"
		rel="noopener noreferrer"
	>
		Resume
	</a>
</nav>

<!-- MOBILE -->
<nav class="flex md:hidden top-0 z-10 w-screen items-center justify-between my-4">
	<a href="/" class="font-bold rounded-full px-8 py-4">
		<img src="images/avatar.png" width={64} height={64} alt="logo" />
	</a>
	<button class="px-8 py-4" on:click={() => (isMenuOpen = true)}>
		<Bars />
	</button>
</nav>

{#if isMenuOpen === true}
	<div
		class="md:hidden absolute w-screen min-h-screen bg-black top-0 left-0 z-50 px-8"
		transition:fly={{ duration: 1200, x: window.innerWidth, opacity: 1, easing: quintInOut }}
	>
		<div class="flex justify-between items-center w-full my-4 mb-10">
			<a href="/" class="font-bold rounded-full py-4">
				<img src="images/avatar.png" width={64} height={64} alt="logo" />
			</a>
			<button class="py-4" on:click={() => (isMenuOpen = false)}>
				<Close />
			</button>
		</div>
		<div class="flex flex-col gap-10">
			<a href="/blogs" class="text-4xl uppercase font-secondary font-extrabold"> Blogs </a>
			<a href="/contact" class="text-4xl uppercase font-secondary font-extrabold"> Contact </a>
		</div>
	</div>
{/if}
