<script lang="ts">
  import Section from "$lib/components/Section.svelte"
  import Heading from "$lib/components/Heading.svelte"
	import ProjectItem from "$lib/components/ProjectItem.svelte"
  import ProjectsData from "$data/projects.json"
  import Button from "$lib/components/Button.svelte";
</script>

<Section>
  <Heading>Personal Projects</Heading>
	<div class="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
		{#each ProjectsData as item}
			<ProjectItem {item}>
				{item.introduction}
			</ProjectItem>
		{/each}
	</div>
  <Button className="mt-10"> + More </Button>
</Section>
