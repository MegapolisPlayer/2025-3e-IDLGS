<script lang="ts">
	import type { MessageType } from "$lib/types";

	let {
		message
	}: {
		message: MessageType;
	} = $props();
</script>

<div class="flex flex-col gap-2 w-full grow">
	<h2>{message.name}</h2>
	<p class="grow flex flex-col gap-2 w-full">
		{@html message.content}
	</p>
</div>