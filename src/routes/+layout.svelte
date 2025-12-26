<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import 'remixicon/fonts/remixicon.css';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon}
	/>
</svelte:head>

<div
	class="flex min-h-screen w-screen max-w-screen min-w-screen grow flex-col overflow-x-hidden overflow-y-scroll"
>
	{@render children?.()}
</div>
