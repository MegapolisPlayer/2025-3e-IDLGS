import type { UserType, TextbookType } from '$lib/types';
import { schema } from '$lib/server/db/mainSchema';
import { eq } from 'drizzle-orm';
import { getRequestEvent } from '$app/server';
import { subject } from '../db/schema/misc';

export const loadTextbooks = async (
	user: UserType,
): Promise<TextbookType[]> => {
	const db = getRequestEvent().locals.db;

	return db
		.select({
			uuid: schema.textbook.uuid,
			description: schema.textbook.description,
			createdAt: schema.textbook.createdAt,
			modifiedAt: schema.textbook.modifiedAt,
			red: schema.textbook.red,
			green: schema.textbook.green,
			blue: schema.textbook.blue,
			name: schema.textbook.name,
			summary: schema.textbook.summary,
			subject: schema.textbook.subject,
		})
		.from(schema.textbook)
		.innerJoin(
			schema.userTextbookLinker,
			eq(schema.textbook.id, schema.userTextbookLinker.textbook), //join condition
		)
		.where(eq(schema.userTextbookLinker.user, user.id));
};
