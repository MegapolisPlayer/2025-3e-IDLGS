<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { CourseAssignmentType } from '$lib/types';

	let {
		data,
	}: {
		data: {
			assignments: CourseAssignmentType[];
		};
	} = $props();
</script>

<div class="flex w-full grow flex-col xl:hidden"></div>
