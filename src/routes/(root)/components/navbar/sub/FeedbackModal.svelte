<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import Modal from "../../Modal.svelte";

	let {
		showModal = $bindable(false)
	}: {
		showModal: boolean
	} = $props();
</script>

<Modal
	bind:showModal
>
	<div class="flex flex-col grow gap-2 w-full">
		<h2>{m.sendFeedback()}</h2>
	</div>
</Modal>