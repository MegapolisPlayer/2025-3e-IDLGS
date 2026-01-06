import type { ActionFailure, Cookies, RequestEvent } from '@sveltejs/kit';
import { getUser } from '$lib/server/user/index.js';
import { error, fail } from '@sveltejs/kit';
import type { UserType } from '$lib/types';
import { getRequestEvent } from '$app/server';

export const checkFormData = (formData: FormData, array: string[]): boolean => {
	for (let i = 0; i < array.length; i++) {
		if (!formData.has(array[i])) return false;
	}
	return true;
};

export const formRunner = async (
	requiredFields: string[],
	runner: (
		event: RequestEvent,
		formData: FormData,
		cookies: Cookies,
		user: UserType,
	) => Promise<ActionFailure | unknown>,
) => {
	const event = getRequestEvent();

	const user = await getUser();
	if (!user) return fail(401);

	const formData = await event.request.formData();
	if (!checkFormData(formData, requiredFields)) {
		return fail(400);
	}

	const value = await runner(event, formData, event.cookies, user);
	return value;
};

export const apiRunner = async (
	runner: (
		event: RequestEvent,
		user: UserType,
		requestData: unknown,
	) => Promise<Response>,
) => {
	const event = getRequestEvent();

	const user = await getUser();
	if (!user) return error(401);

	const data = await event.request.json();

	const value = await runner(event, user, data);
	return value;
};
