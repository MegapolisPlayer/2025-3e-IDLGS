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

<WideCard 
	cssAddition="grow"
	r={data.textbook.red/5+80}
	g={data.textbook.green/5+80}
	b={data.textbook.blue/5+80}
>
	<h2>{m.AIPoweredTraining()}</h2>
</WideCard>
