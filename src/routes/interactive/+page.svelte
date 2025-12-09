<!--

RESIN
Main page
Author: Martin Bykov

-->

<script lang="ts">
	//TODO translations

	import { browser } from '$app/environment';
	import { RInteractive } from '$lib/interactive/interactive';
	import { onDestroy, onMount } from 'svelte';
	import ResinElement from './ResinElement.svelte';
	import { RElement } from '$lib/interactive/element';

	let el: RInteractive | undefined = $state();

	onMount(() => {
		if (!browser) return;

		el = new RInteractive();

		//temp TODO fix
		el?.elements.push(new RElement(25, 25, 30, 30, true, '#ffff00', '#ff0000', 10, 'dfsadjggjfbd'));
	});
	onDestroy(() => {});

	let elementWidthShowValue = $state(0);
	let elementHeightShowValue = $state(0);
</script>

<svelte:head>
	<title>RESIN</title>
</svelte:head>

<div class="relative flex w-full grow flex-row">
	<div class="absolute top-2 right-2 flex flex-col gap-2">
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
	<div class="flex grow-3 flex-col gap-2 bg-neutral-500 p-5">
		<h2>RESIN interactive elements</h2>
		<div class="flex grow flex-col rounded-lg bg-neutral-600 p-5">
			<h3>Add new elements</h3>
		</div>
		<div class="flex grow flex-col rounded-lg bg-neutral-600 p-5">
			<h3>Current elements</h3>
		</div>
		<div class="flex grow flex-col rounded-lg bg-neutral-600 p-5">
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
					/>
				{/each}
			{/key}
		</div>
	</div>
</div>
