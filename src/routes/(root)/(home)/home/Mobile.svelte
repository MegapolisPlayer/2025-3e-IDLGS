<script lang="ts">
	import type { CourseType, TextbookType, UserType } from '$lib/types';
	import { m } from '$lib/paraglide/messages';

	let {
		data,
	}: {
		data: {
			courses: CourseType[];
			textbooks: TextbookType[];
			user: UserType;
		};
	} = $props();

	let searchValue = $state('');
</script>

<div class="lg:hidden">
	{JSON.stringify(data)}
</div>
