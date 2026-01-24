<script lang="ts">
	import InfoBox from './InfoBox.svelte';

	let { message = $bindable('') } = $props();

	let timerLocal: number = $derived(message.length > 0 ? 5000 : 0);
</script>

{#key message}
	{#if message.length > 0}
		<InfoBox
			cssClass="bg-linear-to-tr from-red-900 to-amber-600 text-white"
			timer={timerLocal}
			onEnd={() => {
				message = '';
			}}
		>
			<div class="p-2 pb-0! font-medium">
				<i class="ri-pass-expired-line"></i>
				{message}
			</div>
		</InfoBox>
	{/if}
{/key}
