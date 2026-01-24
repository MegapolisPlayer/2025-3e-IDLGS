import { getRequestEvent } from "$app/server";
import { schema } from "$lib/server/db/mainSchema";
import { and, eq, or } from 'drizzle-orm';

export const isUserAuthorizedTextbook = async (uuid: string): Promise<boolean> => {
	const db = getRequestEvent().locals.db;

	//test if user is owner 
	const userData = await db
		.select()
		.from(schema.userTextbookLinker)
		.innerJoin(
			schema.user,
			eq(schema.user.id, schema.userTextbookLinker.user)
		).where(and(
			eq(schema.user.uuid, uuid),
			or(
				eq(schema.userTextbookLinker.editor, true),
				eq(schema.userTextbookLinker.owner, true),
			)
		),
		).limit(1);

	return userData.length > 0;
}

export const isUserAuthorizedCourse = async (uuid: string): Promise<boolean> => {
	const db = getRequestEvent().locals.db;
	
	//TODO CRITICAL

	return true;
};