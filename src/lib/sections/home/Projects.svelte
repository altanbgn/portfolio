<script lang="ts">
	import { onMount } from "svelte"
	import { writable } from "svelte/store"
	import Section from "$lib/components/Section.svelte"
	import Heading from "$lib/components/Heading.svelte"
	import ProjectItem from "$lib/components/ProjectItem.svelte"
	import Button from "$lib/components/Button.svelte"
	import { supabase } from "$lib/supabaseClient"
	import type { Project } from "$lib/types"

	const projects = writable<Array<Project>>([])
	const loading = writable<boolean>(true)

	onMount(async () => {
		try {
			const { data } = await supabase.from("projects").select("*")

			projects.set(data as Array<Project>)
		} finally {
			loading.set(false)
		}
	})
</script>

<Section>
	<Heading>Personal Projects</Heading>
	<div class="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
		{#if !$loading}
			{#each $projects as item}
				<ProjectItem {item}>{item.excerpt}</ProjectItem>
			{/each}
		{/if}
	</div>
	<a href="/projects">
		<Button class="mt-10">+ More</Button>
	</a>
</Section>
