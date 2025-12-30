<script lang="ts">
	import DraggerRaw from './DraggerRaw.svelte';

	let {
		x = $bindable(0),
		y = $bindable(0),
		width = 100,
		height = 100,
		snappingFunction = () => {},
		overrideDragFunction = undefined,
		element,
		condition = true,
		isDragging = $bindable(false),
	}: {
		x: number;
		y: number;
		width?: number;
		height?: number;
		snappingFunction?: () => void;
		overrideDragFunction?: (dx: number, dy: number) => void;
		element: HTMLElement | undefined;
		condition?: boolean;
		isDragging?: boolean;
	} = $props();
</script>

{#key element}
	{#if element}
		<DraggerRaw
			bind:x
			bind:y
			{width}
			{height}
			{overrideDragFunction}
			{snappingFunction}
			{element}
			{condition}
			bind:isDragging
		/>
	{/if}
{/key}
