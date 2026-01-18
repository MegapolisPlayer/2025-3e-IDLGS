<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { ChapterType } from '$lib/types';
	import Button from '$src/routes/(root)/components/Button.svelte';
	import WideCard from '$src/routes/(root)/components/WideCard.svelte';

	let {
		id,
		chapters = $bindable([]),
		canEdit,
	}: {
		id: string;
		chapters: ChapterType[];
		canEdit: boolean;
	} = $props();

	let chaptersOpen = $state(new Array(chapters.length).fill(false));
</script>

<div class="min-w-1/5 p-2">
	<WideCard cssAddition="grow">
		<h2>
			{m.textbookContents()}
		</h2>

		{#each chapters as chapter, i (chapter.uuid)}
			<div class="flex w-full flex-row gap-1">
				<a href="/textbook/{id}/{chapter.uuid}/">
					{chapter.name}
				</a>
				<Button
					emoji={chaptersOpen[i] ? 'arrow-up-s' : 'arrow-down-s'}
					btn="button-none"
					onclick={() => {
						chaptersOpen[i] = !chaptersOpen[i];
					}}
				/>
			</div>
		{:else}
			<div
				class="flex flex-col grow w-full items-center justify-center gap-2"
			>
				<p class="text-center opacity-50">
					{m.thisTextbookIsEmptySoFar()}
				</p>
			</div>
		{/each}

		{#if canEdit}
			<Button
				btn="button-primary"
				emoji="settings"
				onclick={() => {
					window.location.href = `/textbook/${id}/settings/`;
				}}
			>
				{m.settings()}
			</Button>
		{/if}
	</WideCard>
</div>
