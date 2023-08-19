<script lang="ts">
	import Section from "$lib/components/Section.svelte"
	import Heading from "$lib/components/Heading.svelte"
  import SubHeading from "$lib/components/SubHeading.svelte"
	import Button from "$lib/components/Button.svelte"
	import Card from "$lib/components/Card.svelte"
  import Social from "$lib/components/Social.svelte"

	import Mail from "$lib/icons/Mail.svelte"
  import Send from "$lib/icons/Send.svelte"
  import Instagram from "$lib/icons/Instagram.svelte"
  import Twitter from "$lib/icons/Twitter.svelte"
  import Github from "$lib/icons/Github.svelte"
  import LinkedIn from "$lib/icons/LinkedIn.svelte"
  import YouTube from "$lib/icons/YouTube.svelte"
  import Twitch from "$lib/icons/Twitch.svelte"
</script>

<Section>
	<Heading>Contact</Heading>

	<div class="w-full flex justify-center items-center gap-4 mb-4">
		<Card className="w-full">
      <SubHeading className="text-cyan-200">GET IN TOUCH!</SubHeading>
			<p class="text-2xl lg:text-6xl text-cyan-200 lg:leading-tight">
				Do you have a question, an idea, or a project you need help with?
				<br />
				Contact me!
			</p>

      <div class="flex flex-wrap gap-4">
        <Button className="w-fit text-sm">
          <Mail /> altanbagana@pm.me
        </Button>
        <Social href="https://www.github.com/altanbgn/" className="hover:bg-neutral-800"><Github /></Social>
        <Social href="https://www.linkedin.com/in/altanbgn/" className="hover:bg-blue-800"><LinkedIn /></Social>
        <Social href="https://www.youtube.com/altanbgn/" className="hover:bg-red-700"><YouTube /></Social>
        <Social href="https://www.twitch.tv/altanbgn/"className="hover:bg-purple-800"><Twitch /></Social>
        <Social href="https://www.instagram.com/altanbgn.me/" className="hover:bg-pink-700"><Instagram /></Social>
        <Social href="https://www.twitter.com/altanbgn/"className="hover:bg-cyan-500"><Twitter /></Social>
      </div>
		</Card>
	</div>

	<div class="w-full flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
		<input
			type="text"
			name="name"
			placeholder="Name"
			autocomplete="off"
			class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"
		/>
		<input
			type="email"
			name="email"
			placeholder="Email"
			autocomplete="off"
			class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"
		/>
		<input
			type="text"
			name="subject"
			placeholder="Subject"
			autocomplete="off"
			class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none py-6 px-8"
		/>
	</div>
	<textarea
		name="message"
		placeholder="Message"
		rows="10"
		class="w-full rounded-[2rem] bg-neutral-800 outline-none border-none resize-none mb-4 py-6 px-8"
	/>
	<div class="w-full flex justify-end items-center gap-4 mb-4">
		<Button>
			<Send />
			<span>Send</span>
		</Button>
	</div>
</Section>
