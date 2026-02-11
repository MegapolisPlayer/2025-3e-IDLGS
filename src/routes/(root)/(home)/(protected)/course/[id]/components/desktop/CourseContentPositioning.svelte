<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div
	class="flex w-full grow flex-col items-center overflow-x-hidden overflow-y-scroll pt-[6svh]"
>
	<div class="flex grow flex-col max-2xl:w-full 2xl:w-3/4 pb-5">
		{@render children()}
	</div>
</div>
