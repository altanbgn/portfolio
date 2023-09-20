<script lang="ts">
	import { onMount } from "svelte"
	import { writable } from "svelte/store"
	import { supabase } from "$lib/supabaseClient"
	import type { Project } from "$lib/types"
  import Layout from "$lib/components/Layout.svelte"
  import Heading from "$lib/components/Heading.svelte"
  import ProjectItem from "$lib/components/ProjectItem.svelte"

	const projects = writable<Project[]>([])

	onMount(async () => {
		const { data } = await supabase.from("projects").select("*")

		projects.set(data || [])
	})
</script>

<svelte:head>
  <title>Projects - Altanbagana</title>
</svelte:head>

<Layout>
	<Heading>Projects</Heading>
	<div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
		{#each $projects as item}
			<ProjectItem {item} />
		{/each}
	</div>
</Layout>
