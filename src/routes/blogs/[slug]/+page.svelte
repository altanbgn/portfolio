<script lang="ts">
	import { onMount } from "svelte"
	import { marked } from "marked"
	import { writable } from "svelte/store"
  import { page } from "$app/stores"
	import { supabase } from "$lib/supabaseClient"
  // import lazyLoad from "$lib/lazyLoad"
  import type { Blog } from "$lib/types"

	const blog = writable<Blog>()
	const loading = writable<boolean>(true)

	onMount(async () => {
		try {
			const { data } = await supabase
				.from("blogs")
				.select("*")
				.eq("slug", $page.params.slug)
				.single()

			blog.set(data)
		} finally {
			loading.set(false)
		}
	})
</script>

<div class="container px-6 lg:px-96 mx-auto my-32 lg:my-48">
  <img src={!$loading ? $blog.featured_image : ""} alt="featured" class="mb-16" />
	<p class="text-2xl lg:text-6xl text-center font-bold mb-16">{!$loading ? $blog?.title : "Loading..."}</p>
	<div class="prose lg:prose-xl prose-invert prose-pre:bg-neutral-800 max-w-none text-white">
    <!-- eslint-disable-next-line -->
		{@html !$loading ? marked($blog?.body) : ""}
	</div>
</div>
