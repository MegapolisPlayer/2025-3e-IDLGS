<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import CallToAction from './about/CallToAction.svelte';
	import Contact from './about/Contact.svelte';
	import History from './about/History.svelte';
	import MeetTheTeam from './about/MeetTheTeam.svelte';
	import Mission from './about/Mission.svelte';
	import ProgramBenefits from './about/ProgramBenefits.svelte';
</script>

<div
	class="flex w-full grow flex-col items-center gap-2 overflow-x-hidden overflow-y-scroll bg-white pt-5 pb-5"
>
	<!-- list all interesting technologies - RESIN, testgen, AI, ... -->
	<ProgramBenefits />

	<Mission />

	<History />

	<!-- and about team as well -->
	<MeetTheTeam />

	<CallToAction />

	<Contact />
</div>
