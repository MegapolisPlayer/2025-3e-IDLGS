<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { TextbookType } from '$lib/types';
	import Card from '../../../components/Card.svelte';

	let {
		textbook,
		delay = 0,
		perspective,
		onclick = () => {},
		disable = false,
	}: {
		textbook: TextbookType;
		delay: number;
		perspective: boolean;
		onclick?: () => void;
		disable?: boolean;
	} = $props();
</script>

<!-- TODO finish -->

<Card
	{disable}
	r={textbook.red}
	g={textbook.green}
	b={textbook.blue}
	{delay}
	{perspective}
	{onclick}
	css="w-[35svh] h-[35svh]"
>
	<div class="relative flex w-full grow flex-col">
		<!-- corner -->
		<div
			class="
			absolute -top-2.5 -right-2.5 flex h-1/3 w-1/3 flex-col items-center justify-center
			gap-0 rounded-tr-lg rounded-bl-2xl border-b border-l text-white backdrop-blur-2xl
		"
			style="
			background-color: rgba(
			{Math.min(255, textbook.red + 50)},
			{Math.min(255, textbook.green + 50)},
			{Math.min(255, textbook.blue + 50)},
			0.5);
			border-color: rgba(
			{Math.min(255, textbook.red + 70)},
			{Math.min(255, textbook.green + 70)},
			{Math.min(255, textbook.blue + 70)},
			1);
		"
		>
			<i class="ri-book-ai-line text-6xl"></i>
			<span>{m.textbook()}</span>
		</div>

		<h2 class="w-full text-left text-xl">{textbook.name}</h2>
		<p class="w-full text-left text-sm opacity-70">
			{textbook.description}
		</p>
	</div>
</Card>
