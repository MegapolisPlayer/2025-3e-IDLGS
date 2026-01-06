<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { UserTypeLimited } from '$lib/types';
	import Button from '$src/routes/(root)/components/Button.svelte';
	import SelectionInput from '$src/routes/(root)/components/SelectionInput.svelte';

	let {
		user = $bindable(),
		removeHandler,
		red, green, blue
	}: {
		user: UserTypeLimited;
		removeHandler: () => void,
		red: number;
		green: number;
		blue: number;
	} = $props();

	let valueInput: string = $state('editor');

	const onRewriteSelectedValue = (newValue: string): void => {
		valueInput = newValue;
		switch(newValue) {
			case 'editor': 
				user.isEditor = true;
				user.isOwner = false;
				break;
			case 'owner': 
				user.isEditor = true;
				user.isOwner = true;
				break;	
		}
	};
</script>

<div class="flex w-full flex-row gap-1 text-white! rounded-2xl p-2 items-center" style="background-color: rgba({red}, {green}, {blue}, 0.7);">
	{#if user.degree}
		<span>{user.degree}</span>
	{/if}
	<span class="font-light text-xl">{user.name}</span>
	<span class="font-medium text-xl">{user.surname}</span>
	<div class="grow"></div>
	<SelectionInput 
		bind:value={() => valueInput, onRewriteSelectedValue}
		values={['editor', 'owner']}
		names={[m.editor(), m.owner()]}
	/>
	<div></div>
	<Button
		btn="button-white"
		emoji="delete-bin"
		onclick={() => {
			removeHandler();
		}}
	>
		{m.remove()}
	</Button>
</div>
