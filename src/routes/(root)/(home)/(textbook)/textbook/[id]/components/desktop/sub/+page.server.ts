import { writeLog } from '$lib/log';
import { schema } from '$lib/server/db/mainSchema';
import { formRunner } from '$lib/server/form/runner';
import { error, fail } from '@sveltejs/kit';
import { desc, eq } from 'drizzle-orm';

export const load = async () => {
	return error(404, 'Not Found');
};

export const actions = {

};