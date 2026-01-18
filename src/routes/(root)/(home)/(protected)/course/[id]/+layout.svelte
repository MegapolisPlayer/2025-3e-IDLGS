<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { CourseType } from '$lib/types';
	import type { Snippet } from 'svelte';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';

	let {
		data,
		children,
	}: {
		data: {
			course: CourseType;
			isTeacher: boolean;
			isOwner: boolean;
		};
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>
		{data.course.name} - {m.course()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<Desktop
	{data}
	{children}
/>
<Mobile
	{data}
	{children}
/>
