<script lang="ts">
	import InfoBox from './InfoBox.svelte';

	let {
		message = $bindable(''),
	}: {
		message: string;
	} = $props();

	let timerLocal: number = $derived(message.length > 0 ? 5000 : 0);
</script>

{#key message}
	{#if message.length > 0}
		<InfoBox
			cssClass="bg-linear-to-tr from-green-900 to-green-600 text-white p-2"
			timer={timerLocal}
		>
			{message}
		</InfoBox>
	{/if}
{/key}
