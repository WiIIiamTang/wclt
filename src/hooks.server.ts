import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { SITE_URL } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	throw redirect(302, SITE_URL);
};
