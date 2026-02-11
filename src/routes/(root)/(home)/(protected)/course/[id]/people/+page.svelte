<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import WideCard from '$src/routes/(root)/components/WideCard.svelte';
	import type { UserType, CourseType } from '$lib/types';

	let {
		data,
	}: {
		data: {
			course: CourseType;
			user: UserType;
		};
	} = $props();
</script>

<WideCard
	r={80+data.course.red/5}
	g={80+data.course.green/5}
	b={80+data.course.blue/5}
>
	<div></div>
</WideCard>