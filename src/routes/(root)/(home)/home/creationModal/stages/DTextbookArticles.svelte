<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import NextPrevious from '../components/NextPrevious.svelte';
	import ItemList from '../dtextbookarticles/ItemList.svelte';

	let { 
		step = $bindable(0),
		articleNames = $bindable([]),
		chapterNames = $bindable([]),
		red, green, blue
	}: {
		step: number,
		articleNames: string[],
		chapterNames: string[],
		red: number,
		green: number,
		blue: number,
	} = $props();

	let selectedChapterName: string = $state("");
	let selectedArticleName: string = $state("");
</script>

<div class="flex w-full grow flex-col gap-2">
	<div class="flex flex-row gap-2 w-full items-center justify-center">
		<h2>{m.textbookChaptersAndArticles()}</h2>
		<p class="opacity-50">
			{m.selectChapterOrArticleByClickingOnIt()}.
			{m.toAddOneEnterItsNameAndPressAddNew()}.
		</p>
	</div>
	<div class="
		grow flex flex-row gap-4
		*:flex *:flex-col *:gap-2
	" style="color: rgb({red}, {green}, {blue});" >
		<div class="w-3/10">
			<h2 class="text-white!">{m.chapters()}</h2>
			<ItemList
				bind:items={chapterNames}
				bind:selectedItem={selectedChapterName}
				onclick={() => {

				}}
			>
				{m.noChapters()}
			</ItemList>
		</div>
		<div class="w-3/10">
			<h2 class="text-white!">{m.articles()}</h2>
			{#if chapterNames.length > 0}
				<ItemList
					bind:items={articleNames}
					bind:selectedItem={selectedArticleName}
					onclick={() => {
						
					}}
				>
					{m.noArticles()}
				</ItemList>
			{:else}
				<div class="flex flex-col items-center justify-center w-full grow opacity-50 text-white">
					{m.toCreateArticlesFirstAddAChapter()}
				</div>
			{/if}
		</div>
		<div class="grow text-white!">
			<h2 class="">{m.articleOverview()}</h2>
			{#if selectedArticleName}
				<div class="flex flex-col w-full gap-2 grow">
				</div>
			{:else}
				<div class="flex flex-col grow w-full justify-center items-center opacity-50">
					{m.noArticleSelected()}
				</div>
			{/if}
		</div>
	</div>
	<NextPrevious
		currentStep={2}
		maxStep={4}
		onclickLast={() => {
			step = 2;
		}}
		onclickNext={() => {
			step = 4;
		}}
		disableConditionNext={false}
	/>
</div>
