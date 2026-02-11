<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import 'remixicon/fonts/remixicon.css';
	import 'katex/dist/katex.min.css';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon}
	/>
</svelte:head>

<div
	class="relative flex min-h-screen! w-screen! max-w-screen! min-w-screen! grow flex-col"
>
	<noscript
		class="absolute top-0 left-0 z-50! flex h-screen w-screen flex-col items-center justify-center bg-blue-900 text-2xl font-medium text-white"
	>
		JavaScript is required in order to use this page.
	</noscript>
	{@render children?.()}
</div>
