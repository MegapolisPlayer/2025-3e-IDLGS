<script lang="ts">
	import Button from '$src/routes/(root)/components/Button.svelte';
	import HoverEmoji from '$src/routes/(root)/components/HoverEmoji.svelte';
</script>

<Button
	cssClass="text-2xl absolute bottom-4 right-4"
	btn="button-primary"
>
	<HoverEmoji emoji="pencil" />
</Button>
