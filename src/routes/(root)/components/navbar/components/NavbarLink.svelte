<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import HoverEmoji from '$component/HoverEmoji.svelte';
	import type { Snippet } from 'svelte';

	let {
		link,
		emoji,
		children,
		classCss,
		reload = false,
		secondary = false,
	}: {
		link: string;
		emoji: string;
		children: Snippet;
		classCss?: string;
		reload?: boolean;
		secondary?: boolean;
	} = $props();
</script>

<a
	href={link}
	class="{page.url.pathname == link
		? 'font-bold  underline decoration-2 underline-offset-4!'
		: ''} {classCss} {secondary
		? 'decoration-blue-900 hover:text-blue-900'
		: 'decoration-cyan-600'} hover:decoration-2"
	data-sveltekit-reload={reload}
>
	<HoverEmoji {emoji} />
	{@render children()}
</a>
