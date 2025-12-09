<!--

RESIN
Main page
Author: Martin Bykov

-->

<script lang="ts">
	//TODO translations

	import { browser } from '$app/environment';
	import { RInteractive } from '$lib/interactive/interactive.svelte';
	import { onDestroy, onMount } from 'svelte';
	import ResinElement from './ResinElement.svelte';
	import ResinItemSelect from './ResinItemSelect.svelte';
	import { RElementAIChat } from '$lib/interactive/elements/aichat';

	let el: RInteractive = $state(new RInteractive());

	onMount(() => {
		if (!browser) return;
	});
	onDestroy(() => {});

	let elementWidthShowValue = $state(0);
	let elementHeightShowValue = $state(0);

	let selectedElementUuid = $state('');
	$inspect(selectedElementUuid);
</script>

<svelte:head>
	<title>RESIN</title>
</svelte:head>

<div class="relative flex w-full grow flex-row">
	<div class="absolute top-2 left-3/10 flex flex-col gap-2">
		<div class="flex w-full flex-row gap-2">
			<span>
				Canvas width: {elementWidthShowValue}px
			</span>
		</div>
		<div class="flex w-full flex-row gap-2">
			<span>
				Canvas height: {elementHeightShowValue}px
			</span>
		</div>
		<div class="flex w-full flex-col gap-2">
			<h3>Element data</h3>
			<div></div>
			<div></div>
		</div>
	</div>
	<div class="flex max-h-screen flex-col gap-2 overflow-hidden bg-neutral-500 p-5">
		<h2>RESIN interactive element builder</h2>
		<div class="flex max-h-1/3 grow flex-col gap-2 rounded-lg bg-neutral-600 p-5">
			<h3>Add new elements</h3>
			<div class="grid grid-cols-3 gap-2 overflow-scroll">
				<ResinItemSelect
					onclick={() => {
						el?.addElementDone(new RElementAIChat(25, 25, 50, 50, true, '#ff00ff', '#000000', 0));
					}}
					name={'AI Chat'}
					icon={'speak-ai'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Arrow point'}
					icon={'arrow-left-right'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Card'}
					icon={'checkbox-blank'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Cartesian'}
					icon={'layout-grid'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Checkbox'}
					icon={'checkbox'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Code input'}
					icon={'code-s-slash'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Embed'}
					icon={'artboard'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Graph'}
					icon={'bar-chart-grouped'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Image'}
					icon={'image-2'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Input text area'}
					icon={'keyboard-box'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Input text small'}
					icon={'keyboard'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Letter input'}
					icon={'edit-box'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Text'}
					icon={'file-text'}
				/>
				<ResinItemSelect
					onclick={() => {
						//el?.addElement(new )
					}}
					name={'Video'}
					icon={'video'}
				/>
			</div>
		</div>
		<div class="flex grow flex-col gap-2 rounded-lg bg-neutral-600 p-5">
			<h3>Current elements</h3>
			{#key el}
				{#each el?.elements as element (element.uuid)}
					<div>a</div>
				{:else}
					<div class="flex flex-col grow w-full justify-center items-center">No elements yet.</div>
				{/each}
			{/key}
		</div>
		<div class="flex grow flex-col gap-2 rounded-lg bg-neutral-600 p-5">
			<h3>Manage RESIN element</h3>
			<div class="grow"></div>
			<div class="grid grid-cols-2 gap-2">
				<button class="button-violet group">
					<i class="ri-import-line text-xl not-group-hover:hidden"></i>
					<i class="ri-import-fill text-xl group-hover:hidden"></i>
					Import
				</button>
				<button class="button-green group">
					<i class="ri-export-line text-xl not-group-hover:hidden"></i>
					<i class="ri-export-fill text-xl group-hover:hidden"></i>
					Export
				</button>
			</div>
		</div>
	</div>
	<div
		id="workspace"
		class="flex grow-20 flex-col items-center justify-center gap-2 bg-linear-to-tr from-violet-700 to-emerald-500"
	>
		<div
			class="relative min-h-1/3 min-w-1/3 rounded-lg bg-white p-5"
			bind:clientWidth={elementWidthShowValue}
			bind:clientHeight={elementHeightShowValue}
		>
			{#key el}
				{#each el?.elements as element (element.uuid)}
					<ResinElement
						x={element.x}
						y={element.y}
						width={element.width}
						height={element.height}
						visible={element.visible}
						bgcolor={element.bgcolor}
						fgcolor={element.fgcolor}
						rounded={element.rounded}
						uuid={element.uuid}
						bind:uuidVariable={selectedElementUuid}
					/>
				{/each}
			{/key}
		</div>
	</div>
	{#if selectedElementUuid != ''}
		<div class="flex max-h-screen flex-col gap-2 overflow-hidden bg-neutral-500 p-5">
			SELECTED ELEMENT BOX
		</div>
	{/if}
</div>
