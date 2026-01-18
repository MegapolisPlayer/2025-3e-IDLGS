<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Sidebar from './components/desktop/Sidebar.svelte';
	import ContentPositioning from './components/desktop/ContentPositioning.svelte';
	import type { ChapterType, TextbookType } from '$lib/types';

	let ready = $state(false);

	onMount(() => {
		ready = true;
	});

	let { 
		data,
		children
	}: {
		data: {
			textbook: TextbookType;
			isEditor: boolean;
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
	<Sidebar 
		chapters={data.textbook.chapters as ChapterType[]}
		id={data.textbook.uuid}
		canEdit={data.isEditor || data.isOwner}
	/>
	<ContentPositioning 
		{children}
	/>
</div>
