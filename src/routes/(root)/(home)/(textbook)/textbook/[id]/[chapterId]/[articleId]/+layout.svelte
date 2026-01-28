<script lang="ts">
	import type { Snippet } from 'svelte';
	import Desktop from './Desktop.svelte';
	import Mobile from './Mobile.svelte';
	import type { ArticleType, TextbookType } from '$lib/types';

	let {
		children,
		data,
	}: {
		children: Snippet;
		data: {
			article: ArticleType;
			textbook: TextbookType;
			isEditor: boolean;
			isOwner: boolean;
		};
	} = $props();
</script>

<Desktop {data}>
	{@render children()}
</Desktop>

<Mobile {data}>
	{@render children()}
</Mobile>
