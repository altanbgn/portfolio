<script lang="ts">
	import { writable } from "svelte/store"
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
	import Close from "$lib/icons/Close.svelte"
	import { supabase } from "$lib/supabaseClient"

	let loading = writable<boolean>(false)
	let color = writable<string>("")
	let message = writable<string>("")

	// eslint-disable-next-line
	const handleForm = async (event: any) => {
		loading.set(true)

		try {
			const response = await supabase.from("contacts").insert([
				{
					name: event.target.name.value,
					email: event.target.email.value,
					subject: event.target.subject.value,
					message: event.target.message.value
				}
			])

      event.target.name.value = ""
      event.target.email.value = ""
      event.target.subject.value = ""
      event.target.message.value = ""

			if (response.status === 201 && !response.error) {
				message.set("Thank you! I will get back to you soon.")
				color.set("#4ade80")
			} else {
        message.set("Something went wrong!")
        color.set("#f87171")
      }
		} catch {
			message.set("Something went wrong!")
			color.set("#f87171")
		} finally {
			loading.set(true)
		}
	}

	const handleClose = () => {
		message.set("")
	}
</script>

<Section>
	<Heading>Contact</Heading>

	<div class="w-full flex justify-center items-center gap-4 mb-16">
		<Card class="w-full">
			<SubHeading class="text-cyan-200">GET IN TOUCH!</SubHeading>
			<p class="text-2xl lg:text-6xl text-cyan-200 lg:leading-tight">
				Do you have a question, an idea, or a project you need help with?
				<br />
				Contact me!
			</p>

			<div class="flex flex-wrap gap-4">
				<Button class="w-fit text-sm">
					<Mail /> altanbagana@pm.me
				</Button>
				<Social href="https://www.github.com/altanbgn/" class="hover:bg-neutral-800">
					<Github />
				</Social>
				<Social href="https://www.linkedin.com/in/altanbgn/" class="hover:bg-blue-800">
					<LinkedIn />
				</Social>
				<Social href="https://www.youtube.com/altanbgn/" class="hover:bg-red-700">
					<YouTube />
				</Social>
				<Social href="https://www.twitch.tv/altanbgn/" class="hover:bg-purple-800">
					<Twitch />
				</Social>
				<Social href="https://www.instagram.com/altanbgn.me/" class="hover:bg-pink-700">
					<Instagram />
				</Social>
				<Social href="https://www.twitter.com/altanbgn/" class="hover:bg-cyan-500">
					<Twitter />
				</Social>
			</div>
		</Card>
	</div>

	{#if $message}
		<div class="w-full flex justify-between items-center rounded-[2rem] bg-neutral-600 py-6 px-8 mb-4">
			<p class="font-bold tracking-wide" style="color: {$color};">{$message}</p>
			<button on:click={handleClose}>
				<Close />
			</button>
		</div>
	{/if}

	<form class="w-full" on:submit|preventDefault={handleForm}>
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
		<Button class="float-right">
			<Send />
			<span>Send</span>
		</Button>
	</form>
</Section>
