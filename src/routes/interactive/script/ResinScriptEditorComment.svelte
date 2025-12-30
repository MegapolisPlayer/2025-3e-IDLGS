<script lang="ts">
	import {
		type RScriptComment,
	} from '$lib/interactive/script/comment.svelte';
	import Dragger from '../components/DraggerRaw.svelte';

	let {
		comment = $bindable(),
		uuid = $bindable(''),
		editorWidth,
		editorHeight
	}: {
		comment: RScriptComment;
		uuid: string;
		editorWidth: number;
		editorHeight: number;
	} = $props();

	let commentElement: HTMLButtonElement | undefined = $state(undefined);

	$effect(() => {
		comment.x = Math.max(0, Math.min(comment.x, 100 - comment.width));
		comment.y = Math.max(0, Math.min(comment.y, 100 - comment.height));
	});
</script>

<button
	class="
absolute z-39 flex flex-row items-center rounded-lg p-2 font-medium overflow-hidden text-ellipsis
"
	style="
	background-color: #ffd9b7;
	border:           2px solid #30211a;
	color:            #000000;
	top:              {comment.y}%;
	left:             {comment.x}%;
	width:            {comment.width}%;
	height:           {comment.height}%;
"
	onclick={() => {
		uuid = comment.uuid;
	}}
	bind:this={commentElement}
>
	<div class="w-full h-full flex flex-col gap-2 justify-center items-center">
		{comment.text}
	</div>
</button>

<Dragger
	bind:x={comment.x}
	bind:y={comment.y}
	bind:width={editorWidth}
	bind:height={editorHeight}
	snappingFunction={() => {}}
	element={commentElement}
/>
