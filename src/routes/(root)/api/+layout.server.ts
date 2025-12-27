import { error } from '@sveltejs/kit';

//Load page for all API routes
export const load = async (event) => {
	throw error(404, 'Not found.');
};
