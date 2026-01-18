<script lang="ts">
	import WideCard from "$component/WideCard.svelte";
	import { m } from "$lib/paraglide/messages";

	let { 
		data
	 } = $props();
</script>

<WideCard cssAddition="grow">
	<div class="flex flex-row gap-2 items-end">
		<h1>{data.textbook.name}</h1>
		<h2>{m.definitionsOfTerms()}</h2>
	</div>

	{#each data.definitions as definition}
		<p>{definition.word}: {definition.description}</p>
	{/each}
</WideCard>