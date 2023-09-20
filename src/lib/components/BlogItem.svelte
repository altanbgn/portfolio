<script lang="ts">
  import dayjs from "dayjs"
  import { goto } from "$app/navigation"
  import type { Blog } from "$lib/types/index.ts"

  export let item: Blog

</script>

<div
	class="relative flex flex-col cursor-pointer w-full overflow-hidden gap-4"
	role="none"
	on:click={() => goto("/blogs/" + item.slug)}
>
  <img class="mb-6" src={item.featured_image} alt={item.title} width="720" height="480" />
  <p class="text-2xl font-bold">{item.title}</p>
  <p class="line-clamp-3">{item.excerpt}</p>
  <p class="text-neutral-400">{dayjs(item.created_at).format("DD MMMM YYYY")}</p>
</div>
