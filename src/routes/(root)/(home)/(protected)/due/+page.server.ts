import type { UserType } from '$lib/types';
import { loadMyAssignments } from '$lib/server/loaders/subjective/myassignments';

export const load = async (event) => {
	const user = (await event.parent()).user as UserType;

	return {
		assignments: await loadMyAssignments(user),
	};
};
