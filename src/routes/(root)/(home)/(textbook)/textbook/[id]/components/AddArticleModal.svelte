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
>
	<div></div>
</Modal>