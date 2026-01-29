<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { UserType } from '$lib/types';

	let {
		user,
	}: {
		user: UserType | undefined;
	} = $props();
</script>

<div class="grid w-full grid-cols-2 print:hidden">
	<div></div>
	<div></div>
</div>

<div
	class="flex h-[8svh] w-full xl:hidden print:hidden"
	id="loggedInNavbarFill"
></div>
