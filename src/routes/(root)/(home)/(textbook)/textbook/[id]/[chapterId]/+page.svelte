<script lang="ts">
	import type { ChapterType, TextbookType } from '$lib/types';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';
	import type { Snippet } from 'svelte';

	let {
		data,
	}: {
		data: {
			textbook: TextbookType;
			isEditor: boolean;
			isOwner: boolean;
			chapter: ChapterType;
		};
	} = $props();
</script>

<Desktop {data} />

<Mobile {data} />