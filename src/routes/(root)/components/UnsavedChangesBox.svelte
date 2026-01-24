<script lang="ts">
	import InfoBox from './InfoBox.svelte';
	import { m } from '$lib/paraglide/messages';
	import { untrack } from 'svelte';

	let {
		show = $bindable(false),
	}: {
		show: boolean;
	} = $props();

	let timerLocal: number = $derived(show ? 5000 : 0);
</script>

{#if show}
	<InfoBox
		cssClass="bg-linear-to-tr from-amber-900 to-yellow-600 text-white"
		bind:timer={timerLocal}
		onEnd={() => {
			show = false;
		}}
	>
		<div class="flex flex-row gap-1 p-2 pb-0! font-medium">
			<i class="ri-alarm-warning-line"></i>
			{m.youHaveUnsavedChanges()}
		</div>
	</InfoBox>
{/if}
