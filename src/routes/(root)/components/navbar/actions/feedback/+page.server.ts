import { formRunner } from '$lib/server/form/runner.js';
import { error, fail } from '@sveltejs/kit';
import { FEEDBACK_TARGET_MAIL, MAX_MESSAGE_LENGTH } from '$lib';
import { sendMail } from '$lib/server/mail/index.js';
import { renderMarkdown } from '$lib/markdown/index.js';

export const load = async () => {
	return error(404, 'Not Found');
};

export const actions = {
	sendFeedback: async () => {
		return await formRunner(
			['message'],
			async (event, formData, cookies, user) => {
				if (!user) return fail(401);

				const message = formData['message'];
				if (message.length === 0 || message.length > MAX_MESSAGE_LENGTH)
					return fail(400);

				if (
					await sendMail(
						'[IDLGS/UČEBNICE] Nová zpětná vazba z učebnice',
						renderMarkdown(message),
						FEEDBACK_TARGET_MAIL,
					)
				) {
					return {};
				} else return fail(500);
			},
		);
	},
};
