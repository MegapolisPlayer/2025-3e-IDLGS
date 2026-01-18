import { redirect } from '@sveltejs/kit';
import type { UserType } from '$lib/types';
import { loadDefinitions } from '$lib/server/loaders/definitions';

export const load = async (event) => {
	const user = (await event.parent()).user as UserType | undefined;

	if (user && !user.setPassword) {
		redirect(303, '/set');
	}

	const textbook = await (await event.parent()).textbook;

	const definitions = await loadDefinitions(textbook.uuid);

	return {
		definitions,
	};
};
