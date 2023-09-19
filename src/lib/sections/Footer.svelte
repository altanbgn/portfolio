<script lang="ts">
	const linkClasses = "text-blue-500 hover:text-blue-700 hover:underline"
</script>

<div class="bg-neutral-800 p-4">
	<div class="container flex justify-center items-center mx-auto px-8 lg:px-32">
		<p class="text-sm tracking-wider text-neutral-400">
			Build with
			<a
        class={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        href="https://svelte.dev"
      >
				Svelte
			</a>,
			<a
				class={linkClasses}
				target="_blank"
				rel="noopener noreferrer"
				href="https://tailwindcss.com"
			>
				Tailwind CSS
			</a>
			and
			<a
        class={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        href="https://supabase.com"
      >
				Supabase
			</a>. Deployed with
			<a
        class={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        href="https://railway.app"
      >
				Railway
			</a>.
		</p>
	</div>
</div>
