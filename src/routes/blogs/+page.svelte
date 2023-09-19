<script lang="ts">
	import { onMount } from "svelte"
	import { writable } from "svelte/store"
	import { supabase } from "$lib/supabaseClient"
	import type { Blog } from "$lib/types"
	import BlogItem from "$lib/components/BlogItem.svelte"
	import Heading from "$lib/components/Heading.svelte"

	const blogs = writable<Blog[]>([])

	onMount(async () => {
		const { data } = await supabase.from("blogs").select("*")

		blogs.set(data || [])
	})
</script>

<svelte:head>
	<title>Blogs - Altanbagana</title>
</svelte:head>

<div class="container mx-auto px-8 lg:px-32 my-32 lg:my-48">
	<Heading>Blogs</Heading>
	<div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
		{#each $blogs as item}
			<BlogItem {item} />
		{/each}
	</div>
</div>
