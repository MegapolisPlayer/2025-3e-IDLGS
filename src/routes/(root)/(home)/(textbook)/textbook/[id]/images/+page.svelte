<script lang="ts">
	import WideCard from '$component/WideCard.svelte';
	import type { TextbookType } from '$lib/types';
	import { m } from '$lib/paraglide/messages';

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
		{m.imageLibrary()} - {data.textbook.name} - {m.textbookNameShort()}
	</title>
</svelte:head>

<WideCard
	cssAddition="grow"
	r={data.textbook.red/5+80}
	g={data.textbook.green/5+80}
	b={data.textbook.blue/5+80}
>
	<div class="flex flex-row items-end gap-2">
		<h1>{data.textbook.name}</h1>
		<h2>{m.imageLibrary()}</h2>
	</div>

	<div></div>
</WideCard>
