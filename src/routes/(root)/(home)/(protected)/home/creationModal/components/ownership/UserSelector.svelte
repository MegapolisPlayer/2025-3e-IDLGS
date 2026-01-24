<script lang="ts">
	import { writeDegree } from '$lib';
	import type { UserTypeLimited } from '$lib/types';

	let {
		user,
		outputHandler,
	}: {
		user: UserTypeLimited;
		outputHandler: (output: UserTypeLimited) => void;
	} = $props();
</script>

<button
	class="
	flex w-full flex-row items-center gap-1
	bg-white text-black! hover:brightness-80! active:brightness-60!
"
	onclick={() => {
		(document.activeElement as HTMLElement).blur(); //remove focus and therefore close dropdown
		outputHandler(user);
	}}
>
	{#if user.degree}
		<span>{writeDegree(user.degree)}</span>
	{/if}
	<span class="font-medium">{user.name}</span>
	<span class="font-medium">{user.surname}</span>
	<div class="grow"></div>
	<span class="text-sm italic opacity-30">{user.uuid}</span>
</button>
