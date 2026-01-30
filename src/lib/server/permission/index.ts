import { getRequestEvent } from '$app/server';
import { schema } from '$lib/server/db/mainSchema';
import { and, eq, or } from 'drizzle-orm';

export const isUserAuthorizedTextbook = async (
	textbookUuid: string,
	userUuid: string,
): Promise<boolean> => {
	const db = getRequestEvent().locals.db;

	//test if user is owner
	const userData = await db
		.select()
		.from(schema.userTextbookLinker)
		.innerJoin(
			schema.user,
			eq(schema.user.id, schema.userTextbookLinker.user),
		)
		.innerJoin(
			schema.textbook,
			eq(schema.textbook.id, schema.userTextbookLinker.textbook),
		)
		.where(
			and(
				eq(schema.user.uuid, userUuid),
				eq(schema.textbook.uuid, textbookUuid),
				or(
					eq(schema.userTextbookLinker.editor, true),
					eq(schema.userTextbookLinker.owner, true),
				),
			),
		)
		.limit(1);

	return userData.length > 0;
};

export const isUserAuthorizedCourse = async (
	courseUuid: string,
	userUuid: string,
): Promise<boolean> => {
	const db = getRequestEvent().locals.db;

	const userData = await db
		.select()
		.from(schema.userCourseLinker)
		.innerJoin(
			schema.user,
			eq(schema.user.id, schema.userCourseLinker.user),
		)
		.innerJoin(
			schema.course,
			eq(schema.course.id, schema.userCourseLinker.course),
		)
		.where(
			and(
				eq(schema.user.uuid, userUuid),
				eq(schema.course.uuid, courseUuid),
				or(
					eq(schema.userCourseLinker.teacher, true),
					eq(schema.userCourseLinker.owner, true),
				),
			),
		)
		.limit(1);

	return userData.length > 0;
};
