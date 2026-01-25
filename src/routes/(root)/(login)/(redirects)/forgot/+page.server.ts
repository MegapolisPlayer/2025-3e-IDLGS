import { schema } from '$lib/server/db/mainSchema';
import { formRunner } from '$lib/server/form/runner';
import { sendMail } from '$lib/server/mail';
import { EMAIL_REGEX, validateTurnstile } from '$lib/server/user';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
import { m } from '$lib/paraglide/messages';
import { writeLog } from '$lib/log';
import { renderMarkdown } from '$lib/markdown';
import type { Locale } from '$lib/paraglide/runtime.js';

export const load = async () => { };

export const actions = {
	sendMail: async () => {
		return await formRunner(['email', 'cf-turnstile-response'], async (
			event, formData,
		) => {
			if (!EMAIL_REGEX.test(formData['email'])) {
				return fail(400);
			}

			if (
				!(await validateTurnstile(
					(event.request.headers.get(
						'CF-Connecting-IP',
					) as string) ||
					event.request.headers.get('X-Forwarded-For') ||
					'unknown',
					formData['cf-turnstile-response'],
					env.CLOUDFLARE_SECRET,
				))
			) {
				return fail(401, {});
			}

			try {
				const [passwordResetEntry, emailUser] = await event.locals.db.transaction(async (tx) => {
					const emailUser = await tx
						.select()
						.from(schema.user)
						.where(eq(schema.user.email, formData['email']))
						.limit(1);

					if (emailUser.length === 0) {
						return [undefined, undefined];
					}

					const passwordResetEntry = await tx
						.insert(schema.passwordReset)
						.values({
							user: emailUser[0].id,
						})
						.returning();

					return [passwordResetEntry[0], emailUser];
				});

				if (!emailUser || !passwordResetEntry) {
					return fail(400);
				}

				if (!(await sendMail(
					`[IDLGS] ${m.passwordReset({}, { locale: emailUser[0].lang as Locale })}`,
					renderMarkdown(`
# ${m.someoneHasRequestedAPasswordResetForYourAccount({}, { locale: emailUser[0].lang as Locale })}
${m.ifYouDidNotMakeThisRequestYouCanIgnoreThisEmail({}, { locale: emailUser[0].lang as Locale })}
${m.resetYourPasswordByClickingTheLinkBelow({}, { locale: emailUser[0].lang as Locale })}
https://ucebnice.martinbykov.eu/change/${passwordResetEntry.uuid}
${m.theLinkWillExpireInFifteenMinutes({}, { locale: emailUser[0].lang as Locale })}

**${m.textbookNameLong({}, { locale: emailUser[0].lang as Locale })}**
`), formData['email']
				))) {
					writeLog(event, 'ERROR', 'Mail send failure for password reset.', emailUser[0]);
					return fail(500);
				}
			} catch (e) {
				writeLog(event, 'ERROR', 'DB failure for password reset.');
				return fail(500);
			}

			return {};
		}, true);
	},
};