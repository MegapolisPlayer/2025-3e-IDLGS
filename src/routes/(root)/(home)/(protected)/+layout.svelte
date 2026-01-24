<script lang="ts">
	import type { Snippet } from 'svelte';
	import Modal from '../../components/Modal.svelte';
	import type { UserType } from '$lib/types';

	let {
		children,
		data,
	}: {
		children: Snippet;
		data: {
			user: UserType;
		};
	} = $props();

	let showMessage = $derived(!data.user.clickedOnLastMessage);
</script>

{@render children()}

<Modal
	bind:showModal={showMessage}
	cssClass=""
>
	<div></div>
</Modal>
