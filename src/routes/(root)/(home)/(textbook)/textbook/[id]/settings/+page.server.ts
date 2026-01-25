import { formRunner } from '$lib/server/form/runner';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const data = await event.parent();

	if (!data.isEditor && !data.isOwner) {
		redirect(303, `/textbook/${data.textbook.uuid}`);
	}

	return data;
};

export const actions = {
	updateInformation: async (event) => {
		return await formRunner(
			[],
			async (event, formData, cookies, user, formDataRaw) => {
				//TODO
			},
		);
	},
	updateSettings: async (event) => {
		return await formRunner(
			[],
			async (event, formData, cookies, user, formDataRaw) => {
				//TODO
			},
		);
	},
	//unavailable if there are non-archived courses linked to the textbook
	deleteTextbook: async (event) => {
		return await formRunner(
			[],
			async (event, formData, cookies, user, formDataRaw) => {
				//TODO
			},
		);
	},
};
