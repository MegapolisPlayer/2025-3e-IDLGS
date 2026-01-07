<script lang="ts">
	//add this INSIDE of form!

	import { m } from '$lib/paraglide/messages';
	import Button from './Button.svelte';
	import Modal from './Modal.svelte';

	let { text, showModal = $bindable(), cssClass = '' } = $props();
</script>

<Modal
	bind:showModal
	{cssClass}
>
	<div class="flex w-full grow flex-col">
		<h2>{m.areYouSure()}</h2>
		<p class="w-full">{text}</p>
		<div class="grid w-full grid-cols-2 gap-4">
			<Button
				emoji="check"
				btn="button-primary"
				type="submit"
			>
				{m.delete()}
			</Button>
			<Button
				emoji="check"
				btn="button-violet"
				type="button"
			>
				{m.cancel()}
			</Button>
		</div>
	</div>
</Modal>
