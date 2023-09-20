<script lang="ts">
	import { onMount } from "svelte"
  import { writable } from "svelte/store"
	import { marked } from "marked"
  import dayjs from "dayjs"
  import { page } from "$app/stores"
	import { supabase } from "$lib/supabaseClient"
  import Layout from "$lib/components/Layout.svelte"
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

			blog.set(data as Blog)
		} finally {
			loading.set(false)
		}
	})
</script>

<Layout class="lg:px-96">
  {#if !$loading}
    <img src={!$loading ? $blog.featured_image : ""} alt="featured" class="mb-16" />
    <p class="text-2xl lg:text-6xl text-center font-bold mb-16">{!$loading ? $blog?.title : ""}</p>
    <p class="text-neutral-400 mb-16">{$blog?.created_at ? dayjs($blog?.created_at).format("DD MMMM YYYY"): ""}</p>
    <div class="prose lg:prose-xl prose-invert prose-pre:bg-neutral-800 max-w-none text-white">
      <!-- eslint-disable-next-line -->
      {@html !$loading ? marked($blog?.body) : ""}
    </div>
  {/if}
</Layout>
