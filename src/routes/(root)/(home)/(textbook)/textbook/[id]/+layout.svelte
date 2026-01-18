<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>
		{data.textbook.name} - {m.textbook()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<Desktop {data} {children} />
<Mobile {data} {children} />
