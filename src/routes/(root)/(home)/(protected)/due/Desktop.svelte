<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import CardSeparator from '$component/CardSeparator.svelte';
	import WideCard from '$src/routes/(root)/components/WideCard.svelte';
	import type { CourseAssignmentType } from '$lib/types';

	let {
		data,
	}: {
		data: {
			assignments: CourseAssignmentType[];
		};
	} = $props();
</script>

<div class="flex w-full grow flex-col items-center gap-2 max-xl:hidden">
	<div class="flex w-3/4 grow flex-col gap-2">
		<CardSeparator />

		<h2 class="w-full text-left">
			<i class="ri-todo-line"></i>
			{m.myAssignments()}
		</h2>

		<WideCard
			r={148}
			g={20}
			b={20}
		>
			<div class="flex w-full grow flex-col gap-2">
				<h2>{m.alreadyPastDeadline()}</h2>

				<div></div>
			</div>
		</WideCard>

		<CardSeparator />

		<WideCard
			r={148}
			g={108}
			b={0}
		>
			<div class="flex w-full grow flex-col gap-2">
				<h2>{m.todayOrTomorrow()}</h2>

				<div></div>
			</div>
		</WideCard>

		<CardSeparator />

		<WideCard
			r={20}
			g={148}
			b={20}
		>
			<div class="flex w-full grow flex-col gap-2">
				<h2>{m.later()}</h2>
			</div>
		</WideCard>

		<CardSeparator />
	</div>
</div>
