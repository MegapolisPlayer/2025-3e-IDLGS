<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Button from '../../../../components/Button.svelte';

	let {
		currentStep,
		maxStep,
		onclickLast,
		onclickNext,
	}: {
		currentStep: number;
		maxStep: number;
		onclickNext: () => void;
		onclickLast: () => void;
	} = $props();
</script>

<div class="flex w-full flex-row items-center gap-2">
	<Button
		btn="button-white"
		emoji="arrow-left-s"
	>
		{m.next()}
	</Button>

	<div class="grow"></div>

	<div class="flex flex-row items-center gap-1">
		<span class="">
			{m.step()}
		</span>
		<span class="">
			{currentStep}
		</span>
		<span class="opacity-70">
			{m.outOf()}
		</span>
		<span class="opacity-70">
			{maxStep}
		</span>
	</div>

	<div class="grow"></div>

	<Button
		btn="button-white"
		emoji="arrow-right-s"
		flip={true}
	>
		{m.back()}
	</Button>
</div>
