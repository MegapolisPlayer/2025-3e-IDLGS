import { getUser } from '$lib/server/user';

export const load = async () => {
	return {
		user: await getUser(),
	};
};
