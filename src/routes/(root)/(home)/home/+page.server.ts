import { schema } from '$lib/server/db/mainSchema';
import { fail, redirect } from '@sveltejs/kit';
import { getUser } from '$lib/server/user/index.js';
import { loadCourses } from '$lib/server/loaders/course.js';
import { loadTextbooks } from '$lib/server/loaders/textbook.js';

export const load = async (event) => {
	const user = (await event.parent()).user;

	if (!user) {
		redirect(303, '/login');
	}

	return {
		courses: await loadCourses(user),
		textbooks: await loadTextbooks(user),
	};
};

export const actions = {
	createTextbook: async (event) => {
		const user = await getUser(event);
		if (!user) return fail(401);
	},
	copyTextbook: async (event) => {
		const user = await getUser(event);
		if (!user) return fail(401);
	},
	createCourse: async (event) => {
		const user = await getUser(event);
		if (!user) return fail(401);
	},
};
