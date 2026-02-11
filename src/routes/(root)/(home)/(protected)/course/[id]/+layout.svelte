<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { type CourseType } from '$lib/types';
	import type { Snippet } from 'svelte';
	import CourseSidebar from './components/desktop/CourseSidebar.svelte';
	import CourseContentPositioning from './components/desktop/CourseContentPositioning.svelte';
	import ButtonBackToTop from '$component/ButtonBackToTop.svelte';
	import ButtonAdd from './components/ButtonAdd.svelte';

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

	//TODO finish
	let clickedAdd: boolean = $state(false);
</script>

<svelte:head>
	<title>
		{data.course.name} - {m.course()} - {m.textbookNameShort()}
	</title>
</svelte:head>

<div
	class="
	relative flex w-full max-w-screen! grow flex-row justify-center
	*:flex *:flex-col max-xl:hidden
"
>
	<CourseSidebar {data} />
	<CourseContentPositioning>
		{@render children()}
	</CourseContentPositioning>

	<div class="sticky right-4 h-[20svh] gap-2 overflow-clip pb-4 xl:top-[80svh]">
		<div class="grow"></div>
		<!-- every page different behaviour -->
		<ButtonAdd bind:clicked={clickedAdd} />
		<ButtonBackToTop />
	</div>
</div>
