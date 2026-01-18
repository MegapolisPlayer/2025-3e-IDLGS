<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="flex w-full max-w-4/5 grow flex-col items-center p-2">
	<div class="flex w-3/4 grow flex-col">
		{@render children()}
	</div>
</div>
