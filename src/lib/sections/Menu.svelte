<script lang="ts">
	import { fly } from "svelte/transition"
	import { quintInOut } from "svelte/easing"
	import Bars from "$lib/icons/Bars.svelte"
	import Close from "$lib/icons/Close.svelte"
	import MenuItem from "$lib/components/MenuItem.svelte"
  import avatar from "$assets/avatar.webp"

	let isMenuOpen = false
	let scrollY = 0
</script>

<svelte:window bind:scrollY />

<!-- DESKTOP -->
<nav
	id="desktopNav"
	class={`fixed hidden lg:flex justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10 rounded-full gap-2 my-10 px-8 py-2
    ${scrollY <= 100 ? "bg-none" : "bg-neutral-600/40"}
  backdrop-blur-xl transition duration-300`}
>
	<MenuItem>home</MenuItem>
	<MenuItem href="/blogs">blogs</MenuItem>
	<MenuItem href="/projects">projects</MenuItem>
</nav>

<!-- MOBILE -->
<nav class="flex lg:hidden absolute top-0 z-10 w-screen items-center justify-between my-4">
	<a href="/" class="font-bold rounded-full px-8 py-4">
		<img src={avatar} width={64} height={64} alt="logo" />
	</a>
	<button aria-label="menu" class="px-8 py-4" on:click={() => (isMenuOpen = true)}>
		<Bars />
	</button>
</nav>

{#if isMenuOpen === true}
	<div
		class="lg:hidden absolute w-screen min-h-screen bg-black top-0 left-0 z-50 px-8"
		transition:fly={{ duration: 1200, x: window.innerWidth, opacity: 1, easing: quintInOut }}
	>
		<div class="flex justify-between items-center w-full my-4 mb-10">
			<a on:click={() => (isMenuOpen = false)} href="/" class="font-bold rounded-full py-4">
        <img src={avatar} width={64} height={64} alt="logo" />
			</a>
			<button aria-label="menu" class="py-4 px-4 pr-0" on:click={() => (isMenuOpen = false)}>
				<Close />
			</button>
		</div>
		<div class="flex flex-col gap-10">
			<a
				on:click={() => (isMenuOpen = false)}
				href="/blogs"
				class="text-4xl uppercase font-secondary font-extrabold"
			>
				Blogs
			</a>
			<a
				on:click={() => (isMenuOpen = false)}
				href="/projects"
				class="text-4xl uppercase font-secondary font-extrabold"
			>
				Projects
			</a>
		</div>
	</div>
{/if}
