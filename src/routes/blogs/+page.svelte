<script lang="ts">
	import { onMount } from "svelte"
	import { writable } from "svelte/store"
	import { supabase } from "$lib/supabaseClient"
	import type { Blog } from "$lib/types"
	import BlogItem from "$lib/components/BlogItem.svelte"
	import Heading from "$lib/components/Heading.svelte"
	import Layout from "$lib/components/Layout.svelte"

	const blogs = writable<Blog[]>([])

	onMount(async () => {
		const { data } = await supabase.from("blogs").select("*")

		blogs.set(data || [])
	})
</script>

<svelte:head>
	<title>Blogs - Altanbagana</title>
</svelte:head>

<Layout>
	<Heading>Blogs</Heading>
	<div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
		{#each $blogs as item}
			<BlogItem {item} />
		{/each}
	</div>
</Layout>
