<script lang="ts">
	import WideCard from '$component/WideCard.svelte';
	import type { CourseAssignmentType } from '$lib/types';
	import { m } from '$lib/paraglide/messages';

	let {
		assignment,
	}: {
		assignment: CourseAssignmentType;
	} = $props();

	//TODO use color of course!
</script>

<WideCard>
	<div>{JSON.stringify(assignment)}</div>
</WideCard>
