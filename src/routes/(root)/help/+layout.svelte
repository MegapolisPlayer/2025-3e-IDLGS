<script lang="ts">
	import Sidebar from './components/Sidebar.svelte';

	let { children } = $props();
</script>

<div
	class="flex max-h-screen w-full max-w-screen grow flex-row gap-2 overflow-hidden"
>
	<Sidebar />

	<div
		class="flex w-4/5 grow flex-col items-center overflow-scroll p-5 text-black"
	>
		{@render children?.()}
	</div>
</div>
