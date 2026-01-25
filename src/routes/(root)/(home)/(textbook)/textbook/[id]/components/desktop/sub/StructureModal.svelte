<script lang="ts">
	import Modal from '$src/routes/(root)/components/Modal.svelte';
	import { m, noChapterSelected } from '$lib/paraglide/messages';
	import type { TextbookType } from '$lib/types';
	import ItemListB from './ItemListB.svelte';
	import Button from '$src/routes/(root)/components/Button.svelte';
	import Form from '$src/routes/(root)/components/Form.svelte';

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
			items={textbook.chapters!.map(v => v.name)}
			bind:selected={selectedChapterUuid}
		/>
		<ItemListB
			name={m.articles()}
			placeholder={m.noChapterSelected()}
			items={textbook.chapters?.find(
				(v) => v.uuid === selectedChapterUuid,
			)?.articles!.map(v => v.name) || []}
			bind:selected={selectedArticleUuid}
		/>
	</div>
	<div class="flex flex-row w-full gap-2 items-center">
		<div class="grow"></div>
		<Form
			action=""
		>
			<Button
				type="submit"
				btn="button-primary"
				emoji="save-3"
				onclick={() => {
					showStructureModal = false;
				}}
			>
				{m.saveChanges()}
			</Button>
		</Form>
	</div>
</Modal>
