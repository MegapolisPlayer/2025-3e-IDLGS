<script lang="ts">
	import Button from "$component/Button.svelte";
	import { m } from "$lib/paraglide/messages";
	import type { Snippet } from "svelte";

	let {
		items = $bindable([]),
		selectedItem = $bindable(""),
		onclick,
		children,
	}: {
		items: string[];
		selectedItem: string;
		onclick: () => void;
		children: Snippet
	} = $props();

	let inputValue: string = $state("");
</script>

<div class="flex flex-col grow min-w-0">
	<div class="p-2 flex flex-col w-full gap-2 grow rounded-lg bg-neutral-700/40">
		{#key items}
			{#if items.length > 0}
			{#each items as item, i (item)}
				<div class="
					w-full rounded-lg
					flex flex-row gap-2 items-center
					{item == selectedItem ? "bg-white" : "*:not-hover:text-white *:hover:bg-white"}
				">
					<Button 
						cssClass="ps-2 text-lg grow justify-start"
						btn="button-transparent"
						onclick={() => {
							selectedItem = item;
						}}
					>
						{item}
					</Button>
					<Button
						btn="button-transparent"
						emoji="delete-bin"
						cssClass=""
						onclick={() => {
							items.splice(i, 1);
						}}
					>
						{m.delete()}
					</Button>
				</div>			
			{/each}
				<div class="grow"></div>
			{:else}
				<div class="flex flex-col grow w-full justify-center items-center text-white! opacity-50">
					{@render children()}
				</div>
			{/if}
		{/key}
		<div class="p-2 w-full flex flex-row gap-2">
			<input type="text" bind:value={inputValue} class="input-text" placeholder={m.enterName()} />
			<Button
				emoji={'add-circle'}
				onclick={() => {
					items.push(inputValue);
					inputValue = "";
					onclick();
				}}
				btn="button-transparent"
				cssClass="flex flex-row gap-1 flex-nowrap min-w-fit bg-white"
				disabled={inputValue.length === 0}
				>
				{m.addNew()}
			</Button>
		</div>
	</div>
</div>
