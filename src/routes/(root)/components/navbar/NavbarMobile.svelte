<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<nav
	id="loggedOutNavbarMobile"
	class="fixed bottom-0 left-0 z-50! flex h-[8svh] w-full flex-col items-center justify-center bg-white xl:hidden print:hidden"
>
	<span class="text-amber-600">{m.welcomeToIDLGS()}</span>
</nav>
