import { getRequestEvent } from '$app/server';
import type { CourseAssignmentType, UserType } from '$lib/types';
import { schema } from '$lib/server/db/mainSchema';

export const loadMyAssignments = async (
	user: UserType,
): Promise<CourseAssignmentType[]> => {
	const db = getRequestEvent().locals.db;

	//TODO

	return [];
};
