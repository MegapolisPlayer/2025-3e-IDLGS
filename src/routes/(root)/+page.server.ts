import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	let parent = await event.parent();

	if (parent.user) {
		redirect(303, '/home');
	}
};
