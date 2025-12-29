<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import NextPrevious from '../components/NextPrevious.svelte';
</script>

<!-- TODO bindable step -->

<div class="flex w-full grow flex-col gap-2">
	<h2>{m.generalTextbookSettings()}</h2>
	<div class="grow"></div>
	<NextPrevious
		currentStep={1}
		maxStep={5}
		onclickLast={() => {}}
		onclickNext={() => {}}
	/>
</div>
