import { type Handle, error } from '@sveltejs/kit';
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(5, '10 s')
});

export const handle = (async ({ event, resolve }) => {
	const ip = event.getClientAddress();
	const rateLimitAttempt = await ratelimit.limit(ip);
	if (!rateLimitAttempt.success) {
		const timeRemaining = Math.floor((rateLimitAttempt.reset - new Date().getTime()) / 1000);
		throw error(429, `Too many requests. Please try again in ${timeRemaining} seconds.`);
	}
	const response = await resolve(event);
	return response;
}) satisfies Handle;
