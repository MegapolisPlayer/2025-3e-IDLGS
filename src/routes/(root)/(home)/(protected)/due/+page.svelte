<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { CourseAssignmentType } from '$lib/types';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';

	let {
		data,
	}: {
		data: {
			assignments: CourseAssignmentType[];
		};
	} = $props();
</script>

<svelte:head>
	<title>
		{m.myAssignments()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<Desktop {data} />
<Mobile {data} />
