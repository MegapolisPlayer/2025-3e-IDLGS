<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import CallToAction from './about/CallToAction.svelte';
	import History from './about/History.svelte';
	import MeetTheTeam from './about/MeetTheTeam.svelte';
	import Mission from './about/Mission.svelte';
	import ProgramBenefits from './about/ProgramBenefits.svelte';
</script>

<div class="flex w-full grow flex-col bg-white">
	<Mission />

	<!-- list all interesting technologies - RESIN, testgen, AI, ... -->
	<ProgramBenefits />

	<History />

	<!-- and about team as well -->
	<MeetTheTeam />

	<CallToAction />
</div>
