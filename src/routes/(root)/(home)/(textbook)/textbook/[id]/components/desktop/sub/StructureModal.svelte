<script lang="ts">
	import Modal from '$src/routes/(root)/components/Modal.svelte';
	import { m, noChapterSelected } from '$lib/paraglide/messages';
	import type { TextbookType } from '$lib/types';
	import ItemListB from './ItemListB.svelte';

	let {
		showStructureModal = $bindable(false),
		textbook = $bindable(),
	}: {
		showStructureModal: boolean;
		textbook: TextbookType;
	} = $props();

	let selectedChapterUuid: string = $state('');
	let selectedArticleUuid: string = $state('');
</script>

<Modal
	bind:showModal={showStructureModal}
	cssClass="standardModal"
>
	<div class="flex w-full flex-row items-end gap-2">
		<h2>{m.manageStructure()}</h2>
		<p class="opacity-50">
			{m.structureMeansChaptersAndArticles()}.
			{m.articleContentsAreEditedOnThePagesThemselves()}.
		</p>
	</div>
	<div class="flex w-full grow flex-row justify-center gap-4">
		<ItemListB
			name={m.chapters()}
			placeholder={m.noChaptersYet()}
			items={textbook.chapters!}
			bind:selected={selectedChapterUuid}
		/>
		<ItemListB
			name={m.articles()}
			placeholder={m.noChapterSelected()}
			items={textbook.chapters?.find(
				(v) => v.uuid === selectedChapterUuid,
			)?.articles || []}
			bind:selected={selectedArticleUuid}
		/>
	</div>
</Modal>
