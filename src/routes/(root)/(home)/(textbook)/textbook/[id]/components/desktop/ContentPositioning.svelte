<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="flex w-full grow flex-col items-center p-2">
	<div class="flex w-full grow flex-col 2xl:w-3/4">
		{@render children()}
	</div>
</div>
