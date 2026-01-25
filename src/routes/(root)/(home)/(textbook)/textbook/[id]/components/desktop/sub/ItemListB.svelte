<script lang="ts">
	//Different and separate from ItemList in creation modal

	import { m } from '$lib/paraglide/messages';
	import type { ArticleType, ChapterType } from '$lib/types';
	import Button from '$src/routes/(root)/components/Button.svelte';
	import TextInput from '$src/routes/(root)/components/TextInput.svelte';

	let {
		name,
		placeholder,
		items,
		selected = $bindable(),
	}: {
		name: string;
		placeholder: string;
		items: string[];
		selected: string; //uuid
	} = $props();

	let value = $state('');
</script>

<!-- TODO -->

<div class="flex min-w-0 grow flex-col gap-2">
	<h3>{name}</h3>
	<div
		class="flex w-full grow flex-col gap-2 overflow-scroll rounded-lg bg-neutral-700/40 p-2"
	>
		{#each items as item, i (i)}
			<div class="flex w-full flex-row items-center gap-2">
				{item}
			</div>
		{:else}
			<div
				class="flex flex-col grow justify-center items-center gap-2 opacity-70 w-full"
			>
				<p>{placeholder}</p>
			</div>
		{/each}
	</div>
	<div class="flex w-full flex-row gap-2">
		<TextInput 
			placeholder={m.enterName()}
			cssClass="grow"
		/>
		<Button
			btn="button-white"
			emoji="add-circle"
			onclick={() => {
				
			}}
		>
			{m.add()}
		</Button>
	</div>
</div>
