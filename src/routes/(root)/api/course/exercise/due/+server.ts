//get due
import { apiRunner } from '$lib/server/form/runner';
import { json } from '@sveltejs/kit';

export const POST = async (event) => {
	return await apiRunner([], async (
		event,
		data,
		user,
	) => {
		return json({});
	});
};