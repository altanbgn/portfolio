<script lang="ts">
	import { tweened, spring } from "svelte/motion"
	import { backIn } from "svelte/easing"
  import avatar from "$assets/avatar.png"
	import ScrollIndicator from "$lib/icons/ScrollIndicator.svelte"

	const titleTween = tweened(0, { duration: 600, easing: backIn })
	const subTitleTween = tweened(0, { duration: 600, easing: backIn })
	const scrollIndicatorTween = tweened(0, { duration: 600, easing: backIn })

	const avatarSpring = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.15,
			damping: 0.2,
			precision: 0.01
		}
	)

	setTimeout(() => ($titleTween = 1), 400)
	setTimeout(() => ($subTitleTween = 1), 1200)
	setTimeout(() => avatarSpring.set({ x: 1, y: 1 }), 2400)
  setTimeout(() => ($scrollIndicatorTween = 1), 3000)
</script>

<div
	class="container flex flex-col lg:flex-row justify-center items-center h-screen mx-auto px-8 lg:px-32 gap-10 lg:gap-0"
>
	<div
		class="absolute -z-20 w-full h-screen top-0 left-0"
		style="
      background-image: radial-gradient(#525252 2px, transparent 0px);
      background-size: 48px 48px;
      background-position: 0 0;
      background-repeat: repeat;
      position: absolute;
    "
	>
		<div
			class="absolute -z-10 w-full h-96 top-0 left-0 bg-gradient-to-b from-black to-transparent"
		/>
		<div
			class="absolute -z-10 w-full h-96 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"
		/>
	</div>
	<div class="flex lg:basis-4/6 flex-col items-start">
		<p
			style="opacity: {$titleTween};"
			class="w-full text-2xl lg:text-4xl text-center lg:text-left text-neutral-200 font-display font-extrabold tracking-widest uppercase"
		>
			Hi, My name is
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
				Altanbagana
			</span>
		</p>
		<p style="opacity: {$subTitleTween};"
			class="text-sm lg:text-2xl text-center lg:text-left text-neutral-400 my-4"
		>
			I am a full stack developer with a strong passion for creating innovative and dynamic web
			applications. <br />(I use arch btw)
		</p>
	</div>
	<div class="flex order-first lg:order-none lg:basis-2/6 items-center justify-center">
		<img
			style="transform: scale({$avatarSpring.x}, {$avatarSpring.y});"
			class="h-auto bg-white rounded-full p-2 w-[180px] lg:w-[300px]"
      width="180px"
      height="300px"
			src={avatar}
			alt="Avatar"
		/>
	</div>
</div>

<ScrollIndicator
	class="top-[calc(100vh-100px)] lg:top-[calc(100vh-200px)]"
  style="transform: translateX(50%);"
/>
