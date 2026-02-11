<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import WideCard from '$component/WideCard.svelte';
	import type { TextbookType } from '$lib/types';

	let {
		data,
	}: {
		data: {
			textbook: TextbookType;
			isEditor: boolean;
			isOwner: boolean;
		};
	} = $props();
</script>

<svelte:head>
	<title>
		{m.statistics()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<WideCard
	cssAddition="grow"
	r={data.textbook.red / 5 + 80}
	g={data.textbook.green / 5 + 80}
	b={data.textbook.blue / 5 + 80}
>
	<div class="flex flex-row items-end gap-2">
		<h1>{data.textbook.name}</h1>
		<h2>{m.statistics()}</h2>
	</div>
</WideCard>
