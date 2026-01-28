<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import WideCard from '$component/WideCard.svelte';
	import type { TextbookType } from '$lib/types';
	import type { Snippet } from 'svelte';
	import type { ArticleType } from '$lib/types';

	let {
		data,
		children,
	}: {
		data: {
			article: ArticleType;
			textbook: TextbookType;
			isEditor: boolean;
			isOwner: boolean;
		};
		children: Snippet;
	} = $props();
</script>

<WideCard
	cssAddition="grow xl:hidden"
	r={data.textbook.red}
	g={data.textbook.green}
	b={data.textbook.blue}
>
	{@render children()}
</WideCard>
