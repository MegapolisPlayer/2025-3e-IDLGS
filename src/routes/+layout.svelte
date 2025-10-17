<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col grow min-h-screen min-w-screen w-screen max-w-screen overflow-y-scroll overflow-x-hidden">
	{@render children?.()}
</div>