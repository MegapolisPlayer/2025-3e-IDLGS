<script lang="ts">
	import LoadingAnimation from './LoadingAnimation.svelte';

	let {
		text = true,
		smallerBubbles = false,
	}: {
		text?: boolean;
		smallerBubbles?: boolean;
	} = $props();
</script>

<div class="flex w-full grow flex-col items-center justify-center gap-2">
	<LoadingAnimation
		{text}
		{smallerBubbles}
	/>
</div>
