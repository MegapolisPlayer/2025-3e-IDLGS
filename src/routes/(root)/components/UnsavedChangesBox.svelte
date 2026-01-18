<script lang="ts">
	import InfoBox from './InfoBox.svelte';
	import { m } from '$lib/paraglide/messages';

	let {
		show,
	}: {
		show: boolean;
	} = $props();

	let timerLocal: number = $derived(show ? 5000 : 0);
</script>

{#if show}
	<InfoBox
		cssClass="bg-linear-to-tr from-amber-900 to-yellow-600 text-white p-2"
		timer={timerLocal}
	>
		<div class="flex flex-row gap-1">
			<i class="ri-alarm-warning-line"></i>
			{m.youHaveUnsavedChanges()}
		</div>
	</InfoBox>
{/if}
