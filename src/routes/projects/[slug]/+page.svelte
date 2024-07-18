<script lang="ts">
  import { onMount } from "svelte"
  import { writable } from "svelte/store"
  import { page } from "$app/stores"
  import { supabase } from "$lib/supabaseClient"
  import Layout from "$lib/components/Layout.svelte"
  import Social from "$lib/components/Social.svelte"
  import Github from "$lib/icons/Github.svelte"
  import Web from "$lib/icons/Web.svelte"
  import type { Project } from "$lib/types"

  const project = writable<Project>()
  const loading = writable<boolean>(true)

  onMount(async () => {
    try {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", $page.params.slug)
        .single()

      project.set(data)
    } finally {
      loading.set(false)
    }
  })
</script>

<Layout class="grid grid-cols-1 lg:grid-cols-2 gap-20">
  {#if !$loading}
    <img src={$project.featured_image || ""} alt="featured" class="rounded-3xl" />
    <div class="flex flex-col gap-8">
      <p class="text-2xl lg:text-3xl font-bold">{$project?.title || ""}</p>
      <p>{$project?.body || ""}</p>
      <p>
        <span class="font-bold uppercase tracking-widest">Technologies : </span>
        {$project?.technologies?.join(", ") || ""}
      </p>
      <div class="flex flex-wrap items-center gap-4">
        {#if $project?.links?.github}
          <Social href={$project.links.github} class="hover:bg-neutral-800">
            <Github />
          </Social>
        {/if}
        {#if $project?.links?.website}
          <Social href={$project.links.website} class="hover:bg-neutral-800 ">
            <Web />
          </Social>
        {/if}
      </div>
    </div>
  {/if}
</Layout>
