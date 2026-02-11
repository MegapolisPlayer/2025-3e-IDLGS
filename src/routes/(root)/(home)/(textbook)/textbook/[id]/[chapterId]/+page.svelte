<script lang="ts">
	import WideCard from '$component/WideCard.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { ChapterType, TextbookType } from '$lib/types';

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

<svelte:head>
	<title>
		{m.chapter()}
		{data.chapter.name} - {data.textbook.name} - {m.textbookNameShort()}
	</title>
</svelte:head>

<WideCard
	cssAddition="grow"
	r={data.textbook.red/5+80}
	g={data.textbook.green/5+80}
	b={data.textbook.blue/5+80}
>
	<h2>{data.chapter.name}</h2>
</WideCard>
