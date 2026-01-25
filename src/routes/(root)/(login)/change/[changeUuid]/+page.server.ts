import { error, fail } from "@sveltejs/kit";
import { schema } from "$lib/server/db/mainSchema";
import { eq, lte } from "drizzle-orm";
import { formRunner } from "$lib/server/form/runner";
import { checkPassword } from "$lib";
import { hashPassword } from "$lib/server/user";
import { writeLog } from "$lib/log.js";

export const load = async (event) => {
	const success = await event.locals.db.transaction(async (tx) => {
		await tx
			.delete(schema.passwordReset)
			.where(
				lte(schema.passwordReset.expiresAt, new Date()),
			);

		const data = await tx
			.select()
			.from(schema.passwordReset)
			.where(
				eq(schema.passwordReset.uuid, event.params.changeUuid),
			)
			.limit(1);

		if (data.length === 0) {
			return false;
		}

		await tx.update(schema.user)
			.set({ setPassword: false })
			.where(eq(schema.user.id, data[0].user));

		return true;
	});

	if(!success) {
		return error(404, 'Not Found');
	}
};

export const actions = {
	setPassword: async () => {
		return await formRunner(
			['password', 'rpassword', 'uuid'],
			async (
				event, formData
			) => {
				const password = formData['password'];
				if (password != formData['rpassword']) return fail(400);

				const object = checkPassword(password as string);
				if (!object.all) return fail(400);

				const hashed = hashPassword(password as string);

				try {
					const success = await event.locals.db.transaction(async (tx) => {
						const user = await tx
							.delete(schema.passwordReset)
							.where(
								eq(schema.passwordReset.uuid, formData['uuid']),
							)
							.returning();

						if (user.length === 0) {
							return false;
						}

						await tx
							.update(schema.user)
							.set({
								password: hashed.password,
								salt: hashed.salt,
								iterations: hashed.amount,
								setPassword: true,
							})
							.where(eq(schema.user.id, user[0].user));

						return true;
					});

					if (!success) {
						return fail(404, 'Not Found');
					}
				} catch (e) {
					writeLog(event, 'ERROR', 'DB failure during password change.');
					return fail(500);
				}
			}, true);
	}
};