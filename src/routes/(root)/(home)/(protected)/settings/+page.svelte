<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';
	import type { UserType } from '$lib/types';
	import UnsavedChangesBox from '$component/UnsavedChangesBox.svelte';
	import { setInputCallbacks } from '$lib';

	let {
		data,
	}: {
		data: {
			user: UserType;
		};
	} = $props();

	let showUnsavedChanges = $state(false);

	const inputElementChangeCallback = () => showUnsavedChanges = true;
	const formSubmitChangeCallback = () => showUnsavedChanges = false;

	setInputCallbacks(
		inputElementChangeCallback,
		formSubmitChangeCallback,
	);
</script>

<svelte:head>
	<title>
		{m.settings()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<Desktop {data} />
<Mobile {data} />

<UnsavedChangesBox bind:show={showUnsavedChanges} />
