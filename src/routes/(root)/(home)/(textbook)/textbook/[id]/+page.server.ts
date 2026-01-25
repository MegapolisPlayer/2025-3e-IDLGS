import { writeLog } from '$lib/log';
import { schema } from '$lib/server/db/mainSchema';
import { formRunner } from '$lib/server/form/runner';
import { isUserAuthorizedTextbook } from '$lib/server/permission';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

//TODO guard against if archived textbook!!

export const load = async (event) => {
	return await event.parent();
};

export const actions = {
	updateName: async (event) => {
		return await formRunner(
			['uuid', 'name'],
			async (event, formData, cookies, user, formDataRaw) => {
				try {
					if ((await isUserAuthorizedTextbook(user.uuid)) === false) {
						return fail(403);
					}

					await event.locals.db
						.update(schema.textbook)
						.set({
							name: formData['name'],
							modifiedAt: new Date(),
						})
						.where(eq(schema.textbook.uuid, formData['uuid']));
				} catch (e) {
					writeLog(event, 'ERROR', 'DB error', user);
				}
			},
		);
	},
	updateDescription: async (event) => {
		return await formRunner(
			['uuid', 'description'],
			async (event, formData, cookies, user, formDataRaw) => {
				try {
					if ((await isUserAuthorizedTextbook(user.uuid)) === false) {
						return fail(403);
					}

					await event.locals.db
						.update(schema.textbook)
						.set({
							description: formData['description'],
							modifiedAt: new Date(),
						})
						.where(eq(schema.textbook.uuid, formData['uuid']));
				} catch (e) {
					writeLog(event, 'ERROR', 'DB error', user);
				}
			},
		);
	},
};
