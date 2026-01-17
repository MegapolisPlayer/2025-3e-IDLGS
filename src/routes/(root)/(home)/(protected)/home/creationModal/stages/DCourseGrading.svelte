<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import SelectionInput from '$component/SelectionInput.svelte';
	import NextPrevious from '../components/NextPrevious.svelte';

	let { step = $bindable(0) } = $props();

	let selectedGradePreset: string = $state('');
</script>

<div class="flex w-full grow flex-col gap-2">
	<h2>{m.courseGrading()}</h2>
	<div class="flex w-full grow flex-col items-center justify-center">
		<p class="opacity-50">
			{m.selectAGradingPreset()}
		</p>
		<SelectionInput
			bind:value={selectedGradePreset}
			names={[]}
			values={[]}
		/>
	</div>
	<div class="flex w-full grow-2 flex-col">
		<!-- TODO -->
	</div>
	<NextPrevious
		currentStep={3}
		maxStep={5}
		onclickLast={() => {
			step = 2;
		}}
		onclickNext={() => {
			step = 4;
		}}
		disableConditionNext={false}
	/>
</div>
