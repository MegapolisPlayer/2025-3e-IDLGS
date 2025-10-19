<script lang="ts">
	let { text } = $props();
</script>

<div
	class="
	flex aspect-square flex-col gap-2
	rounded-lg border-2 border-neutral-500 bg-neutral-400/30
	p-2 backdrop-blur-xl
	"
>
	{text}
</div>
