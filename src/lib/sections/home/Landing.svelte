<script lang="ts">
  import { tweened, spring } from "svelte/motion"
  import { backIn } from "svelte/easing";

  const titleTween = tweened(0, { duration: 600, easing: backIn });
  const subTitleTween = tweened(0, { duration: 600, easing: backIn });

  const avatarSpring = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.15,
      damping: 0.075,
      precision: 0.01,
    }
  );

  setTimeout(() => $titleTween = 1, 400)
  setTimeout(() => $subTitleTween = 1, 1200)
  setTimeout(() => avatarSpring.set({ x: 1, y: 1 }), 2400)
</script>

<div class="container flex justify-center items-center h-[calc(100vh-120px)] mx-auto px-32 pb-32">
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
    <div class="absolute -z-10 w-full h-96 top-0 left-0 bg-gradient-to-b from-neutral-900 to-transparent" />
    <div class="absolute -z-10 w-full h-96 bottom-0 left-0 bg-gradient-to-t from-neutral-900 to-transparent" />
  </div>

	<div class="flex basis-4/6 flex-col items-start justify-center">
		<p style="opacity: {$titleTween};" class="text-4xl text-neutral-300 font-display font-extrabold tracking-widest uppercase">
			Hi, My name is <span class="text-cyan-400">Altanbagana</span>
		</p>
		<p style="opacity: {$subTitleTween};" class="my-4 text-2xl">
			I am a full stack developer with a strong passion for creating innovative and dynamic web
			applications. <br/>(I use vim btw)
		</p>
	</div>
	<div class="flex basis-2/6 items-center justify-center">
		<img
      style="transform: scale({$avatarSpring.x}, {$avatarSpring.y});"
			class="h-auto bg-white rounded-full p-2 w-[300px]"
			src="avatar.png"
			alt="Avatar"
		/>
	</div>
</div>
