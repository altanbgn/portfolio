<script lang="ts">
	import Section from "$lib/components/Section.svelte"
	import Heading from "$lib/components/Heading.svelte"
	import Card from "$lib/components/Card.svelte"
	import SubHeading from "$lib/components/SubHeading.svelte"

	import WaveTop from "$lib/icons/WaveTop.svelte"
	import WaveBottom from "$lib/icons/WaveBottom.svelte"
</script>

<WaveTop />
<div class="bg-neutral-900">
	<Section>
		<Heading>About</Heading>
		<div class="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-4">
			<Card class="lg:w-1/2 flex-col">
				<SubHeading>More about myself</SubHeading>
				<p class="text-base text-neutral-400 tracking-wider leading-relaxed">
					Back in 2013, I decided to create my own video game server for a game called Minecraft.
					(Legendary game btw) That's when I tumbled into the world of programming and the power of
					linux.
					<br /><br />
					Fast-forward to today, I am self-taught software developer and started working professionally
					for 5 years now. Worked on many projects for a start-up, a big company and most importantly
					for myself. 😊
					<br /><br />
					My main focus these days is about system design and architecture. Thinking about how to build
					a system that is scalable, maintainable and reliable.
					<br /><br />
					In my free-time I've been experimenting with various design patterns, cloud technologies and
					programming languages. I recently became a big fan of the Rust programming language and I am
					trying to use it as much as possible.
					<br /><br />
				</p>
			</Card>
			<Card class="lg:w-1/2 flex-col gap-6">
				<SubHeading>Languages</SubHeading>
				<div class="skills flex flex-wrap gap-2">
					<img
						src="https://img.shields.io/badge/-HTML-333333?style=for-the-badge&logo=HTML5&logoColor=E34F26"
						alt="HTML"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-CSS-333333?style=for-the-badge&logo=CSS3&logoColor=1572B6"
						alt="CSS"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-JS/TS-333333?style=for-the-badge&logo=TypeScript&logoColor=3178C6"
						alt="JS/TS"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Rust-333333?style=for-the-badge&logo=rust&logoColor=FFFFFF"
						alt="Rust"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Go-333333?style=for-the-badge&logo=Go&logoColor=00ADD8"
						alt="Go"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Swift-333333?style=for-the-badge&logo=Swift&logoColor=F05138"
						alt="Swift"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-C/C++-333333?style=for-the-badge&logo=Cplusplus&logoColor=00599C"
						alt="C++"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-C%23-333333?style=for-the-badge&logo=Csharp&logoColor=239120"
						alt="Csharp"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Lua-333333?style=for-the-badge&logo=Lua&logoColor=3B82F6"
						alt="Csharp"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
				</div>
				<SubHeading class="mt-4">Technologies</SubHeading>
				<div class="skills flex flex-wrap gap-2">
					<img
						src="https://img.shields.io/badge/-React-333333?style=for-the-badge&logo=React&logoColor=61DAFB"
						alt="React"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Svelte-333333?style=for-the-badge&logo=Svelte&logoColor=FF3E00"
						alt="Svelte"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-NextJS-333333?style=for-the-badge&logo=Next.js&logoColor=FFFFFF"
						alt="Next"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Remix-333333?style=for-the-badge&logo=Remix&logoColor=FFFFFF"
						alt="Remix"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Express-333333?style=for-the-badge&logo=Express&logoColor=FFFFFF"
						alt="Express"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Unity-333333?style=for-the-badge&logo=Unity&logoColor=FFFFFF"
						alt="Unity"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Shopify-333333?style=for-the-badge&logo=Shopify&logoColor=7AB55C"
						alt="Shopify"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
				</div>
				<SubHeading class="mt-4">Database</SubHeading>
				<div class="skills flex flex-wrap gap-2">
					<img
						src="https://img.shields.io/badge/-MongoDB-333333?style=for-the-badge&logo=MongoDB&logoColor=47A248"
						alt="MongoDB"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
          <img
            src="https://img.shields.io/badge/-PostgreSQL-333333?style=for-the-badge&logo=PostgreSQL&logoColor=4169E1"
            alt="PostgreSQL"
            class="rounded-3xl"
            width="97"
            height="34"
          />
					<img
						src="https://img.shields.io/badge/-Firebase-333333?style=for-the-badge&logo=Firebase&logoColor=DD2C00"
						alt="Firebase"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Supabase-333333?style=for-the-badge&logo=Supabase&logoColor=46DDA1"
						alt="Supabase"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
				</div>
				<SubHeading class="mt-4">Environment</SubHeading>
				<div class="skills flex flex-wrap gap-2">
					<img
						src="https://img.shields.io/badge/-Arch Linux-333333?style=for-the-badge&logo=ArchLinux&logoColor=1793D1"
						alt="Arch Linux"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Neovim-333333?style=for-the-badge&logo=Neovim&logoColor=57A143"
						alt="Neovim"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Nginx-333333?style=for-the-badge&logo=Nginx&logoColor=57A143"
						alt="Nginx"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-GNUBash\Zsh-333333?style=for-the-badge&logo=GNUBash&logoColor=4EAA25"
						alt="GNU Bash/Zsh"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
					<img
						src="https://img.shields.io/badge/-Git-333333?style=for-the-badge&logo=Git&logoColor=F1502F"
						alt="Git"
						class="rounded-3xl"
						width="97"
						height="34"
					/>
				</div>
			</Card>
		</div>
	</Section>
</div>
<WaveBottom />

<style>
	@media (min-width: 768px) {
		.skills img {
			width: auto;
			height: 34px !important;
		}
	}

	.skills img {
		width: auto;
		height: 24px;
	}
</style>
