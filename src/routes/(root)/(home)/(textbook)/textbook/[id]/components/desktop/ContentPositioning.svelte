<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Content from '../Content.svelte';
	import type { TextbookType } from '$lib/types';

	let {
		textbook,
	}: {
		textbook: TextbookType;
	} = $props();
</script>

<div class="flex w-full grow flex-col items-center p-2">
	<div class="flex w-3/4 grow flex-col">
		<Content {textbook} />
	</div>
</div>
