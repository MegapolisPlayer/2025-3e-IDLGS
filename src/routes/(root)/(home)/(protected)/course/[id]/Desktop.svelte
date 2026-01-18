<script lang="ts">
	import { type CourseType } from '$lib/types';
	import type { Snippet } from 'svelte';
	import CourseSidebar from './components/desktop/CourseSidebar.svelte';
	import CourseContentPositioning from './components/desktop/CourseContentPositioning.svelte';

	let {
		data,
		children
	}: {
		data: {
			course: CourseType;
			isTeacher: boolean;
			isOwner: boolean;
		},
		children: Snippet
	} = $props();
</script>

<div
	class="
	relative flex w-full grow flex-row justify-center *:flex
	*:flex-col max-xl:hidden
"
>
	<CourseSidebar 
		{data}
	/>
	<CourseContentPositioning 
		{children}
	/>
</div>