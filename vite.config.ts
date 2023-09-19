import path from "path"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"
import { splitVendorChunkPlugin } from "vite"

export default defineConfig({
	plugins: [sveltekit(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      $data: path.resolve("src/data/"),
      $lib: path.resolve("src/lib/"),
    }
  },
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
})
