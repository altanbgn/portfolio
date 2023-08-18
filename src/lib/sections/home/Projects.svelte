<script lang="ts">
	import ProjectsData from "$data/projects.json"
	import ProjectItem from "$lib/components/ProjectItem.svelte"
</script>

<div class="container flex flex-col justify-center items-center mx-auto mb-64 h-auto px-8 md:px-32">
	<p
		class="w-full text-center text-4xl md:text-8xl font-display font-black tracking-widest uppercase mb-16 md:mb-36 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500"
	>
		Projects
	</p>
	<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
		{#each ProjectsData as item}
			<ProjectItem title={item.title} imgSrc={item.imgSrc} imgAlt={item.imgAlt} path={item.path}>
				{item.introduction}
			</ProjectItem>
		{/each}
	</div>
</div>
