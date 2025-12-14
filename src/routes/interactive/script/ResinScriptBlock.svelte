<!--

RESIN
Single script block
Author: Martin Bykov

TODO

TODO render connectors with canvas (use instead of background)

-->

<script lang="ts">
	import type { RScriptBlock } from '$lib/interactive/script/block.svelte';
	import { onDestroy, onMount } from 'svelte';

	let id = $state(crypto.randomUUID());
	let canvas: HTMLCanvasElement | undefined = $state(undefined);
	let context: CanvasRenderingContext2D | undefined = $state(undefined);
	
	onMount(() => {
		canvas = document.getElementById(id) as HTMLCanvasElement;
		context = canvas.getContext('2d') as CanvasRenderingContext2D;

		new ResizeObserver((data: ResizeObserverEntry[], observer: ResizeObserver) => {
			(canvas as HTMLCanvasElement).width = data[0].contentRect.width;
			(canvas as HTMLCanvasElement).height = data[0].contentRect.height;

			context = canvas?.getContext('2d') as CanvasRenderingContext2D;
			block.drawBackground(context);

			observer.observe(canvas as HTMLCanvasElement);
		}).observe(canvas);

		block.drawBackground(context);
	});
	onDestroy(() => {});

	let {
		block
	}: {
		block: RScriptBlock;
	} = $props();
</script>

<div
	class="
absolute z-40 flex flex-col rounded-lg p-2 font-medium
"
	style="
	background-color: #00000000;
	color:            {block.fgcolor};
	top:              {block.y}%;
	left:             {block.x}%;
	width:            {block.width}%;
	height:           {block.height}%;
"
>
	<canvas {id} class="absolute top-0 left-0 z-41 h-full w-full">Canvas not supported.</canvas>
</div>
