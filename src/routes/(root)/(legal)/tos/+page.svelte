<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>
		{m.termsOfService()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<div class="flex w-full grow flex-col items-center gap-2 pt-4">
	<div class="flex grow flex-col xl:w-3/4">
		<h2 class="text-4xl font-bold text-emerald-600">
			{m.termsOfService()}
		</h2>
	</div>
</div>
