<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Modal from '$src/routes/(root)/components/Modal.svelte';
	import type { TextbookType } from '$lib/types.js';

	let {
		textbook = $bindable(),
		showModal = $bindable(true),
	}: {
		textbook: TextbookType;
		showModal: boolean;
	} = $props();
</script>

<Modal
	bind:showModal
	cssStyle="h-fit bg-neutral-500/70 backdrop-blur border-neutral-500 border-2"
>
	<div class="flex flex-col gap-2">
		<h2>{m.addAChapter()}</h2>
	</div>
</Modal>
