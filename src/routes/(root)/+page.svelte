<script lang="ts">
	import Head from './components/Head.svelte';
	import About from './components/About.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>
		{m.textbookNameShort()} - {m.textbookNameLong()}
	</title>
</svelte:head>

<Head />

<About />
