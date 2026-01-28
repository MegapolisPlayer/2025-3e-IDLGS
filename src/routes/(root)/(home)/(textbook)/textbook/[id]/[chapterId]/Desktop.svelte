<script lang="ts">
	import WideCard from '$component/WideCard.svelte';
	import type { ChapterType, TextbookType } from '$lib/types';
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

<WideCard
	cssAddition="grow"
	r={data.textbook.red}
	g={data.textbook.green}
	b={data.textbook.blue}
>
	<h2>{data.chapter.name}</h2>
</WideCard>
