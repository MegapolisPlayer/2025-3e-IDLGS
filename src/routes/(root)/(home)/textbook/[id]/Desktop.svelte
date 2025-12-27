<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

	let ready = $state(false);

	onMount(() => {
		ready = true;
	});

	let { data } = $props();
</script>

<!-- TODO finish, this is just desktop UI mockup -->
<div class="
	relative flex grow flex-row justify-center w-full max-lg:hidden
	*:flex *:flex-col
">
	<div class="min-w-1/5 bg-red-900">
		Sidebar
	</div>
	<div class="bg-green-900 grow">
		Article
	</div>
</div>