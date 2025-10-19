<script lang="ts">
	let { text } = $props();
</script>

<div
	class="
	bg-neutral-400/30 backdrop-blur-xl rounded-lg p-2
	flex flex-col gap-2 aspect-square
	border-2 border-neutral-500
	"
>
	{text}
</div>