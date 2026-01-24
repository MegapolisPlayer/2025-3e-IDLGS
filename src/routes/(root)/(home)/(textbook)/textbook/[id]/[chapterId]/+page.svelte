<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import WideCard from '$src/routes/(root)/components/WideCard.svelte';
</script>

<WideCard cssAddition="grow">
	<h2>{m.chapter()}</h2>
</WideCard>