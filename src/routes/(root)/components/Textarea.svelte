<script lang="ts">
	import TextareaFormatting from './about/sub/TextareaFormatting.svelte';
	import markdownit from 'markdown-it';

	let {
		value = $bindable(''),
		placeholder,
		formatting = true,
	}: {
		value: string;
		placeholder: string;
		formatting?: boolean;
	} = $props();

	const md = markdownit();

	let element: HTMLTextAreaElement | undefined = $state(undefined);
	let preview: boolean = $state(false);
	let content = $derived(preview ? md.render(value) : '');
</script>

<div class="relative flex grow flex-col gap-0">
	{#if element && formatting}
		<TextareaFormatting
			bind:value
			bind:preview
			bind:element
		/>
	{/if}

	{#if preview}
		<div class="input-text idlgsText w-full! grow! p-2">
			{@html content}
		</div>
	{/if}

	<textarea
		class="input-text w-full grow {preview ? 'hidden' : ''}"
		bind:value
		{placeholder}
		bind:this={element}
	></textarea>
</div>
