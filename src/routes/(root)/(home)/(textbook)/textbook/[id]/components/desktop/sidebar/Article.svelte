<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Button from '$component/Button.svelte';
	import Form from '$component/Form.svelte';
	import HiddenInput from '$src/routes/(root)/components/HiddenInput.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let {
		article,
		textbookUuid,
		chapterUuid,
		canEdit,
		showEditButtons,
		formMessage = $bindable(''),
		formAlert = $bindable(''),
	}: {
		article: { uuid: string; name: string };
		textbookUuid: string;
		chapterUuid: string;
		canEdit: boolean;
		showEditButtons: boolean;
		formMessage: string;
		formAlert: string;
	} = $props();

	let articleDeletionRequested = $state(false);
	let articleRenameRequested = $state(false);
</script>

<!-- TODO make draggable -->

<Form
	cssClass="pl-4 pr-4 flex w-full flex-row gap-1"
	action=""
	smallLoadAnimation={true}
	success={async () => {
		if(articleDeletionRequested) {
			formMessage = m.articleDeletedSuccessfully();	
		}
		if(articleRenameRequested) {
			formMessage = m.articleRenamedSuccessfully();
		}
	}}
	failure={async () => {
		if(articleDeletionRequested) {
			formAlert = m.couldNotDeleteArticle();	
		}
		if(articleRenameRequested) {
			formAlert = m.couldNotRenameArticle();
		}
	}}
	final={async () => {
		if(page.params.articleId === article.uuid) {
			goto(`/textbook/${textbookUuid}/${chapterUuid}/`);
		}
		
		articleDeletionRequested = false;
		articleRenameRequested = false;
	}}
>
	<HiddenInput
		name="uuid"
		value={article.uuid}
		ignoreChangeEvents={true}
	/>

	<a
		class=""
		href="/textbook/{textbookUuid}/{chapterUuid}/{article.uuid}"
	>
		{article.name}
	</a>
	{#if canEdit && showEditButtons}
		<div class="grow"></div>
		<!-- edit name -->
		<Button
			btn="button-none *:font-medium"
			emoji="pencil"
			type="submit"
			action={`/textbook/${textbookUuid}/${chapterUuid}/?/editArticleName`}
			label={m.editArticleName()}
			onclick={() => {
				articleRenameRequested = true;
			}}
		/>

		<!-- move up and down -->
		<Button
			btn="button-none *:font-medium"
			emoji="arrow-up-s"
			type="submit"
			action={`/textbook/${textbookUuid}/${chapterUuid}/?/moveArticleUp`}
			label={m.moveArticleUp()}
		/>
		<Button
			btn="button-none *:font-medium"
			emoji="arrow-down-s"
			type="submit"
			action={`/textbook/${textbookUuid}/${chapterUuid}/?/moveArticleDown`}
			label={m.moveArticleDown()}
		/>

		<!-- delete -->
		 	<Button
			btn="button-none *:font-medium"
			emoji="delete-bin"
			type="submit"
			action={`/textbook/${textbookUuid}/${chapterUuid}/?/removeArticle`}
			label={m.removeArticle()}
			onclick={() => {
				articleDeletionRequested = true;
			}}
		/>
	{/if}
</Form>
