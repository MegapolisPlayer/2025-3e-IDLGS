<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { UserTypeLimited } from '$lib/types';
	import LoadingAnimationHandler from '$src/routes/(root)/components/LoadingAnimationHandler.svelte';
	import UserSelector from './UserSelector.svelte';

	let {
		usersList,
		selectedUser = $bindable('')
	}: {
		usersList: Promise<{ users: UserTypeLimited[] }>,
		selectedUser: string;
	} = $props();
</script>

<div
	class="z-15 absolute bottom-0 left-0 flex w-full translate-y-full flex-col gap-2 first:rounded-t-lg last:rounded-b-lg not-group-focus-within:hidden"
>
	{#await usersList}
		<LoadingAnimationHandler text={false} />
	{:then users}
		{#each users.users as user (user.uuid)}
			<UserSelector {user} bind:output={selectedUser} />
		{:else}
			<div
				class="flex flex-col justify-center items-center w-full grow text-neutral-700 opacity-50"
			>
				{m.noUsersFound()}
			</div>
		{/each}
	{/await}
</div>
