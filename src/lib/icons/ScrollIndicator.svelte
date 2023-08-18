<script lang="ts">
	export let className = ""
  export let style = ""
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="40"
	height="40"
	viewBox="0 0 24 24"
  style={style}
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-chevrons-down scroll-indicator {className}"
>
	<polyline points="7 13 12 18 17 13" />
	<polyline points="7 6 12 11 17 6" />
</svg>

<style>
	.scroll-indicator {
		animation: float 2s ease infinite;
	}

	@keyframes float {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(20px);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
