<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<div class="flex min-h-[30svh] w-full flex-col gap-2 max-lg:w-9/10 lg:w-4/6">
	<div class="flex flex-row gap-2">
		<h2
			class="flex-nowrap text-6xl font-medium text-nowrap text-violet-700"
		>
			{m.stillHaveQuestions()}
		</h2>
		<h2 class="flex-nowrap text-6xl font-bold text-nowrap text-emerald-500">
			{m.writeToUs()}!
		</h2>
	</div>
</div>
